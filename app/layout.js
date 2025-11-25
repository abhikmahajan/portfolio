import ThemeWrapper from "./components/ThemeWrapper"
import {  Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhik Mahajan",
  description: "Abhik Mahajan | A portfolio website of Abhik Mahajan | Software/Web Developer | Contact to get freelamcing services at affordable prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${geistMono.variable}`}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  )
}
