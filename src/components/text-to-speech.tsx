"use client";

import React, { useState } from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import clsx from "clsx";
import { FadeScroll } from "./fade-scroll";

const CELEBRITIES = [
  { name: "Oprah Winfrey" },
  { name: "Ellen DeGeneres" },
  { name: "Jimmy Fallon" },
  { name: "Ryan Seacrest" },
  { name: "Simon Cowell" },
  { name: "Kelly Clarkson" },
  { name: "Steve Harvey" },
  { name: "Trevor Noah" },
  { name: "James Corden" },
  { name: "Drew Barrymore" },
  { name: "Taylor Swift" },
  { name: "Beyoncé Knowles" },
  { name: "Ariana Grande" },
  { name: "Ed Sheeran" },
  { name: "Bruno Mars" },
  { name: "Lady Gaga" },
  { name: "Selena Gomez" },
  { name: "Justin Bieber" },
  { name: "Katy Perry" },
  { name: "Harry Styles" },
  { name: "Jennifer Lopez" },
  { name: "Dwayne Johnson" },
  { name: "Tom Hanks" },
  { name: "Leonardo DiCaprio" },
  { name: "Brad Pitt" },
  { name: "Angelina Jolie" },
  { name: "Scarlett Johansson" },
  { name: "Zendaya Coleman" },
  { name: "Chris Hemsworth" },
  { name: "Robert Downey Jr" },
  { name: "Will Smith" },
  { name: "Margot Robbie" },
  { name: "Emma Stone" },
  { name: "Hugh Jackman" },
  { name: "Priyanka Chopra" },
  { name: "Shah Rukh Khan" },
  { name: "BTS Jungkook" },
  { name: "BLACKPINK Lisa" },
  { name: "Billie Eilish" },
  { name: "Dua Lipa" },
  { name: "Shakira Mebarak" },
  { name: "Ricky Martin" },
  { name: "Celine Dion" },
  { name: "Adele Laurie Blue" },
  { name: "John Legend" },
  { name: "Alicia Keys" },
  { name: "Blake Shelton" },
  { name: "Gwen Stefani" },
  { name: "Nick Jonas" },
  { name: "Miley Cyrus" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TextToSpeech() {
  const [selected, setSelected] = useState(CELEBRITIES[0]);
  const [text, setText] = useState("");

  return (
    <div className="w-full max-h-75 rounded-3xl flex overflow-hidden shadow-xl">
      <FadeScroll>
        <div
          className="grid gap-x-4 gap-y-8 w-full p-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(72px, 1fr))",
          }}
        >
          {CELEBRITIES.map((voice) => {
            const initials = getInitials(voice.name);
            const isActive = selected.name === voice.name;
            return (
              <button
                key={voice.name}
                onClick={() => setSelected(voice)}
                className={`flex flex-col items-center group focus:outline-none`}
              >
                <div
                  className={clsx(
                    "size-12 rounded-full overflow-hidden flex items-center justify-center text-xl font-medium mb-2 transition-all duration-300 bg-greys-700 text-white",
                    {
                      "ring-3 ring-orange-400 ring-offset-3 ring-offset-greys-800":
                        isActive,
                    }
                  )}
                >
                  {initials}
                </div>
                <span className="w-full text-sm text-gray-100 truncate text-center">
                  {voice.name}
                </span>
              </button>
            );
          })}
        </div>
      </FadeScroll>

      <div className="flex-1 flex flex-col p-5 gap-5">
        <div className="flex flex-row items-center gap-2">
          <div className="size-12 rounded-full overflow-hidden flex items-center text-white justify-center text-xl font-medium mb-2 bg-greys-700">
            {getInitials(selected.name)}
          </div>
          <div className="text-xl font-medium text-gray-100">
            {selected.name}
          </div>
        </div>
        <DynamicTextarea
          className="w-full px-0 max-w-xl bg-transparent border-none outline-none text-gray-200 text-md placeholder-gray-400 resize-none"
          placeholder="Enter text.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxHeight={130}
          minHeight={130}
        />
      </div>
    </div>
  );
}
