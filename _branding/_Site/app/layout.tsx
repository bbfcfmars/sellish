import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sellish.com'), // UPDATE with your actual domain
  title: {
    default: "Sellish — Sell stuff faster",
    template: "%s | Sellish"
  },
  description:
    "Snap a photo. Get a listing draft + price guidance. Sell stuff in minutes, not hours.",
  keywords: ["sell items", "marketplace", "listing generator", "AI listing", "price guidance", "declutter", "resale"],
  authors: [{ name: "Sellish" }],
  creator: "Sellish",
  publisher: "Sellish",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sellish.com",
    siteName: "Sellish",
    title: "Sellish — Sell stuff faster",
    description: "Snap a photo. Get a listing draft + price guidance. Sell stuff in minutes, not hours.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this 1200x630 image
        width: 1200,
        height: 630,
        alt: "Sellish - Sell stuff faster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sellish — Sell stuff faster",
    description: "Snap a photo. Get a listing draft + price guidance. Sell stuff in minutes, not hours.",
    images: ["/og-image.png"],
    creator: "@sellish", // UPDATE with your Twitter handle if you have one
  },
  alternates: {
    canonical: "https://sellish.com",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en">
      <head>
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
