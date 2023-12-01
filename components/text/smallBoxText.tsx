import React from "react";

interface SmallBoxTextType {
  text: string;
  style?: string;
}

const SmallBoxText = ({ text, style }: SmallBoxTextType) => {
  return (
    <span className={`text-center text-sm px-2.5 py-1 leading-snug rounded-md bg-white1 bg-opacity-10 text-gray1 ${ style }`}>
      { text }
    </span>
  )
}

export default SmallBoxText;
