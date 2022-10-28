import React from "react";

interface ContainerProps {
  style: string;
  children: any;
}

const borderContainer = ({ style, children }: ContainerProps) => {
  return (
    <div className={`${style} flex p-4 bg-black020 rounded-xl`}>
      { children }
    </div>
  )
}

export default borderContainer;
