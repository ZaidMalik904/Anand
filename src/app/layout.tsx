import type { Metadata } from "next";
import { Inter, Poppins, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anandsindhuenterprises.com"),
  title: {
    default: "ANAND SINDHU ENTERPRISES | Premium Enterprise Technical Services & IT Solutions",
    template: "%s | ANAND SINDHU ENTERPRISES"
  },
  description: "Leading enterprise technical services, IT infrastructure, staffing solutions, and examination support with nationwide operations in India.",
  keywords: ["technical services", "IT solutions", "staffing", "audit services", "examination support", "nationwide operations"],
  openGraph: {
    title: "ANAND SINDHU ENTERPRISES",
    description: "Leading enterprise technical services, IT infrastructure, staffing solutions, and examination support with nationwide operations in India.",
    url: "https://www.anandsindhuenterprises.com",
    siteName: "Anand Sindhu Enterprises",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANAND SINDHU ENTERPRISES",
    description: "Leading enterprise technical services and IT solutions.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingActionButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
