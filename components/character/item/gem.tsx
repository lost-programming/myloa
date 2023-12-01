import { itemBackground } from "../../../utils/dataFormat";
import React from "react";
import { CustomGemType } from "../../../type/character";

interface GemPropsType {
  gemInfo: CustomGemType;
  open: boolean;
}

const Gem = ({ gemInfo, open }: GemPropsType) => {
  return (
    <div className="flex gap-3">
      <div className="rounded-md overflow-hidden">
        <div className={`flex justify-center w-11 h-11 ${ itemBackground(gemInfo.grade) }`}>
          <img src={ gemInfo.icon }/>
        </div>
        <div className={`flex justify-center items-center w-11 h-5 text-sm opacity-90 font-medium bg-black1 text-gray5 ${ open ? "hidden" : "" }`}>
          { gemInfo.level }
        </div>
      </div>
      <div className={`flex items-center gap-3 ${ open ? "" : "hidden" }`}>
        <img
          className={`rounded-md w-11 h-11 ${ itemBackground(gemInfo.grade) }`}
          src={ gemInfo.skill_icon }
        />
        <span className="px-2 py-0.5 text-xs rounded-full font-medium whitespace-nowrap text-center tabular-nums bg-black1 text-gray5">
          { gemInfo.level + gemInfo.type }
        </span>
        <span className="text-sm">{ gemInfo.skill_name }</span>
        <span className="text-sm text-gray1">{ gemInfo.skill_description }</span>
      </div>
    </div>
  )
};

export default Gem;