"use client";

import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

import { Github, Book, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center gap-5 md:gap-20" id="contact">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 items-center text-center md:text-left">
          <h2 className="text-3xl font-bold">Reach out for more?</h2>
          <p className="text-lg">
            I write some tutorials on Github via Gist, feel free to comment.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <Button
            icon={Github}
            text="Github"
            href="https://github.com/augustin-laurent"
          />
          <Button
            icon={Book}
            text="Gist"
            href="https://gist.github.com/augustin-laurent"
          />
          <Button
            icon={Linkedin}
            text="LinkedIn"
            href="https://www.linkedin.com/in/augustin-laurent-204ab6196/"
          />
        </div>
      </div>
      <div className="w-1/4">
        <ContactForm />
      </div>
    </div>
  );
}
