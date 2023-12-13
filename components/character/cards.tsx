import React from "react";
import ToggleContainer from "../container/toggleContainer";
import { CharacterCardsType } from "../../type/character";
import { cardEffectText, cardGradeBorder } from "../../utils/dataFormat";

interface CardsPropType {
  cards: CharacterCardsType;
}

const Cards = ({ cards }: CardsPropType) => {
  return (
    <ToggleContainer>
      <div className="relative flex items-center gap-2">
        <h4>카드</h4>
      </div>
      <div className="relative pt-3 grid justify-between gap-3 rounded-md grid-cols-6">
        {
          cards.Cards.map((v) => {
            return (
              <div className="relative flex overflow-hidden rounded-md" key={ v.Name }>
                {/* 카드 이미지 */}
                <img src={ v.Icon } className="w-full h-full py-1.5 px-[0.2rem]" />
                {/* 테두리 */}
                <div className={`absolute w-full h-full bg-[url('/images/img_card_grade.png')] ${ cardGradeBorder(v.Grade) }`}/>
                {/* 각성 단계 */}
                <div className="absolute p-[10%] w-full bottom-0">
                  <div className="relative aspect-[10/3] bg-[url('/images/img_profile_awake.png')] bg-cover overflow-hidden">
                    <div className={`absolute w-full h-full cLeft-${100 - (20*v.AwakeCount)} bg-[0_100%] bg-[url('/images/img_profile_awake.png')] bg-cover overflow-hidden`}/>
                  </div>
                </div>
              </div>
          )})
        }
      </div>
      <div className="flex flex-col mt-[10px] gap-3">
        {
          cards.Effects.map((v) => {
            return (
              <div className="flex flex-col justify-end gap-3 p-3 bg-black3 rounded-md" key={"card-effect"+v.Index}>
                <h4 className="text-md">{ v.Items[v.Index].Name.replace(/[0-9]|세트|([(](.*?)[)])/g, "") }</h4>
                {
                  v.Items.map((effect) => {
                    return (
                      <div className="flex gap-2" key={effect.Name}>
                        <span className="flex items-center px-2 py-0.5 w-fit bg-black1 text-xs font-medium whitespace-nowrap text-center rounded-full">
                          { cardEffectText(effect.Name) }
                        </span>
                        <span className="text-sm text-gray1">{ effect.Description }</span>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </ToggleContainer>
  )
};

export default Cards;