import React from "react";

interface ContainerProps {
  width: string;
  children: any;
}

const borderContainer = ({ width, children }: ContainerProps) => {
  return (
    <div className={`${width} flex flex-col items-center justify-center p-3 border border-gray030 rounded-lg`}>
      { children }
    </div>
  )
}

export default borderContainer;
