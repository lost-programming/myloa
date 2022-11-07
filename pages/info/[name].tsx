import React, { useEffect, useState } from "react";
import BorderContainer from "../../components/container/borderContainer";
import Engrave from "../../components/character/engrave";
import { getCharacterInfo } from "../../api/character";
import Equipment from "../../components/character/equipment";
import Bracelet from "../../components/character/bracelet";
import { useRouter } from "next/router";

const CharacterInfo = () => {
  const router = useRouter();
  const characterName = router.query.name;
  const [info, setInfo]: any = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCharacterInfo(router.query.name).then((res: any) => {
      setInfo(res);
      setLoading(false);
    });
  }, [router.query.name])

  useEffect(() => {
  }, [info])

  return (
    <div>
      {info &&
        (
          <>
            <BorderContainer style={'w-full mb-[20px] items-center'}>
              <img src={ info.job_img } className="w-[40px] h-[40px]"/>
              <div className="flex flex-col ml-[10px]">
                <p className="text-[16px] font-bold">{ info.name }</p>
                <p className="text-[14px] text-gray2">{ info.job }</p>
              </div>
            </BorderContainer>

            <div className="flex w-full">
              <div className="flex flex-col w-1/5">
                <BorderContainer style={'flex-col mb-[10px] p-3'}>
                  <div className="flex-1 grid grid-cols-3 mx-0 divide-x-[1px] divide-outline divide-[#C2C2CC]">
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <p className="text-positive-less text-sm text-gray2">아이템</p>
                      <p className="text-xl">{ info.item_level }</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <p className="text-positive-less text-sm text-gray2">전투</p>
                      <p className="text-xl">{ info.battle_level }</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <p className="text-positive-less text-sm text-gray2">원정대</p>
                      <p className="text-xl">{ info.expedition }</p>
                    </div>
                  </div>
                </BorderContainer>
                <BorderContainer style={'flex-col mb-[10px]'}>
                  <div className="grid grid-cols-[1fr_2fr] gap-y-2">
                    <p className="text-gray2">서버</p>
                    <p>{ info.server }</p>
                    <p className="text-gray2">길드</p>
                    <p>{ info.guild }</p>
                  </div>
                </BorderContainer>
                <BorderContainer style={'flex-col gap-2'}>
                  {info.engraves.map((eng: string, index: number) => {
                    return (
                      <p key={index}>{ eng }</p>
                    )
                  })}
                  {/*<Engrave/>*/}
                  {/*<Engrave/>*/}
                </BorderContainer>
              </div>

              <BorderContainer style={'flex-col w-3/5 items-center px-4 mx-4'}>
                <div className="flex w-full">
                  <div className="w-1/2">
                    <p className="mb-[10px] text-[18px] font-bold">장비</p>
                    {info.equ.map((value: any, index: any) => {
                      return (
                        <Equipment key={ index } type={ 'equ' } data={ value }/>
                      )
                    })}
                  </div>
                  <div className="w-1/2">
                    <p className="mb-[10px] text-[18px] font-bold">장신구</p>
                    {info.acc.map((value: any, index: number) => {
                      return (
                        <Equipment key={ index } type={ 'accessories' } data={ value }/>
                      )
                    })}
                    <Equipment type={ 'stone' } data={ info.stone }/>
                  </div>
                </div>
              </BorderContainer>

              <BorderContainer style={'items-start w-1/5'}>
                <Bracelet/>
              </BorderContainer>
            </div>
          </>
        )
      }
    </div>
  )
}

export default CharacterInfo
