import { EquipmentType } from "../type/character";
import { set } from "immutable";

// string sum
export const sumString = (s1: string, s2: string) => {
  if (s1 && s2) return +s1 + +s2;
};

// 장비 데이터 재가공
export const equipmentDataUpdate = (data: EquipmentType[]) => {
  const itemText = ["무기", "투구", "상의", "하의", "장갑", "어깨"];
  const accText = ["목걸이", "귀걸이", "반지", "어빌리티 스톤"];

  let eqData: any = {
    item: data.filter((v) => itemText.includes(v.Type)).map((v) => weaponDataInfo(v)),
    acc: data.filter((v) => accText.includes(v.Type)),
    total_set: [],
  };

  // 에스더 무기일 경우 장갑 세트 효과를 부여
  eqData.item = eqData.item.map((v: any) => {
    if (v.grade === "에스더") return {...v, set: { name: eqData.item[4].set.name, stage: eqData.item[4].set.stage}};
    else return v;
  });

  // 세트 효과 구분 및 정리
  eqData.total_set = Object.entries(eqData.item.reduce((acc: any, cur: any) => {
    if (!acc[cur.set.name]) acc[cur.set.name] = cur.set.stage;
    else acc[cur.set.name] += cur.set.stage;
    return acc;
  }, {}));

  return eqData;
};

// 무기, 방어구 정보 가공
export const weaponDataInfo = (wData: EquipmentType) => {
  const tooltip = JSON.parse(wData.Tooltip);
  const indentList = Object.entries(tooltip).filter((v: any) => v[1].type === "IndentStringGroup");

  const item = {
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
  let setInfo: any = Object.entries(tooltip).filter((v: any) => v[1].type === "ItemPartBox").filter((v:any) => v[1].value.Element_000.includes("세트"));
  setInfo = setInfo[0][1].value.Element_001.replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)])|\s)/gi, "").split("Lv.");
  return { name: setInfo[0], stage: setInfo[1] };
}

// 엘릭서 정보 추출
export const getElixirInfo = (tooltip: any, type: string) => {
  if (type === "option") {
    let elixirList: any = tooltip
      .map((v: any) => v[1].value.Element_000.topStr.includes("엘릭서") ? v[1].value.Element_000.contentStr : "")
      .filter((v: any) => v !== "");

    if (elixirList.length > 0) {
      elixirList = Object.values(elixirList[0]).map((v: any) => v.contentStr.split('<br>'));
      elixirList = elixirList.map((v: any) => v[0].replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)])|\s)/gi, "").split("Lv."));
      return elixirList;
    }
  } else {
    const total = tooltip.filter((v: any) => v[1].value.Element_000.topStr.includes("연성 추가 효과"));
    if (total.length> 0) {
      return total[0][1]?.value.Element_000.topStr.replace(/(<(.*?)>|(\[(.*?)])|["연성 추가 효과"]|\s)/gi, "");
    }
  }
};

// 초월 정보 추출
export const getTranscend = (tooltip: any) => {
  const transcendList = tooltip.filter((v: any) => v[1].value.Element_000.topStr.includes("초월"));
  if (transcendList.length > 0) {
    const option = transcendList[0][1].value.Element_000.topStr.replace(/(<(.*?)>|([(](.*?)[)])|(\[(.*?)]))/gi, "").replace(/\s/, "").split(" ");
    return { stage: option[0], count: option[1] };
  }
}

export const qualityColor = (quality: number) => {
  if (quality === 100) {
    return 'bg-quGold';
  } else if (quality >= 90) {
    return 'bg-quPink';
  } else if (quality >= 70) {
    return 'bg-quBlue';
  } else if (quality >= 30) {
    return 'bg-quGreen';
  } else if (quality >= 10) {
    return 'bg-quOrange';
  } else {
    return 'bg-quRed';
  }
}

export const itemBackground = (code: string) => {
  switch (code) {
    case '#F99200':
      return 'bg-grade4';
    case '#FA5D00':
      return 'bg-grade3';
    case '#E3C7A1':
      return 'bg-grade2';
    case '#00B0FA':
      return 'bg-grade5';
    case '#ce43fc':
      return 'bg-grade6';
    default:
      return 'bg-grade2';
  }
}

export const findCharacterInfo = (target: any, variable: any) => {
  const items: any = {};
  const chopFront = target.substring(target.search(variable)+variable.length, target.length);
  const itemNameList = chopFront.substring(chopFront.search(`"type"`), chopFront.search(`},`));
  const itemName = itemNameList.substring(itemNameList.search('#'), itemNameList.search('</FONT>'));
  // 장비, 각인 이름 가져오기
  if (itemName) {
    // 색깔 + 이름
    const name = itemName.split("'>");
    items.color = name[0];
    items.name = name[1];
  } else {
    // 장착한 각인
    const engraveList = itemNameList.substring(itemNameList.search('value'), itemNameList.search('value') + 20);
    const engrave = engraveList.split(':');
    items.name = engrave[1].replace(/\n|\r|\s|\"*/g, "");
  }
  // 장착한 장비 상세 정보 (품질, 등급 등등)
  const itemDetail = changeHtmlToJson(chopFront, '"Element_001":', '"Element_002"');
  let itemType = '';
  // 장비, 악세, 각인 구분해서 상태별로 푸시
  if (itemDetail.leftStr0) {
    if (itemDetail.leftStr0.search(/목걸이|귀걸이|반지/) > 0) {
      // 장신구 특성 정리
      const effects = changeHtmlToJson(chopFront, '"Element_005":', '"Element_006"');

      items.quality = itemDetail.qualityValue;
      items.quality_color = qualityColor(itemDetail.qualityValue);
      items.effect = effects.Element_001.replace(/<BR>/g, ' ').replace(/[+]/g, ''); // 특성
      items.engraves = searchEngraves(chopFront);
      itemType = 'acc';
    } else if (itemDetail.leftStr0.search('스톤') > 0) {
      const healthData = changeHtmlToJson(chopFront, '"Element_004":', '"Element_005"');

      items.engraves = searchEngraves(chopFront);
      items.health = healthData.Element_001;
      items.quality = items.engraves.join(',').replace(/[ㄱ-힁]| /g, '').replace(/[,]/g, ' ');
      items.quality_color = 'bg-quPink';
      itemType = 'stone';
    } else if (itemDetail.leftStr0.search('팔찌') > 0) {
      const effects = changeHtmlToJson(chopFront, '"Element_004":', '"Element_005"');
      const list = effects.Element_001.replace(/<BR>/g, 'ㅢ').replace(/#f9f7d0|#99ff99|#969696|-6|-5|'20'|[a-z]|[\[\]#<>'"_=/-]/gi, '').replace(/ +/g, ' ').split('ㅢ');

      items.effects = list;
      itemType = 'bracelet';
    } else {
      const setLevelData = changeHtmlToJson(chopFront, '"Element_008":', '"Element_009"');

      items.level = itemDetail.leftStr2.substring(itemDetail.leftStr2.indexOf('레벨 '), itemDetail.leftStr2.indexOf(' ('));
      items.set_level = setLevelData.Element_001 ? setLevelData.Element_001.replace(/FONT|COLOR|FFD200|[=<>/'#]| */g, '') : '';
      items.quality = itemDetail.qualityValue;
      items.quality_color = qualityColor(itemDetail.qualityValue);
      itemType = 'equ';
    }
  }
  return [itemType, items];
  // 팔찌 효과 정보 => Element_004
  // console.log(itemDetail);
}

export const searchEngraves = (list: string) => {
  const engraveHtml = list.substring(list.search(`"Element_006":`), list.search(`"Element_007"`)).split('value":')[1];
  const engraveJson = JSON.parse(engraveHtml.substring(engraveHtml.search('"contentStr":'), engraveHtml.search('"topStr"')).replace('"contentStr": ', '').replace(/,\s*$/, ''));

  const enList = [];
  engraveJson.Element_000 ? enList.push(replaceText(engraveJson.Element_000.contentStr)) : '';
  engraveJson.Element_001 ? enList.push(replaceText(engraveJson.Element_001.contentStr)) : '';
  engraveJson.Element_002 ? enList.push(replaceText(engraveJson.Element_002.contentStr)) : '';

  return enList;
}

const replaceText = (text: string) => {
  return text.replace(/활성화|[\[\]<>+.,"'=#/]|FE2E2E|[a-z]|활성도 /ig, '').replace(/ /, '');
}

export const changeHtmlToJson = (html: string, range1: string, range2: string) => {
  const changeHtml = html.substring(html.search(range1), html.search(range2)).split('value":');
  const info = JSON.parse(changeHtml[1].replace('},', ''));

  return info;
}

export const findGemEffect = (script: any, gemImgList: any, gemEffectsList: any) => {
  const gemList: any = [];
  const effectList: any = [];
  gemImgList.each((i: any, el: any) => {
    const variable = el.attribs['data-item'] + `":`;
    const chopFront = script.substring(script.search(variable)+variable.length, script.length);
    const gemName = changeHtmlToJson(chopFront, '"Element_000":', '"Element_001"');
    const imgData = {
      name: gemName.replace(/[^0-9ㄱ-힁 ]|99200/gi, '').replace(/ +/, ''),
      url: el.children[3].children[0].attribs.src,
      level: Number(gemName.replace(/[^0-9]|99200/g, '')),
      type: gemName.replace(/[^0-9ㄱ-힁 ]|99200/gi, '').replace(/레벨|의|보석|[0-9]| /g, '')
    }
    gemList.push(imgData);
  })
  gemEffectsList.each((i: any, el: any) => {
    const effectData = {
      skill_img: el.children[1].children[1].attribs.src,
      skill_name: el.children[3].children[0].data,
      gemEffect: el.children[5].children[1].data.replace(/ /, '')
    }
    effectList.push(effectData);
  })
  for (let i = 0; i < gemList.length; i++) {
    Object.assign(gemList[i], effectList[i]);
  }
  gemList.sort((a: any, b: any) => {
    return b.level - a.level
  })
  gemList.sort((a: any, b: any) => {
    return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
  })
  return gemList;
}
