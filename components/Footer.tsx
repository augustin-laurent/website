"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row w-full items-center justify-center px-10 pb-2 gap-2 md:gap-0">
      <div>
        <p className="text-sm">© 2024. Made by Augustin Laurent.</p>
      </div>
      <div className="flex-grow" />
      <nav className="flex gap-10">
        <Link href="#work" className="text-sm hover:underline">
          Work
        </Link>
        <Link href="#about" className="text-sm hover:underline">
          About
        </Link>
        <Link
          href="https://gist.github.com/augustin-laurent"
          className="text-sm hover:underline"
        >
          Gist
        </Link>
        <Link href="/experiences" className="text-sm hover:underline">
          Experiences
        </Link>
      </nav>
      <div className="flex-grow" />
      <div>
        <Button text="Go back up" icon={ArrowUp} href="#top" />
      </div>
    </footer>
  );
}
