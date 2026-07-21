// マーキー用画像（横8枚・縦12枚）。差し替えは同名ファイルを上書きするだけ。
import type { StaticImageData } from 'next/image';
import h01 from './h01.jpg';
import h02 from './h02.jpg';
import h03 from './h03.jpg';
import h04 from './h04.jpg';
import h05 from './h05.jpg';
import h06 from './h06.jpg';
import h07 from './h07.jpg';
import h08 from './h08.jpg';
import p01 from './p01.jpg';
import p02 from './p02.jpg';
import p03 from './p03.jpg';
import p04 from './p04.jpg';
import p05 from './p05.jpg';
import p06 from './p06.jpg';
import p07 from './p07.jpg';
import p08 from './p08.jpg';
import p09 from './p09.jpg';
import p10 from './p10.jpg';
import p11 from './p11.jpg';
import p12 from './p12.jpg';

export const horizontalImages: StaticImageData[] = [
  h01, h02, h03, h04, h05, h06, h07, h08,
];

export const portraitImages: StaticImageData[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12,
];
