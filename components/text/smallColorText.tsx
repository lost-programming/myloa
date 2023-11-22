import React from "react";

interface SmallColorTextType {
  text?: string;
  style?: string
}

const SmallColorText = ({ text, style }: SmallColorTextType) => {
  return (
    <span className={`${style} text-center text-[13px] leading-snug rounded`}>
      { text }
    </span>
  )
}

export default SmallColorText;
