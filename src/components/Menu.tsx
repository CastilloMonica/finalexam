import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Truck } from "lucide-react"

export default function Menu() {
  return (
    <nav className="flex items-center gap-4">
      <Truck className="text-primary" />

      <Button variant="ghost" asChild>
        <Link href="https://exam-1-three.vercel.app/" target="_blank">
          <ExternalLink /> EXAM 1
        </Link>
      </Button>

      <Button variant="ghost" asChild>
        <Link href="https://github.com/CastilloMonica/Exam-1" target="_blank">
          <Github /> GIT 1
        </Link>
      </Button>
    </nav>
  )
}
