"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Truck,
  Calculator,
  Utensils,
  MapPin,
  Github,
  ExternalLink,
} from "lucide-react"

export default function HomePage() {
  const [hours, setHours] = useState("")
  const [rate, setRate] = useState("")
  const [netPay, setNetPay] = useState<number | null>(null)

  const calculatePayroll = () => {
    const h = parseFloat(hours)
    const r = parseFloat(rate)

    if (isNaN(h) || isNaN(r)) return

    const gross = h * r
    const tax = gross * 0.1
    const net = gross - tax

    setNetPay(net)
  }

  return (
    <main className="bg-peru-pattern space-y-20 p-8">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-primary">
          El Chepenano
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          El Chepenano is a Peruvian food truck project transformed into a
          modern Next.js application for my final exam.
        </p>

        <div className="flex justify-center gap-4">
          <Button>
            <Truck className="mr-2 h-4 w-4" />
            Food Truck Project
          </Button>

          <Button variant="secondary">
            <Calculator className="mr-2 h-4 w-4 text-accent" />
            Payroll Application
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6 space-y-4">
            <Utensils className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Peruvian Cuisine</h3>
            <p className="text-sm text-muted-foreground">
              Inspired by traditional Peruvian flavors and street food culture.
            </p>
          </CardContent>
        </Card>

        <Card className="border-accent">
          <CardContent className="p-6 space-y-4">
            <Calculator className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold">Payroll System</h3>
            <p className="text-sm text-muted-foreground">
              A real payroll calculator for a small food truck business.
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

      {/* PAYROLL CALCULATOR */}
      <section className="max-w-xl mx-auto">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Calculator className="h-5 w-5 text-accent" />
              Payroll Calculator
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Hours Worked</Label>
              <Input
                type="number"
                placeholder="e.g. 40"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Hourly Rate ($)</Label>
              <Input
                type="number"
                placeholder="e.g. 20"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              onClick={calculatePayroll}
            >
              Calculate Payroll
            </Button>

            {netPay !== null && (
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Estimated Net Pay
                </p>
                <p className="text-2xl font-bold text-primary">
                  ${netPay.toFixed(2)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* FINAL LINKS */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">
          Final Exam Project
        </h2>

        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/CastilloMonica/Exam-1"
              target="_blank"
            >
              <Github className="mr-2 h-4 w-4 text-primary" />
              GitHub Repository
            </a>
          </Button>

          <Button asChild>
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

      {/* FOOTER */}
      <footer className="pt-12 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Monica Castillo · Queens College (CUNY)
        </p>
        <p className="mt-1">
          Final Exam · Next.js · Tailwind CSS · shadcn/ui
        </p>
      </footer>

    </main>
  )
}
