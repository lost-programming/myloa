import { CustomEquipmentType } from "../../../type/character";
import { ActiveElixirOption, TotalElixirSum } from "../../../utils/dataFormat";

interface ElixirPropsType {
  items: CustomEquipmentType[] | undefined;
}

const Elixir = ({ items }: ElixirPropsType) => {
  if (!items) return <></>;

  if (TotalElixirSum(items) <= 0) return <></>;

  return (
    <div className="">
      <div className="flex items-center mb-3">엘릭서</div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 space-y-1">
          <p className="leading-none text-sm flex gap-2 text-gray1">
            합계 Lv. { TotalElixirSum(items) }
          </p>
          <p className="leading-none text-sm flex gap-2">
            { ActiveElixirOption(items)?.map((v, i) =>
              <span className={ i === 0 ? "text-gold2" : ""} key={ "elixir_option" + v }>{ v }</span>)
            }
          </p>
        </div>
      </div>
    </div>
  )
};

export default Elixir;