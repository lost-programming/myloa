import React, { useEffect, useState } from "react";
import { CharacterGemsType, CustomGemListType } from "../../type/character";
import ToggleContainer from "../container/toggleContainer";
import { itemBackground, sortGemsInfo } from "../../utils/dataFormat";
import Gem from "./item/gem";
import SmallBoxText from "../text/smallBoxText";
import HeroIcon from "../icon/heroIcon";

interface GemsPropType {
  gemList: CharacterGemsType;
}

const Gems = ({ gemList }: GemsPropType) => {
  const [gemsInfo, setGemsInfo] = useState<CustomGemListType>({ attack: [], reuse: [] });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setGemsInfo(sortGemsInfo(gemList));
  }, [gemList]);

  return (
    <ToggleContainer style="cursor-pointer" click_event={() => setOpen(!open)}>
      <div className="relative flex items-center gap-2">
        <h4 className="text-base">보석</h4>
        <SmallBoxText text={ gemsInfo.attack.length + "멸" } style="py-0.5"/>
        <SmallBoxText text={ gemsInfo.reuse.length + "홍" } style="py-0.5"/>
        <HeroIcon coordinate={ open ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} style="absolute right-0"/>
      </div>
      <div className={`flex items-start pt-3.5 h-[80px] transition-02 gap-6 ${ open ? "flex-col h-[630px]" : "" }`}>
        {/* 멸화 */}
        <div className={`flex gap-3 flex-wrap empty:hidden ${ open ? "flex-col items-start" : "items-center" }`}>
          {
            gemsInfo.attack.map((v) => <Gem gemInfo={ v } open={ open } key={ "멸화" + v.skill_name } />)
          }
        </div>
        {/* 홍염 */}
        <div className={`flex gap-3 flex-wrap empty:hidden ${ open ? "flex-col items-start" : "items-center" }`}>
          {
            gemsInfo.reuse.map((v) => <Gem gemInfo={ v } open={ open } key={ "홍염" + v.skill_name } />)
          }
        </div>
      </div>
    </ToggleContainer>
  );
};

export default Gems;