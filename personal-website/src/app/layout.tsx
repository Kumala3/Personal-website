import type { Metadata } from "next";
import {inter, tomorrow, playfairDisplay} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kostiantyn Sytnyk's Corner",
  description: "Explore Kostiantyn Sytnyk's innovative projects, stay up-to-date with AI, Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${tomorrow.variable} ${playfairDisplay.variable} antialiased`}
      >
        <div className="rootContainer">
          {children}
        </div>  
      </body>
    </html>
  );
}
