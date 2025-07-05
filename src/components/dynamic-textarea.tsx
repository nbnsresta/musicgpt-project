"use client";

import React from "react";

export const DynamicTextarea = ({
  value: defaultValue,
  onChange,
  placeholder = "Start typing...",
  className = "",
  minHeight = 64,
  maxHeight = 140,
  ...props
}: React.PropsWithChildren<
  React.ComponentProps<"textarea"> & {
    minHeight?: number;
    maxHeight?: number;
  }
>) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      // Get the current height before change
      const prevHeight = textarea.offsetHeight;
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);

      // Set back to previous height, then to new height in next frame for transition
      textarea.style.height = prevHeight + "px";
      // Force reflow
      void textarea.offsetHeight;
      textarea.style.transition = "height 0.2s cubic-bezier(0.4,0,0.2,1)";
      textarea.style.height = `${newHeight}px`;

      if (scrollHeight > maxHeight) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "hidden";
      }
    }
  }, [value, minHeight, maxHeight]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange?.(e);
      }}
      placeholder={placeholder}
      rows={1}
      className={`w-full resize-none placeholder:text-gray-400 border-gray-300 text-gray-200 p-5 rounded-lg outline-none bg-transparent ${className}`}
      style={{
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
        overflowY: "hidden",
      }}
      {...props}
    />
  );
};
