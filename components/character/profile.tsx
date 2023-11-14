import React from "react";
import { CharacterProfileTypes } from "../../type/character";
import SmallBoxText from "../text/smallBoxText";

interface ProfileProps {
  profile: CharacterProfileTypes | undefined;
}

const CharacterProfile = ({ profile }: ProfileProps) => {
  return (
    <div className="flex flex-col h-64 p-6 overflow-hidden bg-negative-fixed-more text-positive-fixed">
      <div className="space-x-2">
        <SmallBoxText text={ profile?.ServerName } />
        <SmallBoxText text={ profile?.CharacterClassName } />
      </div>
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col">
          <span className="text-2xl">{ profile?.CharacterName }</span>
          <span className="text-base opacity-70">{ profile?.Title }</span>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm">{ profile?.GuildName }</span>
            <SmallBoxText text="길드"  />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{ profile?.TownName }</span>
            <SmallBoxText text="영지"  />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{ profile?.PvpGradeName }</span>
            <SmallBoxText text="PVP"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
