import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="rounded-2xl shadow-xl p-10 sm:p-16 flex flex-col items-center text-center gap-8 max-w-md w-full">
      
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
          {/* Photo */}
          <Image
            src="/picture.jpg"
            alt="Nilly Hamidi"
            width={120}
            height={120}
            className="rounded-full"
          />

          {/* Intro */}
          <div>
            <h1 className="text-3xl font-bold">Nilly Hamidi</h1>
            <p className="text-lg text-gray-600 mt-2">
              I'm a final year Software Engineering student at Monash University. When I'm not working or studying, I'm either baking, at the gym, looking at cats, or playing The Legend of Zelda.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Feel free to contact me below! 😊
            </p>
          </div>
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a href="https://github.com/nililz" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/nilly-hamidi" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:nillyhamidi@gmail.com" className="text-blue-500 hover:underline">Email</a>
        </footer>
      
      </section>
    </div>
  );
}
