import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'public', 'assets');

function wixImage(mediaId, filename, width = 900) {
  const height = Math.round(width * 0.75);
  const file = encodeURIComponent(filename);
  return `https://static.wixstatic.com/media/${mediaId}/v1/fill/w_${width},h_${height},al_c,q_85,enc_auto/${file}`;
}

function wixImageFit(mediaId, filename, width, height) {
  const file = encodeURIComponent(filename);
  return `https://static.wixstatic.com/media/${mediaId}/v1/fit/w_${width},h_${height},al_c,q_85,enc_auto/${file}`;
}

function wixPortrait(mediaId, filename, { crop, width = 480, height } = {}) {
  const file = encodeURIComponent(filename);
  const h =
    height ?? (crop ? Math.round(width * (crop.h / crop.w)) : Math.round(width * 1.25));
  const cropPart = crop
    ? `crop/x_${crop.x},y_${crop.y},w_${crop.w},h_${crop.h}/`
    : '';
  return `https://static.wixstatic.com/media/${mediaId}/v1/${cropPart}fill/w_${width},h_${h},al_c,q_85,enc_auto/${file}`;
}

function wixVideo(mediaId, quality = '1080p') {
  return `https://video.wixstatic.com/video/${mediaId}/${quality}/mp4/file.mp4`;
}

function wixLogo(mediaId, width = 320) {
  const height = Math.round(width * 0.55);
  return `https://static.wixstatic.com/media/${mediaId}/v1/fit/w_${width},h_${height},al_c,q_90,enc_auto/${encodeURIComponent(mediaId)}`;
}

const assets = [
  { rel: 'logo.png', url: wixImage('ae9864_b46e94e0f2694d999ddabc2a3ab1331b~mv2.png', 'Gemini_Generated_Image_5914oi5914oi5914__1___1_-removebg-preview.png', 900) },
  { rel: 'home/who-we-are.mp4', url: wixVideo('030b09_7748b0907c654cd49502cfd91856cb22') },
  { rel: 'home/who-we-are-poster.jpg', url: wixImage('030b09_7748b0907c654cd49502cfd91856cb22f000.jpg', '030b09_7748b0907c654cd49502cfd91856cb22f000.jpg', 800) },
  { rel: 'logos/private/01.png', url: wixLogo('ae9864_1edecdb810aa426299d564e4eaec8f4a~mv2.png') },
  { rel: 'logos/private/02.png', url: wixLogo('ae9864_7f762e181fb14914bfcfc4cc9c0acf63~mv2.png') },
  { rel: 'logos/private/03.png', url: wixLogo('ae9864_f9ddd3639bce439eb4d04b373b9a4dbf~mv2.png') },
  { rel: 'logos/private/04.png', url: wixLogo('ae9864_23c0f9e7b14d4b34ae83e97f703b012a~mv2.png') },
  { rel: 'logos/private/05.png', url: wixLogo('ae9864_59bc187b251e45de88eb4933a19a8a1c~mv2.png') },
  { rel: 'logos/private/06.png', url: wixLogo('305fe7_9eb3d0c455434d1a9de5e0f79daec7fe~mv2.png') },
  { rel: 'logos/private/07.png', url: wixLogo('305fe7_ebbe70af663a4f1f87490cd258e41f45~mv2.png') },
  { rel: 'logos/private/08.png', url: wixLogo('305fe7_f3c4e086465c44558946c889e8e90b99~mv2.png') },
  { rel: 'logos/development/01.png', url: wixLogo('ae9864_e959ddcdb23f471d91b7cd3c8876bb98~mv2.png') },
  { rel: 'logos/development/02.png', url: wixLogo('ae9864_d94ad1d076c74a538c1fc3213da80440~mv2.png') },
  { rel: 'logos/development/03.png', url: wixLogo('ae9864_e0e166f37cf64ea6a9346965cc3139d0~mv2.png') },
  { rel: 'logos/development/04.png', url: wixLogo('ae9864_7b847051ca4d46a695af7f82cf05b65f~mv2.png') },
  {
    rel: 'about/founder.jpg',
    url: wixPortrait('8d625e_bb8ffbe484944230b7f58b219faf23e9~mv2.jpg', 'SA_LGO_Headshot.jpg', {
      crop: { x: 107, y: 0, w: 629, h: 800 },
      width: 520,
      height: 662,
    }),
  },
  {
    rel: 'about/prijesh.jpg',
    url: wixPortrait('8d625e_c6120480e35b45f4a9583137960e79cf~mv2.jpg', 'WhatsApp Image 2026-03-11 at 00_46_17.jpg', {
      crop: { x: 79, y: 26, w: 444, h: 564 },
      width: 520,
      height: 660,
    }),
  },
  { rel: 'about/khem.jpeg', url: wixPortrait('305fe7_2d3b06824c024aebb376ba1749675a48~mv2.jpeg', 'khem.jpeg', { width: 480, height: 480 }) },
  { rel: 'about/diwas.jpeg', url: wixPortrait('305fe7_a125fb1c283b47f6916b76197a4d5da7~mv2.jpeg', 'd.jpeg', { width: 480, height: 480 }) },
  { rel: 'about/sagar.jpeg', url: wixPortrait('305fe7_b88afcae69c84e63a43827d04cf0e51a~mv2.jpeg', 'sa.jpeg', { width: 400, height: 400 }) },
  {
    rel: 'about/roshan.jpg',
    url: wixPortrait('305fe7_813f652a997f4f46aadc36f03a323aca~mv2.jpg', 'WhatsApp Image 2026-04-09 at 6_59_38 PM.jpg', {
      crop: { x: 0, y: 0, w: 678, h: 896 },
      width: 400,
      height: 528,
    }),
  },
  {
    rel: 'about/bishal.png',
    url: wixPortrait('305fe7_09e34fc9af7f418797ecda8d01e2dd30~mv2.png', 'Gemini_Generated_Image_5l5x8f5l5x8f5l5x.png', {
      width: 400,
      height: 400,
    }),
  },
  {
    rel: 'insights/hydropower.jpeg',
    url: wixImageFit('ae9864_d25680a3cd6647d5a3faa1717e61f359~mv2.jpeg', 'WhatsApp Image 2026-05-28 at 10_13_09 PM.jpeg', 920, 700),
  },
  {
    rel: 'insights/vehicle-tax.png',
    url: wixImageFit('8d625e_e537fb7a8f814c5cbd20ae7636f27b23~mv2.png', 'Screenshot 2026-03-18 at 10_07_12 PM.png', 920, 700),
  },
  {
    rel: 'physical/annotation.jpg',
    url: wixImageFit('ae9864_ecc66b219d7049ea9ba42d3d7fb28c34~mv2.jpg', 'Annotation_edited.jpg', 1100, 473),
  },
  {
    rel: 'physical/annotation-example.jpg',
    url: wixImageFit('ae9864_469dccc60c724b2d93f37c4bff5d8f49~mv2.jpg', 'Gemini_Generated_Image_eolypmeolypmeoly_edited.jpg', 1100, 404),
  },
  { rel: 'physical/example.mp4', url: wixVideo('ae9864_d60dc6280b7741ffb6c49916bacaf5e4') },
  {
    rel: 'insights/hydropower-compute.pdf',
    url: 'https://www.cantordust.org/_files/ugd/305fe7_4093eed7dd2a4c379dcc270cee15a6f7.pdf',
  },
  {
    rel: 'insights/vehicle-tax.pdf',
    url: 'https://www.cantordust.org/_files/ugd/8d625e_bccc4f3e3f7f4e2ab3781103c47075a0.pdf',
  },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log('OK', path.relative(OUT, dest));
}

fs.mkdirSync(OUT, { recursive: true });

for (const { rel, url } of assets) {
  await download(url, path.join(OUT, rel));
}

console.log(`\nDownloaded ${assets.length} files to public/assets/`);
