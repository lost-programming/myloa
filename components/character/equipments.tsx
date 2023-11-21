import { useEffect, useState } from "react";

import { customItemsType, EquipmentType } from "../../type/character";
import DefaultContainer from "../container/defaultContainer";
import { equipmentDataUpdate } from "../../utils/dataFormat";
import SmallBoxText from "../text/smallBoxText";
import Weapons from "./item/weapons";
import Accessories from "./item/accessories";

interface EquipmentsPropType {
  items: any;
}

const Equipments = ({ items }: EquipmentsPropType) => {
  const [itemInfo, setItemInfo] = useState<customItemsType>();

  useEffect(() => {
    if (items?.length > 0) {
      setItemInfo(equipmentDataUpdate(items));
    }
  }, [items]);

  useEffect(() => {
    console.log(itemInfo);
  }, [itemInfo]);

  return (
    <DefaultContainer>
      {/* 세트 효과, 품질 평균, 악세 특성합 */}
      <div className="flex items-center gap-3">
        <h4 className="text-base">장비</h4>
        {
          itemInfo?.total_set?.map((v) => {
            return (<SmallBoxText text={ v[0] + ' ' + v[1] } key={ v[0] } />)
          })
        }
      </div>
      {/* 무기, 방어구, 장신구 정보 */}
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
        {/*  */}
        <div className="flex flex-col w-[50%] gap-2">
          {
            itemInfo?.acc?.map((v) => {
              return (
                <Accessories acc={ v } key={ v.name }></Accessories>
              )
            })
          }
        </div>
      </div>
    </DefaultContainer>
  )
};

export default Equipments;
