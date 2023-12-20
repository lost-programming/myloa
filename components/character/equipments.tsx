import { Key, useEffect, useState } from "react";

import { CustomItemsType, EquipmentType } from "../../type/character";
import DefaultContainer from "../container/defaultContainer";
import { equipmentDataUpdate } from "../../utils/dataFormat";
import SmallBoxText from "../text/smallBoxText";
import Weapons from "./item/weapons";
import Accessories from "./item/accessories";
import Bracelet from "./item/bracelet";
import Elixir from "./item/elixir";
import Transcend from "./item/transcend";

interface EquipmentsPropType {
  items: any;
}

const Equipments = ({items}: EquipmentsPropType) => {
  const [ itemInfo, setItemInfo ] = useState<CustomItemsType>();

  useEffect(() => {
    if (items?.length > 0) {
      setItemInfo(equipmentDataUpdate(items));
    }
  }, [ items ]);

  // useEffect(() => {
  //   console.log(itemInfo);
  // }, [ itemInfo ]);

  return (
    <DefaultContainer>
      {/* 세트 효과, 품질 평균, 악세 특성합 */ }
      <div className="flex items-center gap-3">
        <h4 className="text-base">장비</h4>
        {
          itemInfo?.total_set?.map((v) => {
            return (<SmallBoxText text={ v[0] + ' ' + v[1] } key={ v[0] }/>)
          })
        }
      </div>
      {/* 무기, 방어구, 장신구 정보 */ }
      <div className="flex mt-[15px]">
        <div className="flex flex-col w-[50%] gap-2">
          {
            itemInfo?.item?.map((v) => {
              return (
                <Weapons item={ v } key={ v.type }></Weapons>
              )
            })
          }
        </div>
        {/* 장신구 정보 */}
        <div className="flex flex-col w-[50%] gap-2">
          {
            itemInfo?.acc?.map((v, i) => {
              return (
                <Accessories acc={ v } key={ v.name + i }></Accessories>
              )
            })
          }
        </div>
      </div>
      {/*  팔찌, 엘릭서, 초월 */}
      <div className="grid grid-flow-col pt-4 empty:hidden">
        <Bracelet item={ itemInfo?.bracelet }/>
        <Elixir items={ itemInfo?.item }/>
        <Transcend items={ itemInfo?.item }/>
      </div>
    </DefaultContainer>
  )
};

export default Equipments;
