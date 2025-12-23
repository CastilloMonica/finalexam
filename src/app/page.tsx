import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-16 gap-20">

      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-5xl font-extrabold text-primary">
          El Chepenano
        </h1>

        <p className="max-w-2xl text-lg">
          El Chepenano was born from a family dream to bring authentic
          Peruvian street food to New York City — inspired by tradition,
          bold flavors, and community.
        </p>

        <Button size="lg" className="gap-2">
          <UtensilsCrossed />
          Order Now
        </Button>
      </section>

      {/* IMAGE + STORY */}
      <section className="max-w-5xl flex flex-col items-center gap-8">
        <Image
          src="/el-chepenano-truck.png"
          alt="El Chepenano Peruvian Food Truck and happy customers"
          width={900}
          height={600}
          priority
          className="rounded-2xl shadow-xl"
        />

        <p className="max-w-3xl text-lg leading-relaxed">
          <strong>El Chepenano</strong> represents more than a food truck —
          it is a celebration of Peruvian culture, family recipes, and the
          joy of sharing food. Our mission is to serve authentic Peruvian
          street food made with fresh ingredients, traditional spices,
          and love, bringing people together one plate at a time.
        </p>
      </section>

      {/* WHY PERUVIAN FOOD */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-primary">
          Why Choose Peruvian Food?
        </h2>

        <p>
          Peruvian cuisine is considered one of the most diverse and
          flavorful in the world. It blends Indigenous, Spanish,
          African, and Asian influences into iconic dishes such as
          ceviche, lomo saltado, and pollo a la brasa.
        </p>
      </section>

      {/* VIDEO */}
      <section className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/watch?v=96sGMGpdfd8"
          title="Why Peruvian Food is the Best"
          allowFullScreen
        />
      </section>

    </main>
  )
}
