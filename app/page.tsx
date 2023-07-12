import Link from "next/link";
import About from './(public)/about/page';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">hola mundo</span>
    
      <Link href={"/about"}>About</Link>
    </main>
  )
}
