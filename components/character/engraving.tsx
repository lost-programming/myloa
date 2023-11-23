import { CharacterEngravingTypes } from "../../type/character";
import DefaultContainer from "../container/defaultContainer";
import { useEffect, useState } from "react";

interface EngravingPropType {
  engraving: CharacterEngravingTypes | undefined;
}

const Engraving = ({ engraving }: EngravingPropType) => {
  const [books, setBooks] = useState<string[]>();

  useEffect(() => {
    setBooks(engraving?.Engravings.map((v) => {
      return JSON.parse(v.Tooltip).Element_001.value.leftText.replace(/(<(.*?)>)|각인 활성 포인트|\s/g, "") + ' ' + v.Name;
    }));
  }, [engraving]);

  return (
    <DefaultContainer style="gap-1">
      {
        engraving?.Effects.map((v) => {
          return (
            <div className="flex items-center py-1 gap-3" key={ v.Name }>
              <i className="overflow-hidden rounded-md w-7 h-7">
                <img src={ v.Icon }/>
              </i>
              <div className="flex items-center gap-3">
                <span className="text-xl">{ v.Name.replace(/[ㄱ-힁]|[a-z]|[.]/gi, '') }</span>
                <div className="flex flex-col">
                  <span className="text-sm leading-none text-gray1">{ v.Name.replace(/[a-z]|[.]|\d/gi, "") }</span>
                  { // TODO: 간소화 가능하면 간소화 하는걸로 map 안에 map이 로딩 시간을 오래 잡을거같음
                    books?.map((book) => {
                      if (book?.replace(/\d|[+]|\s/gi, "") === v.Name.replace(/[a-z]|[.]|\d|\s/gi, "")) {
                        return <span className="mt-[2px] text-[12px] text-gray4 leading-none" key={ book }>{ book }</span>
                      }
                    })
                  }
                </div>
              </div>
            </div>
          );
        })
      }
    </DefaultContainer>
  );
};

export default Engraving;
