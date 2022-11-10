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