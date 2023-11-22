import React from "react";
import { CharacterProfileTypes } from "../../type/character";
import SmallBoxText from "../text/smallBoxText";
import RowBoxText from "../text/rowBoxText";
import LevelText from "../text/levelText";

interface ProfileProps {
  profile: CharacterProfileTypes | undefined;
}

const CharacterProfile = ({ profile }: ProfileProps) => {
  if (!profile) return (<></>);

  return (
    <div className="flex flex-col relative h-64 p-6 overflow-hidden bg-negative-fixed-more text-positive-fixed">
      {/* 캐릭터 이미지 */}
      <div className="absolute -translate-x-1/2 left-[50%] -top-12">
        <img src={ profile?.CharacterImage } className="min-w-[408px] w-[408px]"/>
      </div>
      <div className="absolute w-[48rem] h-[48rem] -translate-x-1/2 -translate-y-1/2 left-24 -top-24 mix-blend-screen bg-purple-rg"></div>
      {/* 서버이름, 직업 및 즐겨찾기 버튼 TODO: 즐겨찾기 버튼 추가 */}
      <div className="space-x-2">
        <SmallBoxText text={ profile?.ServerName } />
        <SmallBoxText text={ profile?.CharacterClassName } />
      </div>
      {/* 캐릭 이름, 칭호 및 길드, 영지, pvp 등급 */}
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col">
          <span className="text-2xl">{ profile?.CharacterName }</span>
          <span className="text-base text-gray1">{ profile?.Title }</span>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <RowBoxText title={ profile?.GuildName } boxText="길드" />
          <RowBoxText title={ 'Lv.' + profile.TownLevel + ' ' + profile.TownName } boxText="영지" />
          <RowBoxText title={ profile.PvpGradeName} boxText="PVP" />
        </div>
      </div>
      {/* 각종 레벨 */}
      <div className="flex space-x-6">
        <LevelText title="아이템" level={ profile?.ItemAvgLevel } />
        <LevelText title="전투" level={ 'Lv. ' + profile.CharacterLevel } />
        <LevelText title="원정대" level={ 'Lv. ' + profile.TownLevel } />
      </div>
    </div>
  );
};

export default CharacterProfile;
