import { useEffect, useState } from "react";

import { EquipmentType } from "../../type/character";
import DefaultContainer from "../container/defaultContainer";
import { equipmentDataUpdate } from "../../utils/dataFormat";
import SmallBoxText from "../text/smallBoxText";

interface EquipmentsPropType {
  items: EquipmentType[];
}

const Equipments = ({ items }: EquipmentsPropType) => {
  const [itemInfo, setItemInfo] = useState<any>();

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
          itemInfo?.total_set?.map((v: any) => {
            return (<SmallBoxText text={ v[0] + ' ' + v[1] } />)
          })
        }
      </div>
    </DefaultContainer>
  )
};

export default Equipments;
