"use client";

import React from "react";
import { DropdownMenu } from "../components";
import { DropdownOption } from "../components/dropdown-menu";
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

const backgroundGradients = [
  "radial-gradient(circle at 50% -10%, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)",
  "radial-gradient(circle at 50% -10%, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)",
  "radial-gradient(circle at 50% -10%, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
  "radial-gradient(circle at 50% -10%, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)",
];

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
    return tool === "create-anything"
      ? "What song to create?"
      : toolOptions.find((option) => option.value === tool)?.label;
  }, [tool]);

  return (
    <main className="flex flex-col mt-16 relative">
      <motion.div
        className="fixed inset-0 rounded-3xl h-screen w-screen"
        style={{
          background: backgroundGradients[0],
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.3, 0.2],
          background: backgroundGradients,
        }}
        transition={{
          duration: 20,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="flex mx-4 flex-col justify-center items-center min-h-[80vh]">
        <div className="flex flex-col items-center gap-8 justify-center w-full">
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
