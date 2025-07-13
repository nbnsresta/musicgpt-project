import React from "react";
import * as BaseDropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  renderLabel?: (item: DropdownOption) => React.ReactNode;
}

export const DropdownMenu = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  disabled = false,
  className = "",
  align = "start",
  side = "bottom",
  renderTrigger,
  renderLabel,
}: {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom";
  renderTrigger?: (item: DropdownOption) => React.ReactNode;
  renderLabel?: (item: DropdownOption) => React.ReactNode;
}) => {
  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
  };

  const getSelectedLabel = () => {
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : placeholder;
  };

  const selectedItem = options.find((option) => option.value === value);

  return (
    <BaseDropdownMenu.Root>
      <BaseDropdownMenu.Trigger asChild disabled={disabled} autoFocus={false}>
        <button
          className={clsx(
            "inline-flex items-center justify-between px-3 gap-1.5 h-9 text-sm rounded-full bg-transparent hover:bg-greys-700 outline-none",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            className
          )}
          disabled={disabled}
        >
          <span className="text-white">
            {renderTrigger && selectedItem
              ? renderTrigger(selectedItem)
              : getSelectedLabel()}
          </span>
          <ChevronDownIcon className="h-4.5 w-4.5 text-white" />
        </button>
      </BaseDropdownMenu.Trigger>

      <BaseDropdownMenu.Portal>
        <BaseDropdownMenu.Content
          align={align}
          side={side}
          className="z-50 bg-greys-600/20 backdrop-blur-sm px-3 py-3 rounded-lg border border-greys-700 shadow-lg min-w-[200px] max-h-60"
          sideOffset={4}
        >
          {options.map((option) => {
            return (
              <BaseDropdownMenu.Item
                key={option.value}
                className={`relative flex items-center px-2.5 py-2 text-sm rounded-md cursor-pointer hover:bg-greys-900 focus:bg-greys-900 outline-none select-none text-gray-100`}
                onSelect={() => {
                  if (option.disabled) return;
                  handleSelect(option.value);
                }}
                disabled={option.disabled}
              >
                <span className="flex items-start gap-2">
                  {option.icon}
                  {renderLabel ? renderLabel(option) : option.label}
                </span>
                {value === option.value && (
                  <div className="absolute right-2 inline-flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                )}
              </BaseDropdownMenu.Item>
            );
          })}
        </BaseDropdownMenu.Content>
      </BaseDropdownMenu.Portal>
    </BaseDropdownMenu.Root>
  );
};
