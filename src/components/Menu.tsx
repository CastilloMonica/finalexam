import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Github,
  ExternalLink,
  Truck,
  Menu as MenuIcon,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Menu() {
  return (
    <nav className="flex items-center gap-3">

      {/* Brand Icon */}
      <Truck className="h-5 w-5 text-primary" />

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-3">
        {/* EXAM 1 */}
        <Button
          className="bg-primary text-white hover:bg-primary/90 gap-2 rounded-full px-5"
          asChild
        >
          <Link
            href="https://exam-1-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Exam 1
          </Link>
        </Button>

        {/* GIT 1 */}
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white gap-2 rounded-full px-5"
          asChild
        >
          <Link
            href="https://github.com/CastilloMonica/Exam-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            Git 1
          </Link>
        </Button>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6 text-primary" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col gap-6 pt-10">
            <Link
              href="https://exam-1-three.vercel.app/"
              target="_blank"
              className="flex items-center gap-3 text-lg font-medium text-primary"
            >
              <ExternalLink />
              Exam 1
            </Link>

            <Link
              href="https://github.com/CastilloMonica/Exam-1"
              target="_blank"
              className="flex items-center gap-3 text-lg font-medium text-primary"
            >
              <Github />
              Git 1
            </Link>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  )
}
