import { useEffect, useState } from "react";
import { StatsType } from "../../type/character";
import { sumString } from "../../utils/dataFormat";
import DefaultContainer from "../container/defaultContainer";

interface StatsPropsType {
  statList: StatsType[] | undefined;
}

{/* TODO: 클릭 했을때 팝업창으로 전체 스텟 확인 기능 추가 */}
const Stats = ({ statList }: StatsPropsType) => {
  const [list, setList] = useState<StatsType[]>([]);

  // 불필요한 데이터 제거, 순서 정렬
  useEffect(() => {
    if (statList) {
      setList(
        statList
          .filter((v) => { return Number(v.Value) >= 200; })
          .sort((a, b) => Number(b.Value) - Number(a.Value))
      );
    }
  }, [statList]);

  return (
    <DefaultContainer style="gap-4">
      {/* 주스탯 2개 표시 */}
      <div className="flex justify-between w-full gap-3">
        <div className="flex-1">
          <p className="text-sm opacity-70">{ list[2]?.Type }</p>
          <p className="text-xl">{ list[2]?.Value }</p>
        </div>
        <div className="flex-1">
          <p className="text-sm opacity-70">{ list[3]?.Type }</p>
          <p className="text-xl">{ list[3]?.Value }</p>
        </div>
      </div>
      {/* 공, 체방 표시 */}
      <div className="flex flex-col w-full text-sm">
        <div className="flex justify-between">
          <p className="opacity-70">특성합</p>
          <p>{ sumString(list[2]?.Value, list[3]?.Value) }</p>
        </div>
        <div className="flex justify-between mt-[8px]">
          <p className="opacity-70">공격력</p>
          <p>{ list[1]?.Value }</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-70">최대 생명력</p>
          <p>{ list[0]?.Value }</p>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Stats;
