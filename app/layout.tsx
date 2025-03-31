import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "@/components/session-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Nobles Robotics",
    description: "Official website for Nobles Robotics team",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <Analytics />
        <SpeedInsights />
        <body className={inter.className}>
        <SessionProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">{children}</div>
                <Footer />
            </div>
        </SessionProvider>
        </body>
        </html>
    )
}

