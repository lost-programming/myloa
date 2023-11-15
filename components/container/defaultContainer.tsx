const DefaultContainer = ({ children }: any) => {
  return (
    <div className="flex justify-between gap-4 bg-black020 px-3.5 pt-3 pb-2.5 rounded-md shadow-md">
      { children }
    </div>
  );
};

export default DefaultContainer;
