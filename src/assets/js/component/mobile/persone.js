// Single target
import { keyframes, styler } from "popmotion";

import $maps from "../lib/map";
import * as create from "./create";
import {
  addSectionKnowled,
  addMakeDeals,
  addBuyAsset,
  addPassiveIncom,
} from "./function";
import mq from "../lib/mq";

//движение по маленькой карте
export default function personMobile() {
  //рисование 
  create.addHero();
  create.sectionKnowled();
  create.articleBadLuck();
  create.articleAssetsMakeMoney();
  create.articleNeedMakeMoney();

  setTimeout(function () {
    keyframes({
      values: $maps,
      duration: 20000,
    }).start({
      update: (v) => {
        const $divHero = styler(create.$addHero);
        $divHero.set(v);
        if (Math.round(v.x) == 79 && Math.round(v.y) == 25 && mq.max("small")) {
          create.$sectionKnowled.remove();
          addSectionKnowled();
        }
        if (Math.round(v.x) == 79 && Math.round(v.y) == 25 && mq.inside(325, 420)) {
          create.$sectionKnowled.remove();
          addSectionKnowled();
        }
        if (Math.round(v.x) == 288 && Math.round(v.y) == 95 && mq.min("medium")) {
          create.$sectionKnowled.remove();
          addSectionKnowled();
        }
        if (Math.round(v.x) == 36 && Math.round(v.y) == 160 && mq.max("small")) {
          create.$articleBadLuck.remove();
          addMakeDeals();
        }
        if (Math.round(v.x) == 122 && Math.round(v.y) == 160 && mq.inside(325, 420)) {
          create.$articleBadLuck.remove();
          addMakeDeals();
        }
        if (Math.round(v.x) == 194 && Math.round(v.y) == 362 && mq.min("medium"))  {
          create.$articleBadLuck.remove();
          addMakeDeals();
        }
        if (Math.round(v.x) == 157 && Math.round(v.y) == 296 && mq.max("small")) {
          create.$articleNeedMakeMoney.remove();
          addBuyAsset();
        }
        if (Math.round(v.x) == 62 && Math.round(v.y) == 306 && mq.inside(325, 420)) {
          create.$articleNeedMakeMoney.remove();
          addBuyAsset();
        }
        if (Math.round(v.x) == 285 && Math.round(v.y) == 671 && mq.min("medium"))  {
          create.$articleNeedMakeMoney.remove();
          addBuyAsset();
        }
        if (Math.round(v.x) == 61 && Math.round(v.y) == 405 && mq.max("small")) {
          create.$articleAssetsMakeMoney.remove();
          addPassiveIncom();
        }
        if (Math.round(v.x) == 126 && Math.round(v.y) == 447 && mq.inside(325, 420)) {
          create.$articleAssetsMakeMoney.remove();
          addPassiveIncom();
        }
        if (Math.round(v.x) == 311 && Math.round(v.y) == 895 && mq.min("medium"))  {
          create.$articleAssetsMakeMoney.remove();
          addPassiveIncom();
        }
      },
      complete: () => {},
    });
  }, 4000);
}
