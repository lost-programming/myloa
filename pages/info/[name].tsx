import React, { useEffect, useState } from "react";
import BorderContainer from "../../components/container/borderContainer";
import Engrave from "../../components/character/engrave";
import { getCharacterInfo } from "../../api/character";
import Equipment from "../../components/character/equipment";
import Bracelet from "../../components/character/bracelet";
import { useRouter } from "next/router";
import { useGetCharacterInfo } from "../../hooks/query";

const CharacterInfo = () => {
  const router = useRouter();
  const characterName = router.query.name;
  const { data } = useGetCharacterInfo('배부른나무늘보', 'gems');

  return (
    <div>
      <div className="">
        캐릭터 정보 창
        이름 이미지  레벨 등
        캐릭터 정보 { characterName }
      </div>
      <div className="flex space-x-4">
        <div className="basis-1/3">
          각인
        </div>
        <div className="basis-2/3">
          장비
        </div>
      </div>
    </div>
  )
};

export default CharacterInfo
