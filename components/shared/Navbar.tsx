import Link from "next/link";
import "../styles/navbar.scss";
import HeaderShape from "../header-shape";
export default function Navbar() {
  return (
    <>
      {/* <HeaderShape /> */}
      <nav className="bg-black bg-opacity-5 h-16 flex items-center text-lg underline">
        <ul className="flex w-screen justify-around">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/week-2">week-2</Link>
          </li>
          <li>
            <Link href="/week-3">week-3</Link>
          </li>
          <li>
            <Link href="/week-4">week-4</Link>
          </li>
          <li>
            <Link href="/week-5">week-5</Link>
          </li>
          <li>
            <Link href="/week-6">week-6</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
