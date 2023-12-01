import {
  CustomBraceletType,
  CustomAccType,
  CustomEquipmentType,
  CustomItemsType,
  EquipmentType,
  CharacterGemsType, CustomGemType
} from "../type/character";

// string sum
export const sumString = (s1: string, s2: string) => {
  if (s1 && s2) return +s1 + +s2;
};

// 장비 데이터 재가공
export const equipmentDataUpdate = (data: EquipmentType[]) => {
  const itemText = ["무기", "투구", "상의", "하의", "장갑", "어깨"];
  const accText = ["목걸이", "귀걸이", "반지", "어빌리티 스톤"];

  let eqData: CustomItemsType = {
    item: data.filter((v) => itemText.includes(v.Type)).map((v) => weaponDataInfo(v)),
    acc: data.filter((v) => accText.includes(v.Type)).map((v) => getAccDataInfo(v)),
    bracelet: getBracelet(data.filter((v) => v.Type === "팔찌")),
    total_set: [],
  };

  // 에스더 무기일 경우 장갑 세트 효과를 부여
  eqData.item = eqData.item.map((v: any) => {
    if (v.grade === "에스더") { // @ts-ignore
      return {...v, set: { name: eqData.item[4].set.name, stage: eqData.item[4].set.stage }};
    }
    else return v;
  });

  // 세트 효과 구분 및 정리, 2개 이상 세트 사용시 높은 효과순으로 정렬
  eqData.total_set = Object.entries(eqData.item.reduce((acc: any, cur: any) => {
    if (!acc[cur.set.name]) acc[cur.set.name] = cur.set.stage;
    else acc[cur.set.name] += cur.set.stage;
    return acc;
  }, {})).sort((a: any, b: any) => b[1]- a[1]);

  return eqData;
};

// 무기, 방어구 정보 가공
export const weaponDataInfo = (wData: EquipmentType) => {
  const tooltip = JSON.parse(wData.Tooltip);
  const indentList = Object.values(tooltip).filter((v: any) => v.type === "IndentStringGroup");

  const item: CustomEquipmentType = {
    type: wData.Type,
    grade: wData.Grade,
    icon: wData.Icon,
    enhance: wData.Name.replace(/\D| /g, ''),
    itemLevel: tooltip.Element_001.value.leftStr2.replace(/[ㄱ-힁]|(<(.*?)>|([(](.*?)[)])|\s)/gi, ""),
    quality: tooltip.Element_001.value.qualityValue,
    set: getSetItemInfo(tooltip),
    elixir: getElixirInfo(indentList, "option"),
    total_elixir: getElixirInfo(indentList, "total"),
    transcend: getTranscend(indentList),
  };

  return item;
};

// 세트 효과 정보 추출
export const getSetItemInfo = (tooltip: any) => {
  let setInfo: any = Object.values(tooltip).filter((v: any) => v.type === "ItemPartBox").filter((v:any) => v.value.Element_000.includes("세트"));
  setInfo = setInfo[0].value.Element_001.replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)])|\s)/gi, "").split("Lv.");
  return { name: setInfo[0], stage: setInfo[1] };
};

// 엘릭서 정보 추출
export const getElixirInfo = (tooltip: any, type: string) => {
  if (type === "option") {
    let elixirList: any = tooltip
      .map((v: any) => v.value.Element_000.topStr.includes("엘릭서") ? v.value.Element_000.contentStr : "")
      .filter((v: any) => v !== "");

    if (elixirList.length > 0) {
      elixirList = Object.values(elixirList[0]).map((v: any) => v.contentStr.split('<br>'));
      elixirList = elixirList.map((v: any) => v[0].replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)])|\s)/gi, "").split("Lv."));
      return elixirList;
    }
  } else {
    const total = tooltip.filter((v: any) => v.value.Element_000.topStr.includes("연성 추가 효과"));
    if (total.length> 0) {
      return total[0]?.value.Element_000.topStr.replace(/(<(.*?)>|(\[(.*?)])|["연성 추가 효과"]|\s)/gi, "");
    }
  }
};

// 엘릭서 총합 구하기
export const TotalElixirSum = (items: CustomEquipmentType[]) => {
  const elixir_list = items.filter((v) => v.elixir).map((v) => v.elixir);
  const count = elixir_list.reduce((acc: any, cur: any) => {
    if (cur.length > 1) acc += +cur[0][1] + +cur[1][1];
    else acc += +cur[0][1];
    return acc;
  }, 0);
  return count;
};

// 엘릭서 활성화 옵션 구하기
export const ActiveElixirOption = (items: CustomEquipmentType[]) => {
  const elixir_list: CustomEquipmentType[] | [] = items.filter((v) => v.total_elixir);

  // @ts-ignore
  return elixir_list[0]?.total_elixir.replace(/[()]/g, " ").trim().split(" ");
};

// 초월 정보 추출
export const getTranscend = (tooltip: any) => {
  const transcendList = tooltip.filter((v: any) => v.value.Element_000.topStr.includes("초월"));
  if (transcendList.length > 0) {
    const option = transcendList[0].value.Element_000.topStr.replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)]))/gi, "").replace(/\s/, "").split(" ");
    return { stage: option[0], count: option[1] };
  }
};

// 초월 평균 구하기
export const TranscendAvg = (items: CustomEquipmentType[]) => {
  const transcend_list = items.filter((v) => v.transcend);

  const count = transcend_list.reduce((acc, cur) => {
    // @ts-ignore
    acc += +cur.transcend?.count;
    return acc;
  }, 0);

  return count;
};

// 악세 정보 추출
export const getAccDataInfo = (aData: EquipmentType) => {
  const tooltip = JSON.parse(aData.Tooltip);

  const item: CustomAccType = {
    type: aData.Type,
    grade: aData.Grade,
    icon: aData.Icon,
    name: aData.Name,
    quality: tooltip.Element_001.value.qualityValue,
    engraves: getEngrave(tooltip),
    stat: getStat(tooltip),
  };

  return item;
};

// 특성 정보 추출
export const getStat = (tooltip: any) => {
  let stats: any = Object.values(tooltip).filter((v: any) => v.type === "ItemPartBox");
  if (stats[1]?.value) {
    stats = stats[1].value.Element_001.split("<BR>");
    return stats;
  }
};

// 각인 정보 추출
export const getEngrave = (tooltip: any) => {
  let engraves: any = Object.values(tooltip).filter((v: any) => v.type === "IndentStringGroup");
  if (engraves.length > 0) {
    engraves = Object.values(engraves[0].value.Element_000.contentStr)
      .map((v: any) => v.contentStr.replace(/(<(.*?)>|([(](.*?)[)])|활성도|[\[\]+/])/gi, "").replace(/\s{2,}/g, " "));
    return engraves;
  }
};

// 팔찌 정보
export const getBracelet = (item: any) => {
  if (item.length <= 0) return undefined;

  const statsNames = [ "치명", "신속", "특화", "인내", "제압", "숙련" ];
  const tooltip = JSON.parse(item[0].Tooltip);
  // https://ojjy.tistory.com/106 < 정규식 참고
  /**
   * 1. 특성, 기본옵션, 추가옵션 구분 -> 방어구 구분한 방식으로 해결해야될거같음
   * 2. 특수옵션 replace 어떻게 할지 고민
   * 3. 간단한 정보랑 상세 정보 2개로 분리 -> 2번이 해결되면 쉽게 해결 가능
   * */
  let effectList = tooltip.Element_004.value.Element_001.split("<BR>").map((v: any) => v.replace(/(<(.*?)>)|[+]/gi, "").trim());

  const bracelet: CustomBraceletType = {
    type: item[0].Type,
    grade: item[0].Grade,
    icon: item[0].Icon,
    name: item[0].Name,
    stats: effectList.filter((v: any) => statsNames.includes(v.replace(/\d|\s/g, ""))),
    special_option: effectList.filter((v: any) => !statsNames.includes(v.replace(/\d|\s/g, ""))).join("").split("["),
    simple_option: [],
  };

  bracelet.simple_option = bracelet.special_option.map((v: any) => {
    if (v.includes("]")) return v.replace(/].*$/g, "");
  }).filter((v: any) => v !== undefined);

  return bracelet;
};

// 보석 정보 정렬
export const sortGemsInfo = (gems: CharacterGemsType) => {
  gems.Effects.sort((a, b) => a.GemSlot - b.GemSlot);

  const gem_list = gems.Gems.map((v, i) => {
    const gem: CustomGemType = {
      grade: v.Grade,
      icon: v.Icon,
      level: v.Level,
      name: v.Name.replace(/(<(.*?)>)/g, ""),
      type: v.Name.replace(/(<(.*?)>)|[^홍염|멸화]|/g, ""),
      skill_icon: gems.Effects[i].Icon,
      skill_name: gems.Effects[i].Name,
      skill_description: gems.Effects[i].Description
    };

    return gem;
  });

  return  {
    attack: gem_list.filter((v) => v.type === "멸화").sort((a, b) => b.level - a.level),
    reuse: gem_list.filter((v) => v.type === "홍염").sort((a, b) => b.level - a.level)
  };
};

// 품질별 색깔
export const qualityColor = (quality: number) => {
  if (quality === 100) {
    return 'bg-gold3';
  } else if (quality >= 90) {
    return 'bg-pink1';
  } else if (quality >= 70) {
    return 'bg-blue2';
  } else if (quality >= 30) {
    return 'bg-green1';
  } else if (quality >= 10) {
    return 'bg-orange1';
  } else {
    return 'bg-red1';
  }
};

// 아이템 등급별 배경 색
export const itemBackground = (grade: string) => {
  switch (grade) {
    case "고대":
      return "bg-grade2";
    case "유물":
      return "bg-grade3";
    case "전설":
      return "bg-grade4";
    case "영웅":
      return "bg-grade5";
    case "희귀":
      return "bg-grade6";
    case "에스더":
      return "bg-grade7";
    default:
      return 'bg-grade2';
  }
};
