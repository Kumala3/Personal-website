import {Inter, Tomorrow, Playfair_Display} from "next/font/google";

/*font for body content/casual text */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/* font for titles/headings */
const tomorrow = Tomorrow({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tomorrow",
  subsets: ["latin"],
});

/*font for titles/headings */
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export {inter, tomorrow, playfairDisplay};
