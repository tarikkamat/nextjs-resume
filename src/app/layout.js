import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Tarık KAMAT",
  description: "Herkese merhaba, ben Tarık KAMAT. Yazılım geliştirme, teknoloji ve kişisel gelişim üzerine yazılar paylaşıyorum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-full">
      <body className={`${roboto.className} flex flex-col min-h-full`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}