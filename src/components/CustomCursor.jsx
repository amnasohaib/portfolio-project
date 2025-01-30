import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateCursorPosition);

    const linksAndButtons = document.querySelectorAll("a, button");
    linksAndButtons.forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleLeave);
      element.style.cursor = "none";
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);

      linksAndButtons.forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleLeave);
        element.style.cursor = "auto";
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 hidden sm:block
    ${
      isHovering
        ? "bg-background-light dark:bg-background-dark bg-opacity-50 dark:bg-opacity-50 border-2 border-foreground-light dark:border-foreground-dark w-10 h-10"
        : "bg-background-dark dark:bg-background-light w-5 h-5"
    }
  `}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        borderRadius: "50%",
        transition: "width 0.2s, height 0.2s",
      }}
    ></div>
  );
};

export default CustomCursor;
