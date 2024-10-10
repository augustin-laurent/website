"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card as ShadcnCard } from "@/components/ui/card";

interface CardProps {
  title?: string;
  description?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  align?: "left" | "right";
}

export default function Card({
  title,
  description,
  onClick,
  disabled = false,
  className,
  align = "left"
}: CardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const cardContent = (
    <>
      <div className="absolute inset-0 bg-black opacity-0 rounded-lg group-hover:opacity-100 transition-opacity" />
      <ShadcnCard
        className={cn(
          " transition-transform duration-200",
          "font-montserrat border-2 border-black bg-white rounded-lg",
          "relative px-6 py-4",
          isHovered && "-translate-x-1 -translate-y-1",
          disabled && "opacity-50 cursor-not-allowed",
          align === "right" ? "" : "",
          className
        )}
        onClick={!disabled ? onClick : undefined}
      >
        <div className={cn(
          "flex flex-col",
          align === "right" ? "items-end" : "items-start"
        )}>
          {title && (
            <h3 className={cn(
              "text-xl font-semibold",
            )}>
              {title}
            </h3>
          )}
          {description && (
            <p className={cn(
              "text-gray-600",
              align === "right" ? "text-right" : "text-left"
            )}>
              {description}
            </p>
          )}
        </div>
      </ShadcnCard>
    </>
  );

  return (
    <div
      className={cn("relative group inline-block", align === "right" ? "text-right w-full" : "text-left w-full")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardContent}
    </div>
  );
}