import React from "react";

interface ContainerProps {
  style: string;
  children: any;
}

const borderContainer = ({ style, children }: ContainerProps) => {
  return (
    <div className={`${style} flex p-3 border border-gray030 rounded-lg`}>
      { children }
    </div>
  )
}

export default borderContainer;
