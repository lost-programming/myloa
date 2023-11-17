import DefaultContainer from "../container/defaultContainer";
import { EquipmentType } from "../../type/character";
import { useEffect } from "react";
import { equipmentDataUpdate } from "../../utils/dataFormat";

interface EquipmentsPropType {
  list: EquipmentType[];
}

const Equipments = ({ list }: EquipmentsPropType) => {
  useEffect(() => {
    if (list?.length > 0) {
      equipmentDataUpdate(list);
      console.log(JSON.parse(list[1]?.Tooltip));
    }
  }, [list]);

  return (
    <DefaultContainer>
      {/* 세트 효과, 품질 평균, 악세 특성합 */}
      <div className="flex items-center gap-3">
         <h4 className="text-base">장비</h4>
      </div>
    </DefaultContainer>
  )
};

export default Equipments;
