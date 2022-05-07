import LexicalContentEditable from "@lexical/react/LexicalContentEditable";
import { motion, useMotionValue } from "framer-motion";
import { useLayoutEffect } from "react";
import { classNames } from "../../utils/classnames";

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
      className={classNames(
        "outline-none",
        "text-gray-700 selection:text-gray-50 selection:bg-gray-900",
        "dark:text-gray-200 dark:selection:bg-gray-100 dark:selection:text-gray-900"
      )}
      style={{ minHeight }}
    />
  );
}

function getMinHeight(screenHeight: number) {
  return screenHeight - 20 - screenHeight * 0.1;
}

const MotionLexicalContentEditable = motion(LexicalContentEditable);
