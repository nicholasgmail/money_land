import { styler, value } from "popmotion";
import {mq, bp} from '../lib/mq';

var $map = document.querySelector(".section-map");

//функция експорта замена первой контрольной точки
var $seeOpportunities = document.createElement("div");
  //создание обекта
  $seeOpportunities.classList.add("see-opportunities");
  $map.appendChild($seeOpportunities);
  const $seeOpportunitie = document.querySelector(".see-opportunities");
  $seeOpportunitie.style.display = "none";

export function addSectionKnowled() {
   //изменение первой контрольной точки
   if(mq.max("small")){
  const $seeOpportunitiesS = styler($seeOpportunitie);
  const $seeOpportunitiesXY = value({ x: 98, y: 42 }, $seeOpportunitiesS.set);
  $seeOpportunitie.style.display = "block";
  $seeOpportunitiesXY.get();
   }
   if(mq.inside(325, 420)){
    const $seeOpportunitiesS = styler($seeOpportunitie);
    const $seeOpportunitiesXY = value({ x: 128, y: 48 }, $seeOpportunitiesS.set);
    $seeOpportunitie.style.display = "block";
    $seeOpportunitiesXY.get();
   }
   if(mq.min("medium")){
    const $seeOpportunitiesS = styler($seeOpportunitie);
    const $seeOpportunitiesXY = value({ x: 378, y: 108 }, $seeOpportunitiesS.set);
    $seeOpportunitie.style.display = "block";
    $seeOpportunitiesXY.get();
   }
}


//изменение второй контрольной точки
var $makeDeals = document.createElement("div");
  //создание обекта
$makeDeals.classList.add("make-deals");
  $map.appendChild($makeDeals);
  const $makeDeal = document.querySelector(".make-deals");
  $makeDeal.style.display = "none";
//функция експорта замена второй контрольной точки 
export function addMakeDeals() {
  if(mq.max("small")){
  const $makeDealS = styler($makeDeal);
  const $makeDealXY = value({ x: -15, y: 162 }, $makeDealS.set);
  $makeDeal.style.display = "block";
  $makeDealXY.get();
  }
  if(mq.inside(325, 420)){
  const $makeDealS = styler($makeDeal);
  const $makeDealXY = value({ x: 0, y: 195 }, $makeDealS.set);
  $makeDeal.style.display = "block";
  $makeDealXY.get();
  }
  if(mq.min("medium")){
  const $makeDealS = styler($makeDeal);
  const $makeDealXY = value({ x:145, y: 380 }, $makeDealS.set);
  $makeDeal.style.display = "block";
  $makeDealXY.get();
  }
}


 //создание обекта
 var $buyAssets = document.createElement("div"); 
  $buyAssets.classList.add("buy-assets");
  $map.appendChild($buyAssets);
  const $buyAsset = document.querySelector(".buy-assets");
  $buyAsset.style.display = "none";

//функция експорта замена первой контрольной точки  
export function addBuyAsset() {
  //изменение третья контрольной точки
  if(mq.max("small")){
  const $buyAssetS = styler($buyAsset);
  const $buyAssetXY = value({ x: 142, y: 298 }, $buyAssetS.set);
  $buyAsset.style.display = "block";
  $buyAssetXY.get();
  }
  if(mq.inside(325, 420)){
    const $buyAssetS = styler($buyAsset);
    const $buyAssetXY = value({ x: 172, y: 350 }, $buyAssetS.set);
    $buyAsset.style.display = "block";
    $buyAssetXY.get();
  }
  if(mq.min("medium")){
    const $buyAssetS = styler($buyAsset);
    const $buyAssetXY = value({ x: 482, y: 700 }, $buyAssetS.set);
    $buyAsset.style.display = "block";
    $buyAssetXY.get();
  }
}

//изменение четвертая контрольной точки
var $passiveIncome = document.createElement("div");
  //создание обекта
  $passiveIncome.classList.add("passive-income");
  $map.appendChild($passiveIncome);
  const $passiveIncom = document.querySelector(".passive-income");
  $passiveIncom.style.display = "none";
//функция експорта замена первой контрольной точки

export function addPassiveIncom() {
  if(mq.max("small")){
  const $passiveIncomS = styler($passiveIncom);
  const $passiveIncomXY = value({ x: -35, y: 399 }, $passiveIncomS.set);
  $passiveIncom.style.display = "block";
  $passiveIncomXY.get();
  }
  if(mq.inside(325, 420)){
    const $passiveIncomS = styler($passiveIncom);
  const $passiveIncomXY = value({ x: -15, y: 460 }, $passiveIncomS.set);
  $passiveIncom.style.display = "block";
  $passiveIncomXY.get();
  }
  if(mq.min("medium")){
    const $passiveIncomS = styler($passiveIncom);
  const $passiveIncomXY = value({ x: 100, y: 930 }, $passiveIncomS.set);
  $passiveIncom.style.display = "block";
  $passiveIncomXY.get();
  }
}
