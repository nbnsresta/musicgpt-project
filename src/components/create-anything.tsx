import { motion } from "framer-motion";
import React from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import { Collapse } from "./collapse";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "./button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { PromptSubmission } from "../api-client/types";
import { promptService } from "../api-client";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./toast-context";

export const CreateAnything = () => {
  const [isLyricsOpen, setIsLyricsOpen] = React.useState(false);
  const [promptText, setPromptText] = React.useState("");
  const [lyricsText, setLyricsText] = React.useState("");

  const toast = useToast();

  const { mutate: submitPrompt, isPending } = useMutation({
    mutationFn: (prompt: PromptSubmission) =>
      promptService.submitPrompt(prompt),
    onSuccess: () => {
      toast.success("Request submitted successfully");
      setLyricsText("");
      setPromptText("");
    },
    onError: () => {
      toast.error("Failed to create request");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const prompt: PromptSubmission = {
      type: "create-anything",
      prompt: promptText,
      lyrics: lyricsText,
    };
    submitPrompt(prompt);
  };

  return (
    <motion.form
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="max-w-200 relative"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col min-h-32 max-w-200 pb-14 w-full">
        <DynamicTextarea
          placeholder="Describe your song"
          spellCheck={false}
          className="p-5"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />

        <Collapse isOpen={isLyricsOpen} className="flex flex-col">
          <hr className="border-neutral-700/50" />
          <DynamicTextarea
            placeholder="Write your lyrics"
            spellCheck={false}
            className="p-5"
            value={lyricsText}
            onChange={(e) => setLyricsText(e.target.value)}
          />
        </Collapse>

        <div
          className={clsx(
            "flex absolute bottom-0 left-0 px-5 pb-5 flex-row gap-2 justify-between"
          )}
        >
          <Button asChild variant="outline" size="none" className="w-9 h-9">
            <label>
              <Image
                src="/icons/icon-attachment.svg"
                alt="File attachment"
                width={20}
                height={20}
              />
              <input type="file" hidden accept="audio/*" />
            </label>
          </Button>

          <div className="group">
            <Button type="button" variant="outline" size="sm" className="gap-1">
              <Image
                src="/icons/icon-insutrumental.svg"
                alt="Instrumental"
                width={20}
                height={20}
              />
              <span className="hidden sm:inline">Instrumental</span>
            </Button>
          </div>

          <div className="group">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => {
                setIsLyricsOpen(!isLyricsOpen);
              }}
            >
              <Image
                src="/icons/icon-add.svg"
                alt="Lyrics"
                width={20}
                height={20}
              />
              <span className="hidden sm:inline">Lyrics</span>
            </Button>
          </div>
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
          className="rounded-full w-9 h-9"
          size="none"
          disabled={isPending || promptText.length === 0}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </motion.div>
    </motion.form>
  );
};
