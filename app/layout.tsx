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

export const metadata: Metadata = {
  title: "리움랩스",
  description: "플라스틱 생활용품 제작 및 견적 & 제휴 문의",
  openGraph: {
    title: "리움랩스",
    description: "플라스틱 생활용품 제작 및 견적 & 제휴 문의",
    images: [
      {
        url: "https://www.rium-labs.com/images/kakao_thumb.jpg",
        width: 1200,
        height: 630,
        alt: "리움랩스 OG 이미지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
