import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Menu() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="https://exam-1-three.vercel.app/" target="_blank">
        <Button variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          EXAM 1
        </Button>
      </Link>

      <Link href="https://github.com/CastilloMonica/Exam-1" target="_blank">
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          GIT 1
        </Button>
      </Link>
    </nav>
  )
}
