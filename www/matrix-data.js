/**
 * KENZEN x Mack's Place 41-Category Matrix (English Only)
 * Comprehensive English prompt engineering dictionary with slot assignments.
 */
const KENZEN_FULL_MATRIX = [
  {
    idx: 0, catEn: "Connectors & Particles", slot: "Main",
    tags: [
      { en: "holding", hint: "grasping in hand" },
      { en: "wearing", hint: "dressed in garment" },
      { en: "sitting on", hint: "seated on surface" },
      { en: "standing on", hint: "upright on ground" },
      { en: "leaning against", hint: "resting back against" },
      { en: "lying on", hint: "reclined horizontally" },
      { en: "looking at", hint: "directing gaze toward" },
      { en: "covered in", hint: "coated or splashed with" },
      { en: "in the middle of", hint: "caught mid-action" },
      { en: "surrounded by", hint: "encircled by scenery" },
      { en: "partially hidden by", hint: "occluded or peeking" },
      { en: "tied to", hint: "bound to structure" }
    ]
  },
  {
    idx: 1, catEn: "Style & Media Anchor", slot: "Style",
    tags: [
      { en: "candid 35mm film photograph", hint: "Flux realism anchor" },
      { en: "Kodak Portra 400 color negative", hint: "Natural warm skin tones" },
      { en: "cinematic film still", hint: "Anamorphic widescreen" },
      { en: "retro 90s anime cel shading", hint: "Vintage anime look" },
      { en: "Makoto Shinkai aesthetic", hint: "Vivid sky and atmospheric lighting" },
      { en: "seinen manga line art", hint: "Detailed ink hatching" },
      { en: "Unreal Engine 5 hyperreal render", hint: "Path-traced 3D specular highlights" },
      { en: "soft impasto oil painting", hint: "Textured brushwork" },
      { en: "fine art watercolor wash", hint: "Soft pigment granulation" },
      { en: "direct on-camera flash snapshot", hint: "Amateur raw direct flash" }
    ]
  },
  {
    idx: 2, catEn: "Subject & Quantity", slot: "Subject",
    tags: [
      { en: "1girl", hint: "Solo female subject" },
      { en: "solo", hint: "Single subject in frame" },
      { en: "mature woman", hint: "Late 20s to 30s woman" },
      { en: "young woman", hint: "Early 20s woman" },
      { en: "curvy woman", hint: "Voluptuous proportions" },
      { en: "petite woman", hint: "Short stature, delicate build" },
      { en: "tall athletic woman", hint: "Toned limbs and posture" },
      { en: "2girls", hint: "Pair of females" },
      { en: "hetero couple", hint: "Man and woman together" },
      { en: "female focus", hint: "Dominant female presence" }
    ]
  },
  {
    idx: 3, catEn: "Character Archetype", slot: "Subject",
    tags: [
      { en: "tsundere personality", hint: "Blushing defiance" },
      { en: "kuudere aloof girl", hint: "Stoic, quiet charm" },
      { en: "yandere obsession", hint: "Obsessive dark gaze" },
      { en: "gyaru with dark eyeliner", hint: "Trendy bleached hair and fashion" },
      { en: "traditional shrine maiden", hint: "Ceremonial miko attire" },
      { en: "obedient french maid", hint: "Frilled servant role" },
      { en: "strict office lady", hint: "Corporate elegance" },
      { en: "honorable female knight", hint: "Armored noble warrior" },
      { en: "succubus demoness", hint: "Tempting demoness" },
      { en: "pure high school senior", hint: "Schoolgirl persona" }
    ]
  },
  {
    idx: 4, catEn: "Age & Build Specs", slot: "Subject",
    tags: [
      { en: "20-years-old", hint: "Specific adult age anchor" },
      { en: "24-years-old", hint: "Mid-20s visual marker" },
      { en: "early thirties", hint: "Refined maturity" },
      { en: "petite frame with narrow shoulders", hint: "Delicate bone structure" },
      { en: "statuesque tall frame", hint: "Long limbs, regal height" },
      { en: "wide skeletal pelvis", hint: "Natural wide hip structure" }
    ]
  },
  {
    idx: 5, catEn: "Facial Anatomy", slot: "Subject",
    tags: [
      { en: "heart-shaped face with soft jawline", hint: "Feminine contour" },
      { en: "high sculpted cheekbones", hint: "Defined bone structure" },
      { en: "delicate petite nose", hint: "Cute button nose" },
      { en: "plump natural lips", hint: "Full mouth curvature" },
      { en: "prominent beauty mark under left eye", hint: "Sensual mole" },
      { en: "subtle dimples when smiling", hint: "Cheek indentations" },
      { en: "defined collarbones", hint: "Sharp clavicle line" }
    ]
  },
  {
    idx: 6, catEn: "Eyes & Gaze", slot: "Subject",
    tags: [
      { en: "looking directly at viewer", hint: "Frontal eye contact" },
      { en: "seductive sidelong glance", hint: "Coquettish look" },
      { en: "deep cerulean blue eyes", hint: "Clear iris detail" },
      { en: "warm golden amber eyes", hint: "Luminous amber tone" },
      { en: "half-closed heavy-lidded eyes", hint: "Drowsy, bedroom gaze" },
      { en: "tear-filled glistening eyes", hint: "Moist reflective pupils" },
      { en: "dilated pupils with excitement", hint: "Wide pupil aperture" },
      { en: "long dark natural eyelashes", hint: "Fringe eyelash definition" }
    ]
  },
  {
    idx: 7, catEn: "Expression & Blush", slot: "Pose",
    tags: [
      { en: "parted lips showing teeth edge", hint: "Breathing open mouth" },
      { en: "intense red facial blush", hint: "Cheeks and nose flush" },
      { en: "subtle teasing smirk", hint: "Playful half-smile" },
      { en: "embarrassed timid expression", hint: "Flustered hesitation" },
      { en: "ecstatic blissful facial expression", hint: "Sensual pleasure face" },
      { en: "biting bottom lip", hint: "Suppressed arousal" },
      { en: "pouting lips with furrowed brows", hint: "Cute defiance" }
    ]
  },
  {
    idx: 8, catEn: "Hairstyle", slot: "Subject",
    tags: [
      { en: "long loose wavy hair draped over shoulders", hint: "Flowing texture" },
      { en: "high twin tails with ribbons", hint: "Classic anime pigtails" },
      { en: "sleek chin-length bob cut", hint: "Clean geometric cut" },
      { en: "messy bedroom updo with loose strands", hint: "Intimate bedhead look" },
      { en: "thick side braid resting on chest", hint: "Single braided plait" },
      { en: "traditional hime cut with straight bangs", hint: "Straight cheek sidelocks" },
      { en: "pixie undercut", hint: "Edgy short cut" }
    ]
  },
  {
    idx: 9, catEn: "Hair Color & Accents", slot: "Subject",
    tags: [
      { en: "platinum silver-white hair", hint: "Luminous white-silver" },
      { en: "silky jet-black hair with blue sheen", hint: "Deep glossy black" },
      { en: "rich chestnut brown hair", hint: "Warm brunette tone" },
      { en: "golden honey blonde hair", hint: "Sunlit gold tones" },
      { en: "subtle pink gradient tips", hint: "Dyed accent tips" },
      { en: "black velvet hair ribbon", hint: "Fabric hair accessory" },
      { en: "single ahoge hair antenna", hint: "Playful stray hair curl" }
    ]
  },
  {
    idx: 10, catEn: "Fantasy & Kemonomimi", slot: "Subject",
    tags: [
      { en: "pointed elf ears with small earrings", hint: "Long elven ear tips" },
      { en: "soft furry cat ears matching hair", hint: "Feline ears on head" },
      { en: "curled obsidian demon horns", hint: "Curving head horns" },
      { en: "bushy fox tail curling behind", hint: "Kitsune fox tail" },
      { en: "delicate translucent fairy wings", hint: "Gossamer insectoid wings" },
      { en: "floating radiant halo", hint: "Angelic ring above head" }
    ]
  },
  {
    idx: 11, catEn: "Skin Tone & Complexion", slot: "Subject",
    tags: [
      { en: "fair porcelain skin with pink undertones", hint: "Milky pale complexion" },
      { en: "golden warm-toned tan skin", hint: "Healthy sun tan" },
      { en: "smooth silky skin without blemishes", hint: "Clear flawless surface" },
      { en: "light dusting of sun freckles across nose", hint: "Natural pigmentation" },
      { en: "soft dewy skin surface", hint: "Hydrated natural sheen" }
    ]
  },
  {
    idx: 12, catEn: "Body Build & Proportion", slot: "Subject",
    tags: [
      { en: "pronounced hourglass silhouette", hint: "Curving waist-to-hip ratio" },
      { en: "slender dancer build with long limbs", hint: "Lean, supple musculature" },
      { en: "soft curvy body with plush thighs", hint: "Feminine fullness" },
      { en: "firm toned athletic abdomen", hint: "Subtle abdominal lines" },
      { en: "petite frame with soft belly curve", hint: "Gentle natural lower belly" }
    ]
  },
  {
    idx: 13, catEn: "Chest & Breast Shaping", slot: "Subject",
    tags: [
      { en: "natural teardrop-shaped breasts", hint: "Realistic anatomy curve" },
      { en: "large heavy breasts with natural sag", hint: "Full downward gravitational slope" },
      { en: "medium perky breasts", hint: "Firm, rounded volume" },
      { en: "petite breasts with delicate slope", hint: "Small cup proportion" },
      { en: "prominent cleavage spillover", hint: "Compressed cleavage" },
      { en: "visible sideboob curve", hint: "Lateral breast profile" }
    ]
  },
  {
    idx: 14, catEn: "Nipples & Areolae (NSFW)", slot: "Subject",
    tags: [
      { en: "erect hard nipples protruding", hint: "Stiff pointed tips" },
      { en: "small pale pink areolae", hint: "Delicate light coloring" },
      { en: "puffy soft areolae", hint: "Puffy warm pigmentation" },
      { en: "erect nipples pressing against fabric", hint: "Visible through clothes" },
      { en: "flushed pink skin around chest", hint: "Arousal flushed skin" }
    ]
  },
  {
    idx: 15, catEn: "Waist, Hips & Buttocks", slot: "Subject",
    tags: [
      { en: "narrow tapered waistline", hint: "Tightly cinched midriff" },
      { en: "wide curving hips", hint: "Broad flared hip line" },
      { en: "round plump buttocks", hint: "Full rounded glutes" },
      { en: "deeply arched lower back", hint: "Lordosis spine curve" },
      { en: "thick soft thighs touching together", hint: "Thigh contact line" }
    ]
  },
  {
    idx: 16, catEn: "Genitalia & Crotch (NSFW)", slot: "Subject",
    tags: [
      { en: "completely shaved bare pussy", hint: "Hairless mound" },
      { en: "neatly trimmed triangle of pubic hair", hint: "Manicured pubic hair" },
      { en: "defined cameltoe bulge through fabric", hint: "Anatomical fabric outline" },
      { en: "glistening wet labia slightly parted", hint: "Moist exposed intimacy" },
      { en: "prominent clitoris hood", hint: "Intimate anatomy" },
      { en: "visible moisture between thighs", hint: "Arousal fluid trail" }
    ]
  },
  {
    idx: 17, catEn: "Secretions & Wetness (NSFW)", slot: "Pose",
    tags: [
      { en: "beads of sweat rolling down cleavage", hint: "Translucent sweat droplets" },
      { en: "dewy glistening skin sheen", hint: "Moisture highlight sheen" },
      { en: "tears welling at corner of eyes", hint: "Emotional tear beads" },
      { en: "saliva trail connecting parted lips", hint: "Sensual saliva strand" },
      { en: "dripping wet body fresh from water", hint: "Water drench effect" }
    ]
  },
  {
    idx: 18, catEn: "Jackets & Outerwear", slot: "Fashion",
    tags: [
      { en: "classic beige trench coat open at front", hint: "Unbuttoned drape" },
      { en: "cropped distressed denim jacket", hint: "Casual jean jacket" },
      { en: "oversized chunky wool cardigan hanging off shoulder", hint: "Slouchy knit" },
      { en: "fitted black leather biker jacket", hint: "Moto leather jacket" },
      { en: "tailored sharp-shouldered blazer", hint: "Formal chic blazer" }
    ]
  },
  {
    idx: 19, catEn: "Tops & Blouses", slot: "Fashion",
    tags: [
      { en: "loose oversized white button-down shirt", hint: "Boyfriend shirt look" },
      { en: "ribbed knit off-shoulder sweater", hint: "Exposed collarbones" },
      { en: "translucent white silk blouse", hint: "Sheer fabric glimpse" },
      { en: "tight black sleeveless tank top", hint: "Form-fitting ribbed cotton" },
      { en: "deep plunge v-neck halter top", hint: "Deep neck cut" }
    ]
  },
  {
    idx: 20, catEn: "Bottoms & Skirts", slot: "Fashion",
    tags: [
      { en: "high-waisted pleated navy miniskirt", hint: "Short school or tennis skirt" },
      { en: "tight distressed denim cutoff shorts", hint: "Cheeky denim shorts" },
      { en: "black leather pencil skirt with back slit", hint: "Office siren fit" },
      { en: "flowing side-slit maxi skirt", hint: "Leg-revealing hem" }
    ]
  },
  {
    idx: 21, catEn: "Dresses & Gowns", slot: "Fashion",
    tags: [
      { en: "backless silk evening gown with high leg slit", hint: "Formal gala gown" },
      { en: "fitted red cheongsam qipao with gold embroidery", hint: "High-neck side slit" },
      { en: "light floral cotton sundress with thin straps", hint: "Breezy summer dress" },
      { en: "tight virgin killer knit sweater dress", hint: "Exposed back sweaterdress" }
    ]
  },
  {
    idx: 22, catEn: "Uniforms & Profession", slot: "Fashion",
    tags: [
      { en: "Japanese sailor school uniform with red kerchief", hint: "Authentic sailor fuku" },
      { en: "classic french maid uniform with lace ruffles apron", hint: "Frilled maid costume" },
      { en: "white clinic nurse uniform with cap", hint: "Medical hospital uniform" },
      { en: "sleek airline flight attendant uniform", hint: "Fitted blazer and scarf" },
      { en: "cheerleader uniform with crop top and pleated skirt", hint: "Athletic cheerleader" }
    ]
  },
  {
    idx: 23, catEn: "Costumes & Fantasy Cosplay", slot: "Fashion",
    tags: [
      { en: "glossy black vinyl bunny girl bodysuit with ears", hint: "Playboy bunny look" },
      { en: "ornate gothic lolita dress with tiered petticoats", hint: "Lace-heavy victorian" },
      { en: "intricate polished fantasy steel plate armor", hint: "Articulated breastplate" },
      { en: "hooded crimson velvet witch cloak", hint: "Flowing occult robes" }
    ]
  },
  {
    idx: 24, catEn: "Swimwear & Beach", slot: "Fashion",
    tags: [
      { en: "skimpy triangle string bikini", hint: "Minimal coverage bikini" },
      { en: "high-cut leg competition one-piece swimsuit", hint: "Sporty high-cut spandex" },
      { en: "strapless bandeau bikini top with tie sides", hint: "Shoulderless top" },
      { en: "translucent white swimsuit wet and clinging to body", hint: "See-through wet lycra (NSFW)" }
    ]
  },
  {
    idx: 25, catEn: "Lingerie & Underwear", slot: "Fashion",
    tags: [
      { en: "sheer black lace bra and matching panties set", hint: "Delicate embroidery" },
      { en: "lace garter belt with attached stocking straps", hint: "Hosiery straps" },
      { en: "silk satin thong panties", hint: "Minimal rear coverage" },
      { en: "translucent mesh babydoll nightgown", hint: "Flowing see-through chemise" },
      { en: "unhooked bra hanging loosely", hint: "Disheveled lingerie" }
    ]
  },
  {
    idx: 26, catEn: "Legwear & Stockings", slot: "Fashion",
    tags: [
      { en: "black over-knee thigh-high socks", hint: "Over-the-knee socks" },
      { en: "sheer 20-denier black pantyhose", hint: "Semi-translucent nylon" },
      { en: "intricate fishnet stockings", hint: "Diamond lattice mesh" },
      { en: "absolute territory gap between skirt and thighhighs", hint: "Bare thigh gap" },
      { en: "white lace-trimmed stay-up stockings", hint: "Silicone band lace top" }
    ]
  },
  {
    idx: 27, catEn: "Footwear & Shoes", slot: "Fashion",
    tags: [
      { en: "pointed-toe black stiletto high heels", hint: "Tall slender heels" },
      { en: "strappy ankle-wrap platform sandals", hint: "Open-toe straps" },
      { en: "polished leather knee-high riding boots", hint: "Tall leather boots" },
      { en: "bare feet with pink polished toenails", hint: "Clean bare soles and toes" }
    ]
  },
  {
    idx: 28, catEn: "Accessories & Jewelry", slot: "Fashion",
    tags: [
      { en: "black velvet choker with pendant", hint: "Neck hugging band" },
      { en: "fine gold chain necklace resting on collarbone", hint: "Delicate metal chain" },
      { en: "round thin-framed wire glasses", hint: "Stylish wireframes" },
      { en: "elbow-length silk opera gloves", hint: "Formal long gloves" },
      { en: "wide leather waist belt accentuating silhouette", hint: "Waist-cinching accessory" }
    ]
  },
  {
    idx: 29, catEn: "Body Modifications", slot: "Subject",
    tags: [
      { en: "sparkling navel belly button piercing", hint: "Jeweled belly ring" },
      { en: "delicate botanical line-art tattoo along ribcage", hint: "Fine-line body art" },
      { en: "multiple gold cartilage ear piercings", hint: "Helix and lobe studs" },
      { en: "intricate full sleeve tattoo down arm", hint: "Sleeve ink artwork" }
    ]
  },
  {
    idx: 30, catEn: "State of Undress (NSFW)", slot: "Pose",
    tags: [
      { en: "skirt lifted high to waist with both hands", hint: "Intentional skirt lift" },
      { en: "shirt pulled up biting collar revealing breasts", hint: "Shirt-bite breast flash" },
      { en: "dress strap slipping off shoulder", hint: "Accidental or sensual slip" },
      { en: "panties hooked on one ankle", hint: "Underwear removed on leg" },
      { en: "clothing disheveled and open at chest", hint: "Disheveled garments" }
    ]
  },
  {
    idx: 31, catEn: "Static Poses", slot: "Pose",
    tags: [
      { en: "standing in classical contrapposto posture", hint: "Weight shifted on one hip" },
      { en: "sitting gracefully on chair with legs crossed", hint: "Crossed leg seated" },
      { en: "kneeling upright on soft bed", hint: "Erect kneeling posture" },
      { en: "lying on back sprawled out across white sheets", hint: "Supine horizontal pose" },
      { en: "curled up on side in fetal position", hint: "Side recumbent pose" }
    ]
  },
  {
    idx: 32, catEn: "Dynamic Actions", slot: "Pose",
    tags: [
      { en: "turning around looking over shoulder mid-stride", hint: "Over-shoulder movement" },
      { en: "stretching both arms high overhead with arched back", hint: "Torso lengthening stretch" },
      { en: "running with skirt fluttering in the wind", hint: "Dynamic motion blur" },
      { en: "gently tucking a loose strand of hair behind ear", hint: "Subtle hand gesture" }
    ]
  },
  {
    idx: 33, catEn: "Sensual / Erotic Poses (NSFW)", slot: "Pose",
    tags: [
      { en: "on all fours with hips raised high (doggy position)", hint: "All-fours presentation" },
      { en: "lying on back with knees pulled back to chest", hint: "Exposed pelvic framing" },
      { en: "straddling lap facing viewer (cowgirl position)", hint: "Upright straddle pose" },
      { en: "arched spine presenting buttocks to camera", hint: "Back-arch bottom view" },
      { en: "spread legs revealing crotch", hint: "Explicit leg spread" }
    ]
  },
  {
    idx: 34, catEn: "Hands & Arm Gestures", slot: "Pose",
    tags: [
      { en: "one hand resting casually on hip", hint: "Classic hip rest" },
      { en: "fingers gently resting on bare collarbone", hint: "Sensual touch" },
      { en: "clutching the white bedsheet tightly in fists", hint: "Emotional clutch" },
      { en: "index finger touching lower lip thoughtfully", hint: "Reflective pose" },
      { en: "both arms crossed pushing breasts together", hint: "Cleavage-enhancing pose" }
    ]
  },
  {
    idx: 35, catEn: "Camera Framing & Angles", slot: "Style",
    tags: [
      { en: "intimate close-up portrait of face and collarbone", hint: "Tight framing" },
      { en: "medium cowboy shot from mid-thigh up", hint: "Western standard framing" },
      { en: "dramatic low angle shot looking up at subject", hint: "Imposing viewpoint" },
      { en: "high angle shot looking down from above", hint: "Vulnerable overhead view" },
      { en: "first person POV shot looking down at body", hint: "First-person perspective" },
      { en: "dutch angle tilted horizon for tension", hint: "Canted framing" }
    ]
  },
  {
    idx: 36, catEn: "Camera Optics & Lenses", slot: "Style",
    tags: [
      { en: "shot on 85mm f/1.4 prime portrait lens", hint: "Flattering face compression" },
      { en: "razor-thin shallow depth of field with creamy circular bokeh", hint: "Blurred background" },
      { en: "sharp focus on iris with visible catchlights", hint: "Crystal eye focus" },
      { en: "subtle anamorphic horizontal streak lens flare", hint: "Cinematic optical streak" },
      { en: "wide 24mm environmental perspective", hint: "Surrounding room context" }
    ]
  },
  {
    idx: 37, catEn: "Lighting & Mood", slot: "Scene",
    tags: [
      { en: "warm golden hour sunlight streaming sideways", hint: "Warm sun rays" },
      { en: "soft diffused morning window light with sheer curtains", hint: "Gentle natural wrap" },
      { en: "high-contrast cinematic chiaroscuro shadows", hint: "Dramatic shadows" },
      { en: "cyan and magenta neon rim lighting cutting through dark", hint: "Cyberpunk dual tone" },
      { en: "dim candlelit ambient glow with flickering shadows", hint: "Intimate low-key light" }
    ]
  },
  {
    idx: 38, catEn: "Location & Setting", slot: "Scene",
    tags: [
      { en: "cozy sunlit bedroom with rumpled white bed", hint: "Warm domestic room" },
      { en: "traditional Japanese tatami room with shoji screens", hint: "Classic Japanese interior" },
      { en: "rain-drenched neon-lit Tokyo back alley at night", hint: "Urban cyberpunk street" },
      { en: "deserted tropical beach at twilight", hint: "Sand and shoreline" },
      { en: "luxurious penthouse hotel suite overlooking city skyline", hint: "High-rise cityscape" },
      { en: "dusty sun-drenched greenhouse filled with overgrown ferns", hint: "Botanical sanctuary" }
    ]
  },
  {
    idx: 39, catEn: "Atmosphere & Weather", slot: "Scene",
    tags: [
      { en: "gentle rain drumming against window glass", hint: "Rain streaks on glass" },
      { en: "swirling cherry blossom petals on spring breeze", hint: "Drifting petals particles" },
      { en: "thick volumetric fog illuminated by light shafts", hint: "God rays through mist" },
      { en: "clear summer sky with distant towering cumulus clouds", hint: "Summer horizon" }
    ]
  },
  {
    idx: 40, catEn: "Artifact Suppression (Negative)", slot: "Negative",
    tags: [
      { en: "deformed hands, extra fingers, fused fingers, missing fingers", hint: "Anatomical hand fixes" },
      { en: "plastic skin, waxy skin, airbrushed, cartoonish, 3d render", hint: "Anti-plastic AI skin" },
      { en: "blurry, low quality, jpeg artifacts, watermark, signature, logo", hint: "General quality junk" },
      { en: "distorted face, mismatched eyes, doubled pupils, wall-eyed", hint: "Facial symmetry fixes" },
      { en: "extra limbs, cloned legs, mutated arms, floating body parts", hint: "Limbs redundancy" }
    ]
  }
];
