import React from "react";
import { UseSkillType } from "../../../type/character";

interface SkillPropType {
  skillInfo: UseSkillType;
}

const Skill = ({ skillInfo }: SkillPropType) => {
  if (skillInfo.Level <= 1) return <></>;

  return (
    <div className="relative flex flex-col p-3 justify-center gap-2 bg-black3 rounded-md">
      <div className="flex items-center gap-2">
        <img src={ skillInfo.Icon } className="w-8 h-8 rounded-full"/>
        <span className="text-sm">{ skillInfo.Name }</span>
        <span className="text-sm text-gray1">{ skillInfo.Level }</span>
      </div>
      <div className="flex flex-col">
        {
          skillInfo.Tripods.map((tripod) => {
            if (tripod.IsSelected) {
              return (
                <p className="flex items-center gap-3 text-md text-gray1" key={ skillInfo.Name + tripod.Name }>
                  <span className="w-8 text-center">{ tripod.Level }</span>
                  <span>{ tripod.Name }</span>
                </p>
              )
            }
          })
        }
      </div>
      <div className="flex items-center justify-end gap-1">
        <span className="text-sm text-gray1">{ skillInfo.Rune.Name }</span>
        <img src={ skillInfo.Rune.Icon } className="w-8 h-8 rounded-full"/>
      </div>
    </div>
  )
};

export default Skill;