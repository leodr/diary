import LexicalContentEditable from "@lexical/react/LexicalContentEditable";
import { motion, useMotionValue } from "framer-motion";
import { useLayoutEffect } from "react";

export function ContentEditable() {
  const minHeight = useMotionValue(520);

  useLayoutEffect(() => {
    minHeight.set(getMinHeight(window.innerHeight));

    function resizeHandler() {
      minHeight.set(getMinHeight(window.innerHeight));
    }

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <MotionLexicalContentEditable
      className="outline-none text-gray-700 dark:text-gray-200"
      style={{ minHeight }}
    />
  );
}

function getMinHeight(screenHeight: number) {
  return screenHeight - 20 - screenHeight * 0.1;
}

const MotionLexicalContentEditable = motion(LexicalContentEditable);
