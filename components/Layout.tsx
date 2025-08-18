import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
