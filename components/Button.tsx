"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button as ShadcnButton } from "@/components/ui/button";

interface ButtonProps {
  text?: string;
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  text,
  href,
  icon: Icon,
  iconPosition = "left",
  onClick,
  fullWidth = false,
  disabled = false,
  className,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const buttonContent = (
    <>
      <div className="absolute inset-0 bg-black opacity-0 rounded-md group-hover:opacity-100 transition-opacity" />
      <ShadcnButton
        variant="outline"
        className={cn(
          "transform transition-transform duration-200",
          "font-montserrat border-2 border-black bg-white text-black",
          "relative flex items-center",
          "py-5 px-6",
          fullWidth ? "w-full justify-center" : "w-auto",
          isHovered && "-translate-x-1 -translate-y-1",
          className
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <div
          className={cn(
            "flex items-center",
            fullWidth ? "w-full justify-center" : "",
            iconPosition === "right" ? "flex-row-reverse" : "flex-row"
          )}
        >
          {Icon && (
            <Icon
              className={cn(
                "w-6 h-6 flex-shrink-0 stroke-2",
                text && (iconPosition === "left" ? "mr-3" : "ml-3")
              )}
            />
          )}
          {text && <span className="text-2xl font-semibold">{text}</span>}
        </div>
      </ShadcnButton>
    </>
  );

  const wrapperClass = cn("relative group inline-block", fullWidth && "w-full");

  if (href) {
    return (
      <Link
        className={wrapperClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={href}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonContent}
    </div>
  );
}
