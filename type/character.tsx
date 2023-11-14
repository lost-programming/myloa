// 공식 API Response
export interface CharacterResponseTypes {
  ArmoryAvatars: any;
  ArmoryCard: any;
  ArmoryEngraving: any;
  ArmoryEquipment: any;
  ArmoryGem: any;
  ArmoryProfile: CharacterProfileTypes | undefined;
  ArmorySkills: any;
  Collectibles: any;
  ColosseumInfo: any;
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
  Stats: string[]; // 스탯
  Tendencies: string[] // 성향?
  Title: string; // 칭호
  TotalSkillPoint: number; // 총 합 스킬포인트
  TownLevel: number; // 영지 레벨
  TownName: number; // 영지 이름
  UsingSkillPoint: number; // 사용중인 스킬포인트
}

export interface CharacterInfo  {
  name: string;
  job: string;
  job_img: string;
  item_level: number;
  battle_level: string;
  expedition: string;
  guild: string;
  server: string;
  engraves: any[];
  equ: any[];
  acc: any[];
  stone: StoneInfo;
  bracelet: BraceletInfo;
  gems: any[];
}

export interface StoneInfo {
  color: string;
  engraves : any[];
  health: string;
  name: string;
  url: string;
  quality: string;
  quality_color: string;
}

export interface BraceletInfo {
  color: string;
  url: string;
  name: string;
  effects: any[];
}
