import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "世田谷アカデミー | 梅ヶ丘駅徒歩2分の個別指導塾",
  description:
    "世田谷アカデミーは梅ヶ丘駅から徒歩2分。小学生・中学生・高校生に寄り添う個別指導の学習塾です。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XEQ0YDXYX3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XEQ0YDXYX3');`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
