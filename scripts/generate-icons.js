const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
function createSolidPng(width, height, r, g, b, a) {
  const bytesPerPixel = 4;
  const rawData = Buffer.alloc(height * (1 + width * bytesPerPixel));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0;
    for (let x = 0; x < width; x++) {
      const isBorder = (x < 12 || x > width - 13 || y < 12 || y > height - 13);
      if (isBorder) {
        rawData[offset++] = 103; rawData[offset++] = 216; rawData[offset++] = 152; rawData[offset++] = 255;
      } else {
        rawData[offset++] = r; rawData[offset++] = g; rawData[offset++] = b; rawData[offset++] = a;
      }
    }
  }
  const deflated = zlib.deflateSync(rawData);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcVal = crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeInt32BE(crcVal, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }
  function crc32(buf) {
    let table = [];
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[i] = c;
    }
    let crc = -1;
    for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    return (crc ^ (-1));
  }
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0); ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; ihdrData[9] = 6; ihdrData[10] = 0; ihdrData[11] = 0; ihdrData[12] = 0;
  return Buffer.concat([signature, chunk('IHDR', ihdrData), chunk('IDAT', deflated), chunk('IEND', Buffer.alloc(0))]);
}
const wwwDir = path.join(__dirname, '..', 'www');
if (!fs.existsSync(wwwDir)) fs.mkdirSync(wwwDir, { recursive: true });
fs.writeFileSync(path.join(wwwDir, 'icon-192.png'), createSolidPng(192, 192, 11, 14, 12, 255));
fs.writeFileSync(path.join(wwwDir, 'icon-512.png'), createSolidPng(512, 512, 11, 14, 12, 255));
