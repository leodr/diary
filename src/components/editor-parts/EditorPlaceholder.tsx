import React from "react";

type Props = {};

export default function EditorPlaceholder({}: Props) {
  return (
    <div className="absolute top-0 left-0 text-gray-500 pointer-events-none">
      Enter some text...
    </div>
  );
}
