// app/components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md fixed w-full z-10">
      <nav className="max-w-7xl mx-auto flex justify-center gap-8 p-4 text-lg font-medium">
        <Link href="/" className="hover:text-green-500 transition">
          Home
        </Link>
        <Link href="/characters" className="hover:text-green-500 transition">
          Characters
        </Link>
      </nav>
    </header>
  );
}
