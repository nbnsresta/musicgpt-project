"use client";

import React from "react";
import { DynamicTextarea, Button, Collapse } from "../components";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";

export default function Home() {
  const [isLyricsOpen, setIsLyricsOpen] = React.useState(false);
  return (
    <main className="flex flex-col mt-16 ">
      <div className="flex mx-4 justify-center items-center min-h-[80vh]">
        <div className="flex max-w-200 gap-8 flex-col w-full min-h-48 items-center justify-center">
          <h2 className="text-4xl text-white/80">What song to create?</h2>
          <div className="flex flex-col rounded-3xl bg-foreground overflow-hidden w-full transition-[height] ease-in-out duration-300">
            <DynamicTextarea
              placeholder="Describe your song"
              spellCheck={false}
            />
            <Collapse isOpen={isLyricsOpen}>
              <hr className="border-neutral-700/50" />
              <DynamicTextarea
                placeholder="Write your lyrics"
                spellCheck={false}
              />
            </Collapse>
            <div className="px-5 pb-5 flex flex-row justify-between">
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="gap-1">
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
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1"
                  >
                    <Image
                      src="/icons/icon-insutrumental.svg"
                      alt="Instrumental"
                      width={20}
                      height={20}
                    />
                    <span>Instrumental</span>
                  </Button>
                </div>

                <div className="group">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => setIsLyricsOpen(!isLyricsOpen)}
                  >
                    <Image
                      src="/icons/icon-add.svg"
                      alt="Lyrics"
                      width={20}
                      height={20}
                    />
                    <span>Lyrics</span>
                  </Button>
                </div>
              </div>
              <Button
                variant="submit"
                className="rounded-full size-9"
                size="reset"
              >
                <ArrowRightIcon className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
