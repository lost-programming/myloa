import React from "react";
import ToggleContainer from "../container/toggleContainer";
import { CharacterCardsType } from "../../type/character";

interface CardsPropType {
  cards: CharacterCardsType;
}

const Cards = ({ cards }: CardsPropType) => {
  return (
    <ToggleContainer>
      <div className="relative flex items-center gap-2">
        <h4>카드</h4>
      </div>
      <div className="pt-3 grid justify-between gap-3 rounded-md grid-cols-6">
        {
          cards.Cards.map((v) => <img src={ v.Icon } key={ v.Name } className="border borer-gray1 rounded-md" />)
        }
      </div>
    </ToggleContainer>
  )
};

export default Cards;