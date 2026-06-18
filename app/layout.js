import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ToastProvider from "@/components/ToastProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://omkumareducation.com"),
  title: {
    default: "Om Kumar Education | ICSE Class 9 & 10 Computer Applications",
    template: "%s | Om Kumar Education",
  },
  description:
    "Learn ICSE Class 9 & 10 Computer Applications and Java programming the simple, exam-oriented way. Live classes, chapter-wise notes, weekly tests and doubt solving with Om Kumar. Join the free WhatsApp community.",
  keywords: [
    "ICSE Computer Applications",
    "ICSE Java programming",
    "ICSE Class 10 Computer Applications",
    "ICSE Class 9 Computer Applications",
    "Om Kumar Education",
    "Java tuition online",
  ],
  authors: [{ name: "Om Kumar" }],
  openGraph: {
    title: "Om Kumar Education | ICSE Computer Applications",
    description:
      "Learn Java programming in a simple, exam-oriented way for ICSE Class 9 & 10. Join the free WhatsApp community for notes, live classes and weekly tests.",
    url: "https://omkumareducation.com",
    siteName: "Om Kumar Education",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Kumar Education | ICSE Computer Applications",
    description:
      "Learn Java programming in a simple, exam-oriented way for ICSE Class 9 & 10.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4338CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} ${jbmono.variable}`}>
        <ThemeProvider>
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
