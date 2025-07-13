import { motion } from "framer-motion";
import React from "react";
import { DynamicTextarea } from "./dynamic-textarea";
import { Collapse } from "./collapse";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "./button";

export const CreateAnything = () => {
  const [isLyricsOpen, setIsLyricsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col min-h-32 w-200 pb-14">
        <DynamicTextarea
          placeholder="Describe your song"
          spellCheck={false}
          className="p-5"
        />

        <Collapse isOpen={isLyricsOpen} className="flex flex-col">
          <hr className="border-neutral-700/50" />
          <DynamicTextarea
            placeholder="Write your lyrics"
            spellCheck={false}
            className="p-5"
          />
        </Collapse>

        <div
          className={clsx(
            "flex absolute bottom-0 left-0 px-5 pb-5 flex-row gap-2 justify-between"
          )}
        >
          <Button asChild variant="outline" size="none" className="size-9">
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
    </motion.div>
  );
};
