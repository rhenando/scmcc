// app/layout.jsx

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Configure the local font
const madani = localFont({
  src: "./fonts/Madani-Arabic-Regular.ttf",
  display: "swap",
  variable: "--font-madani", // Assign a CSS variable name
});

export const metadata = {
  title: "SCMCC – Your Partner in Supply Chain Excellence",
  description:
    "Delivering world-class supply chain solutions with a local vision in Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    // 2. Apply the font variable to the <html> tag
    <html lang='en' className={madani.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
