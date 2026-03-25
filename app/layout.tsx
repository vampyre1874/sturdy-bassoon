import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "cosmin",
  description: "full stack developer specializing in modern web technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceMono.variable} font-mono bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}
