import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
