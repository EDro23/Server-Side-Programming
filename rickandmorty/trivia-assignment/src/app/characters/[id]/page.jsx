import Character from "@/app/components/Character";

export default async function CharacterDetail({ params }) {
  const { id } = await params;

  if (!id) {
    return <h1 className="text-center mt-10 text-2xl">Missing ID</h1>;
  }

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h1 className="text-center mt-10 text-2xl">Character not found</h1>;
  }

  const character = await res.json();

return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-black p-6">
        <div className="max-w-xl w-full">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden p-6">
                {/* Larger image: adjust w-72/h-72 and sm:w-96/sm:h-96 as needed */}
                <img
                    src={character.image}
                    alt={character.name}
                    className="mx-auto rounded-md w-72 h-72 sm:w-96 sm:h-96 object-cover"
                />

                <div className="mt-4 text-center">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {character.name}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {character.species}
                    </p>
                </div>

                <div className="mt-6 text-center text-zinc-700 dark:text-zinc-300">
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                </div>
            </div>
        </div>
    </main>
);
}
