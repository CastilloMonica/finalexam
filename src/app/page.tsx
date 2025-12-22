import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Truck,
  Calculator,
  Utensils,
  MapPin,
  Github,
  ExternalLink,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-primary">
          El Chepenano
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          El Chepenano is a Peruvian food truck project originally built as a
          simple HTML website for Exam 1 and later transformed into a modern
          Next.js application for my final exam.
        </p>

        <div className="flex justify-center gap-4">
          <Button>
            <Truck className="mr-2 h-4 w-4" />
            Food Truck Project
          </Button>

          <Button variant="secondary">
            <Calculator className="mr-2 h-4 w-4" />
            Payroll Application
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <Utensils className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Peruvian Cuisine</h3>
            <p className="text-sm text-muted-foreground">
              Inspired by traditional Peruvian flavors and street food culture.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Payroll System</h3>
            <p className="text-sm text-muted-foreground">
              A payroll calculator built for a small food truck business.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Community Focus</h3>
            <p className="text-sm text-muted-foreground">
              Supporting immigrant-owned businesses through technology.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">
          Exam 1 → Final Exam
        </h2>

        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/CastilloMonica/Exam-1"
              target="_blank"
            >
              <Github className="mr-2 h-4 w-4" />
              Exam 1 GitHub
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://monicacastillo.info"
              target="_blank"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Final Project
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
