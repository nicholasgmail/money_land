import { styler, value, pointer } from "popmotion";
import {mq, bp} from '../lib/mq';

//переменые
export const $map = document.querySelector(".section-map");

//герой на маленьких екранах точка
var $addHerose = document.createElement("div");
//создание обекта
$addHerose.classList.add("hero");
$addHerose.style.display = "none";
$map.appendChild($addHerose);
export const $addHero = document.querySelector(".hero");

//функция создания героя
export function addHero() {
  const $addHeroS = styler($addHero);  
  const $addHeroXY = value({ x: 0, y: 0 }, $addHeroS.set);
  $addHero.style.display = "block";
  $addHeroXY.get();
}

//первая точка
const $knowledgeAndExperience = document.createElement("div");
$knowledgeAndExperience.classList.add("knowledge-and-experience");
$knowledgeAndExperience.style.display = "none";
$map.appendChild($knowledgeAndExperience);

export const $sectionKnowled = document.querySelector(
  ".knowledge-and-experience"
);
export function sectionKnowled() {
  const $sectionKnowledS = styler($sectionKnowled);
  if(mq.max("small")){
  const $sectionKnowledXY = value({ x: 83, y: 48 }, $sectionKnowledS.set);
   $knowledgeAndExperience.style.display = "block";
  $sectionKnowledXY.get();
  }
  if(mq.inside(325, 420)){
  const $sectionKnowledXY = value({ x:102, y: 45 }, $sectionKnowledS.set);
   $knowledgeAndExperience.style.display = "block";
  $sectionKnowledXY.get();
  }
  if (mq.min("medium")){
  const $sectionKnowledXY = value({ x:242, y: 105 }, $sectionKnowledS.set);
   $knowledgeAndExperience.style.display = "block";
  $sectionKnowledXY.get();
  }
  if (mq.min("large")){
  const $sectionKnowledXY = value({ x:342, y: 105 }, $sectionKnowledS.set);
   $knowledgeAndExperience.style.display = "block";
  $sectionKnowledXY.get();
  }
 
}
//вторая точка
const $badLuck = document.createElement("div");
$badLuck.classList.add("bad-luck");
$badLuck.style.display = "none";
$map.appendChild($badLuck);

export const $articleBadLuck = document.querySelector(".bad-luck");

export function articleBadLuck() {
  const $articleBadLuckS = styler($articleBadLuck);
  if(mq.max("small")){
  const $articleBadLuckXY = value({ x: 46, y: 171 }, $articleBadLuckS.set);
  $articleBadLuck.style.display = "block";
  $articleBadLuckXY.get();
}
  if(mq.inside(325, 420)){
  const $articleBadLuckXY = value({ x: 65, y: 195 }, $articleBadLuckS.set);
  $articleBadLuck.style.display = "block";
  $articleBadLuckXY.get();
}
if (mq.min("medium")){
  const $articleBadLuckXY = value({ x:158, y: 392 }, $articleBadLuckS.set);
  $articleBadLuck.style.display = "block";
  $articleBadLuckXY.get();
}
if (mq.min("large")){
  const $articleBadLuckXY = value({ x:258, y: 392 }, $articleBadLuckS.set);
  $articleBadLuck.style.display = "block";
  $articleBadLuckXY.get();
}
}
//третья точка
const $needMakeMoney = document.createElement("div");
$needMakeMoney.classList.add("need-make-money");
$needMakeMoney.style.display = "none";
$map.appendChild($needMakeMoney);

export const $articleNeedMakeMoney = document.querySelector(".need-make-money");

export function articleNeedMakeMoney() {
  const $articleNeedMakeMoneyS = styler($articleNeedMakeMoney);
  if(mq.max("small")){
  const $articleNeedMakeMoneyXY = value(
    { x: 123, y: 306 },
    $articleNeedMakeMoneyS.set
  );
  $articleNeedMakeMoney.style.display = "block";
  $articleNeedMakeMoneyXY.get();
  }
  if(mq.inside(325, 420)){
  const $articleNeedMakeMoneyXY = value(
    { x: 150, y: 352 },
    $articleNeedMakeMoneyS.set
  );
  $articleNeedMakeMoney.style.display = "block";
  $articleNeedMakeMoneyXY.get();
  }
  if (mq.min("medium")){
  const $articleNeedMakeMoneyXY = value(
    { x: 336, y: 708 },
    $articleNeedMakeMoneyS.set
  );
  $articleNeedMakeMoney.style.display = "block";
  $articleNeedMakeMoneyXY.get();
  }
  if (mq.min("large")){
  const $articleNeedMakeMoneyXY = value(
    { x: 436, y: 708 },
    $articleNeedMakeMoneyS.set
  );
  $articleNeedMakeMoney.style.display = "block";
  $articleNeedMakeMoneyXY.get();
  }
}
//четвертая точка
const $assetsMakeMoney = document.createElement("div");
$assetsMakeMoney.classList.add("assets-make-money");
$assetsMakeMoney.style.display = "none";
$map.appendChild($assetsMakeMoney);

export const $articleAssetsMakeMoney = document.querySelector(
  ".assets-make-money"
);

export function articleAssetsMakeMoney() {
  const $articleAssetsMakeMoneyS = styler($articleAssetsMakeMoney);
  if(mq.max("small")){
  const $articleAssetsMakeMoneyXY = value(
    { x: -3, y: 398 },
    $articleAssetsMakeMoneyS.set
  );
  $articleAssetsMakeMoney.style.display = "block";
  $articleAssetsMakeMoneyXY.get();
  }
  if(mq.inside(325, 420)){
  const $articleAssetsMakeMoneyXY = value(
    { x: 15, y: 467 },
    $articleAssetsMakeMoneyS.set
  );
  $articleAssetsMakeMoney.style.display = "block";
  $articleAssetsMakeMoneyXY.get();
  }
  if (mq.min("medium")){
  const $articleAssetsMakeMoneyXY = value(
    { x: 80, y: 935 },
    $articleAssetsMakeMoneyS.set
  );
  $articleAssetsMakeMoney.style.display = "block";
  $articleAssetsMakeMoneyXY.get();
  }
  if (mq.min("large")){
  const $articleAssetsMakeMoneyXY = value(
    { x: 171, y: 935 },
    $articleAssetsMakeMoneyS.set
  );
  $articleAssetsMakeMoney.style.display = "block";
  $articleAssetsMakeMoneyXY.get();
  }
}
