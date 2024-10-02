"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";

const navItems = [
  { text: "About", href: "/#about" },
  { text: "Projects", href: "/#projects" },
  { text: "Experiences", href: "/#experiences" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full px-5 py-4" id="top">
      <div className="mx-auto relative">
        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl" />

        {/* Main navbar content */}
        <div className="relative flex items-center justify-between p-5 rounded-xl border-solid border-2 border-black bg-white">
          <Image
            src="/logo.png"
            alt="Website logo"
            width={64}
            height={64}
            className="w-16"
          />
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <Button key={item.href} text={item.text} href={item.href} />
            ))}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              icon={menuOpen ? X : Menu}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              fullWidth={false}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-y-0 right-0 z-50 w-64 md:hidden bg-white shadow-lg
            transition-transform duration-300 ease-in-out border-2 border-solid border-black
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col p-5">
            <div className="self-end mb-5">
              <Button
                icon={X}
                onClick={toggleMenu}
                aria-label="Close menu"
                fullWidth={false}
              />
            </div>
            {navItems.map((item) => (
              <div key={item.href} className="mb-3 w-full">
                <Button
                  text={item.text}
                  href={item.href}
                  onClick={toggleMenu}
                  fullWidth={true}
                  className="justify-start"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
