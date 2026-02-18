// app/components/Character.jsx

export default function Character({ name, species, image }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center">
      
      <img
        src={image}
        alt={name}
        className="w-25 h-25 object-cover rounded-lg mb-4"
      />

      <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
        {name}
      </h2>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {species}
      </p>
    </div>
  );
}
