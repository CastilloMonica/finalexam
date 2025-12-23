import Menu from "@/components/Menu"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between px-8 py-4 border-b">
          {/* LEFT */}
          <Menu />

          {/* RIGHT */}
          <h1 className="text-xl font-bold text-primary">Final Exam</h1>
        </header>

        {children}
      </body>
    </html>
  )
}
