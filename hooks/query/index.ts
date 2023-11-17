import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys";
import { getCharacterInfo } from "../../api/character";
import { CharacterResponseTypes } from "../../type/character";

// 캐릭터 정보 조회
export const useGetCharacterInfo = (name: string) => {
  const { data, isSuccess } = useQuery<CharacterResponseTypes>({
      queryKey: [QUERY_KEYS.GET_CHARACTER_INFO, name],
      queryFn: () => getCharacterInfo(name),
      staleTime: 30000,
      gcTime: 100000,
    }
  );

  if (isSuccess) {
    console.log(data);
  }
  return { data, isSuccess };
};
