import { CharacterEngravingTypes } from "../../type/character";
import DefaultContainer from "../container/defaultContainer";

interface EngravingPropType {
  engraving: CharacterEngravingTypes | undefined;
}

const Engraving = ({ engraving }: EngravingPropType) => {
  return (
    <DefaultContainer style="gap-1">
      {
        engraving?.Effects.map((v) => {
          return (
            <div className="flex items-center py-1 gap-3" key={ v.Name }>
              <i className="overflow-hidden rounded-md w-7 h-7">
                <img src={ v.Icon }/>
              </i>
              <span className="text-xl">{ v.Name.replace(/[ㄱ-힁]|[a-z]|[.]/gi, '') }</span>
              <span className="text-sm leading-none opacity-70">{ v.Name.replace(/[a-z]|[.]|\d/gi, '') }</span>
            </div>
          );
        })
      }
    </DefaultContainer>
  );
};

export default Engraving;
