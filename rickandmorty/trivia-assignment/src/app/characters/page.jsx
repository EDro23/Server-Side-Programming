import Link from "next/link";
import Character from "../components/Character"; // your card component

export default async function Page() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  const { results: characters = [] } = await res.json();

return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8 pt-20">
        {/* adjust pt-20 to match your fixed navbar height */}
        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-white">
            Characters
        </h1>

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {characters.map((character) => (
                <Link
                    key={character.id}
                    href={`/characters/${character.id}`}
                    className="hover:scale-105 transition-transform duration-300"
                >
                    <Character
                        name={character.name}
                        species={character.species}
                        image={character.image}
                    />
                </Link>
            ))}
        </div>
    </main>
);
}
