// 공식 API Response
import { getElixirInfo, getSetItemInfo, getTranscend } from "../utils/dataFormat";
import exp from "constants";

export interface CharacterResponseTypes {
  ArmoryAvatars: any;
  ArmoryCard: CharacterCardsType;
  ArmoryEngraving: CharacterEngravingTypes;
  ArmoryEquipment: EquipmentType[];
  ArmoryGem: CharacterGemsType;
  ArmoryProfile: CharacterProfileTypes;
  ArmorySkills: UseSkillType[];
  Collectibles: any;
  ColosseumInfo: any;
};

// 공식 API 캐릭터 사용중인 각인 Type
export interface CharacterEngravingTypes {
  Effects: EngravingType[];
  Engravings: EngravingBookType[];
};

// 공식 API 캐릭터 Profile Type
export interface CharacterProfileTypes {
  CharacterClassName: string; // 캐릭터 직업
  CharacterImage: string; // 캐릭터 이미지
  CharacterLevel: number; // 캐릭터 레벨
  CharacterName: string; // 캐릭터 이름
  ExpeditionLevel: number; // 원정대 레벨
  GuildMemberGrade: string; // 길드 직위
  GuildName: string; // 길드 이름
  ItemAvgLevel: string; // 아이템 평균 레벨
  ItemMaxLevel: string; // 아이템 최고 레벨
  PvpGradeName: string; // pvp 등급
  ServerName: string; // 서버 이름
  Stats: StatsType[]; // 스탯
  Tendencies: TendenciesType[] // 성향?
  Title: string; // 칭호
  TotalSkillPoint: number; // 총 합 스킬포인트
  TownLevel: number; // 영지 레벨
  TownName: string; // 영지 이름
  UsingSkillPoint: number; // 사용중인 스킬포인트
};

// 공식 API 착용중인 보석 Type
export interface CharacterGemsType {
  Effects: GemEffectType[];
  Gems: GemType[];
};

// 공식 API 착용중인 카드 Type
export interface CharacterCardsType {
  Cards: CardType[];
  Effects: CardEffectType[];
}

// 스탯 Type
export interface StatsType {
  Type: string;
  Value: string;
  Tooltip: string[];
};

// 성향 Type
export interface TendenciesType {
  Type: string;
  Point: number;
  MaxPoint: number;
};

// 적용중인 각인 Type
export interface EngravingType {
  Icon: string;
  Name: string;
  Description: string;
};

// 각인서 Type
export interface EngravingBookType {
  Slot: number;
  Name: string;
  Tooltip: string;
};

// 장착중인 장비 Type
export interface EquipmentType {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
};

// 사용중인 보석 정보
export interface GemType {
  Grade: string;
  Icon: string;
  Level: number;
  Name: string;
  Slot: number;
  Tooltip: string;
}

// 사용중인 보석 효과 정보 
export interface GemEffectType {
  Description: string;
  GemSlot: number;
  Icon: string;
  Name: string;
  Tooltip: string;
}

// 사용중인 카드 정보
export interface CardType {
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Icon: string;
  Name: string;
  Slot: number;
  Tooltip: string;
}

// 사용중인 카드 효과 정보
export interface CardEffectType {
  CardSlot: number[];
  Index: number;
  Items: CardEffectDetail[];
}

// 카드 효과 상세
export interface CardEffectDetail {
  Name: string;
  Description: string;
}

// 사용중인 스킬 정보 Type
export interface UseSkillType {
  Icon: string;
  IsAwakening: boolean;
  Level: number;
  Name: string;
  Rune: RuneType;
  Tooltip: string;
  Tripods: TripodType[];
  Type: string;
}

// 룬 Type
export interface RuneType {
  Grade: string;
  Icon: string;
  Name: string;
  Tooltip: string;
}

// 트포 Type
export interface TripodType {
  Icon: string;
  IsSelected: boolean;
  Level: number;
  Name: string;
  Slot: number;
  Tier: number;
  Tooltip: string;
}

// 커스텀 장비, 악세 response
export interface CustomItemsType {
  acc: CustomAccType[];
  item: CustomEquipmentType[];
  bracelet: CustomBraceletType | undefined;
  total_set: any[];
}

// 커스텀 장비 정보 Type
export interface CustomEquipmentType {
  type: string;
  grade: string;
  icon: string
  enhance: string;
  itemLevel: string;
  quality: number,
  set?: { name: string | undefined; stage: string | undefined; };
  elixir?: string[];
  total_elixir?: string;
  transcend?: { stage: string; count: string; };
}

// 커스텀 악세 정보 Type
export interface CustomAccType {
  type: string;
  grade: string;
  icon: string;
  name: string;
  quality: number;
  engraves: string[];
  stat: string[];
}

// 커스텀 팔찌 정보 Type
export interface CustomBraceletType {
  type: string;
  grade: string;
  icon: string;
  name: string;
  stats: string[];
  special_option: string[];
  simple_option: string[],
}

// 커스텀 보석 리스트 type
export interface CustomGemListType {
  attack: CustomGemType[];
  reuse: CustomGemType[];
}

// 커스텀 보석 정보 type
export interface CustomGemType {
  grade: string;
  icon: string;
  level: number;
  name: string;
  type: string;
  skill_icon: string;
  skill_name: string;
  skill_description: string;
}