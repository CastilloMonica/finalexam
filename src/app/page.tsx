import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-20 gap-24">

      {/* HERO TITLE */}
      <section className="space-y-6">
        <h1 className="text-6xl font-black tracking-tight text-primary">
          El Chepenano
        </h1>

        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
          El Chepenano was born from a family dream to bring authentic
          Peruvian street food to New York City — inspired by tradition,
          bold flavors, and community.
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="max-w-5xl flex flex-col items-center gap-10">
        <Image
          src="/el-chepenano-truck.png"
          alt="El Chepenano Peruvian Food Truck and happy customers"
          width={900}
          height={600}
          priority
          className="rounded-2xl shadow-xl"
        />

        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground text-center">
          <span className="font-semibold text-foreground">
            El Chepenano
          </span>{" "}
          Represents more than a food truck — it is a celebration of
          Peruvian culture, family recipes, and the joy of sharing food.
          Our mission is to serve authentic Peruvian street food made
          with fresh ingredients, traditional spices, and love, bringing
          people together one plate at a time.
        </p>
      </section>

      {/* WHY PERUVIAN FOOD */}
      <section className="max-w-3xl space-y-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary">
          Why Choose Peruvian Food?
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground">
          Peruvian cuisine is considered one of the most diverse and
          flavorful in the world. It blends Indigenous, Spanish,
          African, and Asian influences into iconic dishes such as
          ceviche, lomo saltado, and pollo a la brasa — offering a unique
          balance of taste, nutrition, and tradition.
        </p>
      </section>

      {/* VIDEO */}
      <section className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/96sGMGpdfd8"
          title="Why Peruvian Food is the Best"
          allowFullScreen
        />
      </section>

      {/* THANK YOU */}
      <section className="max-w-2xl text-center">
        <p className="text-lg font-medium text-foreground">
          Thanks for choosing{" "}
          <span className="font-semibold text-primary">
            El Chepenano
          </span>{" "}
          as your favorite and healthy fast food.
        </p>
      </section>

    </main>
  )
}
