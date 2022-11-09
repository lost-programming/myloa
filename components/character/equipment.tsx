import React from "react";
import SmallTextContainer from "../../components/container/smallTextContainer";
import { itemBackground } from "../../utils/dataFormat";

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
                className={`${itemBackground(data.color)} w-full h-[3.25rem]`}
              />
              <div className={`${data.quality_color} h-5 text-center text-sm`}>{ data.quality }</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-[14px] text-white font-semibold tracking-wider">
                { data.name }
              </div>
              <div className="flex gap-2 text-sm text-gray2 my-[4px] tracking-wide">
                { type === 'equ' ? data.level : type === 'stone' ? data.health : data.effect }
              </div>
              <div className="flex flex-row gap-2">
                {type === 'equ' ?
                  <SmallTextContainer text={data.set_level.replace('Lv.', ' Lv.')}/>
                  :
                  data.engraves.map((text: string, index: number) => {
                    return (
                      <SmallTextContainer text={text} key={index}/>
                    )
                  })
                }
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Equipment;
