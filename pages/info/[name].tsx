import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useGetCharacterInfo } from "../../hooks/query";
import { CharacterResponseTypes } from "../../type/character";
import CharacterProfile from "../../components/character/profile";
import Stats from "../../components/character/stats";
import Engraving from "../../components/character/engraving";
import Equipments from "../../components/character/equipments";
import Blank from "../../components/blank";
import Gems from "../../components/character/gems";
import Cards from "../../components/character/cards";

interface Types {
  data: CharacterResponseTypes | undefined;
  isSuccess: boolean;
}

const CharacterInfo = () => {
  const router = useRouter();
  // TODO: 새로고침시 router.query.name 없을 경우에 오류 추후 수정
  const { data, isSuccess }: Types = useGetCharacterInfo(router?.query?.name ? router.query.name : '');

  if (!isSuccess) return (<div>Loading...</div>);

  if (!data?.ArmoryProfile?.CharacterClassName) return (<Blank/>);

  return (
    <div className="relative flex flex-col w-full space-y-4">
      {/* 캐릭터 정보 */}
      <CharacterProfile profile={ data?.ArmoryProfile }/>
      <div className="flex px-4 space-x-4">
        {/* 공격력, 특성 및 사용중인 각인 */}
        <div className="flex w-full flex-[0_1_14rem] px-0 flex-col gap-4 min-w-[12.5rem]">
          <Stats statList={ data?.ArmoryProfile?.Stats }/>
          <Engraving engraving={ data?.ArmoryEngraving }/>
        </div>
        {/* 착용중인 장비, 장신구 정보 및 부여 효과 정보 */}
        <div className="flex flex-col flex-1 gap-4">
          <Equipments items={ data?.ArmoryEquipment ? data.ArmoryEquipment : [] }/>
          <Gems gemList={ data?.ArmoryGem }/>
          <Cards cards={ data?.ArmoryCard }/>
        </div>
      </div>
    </div>
  )
};

export default CharacterInfo;
