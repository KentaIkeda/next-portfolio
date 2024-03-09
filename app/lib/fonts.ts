import {
  Poppins,
  Noto_Sans_JP
} from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin']
})