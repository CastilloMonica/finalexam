import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Menu() {
  return (
    <nav className="flex gap-4 p-4 border-b bg-background">
      <Link
        href="https://exam-1-three.vercel.app/"
        target="_blank"
      >
        <Button variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          Final Exam
        </Button>
      </Link>

      <Link
        href="https://github.com/CastilloMonica/Exam-1"
        target="_blank"
      >
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          GitHub Repo
        </Button>
      </Link>
    </nav>
  )
}