"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card as ShadCNCard,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Button from "@/components/Button";

interface CardProjectProps {
  imageURL: string;
  imageDescription: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({
  imageURL,
  imageDescription,
  title,
  description,
  link,
}: CardProjectProps) {
  return (
    <div className="relative w-96">
      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl" />
      <ShadCNCard className="relative border-2 border-solid border-black h-[480px] flex flex-col space-y-5">
        <CardContent className="pt-6 flex-grow overflow-hidden">
          <div className="flex justify-center">
            <Image
              src={imageURL}
              alt={imageDescription}
              width={192}
              height={192}
              className="rounded-lg w-24 md:w-48 h-auto object-cover"
            />
          </div>
          <div className=" overflow-hidden">
            <h2 className="text-2xl font-bold py-5 truncate">{title}</h2>
            <p className="text-gray-600 overflow-y-auto h-24">{description}</p>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button text="Read More" className="w-full" href={link} />
        </CardFooter>
      </ShadCNCard>
    </div>
  );
}
