"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { Mail, FileUser, ArrowDown } from "lucide-react";

export default function About() {
  return (
    <div
      className="flex justify-center items-center w-full min-h-screen p-4 order-1 md:order-none"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full">
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I&apos;m Augustin !
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            I&apos;m a student in Artificial Intelligence and Big Data,
            <br className="hidden sm:inline" />I like to develop some
            applications too !
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 sm:space-y-0 md:space-x-5">
            <Button
              icon={Mail}
              iconPosition="left"
              text="Contact me"
              href="#contact"
            />
            <Button
              icon={FileUser}
              iconPosition="left"
              text="See my resume"
              href="/Resume.pdf"
            />
            <Button
              icon={ArrowDown}
              iconPosition="left"
              text="Discover my work"
              href="#work"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full sm:w-2/3 flex justify-center items-center md:pl-12 mt-12 md:mt-0">
          <Image
            src="/coffee.png"
            width={500}
            height={500}
            alt="Avatar holding a cup of coffee"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
