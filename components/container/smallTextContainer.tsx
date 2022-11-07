import React from "react";

interface ContainerProps {
  text: string
}

const smallTextContainer = ({ text }: ContainerProps) => {
  return (
    <div className="flex">
      <span className="bg-option rounded-full px-2 py-0.5 font-medium whitespace-nowrap text-[12px] text-gray2 tracking-wide">
        { text }
      </span>
    </div>
  )
}

export default smallTextContainer;
