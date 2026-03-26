"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <header className="site-header">
      <Link className="site-title" href="/">
        Khizar Imran
      </Link>
      <nav className="site-nav">
        <Link href="/" className={path === "/" ? "nav-active" : ""}>Home</Link>
        <Link href="/articles" className={path.startsWith("/articles") ? "nav-active" : ""}>Articles</Link>
        <a href="mailto:khzrimrn@gmail.com">Contact</a>
      </nav>
    </header>
  );
}
