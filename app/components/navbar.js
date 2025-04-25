import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 right-6 z-20 flex flex-col gap-4 text-white text-sm font-medium bg-black p-4 rounded-lg shadow-lg">
      <Link href="/" className="hover:text-blue-500 hover:opacity-70 transition">Home</Link>
      <Link href="/skills" className="hover:text-blue-500 hover:opacity-70 transition">Skills</Link>
      <Link href="/recipes" className="hover:text-blue-500 hover:opacity-70 transition">Recipes</Link>
    </nav>
  );
}