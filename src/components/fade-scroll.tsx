import React from "react";
import clsx from "clsx";

const fadeScrollBefore =
  "before:content=[''] before:absolute before:top-0 before:w-full before:h-8 z-10 before:bg-linear-to-b before:from-greys-800";
const fadeScrollAfter =
  "after:content=[''] after:absolute after:bottom-0 after:w-full after:h-8 z-10 after:bg-linear-to-t after:from-greys-800";

export const FadeScroll = ({
  children,
  innerClassName,
}: {
  children: React.ReactNode;
  innerClassName?: string;
}) => {
  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const [showLeftGradient, setShowTopGradient] = React.useState(false);
  const [showRightGradient, setShowBottomGradient] = React.useState(false);

  const handleVisibility = React.useCallback((element: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    setShowTopGradient(scrollTop > 0);
    setShowBottomGradient(scrollTop + clientHeight < scrollHeight);
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
          "before:visible": showLeftGradient,
          "after:visible": showRightGradient,
          "before:invisible": !showLeftGradient,
          "after:invisible": !showRightGradient,
        }
      )}
    >
      <div
        ref={parentRef}
        className={clsx("flex flex-1 w-full overflow-y-scroll", innerClassName)}
        onScrollCapture={onScroll}
      >
        {children}
      </div>
    </div>
  );
};
