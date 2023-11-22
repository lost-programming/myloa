import React, { useState } from "react";
import { useRouter } from "next/router";

interface inputContainerType {
  style: string;
}

const InputContainer = ({ style }: inputContainerType) => {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={name}
        className={`${ style } p-4 border border-gray3 rounded-md bg-gray3 text-white1`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (!name) return false;
          if (e.keyCode === 13) {
            router.push(`/info/${name}`);
            setName('');
          }
        }}
      />
    </div>
  );
};

export default InputContainer;
