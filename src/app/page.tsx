import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="space-y-16 p-8">

      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          Final Exam Project
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A Next.js payroll system application with Tailwind 4, shadcn/ui, and Lucide icons,
          inspired by Peruvian design 🇵🇪
        </p>
      </section>

      {/* FINAL PROJECT LINKS */}
      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Live Final Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href="https://exam-1-three.vercel.app/"
              target="_blank"
            >
              <Button className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Live Project
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href="https://github.com/CastilloMonica/Exam-1"
              target="_blank"
            >
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Repo
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* PAYROLL APPLICATION */}
      <section className="max-w-4xl mx-auto">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-accent" />
              Payroll System Application
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This payroll application calculates wages based on employee hours,
              tax assumptions, and filing status. Built using React, TypeScript,
              and Tailwind CSS.
            </p>

            <Button variant="secondary" disabled>
              Payroll App (In Progress)
            </Button>
          </CardContent>
        </Card>
      </section>

    </main>
  )
}
