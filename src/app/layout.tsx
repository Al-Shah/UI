import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Nunito, Girassol, Kufam, Poppins } from "next/font/google"

const nunito = Nunito({
  style: ["normal"],
  weight: ["400", "200", "300", "500", "600", "700"],
  variable: "--font-nunito",
  subsets: ["latin"],
})
const girassol = Girassol({
  style: ["normal"],
  weight: ["400"],
  variable: "--font-girassol",
  subsets: ["latin"],
})
const kufam = Kufam({
  style: ["normal"],
  variable: "--font-kufam",
  subsets: ["latin"],
})
const poppins = Poppins({
  weight: ["500", "600", "700"],
  style: ["normal"],
  variable: "--font-poppins",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Al-Shah",
  description: "Al-Shah",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${girassol.variable} ${kufam.variable} ${poppins.variable} font-medium font-nunito`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
