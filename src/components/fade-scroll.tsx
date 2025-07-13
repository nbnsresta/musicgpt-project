import React from "react";
import clsx from "clsx";

const fadeScrollBefore =
  "before:content-[''] before:absolute before:top-0 before:w-full before:h-12 before:z-10 before:bg-gradient-to-b before:from-greys-800 before:to-transparent before:transition-opacity before:duration-200 before:pointer-events-none";
const fadeScrollAfter =
  "after:content-[''] after:absolute after:bottom-0 after:w-full after:h-12 after:z-10 after:bg-gradient-to-t after:from-greys-800 after:to-transparent after:transition-opacity after:duration-200 after:pointer-events-none";

export const FadeScroll = ({
  children,
  innerClassName,
}: {
  children: React.ReactNode;
  innerClassName?: string;
}) => {
  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const [showTopGradient, setShowTopGradient] = React.useState(false);
  const [showBottomGradient, setShowBottomGradient] = React.useState(false);

  const handleVisibility = React.useCallback((element: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    setShowTopGradient(scrollTop > 10);
    setShowBottomGradient(scrollTop + clientHeight < scrollHeight - 10);
  }, []);

  const onScroll: React.UIEventHandler<HTMLDivElement> = React.useCallback(
    (e) => {
      handleVisibility(e.currentTarget);
    },
    [handleVisibility]
  );

  React.useEffect(() => {
    if (parentRef.current) {
      handleVisibility(parentRef.current);
    }
  }, [handleVisibility]);

  return (
    <div
      className={clsx(
        "relative flex flex-1",
        fadeScrollBefore,
        fadeScrollAfter,
        {
          "before:opacity-100": showTopGradient,
          "after:opacity-100": showBottomGradient,
          "before:opacity-0": !showTopGradient,
          "after:opacity-0": !showBottomGradient,
        }
      )}
    >
      <div
        ref={parentRef}
        className={clsx(
          "flex scrollbar flex-1 w-full overflow-y-auto",
          innerClassName
        )}
        onScroll={onScroll}
      >
        {children}
      </div>
    </div>
  );
};
