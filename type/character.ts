// 공식 API Response
export interface CharacterResponseTypes {
  ArmoryAvatars: any;
  ArmoryCard: any;
  ArmoryEngraving: CharacterEngravingTypes;
  ArmoryEquipment: any;
  ArmoryGem: any;
  ArmoryProfile: CharacterProfileTypes;
  ArmorySkills: any;
  Collectibles: any;
  ColosseumInfo: any;
}

// 공식 API 캐릭터 사용중인 각인 Type
export interface CharacterEngravingTypes {
  Effects: EngravingType[];
  Engravings: EngravingBookType[];
}

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
}

// 스탯 Type
export interface StatsType {
  Type: string;
  Value: string;
  Tooltip: string[];
}

// 성향 Type
export interface TendenciesType {
  Type: string;
  Point: number;
  MaxPoint: number;
}

// 적용중인 각인 Type
export interface EngravingType {
  Icon: string;
  Name: string;
  Description: string;
}

// 각인서 Type
export interface EngravingBookType {
  Slot: number;
  Name: string;
  Tooltip: string;
}
