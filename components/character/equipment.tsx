import React from "react";
import { qualityColor } from "../../utils/dataFormat";

interface EquipmentProps {
  type: string;
  data?: any;
}

const Equipment = ({ type, data }: EquipmentProps) => {
  return (
    <div className="flex py-2 gap-3">
      {data &&
        (
          <>
            <div className="rounded-lg overflow-hidden w-14">
              <img
                src={ data.url }
                className="bg-grade2 w-full h-[3.25rem]"
              />
              <div className={`${data.quality_color} h-5 text-center text-sm`}>{ data.quality }</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-[14px] text-white font-semibold tracking-wider">
                { data.name }
              </div>
              <div className="flex gap-2 text-sm text-gray2 my-[4px] tracking-wide">
                { type === 'equ' ? data.level : data.effect }
              </div>
              <div className="flex">
                <span className="bg-option rounded-full px-2 py-0.5 font-medium whitespace-nowrap text-[12px] text-gray2 tracking-wide">
                  { type === 'equ' ? data.set_level.replace('Lv.', ' Lv.') : '' }
                </span>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Equipment;
