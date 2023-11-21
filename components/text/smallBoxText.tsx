import React from "react";

interface SmallBoxTextType {
  text?: string;
}

const SmallBoxText = ({ text }: SmallBoxTextType) => {
  return (
    <span className="text-center text-sm px-2.5 py-1 leading-snug rounded-md bg-white bg-opacity-10 color-gray1">
      { text }
    </span>
  )
}

export default SmallBoxText;
