import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";

import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"], weight: ["700"] });

//import header
import Header from "../../components/header";

// import footer
import Footer from "../../components/footer";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "HDeveloper - Web Development",
  description:
    "Portfolio website to show my skills and experience with Web Development",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
  }
  return (
    <html lang={locale}>
      <body className={syne.className}>
        <NextIntlClientProvider>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo&display=swap"
            rel="stylesheet"
          />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
