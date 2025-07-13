"use client";

import React, { useState } from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import clsx from "clsx";
import { FadeScroll } from "./fade-scroll";
import { useVoices } from "../hooks/useVoices";
import type { PromptSubmission, Voice } from "../api-client/types";
import { motion } from "framer-motion";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { LanguageMenu } from "./language-menu";
import { Button } from "./button";
import { promptService } from "../api-client";
import { useMutation } from "@tanstack/react-query";

const LoadingShimmer = () => {
  return (
    <div className="w-full h-full bg-greys-600/50 animate-pulse rounded-full" />
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
  const [language, setLanguage] = useState("all");

  const onLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const [search, setSearch] = useState("");
  const onSearch = (value: string) => {
    setSearch(value);
  };

  const { mutate: submitPrompt, isPending } = useMutation({
    mutationFn: (prompt: PromptSubmission) =>
      promptService.submitPrompt(prompt),
  });

  const filteredVoices = React.useMemo(
    () =>
      voices.filter((voice) =>
        voice.name.toLowerCase().includes(search.toLowerCase())
      ),
    [voices, search]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const prompt: PromptSubmission = {
      type: "text-to-speech",
      text,
      language,
      voice: selected.id,
    };
    submitPrompt(prompt);
  };

  return (
    <motion.form
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative"
      onSubmit={handleSubmit}
    >
      <div className="flex overflow-hidden max-w-225 min-h-75 h-75 py-5 gap-[10%]">
        <div className="flex-3 hidden sm:flex">
          {isLoading && !voices.length ? (
            <LoadingShimmer />
          ) : (
            <div className="flex flex-col">
              <SearchOptions
                search={search}
                language={language}
                onSearch={onSearch}
                onLanguageChange={onLanguageChange}
              />
              <FadeScroll innerClassName="h-60">
                <div
                  className="grid gap-x-4 gap-y-8 w-full p-5"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(72px, 1fr))",
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
                            "size-11 object-cover rounded-full overflow-hidden flex items-center justify-center text-xl font-medium mb-2 transition-all duration-300 bg-greys-600 text-white",
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
                  className="p-2 bg-greys-900 rounded-full object-contain"
                />
              ) : (
                <div className="rounded-full text-white justify-center text-xl bg-greys-600 font-medium flex size-full items-center">
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
            minHeight={60}
          />
        </div>
      </div>
      <motion.div
        layout
        className="absolute bottom-5 right-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <Button
          variant="submit"
          type="submit"
          className="rounded-full size-9"
          size="none"
          disabled={isPending}
        >
          <ArrowRightIcon className="size-6" />
        </Button>
      </motion.div>
    </motion.form>
  );
};

const SearchOptions = ({
  search,
  language,
  onSearch,
  onLanguageChange,
}: {
  search: string;
  language: string;
  onSearch: (value: string) => void;
  onLanguageChange: (value: string) => void;
}) => {
  return (
    <div className="px-5 h-10 flex flex-row items-center gap-2">
      <label className="rounded-full flex-1 bg-greys-900 border border-gray-300/35 h-full items-center flex px-2 gap-2 focus-within:border-gray-300/60 group transition-colors">
        <MagnifyingGlassIcon className="select-none size-6 text-gray-300/35 group-focus-within:text-gray-300/60 transition-colors" />
        <input
          className="text-gray-300 bg-transparent outline-none w-full"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        ></input>
      </label>
      <LanguageMenu value={language} onChange={onLanguageChange} />
    </div>
  );
};
