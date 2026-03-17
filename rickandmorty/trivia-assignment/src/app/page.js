import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/rick-morty-background.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative z-10 flex flex-col min-h-screen">

        <Header />

        <main className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="flex flex-col items-center gap-8 p-12 rounded-2xl shadow-xl bg-white/80 dark:bg-black/70 max-w-3xl text-center">
            <Image
              src="/images/rick-morty.png"
              alt="Rick and Morty"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
            <h1 className="text-4xl font-bold text-black dark:text-white">
              The Rick and Morty Characters Page
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              View the characters of the Rick and Morty universe.
              <br />
              Use the Characters tab to get started.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
