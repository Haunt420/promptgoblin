class TagInspectorModal {
  constructor(onUpdate) {
    this.onUpdate = onUpdate;
    this.activeTag = null;
    this.weight = 1.0;
    this.mode = 'comma';
    this.el = null;
    this.buildDOM();
  }
  buildDOM() {
    this.el = document.createElement('div');
    this.el.className = 'inspector-overlay';
    this.el.innerHTML = `
      <div class="inspector-card" role="dialog" aria-modal="true">
        <div class="inspector-header">
          <div>
            <h3 class="inspector-title" id="insTitle">Tag</h3>
            <span class="inspector-desc" id="insDesc">Details</span>
          </div>
          <button type="button" class="inspector-close" id="insClose">✕</button>
        </div>
        <div class="inspector-body">
          <label class="ins-label">Connection Syntax:</label>
          <div class="ins-btn-group">
            <button type="button" class="ins-btn active" data-sep="comma">Comma ( , )</button>
            <button type="button" class="ins-btn" data-sep="space">Space ( )</button>
            <button type="button" class="ins-btn" data-sep="curly">{ A | B }</button>
          </div>
          <label class="ins-label" style="margin-top:14px;">
            Weight / Emphasis: <span id="weightVal" style="color:var(--accent);">1.00</span>
          </label>
          <div style="display:flex; align-items:center; gap:10px;">
            <input type="range" id="insWeightSlider" min="0.5" max="1.8" step="0.05" value="1.0" style="flex:1;">
            <button type="button" class="btn-ctrl" id="insResetWeight" style="flex:0 0 auto;">1.0</button>
          </div>
          <div class="ins-preview" id="insPreview">tag</div>
        </div>
        <div class="inspector-footer">
          <button type="button" class="ins-action-btn ins-del" id="insRemove">Remove</button>
          <button type="button" class="ins-action-btn ins-save" id="insApply">Apply</button>
        </div>
      </div>
    `;
    const style = document.createElement('style');
    style.textContent = `
      .inspector-overlay { position: fixed; inset: 0; z-index: 500; background: rgba(0,0,0,0.65); backdrop-filter: blur(4px); display: none; align-items: flex-end; justify-content: center; }
      .inspector-overlay.open { display: flex; }
      .inspector-card { background: var(--surface); border: 1.5px solid var(--border-accent); border-radius: 16px 16px 0 0; width: 100%; max-width: 500px; padding: 16px; box-shadow: 0 -10px 30px rgba(0,0,0,0.7); color: var(--text); }
      .inspector-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
      .inspector-title { font-size: 16px; font-weight: 700; color: #fff; }
      .inspector-desc { font-size: 11px; color: var(--whiskey); }
      .inspector-close { background: none; border: none; color: var(--text-muted); font-size: 18px; cursor: pointer; }
      .ins-label { font-size: 12px; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 6px; }
      .ins-btn-group { display: flex; gap: 6px; }
      .ins-btn { flex: 1; padding: 8px 4px; font-size: 11.5px; border-radius: 8px; background: var(--bg); border: 1px solid var(--border); color: var(--text); cursor: pointer; }
      .ins-btn.active { background: var(--accent-dim); border-color: var(--accent); color: var(--accent-bright); font-weight: 700; }
      .ins-preview { background: var(--bg); border: 1px dashed var(--border-accent); border-radius: 8px; padding: 10px; margin-top: 14px; font-family: monospace; font-size: 13px; color: var(--accent-bright); word-break: break-all; }
      .inspector-footer { display: flex; gap: 8px; margin-top: 16px; }
      .ins-action-btn { flex: 1; height: var(--touch-min, 44px); border-radius: 8px; font-weight: 700; font-size: 13px; cursor: pointer; border: none; }
      .ins-save { background: var(--accent); color: #000; }
      .ins-del { background: rgba(248,113,113,0.15); border: 1px solid var(--danger); color: var(--danger); }
    `;
    document.head.appendChild(style);
    document.body.appendChild(this.el);
    this.bindEvents();
  }
  bindEvents() {
    this.el.querySelector('#insClose').onclick = () => this.close();
    this.el.addEventListener('click', e => { if (e.target === this.el) this.close(); });
    const btns = this.el.querySelectorAll('.ins-btn');
    btns.forEach(b => {
      b.onclick = () => {
        btns.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        this.mode = b.dataset.sep;
        this.updatePreview();
      };
    });
    const slider = this.el.querySelector('#insWeightSlider');
    const valText = this.el.querySelector('#weightVal');
    slider.oninput = e => {
      this.weight = parseFloat(e.target.value);
      valText.textContent = this.weight.toFixed(2);
      this.updatePreview();
    };
    this.el.querySelector('#insResetWeight').onclick = () => {
      this.weight = 1.0; slider.value = "1.0"; valText.textContent = "1.00";
      this.updatePreview();
    };
    this.el.querySelector('#insApply').onclick = () => {
      if (this.activeTag) this.onUpdate(this.activeTag, this.mode, this.weight);
      this.close();
    };
    this.el.querySelector('#insRemove').onclick = () => {
      if (this.activeTag) this.onUpdate(this.activeTag, 'remove', 1.0);
      this.close();
    };
  }
  open(tagRecord) {
    this.activeTag = tagRecord;
    this.weight = tagRecord.weight || 1.0;
    this.mode = tagRecord.space ? 'space' : (tagRecord.curly ? 'curly' : 'comma');
    this.el.querySelector('#insTitle').textContent = tagRecord.en;
    this.el.querySelector('#insDesc').textContent = tagRecord.hint || "Slot: " + (tagRecord.slot || "Main");
    this.el.querySelector('#insWeightSlider').value = this.weight;
    this.el.querySelector('#weightVal').textContent = this.weight.toFixed(2);
    this.el.querySelectorAll('.ins-btn').forEach(b => b.classList.toggle('active', b.dataset.sep === this.mode));
    this.updatePreview();
    this.el.classList.add('open');
  }
  updatePreview() {
    if (!this.activeTag) return;
    let t = this.activeTag.en;
    if (this.weight !== 1.0) t = `(${t}:${this.weight.toFixed(2)})`;
    if (this.mode === 'curly') t = `{${t}|variation}`;
    this.el.querySelector('#insPreview').textContent = (this.mode === 'space' ? " [space] " : " [comma] ") + t;
  }
  close() { this.el.classList.remove('open'); }
}
