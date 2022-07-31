import React from "react";

interface ButtonProp {
  text: string;
  style: string;
  onClick: any;
}

const LinkButton = ({ text, style, onClick }: ButtonProp) => {
  return (
    <button
      className={`flex items-center justify-center border border-gray030 rounded text-[14px] ${style}`}
      onClick={ onClick }
    >{ text }</button>
  )
}

export default LinkButton;
