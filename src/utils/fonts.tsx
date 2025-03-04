import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// const geistVarelaRound = Varela_Round({
//   variable: "--font-varela-Round",
//   weight: ["400"],
//   subsets: ["latin"],
// });
export const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export const geistPlayfairDisplay = Playfair_Display({
  variable: "--font-Playfair-Display",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
