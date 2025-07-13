"use client";

import React, { useState } from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import clsx from "clsx";
import { FadeScroll } from "./fade-scroll";
import { useVoices } from "../hooks/useVoices";
import type { Voice } from "../api-client/types";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const LoadingShimmer = () => {
  return (
    <div className="w-full h-full bg-greys-700/50 animate-pulse rounded-full" />
  );
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TextToSpeech() {
  const { data: voices, isLoading } = useVoices();

  return <TTSView voices={voices ?? []} isLoading={isLoading} />;
}

const defaultVoice: Voice = {
  id: "default",
  name: "Default Voice",
  audioUrl: "",
  imageUrl: "/musicgpt.png",
};

const TTSView = ({
  voices,
  isLoading,
}: {
  voices: Voice[];
  isLoading: boolean;
}) => {
  const [selected, setSelected] = useState<Voice>(defaultVoice);
  const [text, setText] = useState("");

  const [search, setSearch] = useState("");
  const onSearch = (value: string) => {
    setSearch(value);
  };

  const filteredVoices = React.useMemo(
    () =>
      voices.filter((voice) =>
        voice.name.toLowerCase().includes(search.toLowerCase())
      ),
    [voices, search]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex overflow-hidden w-225 py-5 gap-24">
        <div className=" flex-3">
          {isLoading && !voices.length ? (
            <LoadingShimmer />
          ) : (
            <div className="flex flex-col">
              <SearchOptions onSearch={onSearch} search={search} />
              <FadeScroll innerClassName="h-60">
                <div
                  className="grid gap-x-4 gap-y-8 w-full p-5"
                  style={{
                    gridTemplateColumns:
                      "repeat(auto-fit, clamp(72px, 1fr, 96px))",
                  }}
                >
                  {filteredVoices.map((voice) => {
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
                            "size-11 object-cover rounded-full overflow-hidden flex items-center justify-center text-xl font-medium mb-2 transition-all duration-300 bg-greys-700 text-white",
                            {
                              "ring-3 ring-orange-400 ring-offset-3 ring-offset-greys-800":
                                isActive,
                            }
                          )}
                        >
                          {voice.imageUrl ? (
                            <Image
                              src={voice.imageUrl}
                              alt={voice.name}
                              width={44}
                              height={44}
                              className="w-full h-full object-cover bg-greys-900"
                            />
                          ) : (
                            <span>{initials}</span>
                          )}
                        </div>
                        <span className="w-full text-sm text-gray-100 truncate text-center">
                          {voice.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </FadeScroll>
            </div>
          )}
        </div>

        <div className="flex-2 flex flex-col px-5 gap-5">
          <div className="flex flex-row items-center gap-2">
            <div className="size-11 object-cover overflow-hidden flex ">
              {selected.imageUrl ? (
                <Image
                  key={selected.imageUrl}
                  src={selected.imageUrl}
                  alt={selected.name}
                  width={44}
                  height={44}
                  className="p-2 bg-greys-900 rounded-full"
                />
              ) : (
                <div className="rounded-full text-white justify-center text-xl bg-greys-700 font-medium flex size-full items-center">
                  {getInitials(selected.name)}
                </div>
              )}
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
            maxHeight={150}
            minHeight={150}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SearchOptions = ({
  onSearch,
  search,
}: {
  onSearch: (value: string) => void;
  search: string;
}) => {
  return (
    <div className="px-5 h-10">
      <label className="rounded-full bg-greys-900 border border-gray-300/60 h-full items-center flex px-2 gap-2 focus-within:border-gray-300/90 group transition-colors">
        <MagnifyingGlassIcon className="select-none size-6 text-gray-300/60 group-focus-within:text-gray-300/90 transition-colors" />
        <input
          className="text-gray-300 bg-transparent outline-none w-full"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        ></input>
      </label>
    </div>
  );
};
