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

export default function Home() {
  const [tool, setTool] = React.useState<Tool>("create-anything");

  const handleToolChange = (value: string) => {
    setTool(value as Tool);
    if (value === "tts") {
      setContainerSize({ height: 300, width: 900, minHeight: "auto" });
    } else {
      setContainerSize({ height: 128, width: 800, minHeight: 128 });
    }
  };

  const [containerSize, setContainerSize] = React.useState<{
    height: number | string;
    width: number | string;
    minHeight: number | string;
  }>({
    height: "auto",
    width: 800,
    minHeight: 128,
  });

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
      <div className="flex mx-4 justify-center items-center min-h-[80vh]">
        <div
          className={clsx("flex gap-8 flex-col items-center justify-center")}
        >
          <h2 className="text-4xl text-white/80">{pageTitle}</h2>
          <motion.div
            animate={containerSize}
            className="bg-greys-800 rounded-3xl relative overflow-hidden"
          >
            {tool === "create-anything" && <CreateAnything />}
            {tool === "tts" && <TextToSpeech />}
            <div className="px-5 pb-5 absolute bottom-0 right-0 flex gap-2 items-center">
              <DropdownMenu
                placeholder="Tools"
                align="end"
                value={tool}
                options={toolOptions}
                renderTrigger={renderTrigger}
                renderLabel={renderLabel}
                onChange={handleToolChange}
              />
              <Button
                variant="submit"
                className="rounded-full size-9"
                size="none"
              >
                <ArrowRightIcon className="size-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
