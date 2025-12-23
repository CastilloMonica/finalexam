import Menu from "@/components/Menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* HEADER */}
        <header className="w-full border-b border-border bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            
            {/* LEFT: LOGO */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white font-bold">
                EC
              </div>
              <span className="text-lg font-semibold tracking-tight text-primary">
                El Chepenano
              </span>
            </div>

            {/* RIGHT: MENU */}
            <Menu />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}

