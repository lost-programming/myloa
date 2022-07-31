import React from "react";
import BorderContainer from "../../components/container/borderContainer";
import Engrave from "../../components/character/engrave";

const CharacterInfo = () => {
  return (
    <div>
      <h2>캐릭터 정보</h2>
      <div className="flex w-full">
        <BorderContainer width={'w-1/5'}>
          <div className="w-full bg-blue010 mx-[10px] py-1 mb-[10px] text-[18px] text-white text-center rounded-2xl">
            각인
          </div>
          <Engrave/>
          <Engrave/>
        </BorderContainer>

        <BorderContainer width={'w-3/5 mx-4'}>
          <div className="text-[18px]">캐릭터 장비, 악세정보</div>
        </BorderContainer>

        <BorderContainer width={'w-1/5'}>
          <div className="text-[18px]">팔찌?? / 전투 특성</div>
        </BorderContainer>
      </div>
    </div>
  )
}

export default CharacterInfo;
