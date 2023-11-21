import React from "react";

interface SmallColorTextType {
  text?: string;
  style?: string
}

const SmallColorText = ({ text, style }: SmallColorTextType) => {
  return (
    <span className={`${style} text-center text-[13px] leading-snug rounded-md hover:bg-red05`}>
      { text }
    </span>
  )
}

export default SmallColorText;
