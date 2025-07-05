import React from "react";
import Image from "next/image";

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header
      className={`w-full flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10 ${className}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/musicgpt.png"
          alt="MusicGPT Logo"
          className="w-8 h-8 rounded shadow-md"
          width={32}
          height={32}
        />
        <span className="text-xl font-bold text-white tracking-tight select-none">
          MusicGPT
        </span>
      </div>
      <div></div>
    </header>
  );
};
