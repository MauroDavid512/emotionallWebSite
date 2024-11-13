import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const firaSans = localFont({
  src: "./fonts/FiraSans-Regular.ttf",
  variable: "--font-fira-sans",
  weight: "400",
});
const firaSansBold = localFont({
  src: "./fonts/FiraSans-Bold.ttf",
  variable: "--font-fira-sans-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Emotionall",
  description: "The World's First Al-Driven Emotional Inteligence App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${firaSansBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
