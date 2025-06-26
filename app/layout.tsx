import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Anvaya Blog – Insights on AI, Business Tech, and Automation",
  description: "Stay updated with expert articles from Anvaya Solution on AI automation, web development, technical consulting, mobile apps, and more.",
  keywords: "Anvaya Blog, AI automation, web development, business consulting, tech insights, mobile apps, software development, cloud solutions",
  generator: "Anvaya Blog",
  authors: [{ name: "Anvaya Team", url: "https://anvayasolution.com" }],
  creator: "Anvaya Solution",
  publisher: "Anvaya Solution",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "Anvaya Blog – Insights on AI, Business Tech, and Automation",
    description: "Explore real-world use cases and insights on AI, web development, and modern business solutions from Anvaya Solution.",
    url: "https://blog.anvayasolution.com",
    siteName: "Anvaya Blog",
    images: [
      {
        url: "/Logo/Anvaya-Light.png", // Add this file to public if available
        width: 1200,
        height: 630,
        alt: "Anvaya Blog Cover Image",
      },
    ],
    type: "website",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
