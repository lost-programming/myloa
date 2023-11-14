import React from "react";
import { CharacterProfileTypes } from "../../type/character";
import SmallBoxText from "../text/smallBoxText";
import RowBoxText from "../text/rowBoxText";

interface ProfileProps {
  profile: CharacterProfileTypes | undefined;
}

const CharacterProfile = ({ profile }: ProfileProps) => {
  return (
    <div className="flex flex-col h-64 p-6 overflow-hidden bg-negative-fixed-more text-positive-fixed bg-grade3">
      {/* 서버이름, 직업 및 즐겨찾기 버튼 TODO: 즐겨찾기 버튼 추가 */}
      <div className="space-x-2">
        <SmallBoxText text={ profile?.ServerName } />
        <SmallBoxText text={ profile?.CharacterClassName } />
      </div>
      {/* 캐릭 이름, 칭호 및 길드, 영지, pvp 등급 */}
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col">
          <span className="text-2xl">{ profile?.CharacterName }</span>
          <span className="text-base opacity-70">{ profile?.Title }</span>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <RowBoxText title={ profile?.GuildName ? profile.GuildName : '' } boxText="길드" />
          <RowBoxText title={ profile?.TownName ? 'Lv.' + profile.TownLevel + ' ' + profile.TownName : '' } boxText="영지" />
          <RowBoxText title={ profile?.PvpGradeName ? profile.PvpGradeName : '' } boxText="PVP" />
        </div>
      </div>
      {/* 각종 레벨 */}
      <div className="">

      </div>
    </div>
  );
};

export default CharacterProfile;
