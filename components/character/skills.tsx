import React from "react";
import DefaultContainer from "../container/defaultContainer";
import { CharacterProfileTypes, UseSkillType } from "../../type/character";
import Skill from "./item/skill";
import SmallBoxText from "../text/smallBoxText";

interface SkillsPropType {
  profile: CharacterProfileTypes | undefined;
  skillList: UseSkillType[];
}

const Skills = ({ skillList, profile }: SkillsPropType) => {
  return (
    <DefaultContainer>
      <div className="relative flex items-center mb-[10px] gap-3">
        <h4 className="text-base">스킬</h4>
        <SmallBoxText text={ "SP " + profile?.UsingSkillPoint + " / " + profile?.TotalSkillPoint } style="px-2 py-0.5"/>
      </div>
      <div className="grid gap-3 grid-cols-4">
        {
          skillList?.map((skill) => <Skill skillInfo={ skill } key={ skill.Name } />)
        }
      </div>
    </DefaultContainer>
  )
};

export default Skills;