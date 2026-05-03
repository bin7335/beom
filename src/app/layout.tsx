import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "범 (교육해 범)",
  description:
    "학교 인근 공공데이터를 분석하여 학교별 맞춤 범교과·계기교육 주제를 추천하는 AI 서비스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
