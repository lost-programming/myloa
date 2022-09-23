import React, { useEffect } from "react";
import BorderContainer from "../../components/container/borderContainer";
import Engrave from "../../components/character/engrave";
import { getCharacterInfo } from "../../api/character";
import Equipment from "../../components/character/equipment";
import Bracelet from "../../components/character/bracelet";
import { useRouter } from "next/router";

const CharacterInfo = () => {
  const router = useRouter();
  const characterName = router.query.name;
  const aaa = getCharacterInfo(router.query.name);
  return (
    <div>
      <h2>배부른나무늘보{ characterName }</h2>
      <div className="flex w-full">
        <BorderContainer style={'flex-col items-center w-1/5'}>
          <div className="w-full bg-blue010 mx-[10px] py-1 mb-[10px] text-[18px] text-white text-center rounded-2xl">
            각인
          </div>
          <Engrave/>
          <Engrave/>
        </BorderContainer>

        <BorderContainer style={'flex-col w-3/5 items-center px-4 mx-4'}>
          <div className="flex w-full">
            <div className="w-1/2">
              <div className="mb-[10px]">장비</div>
              <Equipment type={"test"}/>
              <Equipment type={"test"}/>
              <Equipment type={"test"}/>
              <Equipment type={"test"}/>
              <Equipment type={"test"}/>
            </div>
            <div className="w-1/2">
              <div className="mb-[10px]">장신구</div>
              <Equipment type={"accessories"}/>
              <Equipment type={"accessories"}/>
              <Equipment type={"accessories"}/>
              <Equipment type={"accessories"}/>
              <Equipment type={"accessories"}/>
            </div>
          </div>
          <div className="flex w-full border rounded">
            <p className="w-full my-2 mx-4 bg-blue020 text-white text-center rounded-2xl">전투 특성</p>
          </div>
        </BorderContainer>

        <BorderContainer style={'items-start w-1/5'}>
          <Bracelet/>
        </BorderContainer>
      </div>
    </div>
  )
}

export default CharacterInfo
