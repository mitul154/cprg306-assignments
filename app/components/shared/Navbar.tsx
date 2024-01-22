import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-5 h-16 flex items-center text-lg underline">
      <ul className="flex w-screen justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/week-2">week-2</Link>
        </li>
      </ul>
    </nav>
  );
}
