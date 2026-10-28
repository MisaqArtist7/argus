import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "آرگوس | سیستم‌های نظارت تصویری و دزدگیر اماکن",
  description:
    "مرجع تخصصی عرضه و اجرای دوربین‌های مداربسته، دستگاه‌های ضبط DVR/NVR و سیستم‌های هوشمند دزدگیر اماکن برند آرگوس (Argus)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
