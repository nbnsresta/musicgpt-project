"use client";

import React, { useState } from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import clsx from "clsx";
import { FadeScroll } from "./fade-scroll";
import { useVoices } from "../hooks/useVoices";
import type { Voice } from "../api-client/types";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TextToSpeech() {
  const { data: voices, isLoading, error } = useVoices();

  if (isLoading) {
    return (
      <div className="w-full max-h-75 rounded-3xl flex overflow-hidden shadow-xl">
        <div className="flex items-center justify-center w-full p-8">
          <div className="text-gray-400">Loading voices...</div>
        </div>
      </div>
    );
  }

  if (error || !voices || voices.length === 0) {
    return (
      <div className="w-full max-h-75 rounded-3xl flex overflow-hidden shadow-xl">
        <div className="flex items-center justify-center w-full p-8">
          <div className="text-gray-400">
            Failed to load voices. Please try again later.
          </div>
        </div>
      </div>
    );
  }
  return <TTSView voices={voices} />;
}

const TTSView = ({ voices }: { voices: Voice[] }) => {
  const [selected, setSelected] = useState<Voice>(voices[0]);
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
          {voices.map((voice) => {
            const initials = getInitials(voice.name);
            const isActive = selected.id === voice.id;
            return (
              <button
                key={voice.id}
                onClick={() => setSelected(voice)}
                className={`flex flex-col items-center group focus:outline-none`}
              >
                <div
                  className={clsx(
                    "w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-xl font-medium mb-2 transition-all duration-300 bg-greys-700 text-white",
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
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center text-white justify-center text-xl font-medium mb-2 bg-greys-700">
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
};
