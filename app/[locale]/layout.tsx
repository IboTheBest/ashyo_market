import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { GlobalContextProvider } from "@/context/context";
import ReactQueryProvider from "@/query/ReactQueryProvider";
import LayoutWrapper from "@/features/LayautWrapper";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>ASHYO Store</title>
      </head>
      <body>
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <GlobalContextProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
            </GlobalContextProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}