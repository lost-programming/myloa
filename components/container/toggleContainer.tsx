import React from "react";

interface ToggleContainerType {
  children: any;
  style?: string;
  click_event?: any;
}

const ToggleContainer = ({ children, style, click_event }: ToggleContainerType) => {
  return (
    <div className={`flex flex-col bg-black2 px-3.5 py-3 rounded-md shadow-md ${ style }`} onClick={ click_event }>
      { children }
    </div>
  );
};

export default ToggleContainer;
