import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CharacterProfile from "../../components/character/profile";
import { useGetCharacterInfo } from "../../hooks/query";
import { CharacterResponseTypes } from "../../type/character";
import Stats from "../../components/character/stats";

interface Types {
  data: CharacterResponseTypes | undefined;
  isSuccess: boolean;
}

const CharacterInfo = () => {
  const router = useRouter();
  const { data, isSuccess }: Types = useGetCharacterInfo('배부른나무늘보');

  if (!isSuccess) return (<div>Loading...</div>);

  return (
    <div className="relative flex flex-col w-full space-y-4">
      <CharacterProfile profile={ data?.ArmoryProfile }/>
      <div className="flex space-x-4">
        <div className="flex w-full flex-[0_1_14rem] px-0 flex-col gap-4 min-w-[12.5rem]">
          <Stats statList={ data?.ArmoryProfile?.Stats }/>
        </div>
        <div className="basis-2/3">
          장비
        </div>
      </div>
    </div>
  )
};

export default CharacterInfo;
