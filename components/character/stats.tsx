import DefaultContainer from "../container/defaultContainer";

const Stats = () => {
  return (
    <DefaultContainer>
      <div className="flex flex-col gap-3">
        <div className="flex-1">
          <p className="text-sm text-positive-less">특화</p>
          <p className="text-xl">1633</p>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Stats;
