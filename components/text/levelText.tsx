interface LevelTextType {
  title: string;
  level: string;
}

const LevelText = ({ title, level }: LevelTextType) => {
  return (
    <div className="flex flex-col">
      <span className="text-base color-gray1">{ title }</span>
      <span className="text-xl">{ level }</span>
    </div>
  );
};

export default LevelText;
