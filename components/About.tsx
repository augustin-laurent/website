"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { Mail, FileUser, ArrowDown } from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-4" id="about">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full">
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hello, I&apos;m Augustin !
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I&apos;m a student in Artificial Intelligence and Big Data,
            <br />I like to develop some applications too !
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
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
              href="/experiences"
            />
            <Button
              icon={ArrowDown}
              iconPosition="left"
              text="Discover my work"
              href="#work"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center md:pl-12">
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
