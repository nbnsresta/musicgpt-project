"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "outline" | "submit";
type ButtonSize = "sm" | "md" | "lg" | "none";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = ({
  variant = "outline",
  size = "sm",
  children,
  className = "",
  asChild = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer";

  const variantClasses: Record<ButtonVariant, string> = {
    outline: "border border-white/20 hover:bg-white/20 rounded-full text-white",
    submit: "bg-white text-greys-900 hover:scale-105",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    none: "",
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-8",
  };

  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: classes,
    } as any);
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
