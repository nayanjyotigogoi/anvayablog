import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anvaya Blog',
  description: 'Created by Anvaya solution',
  generator: 'Anvaya solution',
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
