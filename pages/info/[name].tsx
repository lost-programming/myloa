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
  const [imgList, setImgList]: any = useState();
  const [isLoading, setLoading] = useState(false);
  const asdasd = [1, 2, 3, 4]

  useEffect(() => {
    setLoading(true);
    getCharacterInfo(router.query.name).then((res: any) => {
      setImgList(res);
      setLoading(false);
    });
  }, [router.query.name])

  useEffect(() => {

  }, [imgList])

  return (
    <div>
      {imgList &&
        (
          <>
            <BorderContainer style={'w-full mb-[20px]'}>
              <h2 className="text-[18px] font-bold">{ characterName } / 바드</h2>
            </BorderContainer>
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
                    <p className="mb-[10px] text-[18px] font-bold">장비</p>
                    {imgList.equ.map((value: any) => {
                      return (
                        <Equipment type={'test'} data={value}/>
                      )
                    })}
                  </div>
                  <div className="w-1/2">
                    <p className="mb-[10px] text-[18px] font-bold">장신구</p>
                    {imgList.acc.map((value: any) => {
                      return (
                        <Equipment type={'accessories'} data={value}/>
                      )
                    })}
                  </div>
                </div>
                <div className="flex w-full border rounded mt-5">
                  <p className="w-full my-2 mx-4 bg-blue020 text-white text-center rounded-2xl">전투 특성</p>
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
