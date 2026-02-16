import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-8 p-12 bg-white dark:bg-black rounded-md shadow-md">
        <Image
          src="/images/rick-morty.png"
          alt="Rick and Morty"
          className="rounded"
          width={600} 
          height={600} 
          priority
        />
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Welcome to Rick and Morty Trivia
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-xl">
          Test your knowledge of the Rick and Morty universe.
           <br></br>
          Use the Characters page to get started.
        </p>
      </main>
    </div>
  );
}
