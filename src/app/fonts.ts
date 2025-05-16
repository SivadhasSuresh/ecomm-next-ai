import { Inter, Montserrat } from 'next/font/google';

// Inter as a replacement for Satoshi
export const satoshi = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satoshi',
  weight: ['300', '400', '500', '600', '700'],
});

// Montserrat as a replacement for Integral CF
export const integralCF = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-integral-cf',
  weight: ['700', '800', '900'],
}); 