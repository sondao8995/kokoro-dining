import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {routing} from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }> ;
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
export const metadata: Metadata = {
  title: "Kokoro Japanese Dining",
  description: "Where delicious food comes from the heart",
};

export default async function LocaleLayout({children, params }: LocaleLayoutProps){
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  if (!messages) notFound();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
