import { ShootingStarsAndStarsBackground } from "@/components/shooting-stars-background";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"

export default function Recipes() {
  return (
    <div className="relative min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-12">
        <h1 className="text-4xl font-extrabold text-center"> My Favourite Recipes</h1>

        <p className="text-lg text-gray-400 mt-2">
            This is a collation of my favourite recipes that I keep going back to, as a very amateur baker. If I can do it, so can you! Sourced from various media across the internet.
        </p>

        <Carousel>
            <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        {/* Template for entries
        <article className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold"> Title </h2>
          <p className="text-white leading-relaxed">
            Thoughts
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="Link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-500"
            >
              Recipe Link
            </a>
          </div>
        </article>
        */}

        {/* Cinnamon apple teacake */}
        <article className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">🍏 Cinnamon Apple Teacake</h2>
          <p className="text-white leading-relaxed">
            This is so simple, yet looks so pretty - the hardest part about it is cutting up all the apples. Definitely a must-bake if you have too many apples lying around.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.recipetineats.com/cinnamon-apple-teacake/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-500"
            >
              Recipe Link
            </a>
          </div>
        </article>

        {/* Soft dinner rolls */}
        <article className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold"> 🍞 Soft Dinner Rolls </h2>
          <p className="text-white leading-relaxed">
            This recipe is so easy, and the dough only takes roughly 1-2 hours to rise. Perfect if you ever are in need of bread.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://sallysbakingaddiction.com/soft-dinner-rolls/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-500"
            >
              Recipe Link
            </a>
          </div>
        </article>

      </div>
    </div>
  );
}