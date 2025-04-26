import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"

  import Image from "next/image";

export default function Recipes() {
  return (
    <div className="relative min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-12">
        <h1 className="text-4xl font-extrabold text-center"> My Favourite Recipes</h1>

        <p className="text-lg text-gray-400 mt-2">
            This is a collation of my favourite recipes that I keep going back to, as a very amateur baker. Sourced from various media across the internet. Attached images are my attempts, if I remembered to take a photo (I like to bake... not decorate).
        </p>

        <Carousel>
            <CarouselContent>
                <CarouselItem>
                        {/* Cinnamon apple teacake */}
                        <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                            <div className="flex flex-col justify-between flex-1 h-full">
                                <h2 className="text-2xl font-semibold mb-4">🍏 Cinnamon Apple Teacake</h2>
                                <p className="text-white leading-relaxed">
                                    This is so simple, yet looks so pretty - the hardest part about it is cutting up all the apples. Definitely a must-bake if you have too many apples lying around.
                                </p>
                            

                                <div className="mt-6">
                                    <a
                                    href="https://www.recipetineats.com/cinnamon-apple-teacake/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-300 underline hover:text-blue-500"
                                    >
                                    Recipe Link
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                                <Image
                                src="/applecake.png"
                                alt="Apple Cake"
                                width={200}
                                height={200}
                                className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                                />
                            </div>
                        </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🥛 Tres Leches Cake</h2>
                            <p className="text-white leading-relaxed">
                                So yum and moist. I decorate mine with crushed pistachio and rose tea leaves. I've also made a chai version of this, which just involves making chai with the whole milk, then adding the evaporated and condensed milk - also very yum.
                            </p>
                        

                            <div className="mt-6 flex gap-4">
                                <a
                                href="https://tastesbetterfromscratch.com/tres-leches-cake/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 underline hover:text-blue-500"
                                >
                                Recipe Link
                                </a>
                                <a
                                href="https://www.tiktok.com/@ashbaber/video/7479513659320880406?_r=1&_t=ZS-8vqzUSh5igk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 underline hover:text-blue-500"
                                >
                                Chai version
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                            <Image
                            src="/tresleche.png"
                            alt="Tres Leches Cake"
                            width={200}
                            height={200}
                            className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🍰 Strawberry Cream Cake</h2>
                            <p className="text-white leading-relaxed">
                                Ok, this cake is literally so soft and airy, one of the yummiest cakes I have ever made. Bonus points for the strawberry inside, looks extra cute when a slice is cut. Also, not too sweet!
                            </p>
                        

                        <div className="mt-6">
                            <a
                            href="https://www.youtube.com/watch?v=KLhX7i_m18A&ab_channel=PearlLok"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline hover:text-blue-500"
                            >
                            Recipe Link
                            </a>
                        </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                            <Image
                            src="/strawberrycake.png"
                            alt="Strawberry Cake"
                            width={200}
                            height={200}
                            className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    {/* Soft dinner rolls */}
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                    <div className="flex flex-col justify-between flex-1 h-full">
                        <h2 className="text-2xl font-semibold mb-4"> 🍞 Soft Dinner Rolls </h2>
                        <p className="text-white leading-relaxed">
                            This recipe is so easy, and the dough only takes roughly 1-2 hours to rise. Perfect if you ever are in need of bread.
                        </p>

                            <div className="mt-6">
                                <a
                                href="https://sallysbakingaddiction.com/soft-dinner-rolls/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 underline hover:text-blue-500"
                                >
                                Recipe Link
                                </a>
                            </div>
                    </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🍪 Choc Chip Cookies</h2>
                            <p className="text-white leading-relaxed">
                                Just a basic cookie recipe. I like my cookies hard, so I melt the butter fully instead, and I find this can be too sweet, so I cut down both the white/brown sugar as well. Only takes like 15 mins tops, so great to satisfy a sweet craving.
                            </p>
                        

                        <div className="mt-6">
                            <a
                            href="https://www.taste.com.au/recipes/chocolate-chip-cookies-2/1bfaa0e6-13b4-489d-bbd8-1cc5caf1fa32"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline hover:text-blue-500"
                            >
                            Recipe Link
                            </a>
                        </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                            <Image
                            src="/cookies.png"
                            alt="Cookies"
                            width={200}
                            height={200}
                            className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🧀 Burnt Cheesecake (?)</h2>
                            <p className="text-white leading-relaxed">
                                Hear me out. You want a burnt basque cheesecake, but dont have cream on hand. But you do have shelf stable condensed milk... this is the next best thing. 3 ingredients. Also, add vanilla essence. Anyways...
                            </p>
                        

                        <div className="mt-6">
                            <a
                            href="https://kirbiecravings.com/3-ingredient-basque-cheesecake/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline hover:text-blue-500"
                            >
                            Recipe Link
                            </a>
                        </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                            <Image
                            src="/cheesecake.png"
                            alt="Cheesecake"
                            width={200}
                            height={200}
                            className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🥨 Puff Pastry Swirls</h2>
                            <p className="text-white leading-relaxed">
                                OMG theres guests coming in 20 minutes and theres no desserts to serve!! No probs, these are like the most minimal effort thing ever, but look pretty. Can make these with just about anything (Biscoff, Cinnamon sugar, Vegemite...).
                            </p>
                        

                        <div className="mt-6">
                            <a
                            href="https://sailorbailey.com/blog/nutella-puff-pastries/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline hover:text-blue-500"
                            >
                            Recipe Link
                            </a>
                        </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                            <Image
                            src="/swirls.png"
                            alt="Swirl"
                            width={200}
                            height={200}
                            className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                    </article>
                </CarouselItem>
                <CarouselItem>
                    <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-2xl font-semibold mb-4">🍫 Brownies</h2>
                            <p className="text-white leading-relaxed">
                                Every girl needs a good brownie recipe. Easy, and your chocolate cravings will be satisfied. I like my brownies fudgy, so I undercook them by a couple minutes.
                            </p>
                        

                        <div className="mt-6">
                            <a
                            href="https://www.recipetineats.com/easy-chocolate-brownies/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline hover:text-blue-500"
                            >
                            Recipe Link
                            </a>
                        </div>
                        </div>
                    </article>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        {/* Template for entries
        <CarouselItem>
            <article className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
                <div className="flex flex-col justify-between flex-1 h-full">
                    <h2 className="text-2xl font-semibold mb-4">Title</h2>
                    <p className="text-white leading-relaxed">
                        Stuff about it.
                    </p>
                

                <div className="mt-6">
                    <a
                    href="Link here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline hover:text-blue-500"
                    >
                    Recipe Link
                    </a>
                </div>
                </div>

                If theres a pic
                <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                    <Image
                    src="/applecake.png"
                    alt="Apple Cake"
                    width={200}
                    height={200}
                    className="rounded border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
            </article>
        </CarouselItem>
        */}
      </div>
    </div>
  );
}