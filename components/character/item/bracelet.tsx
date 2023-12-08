import { CustomBraceletType } from "../../../type/character";
import { itemBackground } from "../../../utils/dataFormat";

interface BraceletPropsType {
  item: CustomBraceletType | undefined;
}
// TODO: 클릭시 팝업으로 상세 정보
const Bracelet = ({ item }: BraceletPropsType) => {
  if (!item) return <></>;

  return (
    <div className="cursor-pointer">
      <div className="flex items-center mb-3">{ item?.type }</div>
      <div className="flex items-center gap-4">
        <div className="rounded-md overflow-hidden">
          <div className={`flex flex-col items-center relative w-10 h-10 ${ itemBackground(item?.grade) }`}>
            <img src={ item?.icon } className="w-11 h-11"/>
          </div>
        </div>
        <div className="flex flex-col gap-1 space-y-1">
          <p className="leading-none text-sm flex gap-2 text-gray1">
            {
              item?.stats.map((stat) => <span className="font-[600]" key={ "bracelet" + stat }>{ stat }</span>)
            }
          </p>
          <p className="leading-none text-sm flex gap-2">
            {
              item?.simple_option.map((option) => <span key={ "bracelet" + option }>{ option }</span>)
            }
          </p>
        </div>
      </div>
    </div>
  )
};

export default Bracelet;