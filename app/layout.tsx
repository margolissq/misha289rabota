import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Профиль | cxffxx klvn",
  description: "Страница профиля пользователя",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-muted/30 antialiased">
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
