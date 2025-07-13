import React from "react";
import * as BaseDropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { Button } from "./button";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  renderLabel?: (item: DropdownOption) => React.ReactNode;
}

const languages = [
  { value: "en", label: "English", icon: "🇬🇧" },
  { value: "es", label: "Spanish", icon: "🇪🇸" },
  { value: "de", label: "German", icon: "🇩🇪" },
  { value: "fr", label: "French", icon: "🇫🇷" },
  { value: "it", label: "Italian", icon: "🇮🇹" },
  { value: "ja", label: "Japanese", icon: "🇯🇵" },
  { value: "pt", label: "Portuguese", icon: "🇵🇹" },
  { value: "ko", label: "Korean", icon: "🇰🇷" },
  { value: "ar", label: "Arabic", icon: "🇸🇦" },
  { value: "zh", label: "Chinese", icon: "🇨🇳" },
  { value: "tr", label: "Turkish", icon: "🇹🇷" },
  { value: "ru", label: "Russian", icon: "🇷🇺" },
  { value: "other", label: "Other", icon: "🌐" },
];

export const LanguageMenu = ({
  value = "all",
  onChange,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) => {
  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
  };

  const selectedLanguage = languages.find((lang) => lang.value === value);

  return (
    <BaseDropdownMenu.Root>
      <BaseDropdownMenu.Trigger asChild autoFocus={false}>
        <Button
          variant="outline"
          className={clsx(
            "inline-flex items-center justify-between px-3 gap-1.5 w-38 text-xs rounded-full bg-transparent hover:bg-greys-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full",
            className
          )}
        >
          <span className="text-white flex items-center gap-3">
            {selectedLanguage?.icon ? (
              <span>{selectedLanguage.icon}</span>
            ) : null}
            <span>{selectedLanguage?.label || "All Languages"}</span>
          </span>
          <ChevronDownIcon className="h-4.5 w-4.5 text-white" />
        </Button>
      </BaseDropdownMenu.Trigger>

      <BaseDropdownMenu.Portal>
        <BaseDropdownMenu.Content
          className="z-50 bg-greys-700 px-3 py-3 rounded-2xl border border-greys-600 shadow-lg min-w-[200px] max-h-60 overflow-y-auto w-50"
          sideOffset={4}
          align="end"
        >
          <div className="flex flex-col gap-2">
            <BaseDropdownMenu.Item
              key="all"
              className={`relative flex flex-col px-2.5 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-200/20 focus:bg-greys-600 outline-none select-none text-gray-100`}
              onSelect={() => {
                handleSelect("all");
              }}
            >
              <div className="flex justify-between items-center ">
                <div className="text-sm text-white font-medium">
                  All Languages
                </div>
                <CheckIcon
                  className={clsx("h-4 w-4 shrink-0 text-white", {
                    "opacity-100": value === "all",
                    "opacity-0": value !== "all",
                  })}
                />
              </div>
              <p className="text-xs text-gray-400">
                Any voice can be used with any language
              </p>
            </BaseDropdownMenu.Item>
            {languages.map((language) => {
              return (
                <BaseDropdownMenu.Item
                  key={language.value}
                  className={`relative flex justify-between items-center px-2.5 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-200/20 focus:bg-greys-600 outline-none select-none text-gray-100`}
                  onSelect={() => {
                    handleSelect(language.value);
                  }}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lg">{language.icon}</span>
                    <span>{language.label}</span>
                  </span>

                  <CheckIcon
                    className={clsx("h-4 w-4 shrink-0", {
                      "opacity-100": value === language.value,
                      "opacity-0": value !== language.value,
                    })}
                  />
                </BaseDropdownMenu.Item>
              );
            })}
          </div>
        </BaseDropdownMenu.Content>
      </BaseDropdownMenu.Portal>
    </BaseDropdownMenu.Root>
  );
};
