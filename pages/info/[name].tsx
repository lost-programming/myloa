import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CharacterProfile from "../../components/character/profile";
import { useGetCharacterInfo } from "../../hooks/query";
import { CharacterResponseTypes } from "../../type/character";

interface Types {
  data: CharacterResponseTypes | undefined;
  isSuccess: boolean;
}

const CharacterInfo = () => {
  const router = useRouter();
  const { data, isSuccess }: Types = useGetCharacterInfo('배부른나무늘보');

  if (!isSuccess) return (<div>Loading...</div>);

  return (
    <div className="w-full relative">
      <CharacterProfile profile={ data?.ArmoryProfile }/>
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

export default CharacterInfo;
