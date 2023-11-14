import SmallBoxText from "./smallBoxText";
import React from "react";

interface RowBoxTextType {
  title: string;
  boxText: string;
}

const RowBoxText = ({ title, boxText }: RowBoxTextType) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">{ title }</span>
      <SmallBoxText text={ boxText }  />
    </div>
  )
};

export default RowBoxText;
