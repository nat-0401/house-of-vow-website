import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// Crop coordinates use the client's 1470px-wide artboard (exports are 2x).
const source = process.argv[2];
if (!source) throw new Error('Pass the labeled client design folder.');
const output = fileURLToPath(new URL('../public/client-design', import.meta.url));
async function crop(file, name, x, y, width, height) {
  await sharp(path.join(source, file)).extract({ left: x * 2, top: y * 2, width: width * 2, height: height * 2 }).webp({ quality: 90 }).toFile(path.join(output, name + '.webp'));
}
async function main() {
  await fs.mkdir(output, { recursive: true });
  await crop('home 1.png', 'home-hero', 0, 85, 1470, 745);
  await crop('home 3.png', 'home-planner', 83, 148, 728, 445);
  await crop('home 3.png', 'home-ballroom', 1053, 310, 307, 285);
  await crop('about us 1.png', 'about-couple', 118, 116, 377, 566);
  await crop('about us 1.png', 'about-production', 521, 116, 354, 566);
  await crop('about us 2.png', 'about-ballroom', 113, 116, 660, 599);
  for (const [index, x] of [257, 588, 919].entries()) {
    const top = await sharp(path.join(source, 'about us 3.png')).extract({ left: x * 2, top: 940, width: 590, height: 720 }).toBuffer();
    const bottom = await sharp(path.join(source, 'about us 4.png')).extract({ left: x * 2, top: 2, width: 590, height: 384 }).toBuffer();
    await sharp({ create: { width: 590, height: 1104, channels: 3, background: '#3b0b06' } }).composite([{ input: top, top: 0, left: 0 }, { input: bottom, top: 720, left: 0 }]).webp({ quality: 90 }).toFile(path.join(output, `mission-${index + 1}.webp`));
  }
  await crop('about us 4.png', 'wordmark', 652, 694, 167, 48);
  await crop('services.png', 'services-hero', 0, 86, 1470, 744);
  await crop('services 2.png', 'placeholder', 32, 309, 332, 198);
  await sharp('public/brand/logo-transparent-icon-dark.png').trim().resize({ width: 160 }).webp({ quality: 95 }).toFile(path.join(output, 'monogram.webp'));
  for (const file of ['home 2.png', 'home 3.png']) {
    const pixel = await sharp(path.join(source, file)).extract({ left: 10, top: 400, width: 1, height: 1 }).raw().toBuffer();
    console.log(file, [...pixel]);
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
