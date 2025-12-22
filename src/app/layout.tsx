import type { Metadata } from "next"
import "./globals.css"
import Menu from "@/components/Menu"

export const metadata: Metadata = {
  title: "El Chepenano",
  description: "Final Exam Project - Peruvian Food Truck & Payroll System",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}

