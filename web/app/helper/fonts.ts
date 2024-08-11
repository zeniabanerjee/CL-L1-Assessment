import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "900"],
});
