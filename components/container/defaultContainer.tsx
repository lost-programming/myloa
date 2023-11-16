interface DefaultContainerType {
  children: any;
  style?: string;
}

const DefaultContainer = ({ children, style }: DefaultContainerType) => {
  return (
    <div className="flex flex-col gap-4 bg-black020 px-3.5 pt-3 pb-2.5 rounded-md shadow-md">
      { children }
    </div>
  );
};

export default DefaultContainer;
