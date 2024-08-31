import { Poppins, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const titleFont = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
});
