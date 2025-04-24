import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-16 right-6 flex flex-col gap-6 text-white text-sm font-medium p-4">
      <Link href="/" className="hover:text-blue-500 hover:opacity-70 transition">Home</Link>
      <Link href="/skills" className="hover:text-blue-500 hover:opacity-70 transition">Skills</Link>
      <Link href="/recipes" className="hover:text-blue-500 hover:opacity-70 transition">Recipes</Link>
    </nav>
  );
}