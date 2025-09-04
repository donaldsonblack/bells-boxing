import type React from "react"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata = {
  title: "Bells Boxing | Premium Boxing Gym",
  description:
    "Train with champions at Bells Boxing, the premier boxing gym offering expert coaching, state-of-the-art facilities, and classes for all skill levels.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
