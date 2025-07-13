"use client";

import React from "react";
import { Button, DropdownMenu } from "../components";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { DropdownOption } from "../components/dropdown-menu";
import clsx from "clsx";
import { TextToSpeech } from "../components/text-to-speech";
import { motion } from "framer-motion";
import { CreateAnything } from "../components/create-anything";

type Tool = "create-anything" | "tts";

const toolOptions = [
  { value: "create-anything", label: "Create anything" },
  { value: "tts", label: "Text to Speech" },
];

const renderTrigger = (item: DropdownOption) => {
  return (
    <span className="text-white">
      {item.value === "create-anything" ? "Tools" : item.label}
    </span>
  );
};

const renderLabel = (item: DropdownOption) => {
  return <span className="text-white">{item.label}</span>;
};

const sizeConfig = {
  "create-anything": {
    height: "auto",
    maxWidth: 800,
    minHeight: 128,
  },
  tts: {
    height: "auto",
    maxWidth: 900,
    minHeight: 300,
  },
};

export default function Home() {
  const [tool, setTool] = React.useState<Tool>("create-anything");

  const [containerSize, setContainerSize] = React.useState<{
    height: number | string;
    maxWidth: number | string;
    minHeight: number | string;
  }>(sizeConfig[tool]);

  const handleToolChange = (value: string) => {
    setTool(value as Tool);
    setContainerSize(sizeConfig[value as Tool]);
  };

  const pageTitle = React.useMemo(() => {
    if (tool === "create-anything") {
      return "What song to create?";
    }
    const selectedToolOption = toolOptions.find(
      (option) => option.value === tool
    );
    return selectedToolOption?.label;
  }, [tool]);

  return (
    <main className="flex flex-col mt-16">
      <div className="flex mx-4 flex-col justify-center items-center min-h-[80vh]">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 justify-center w-full"
          )}
        >
          <h2 className="text-4xl text-white/80">{pageTitle}</h2>
          <motion.div
            layout
            initial={containerSize}
            animate={containerSize}
            transition={{ duration: 0.2 }}
            className="bg-greys-800 rounded-3xl relative overflow-hidden w-full"
          >
            {tool === "create-anything" && <CreateAnything />}
            {tool === "tts" && <TextToSpeech />}
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="px-5 mr-12 pb-5 absolute bottom-0 right-0 flex gap-2 items-center"
            >
              <DropdownMenu
                placeholder="Tools"
                align="end"
                value={tool}
                options={toolOptions}
                renderTrigger={renderTrigger}
                renderLabel={renderLabel}
                onChange={handleToolChange}
              />
              {/* <Button
                variant="submit"
                className="rounded-full w-9 h-9"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
