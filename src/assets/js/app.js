import personMobile from "./component/mobile/persone";
import { mq, bp } from "./component/lib/mq";

var $ticking = false;
window.addEventListener("scroll", function (e) {
  e.preventDefault;
  var $scrollTop = document.scrollingElement.scrollTop;
  // console.dir(document.scrollingElement)
  if ($scrollTop >= 700 && !$ticking) {
    window.requestAnimationFrame(function () {
      personMobile();
      $ticking = true;
    });
  }
  
});


const anchors = document.querySelectorAll("a.section-looc__scrollto");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//const divStylerSm = styler(document.querySelector('.hero-sm'));
//const divStylerMd = styler(document.querySelector('.hero-md'));

//import { styler, keyframes, action, spring, listen, pointer, value } from "popmotion";
//const divStyler = styler(document.querySelector('.hero'));
//карта для больших экранов движения
//const divStylerLg = styler(document.querySelector(".hero-lg"));

/* const $values2 = [
  { x: 0, y: 0, rotateX: 0, rotateY: 0 },
  { x: 70, y: 34, rotateX: 0, rotateY: 0 },
  { x: 142, y: 64, rotateX: 0, rotateY: 0 },
  { x: 218, y: 93, rotateX: 0, rotateY: 0 },
  { x: 313, y: 137, rotateX: 0, rotateY: 0 },
  { x: 388, y: 166, rotateX: 0, rotateY: 0 },
  { x: 479, y: 207, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 389, y: 268, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 314, y: 313, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 225, y: 330, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 133, y: 358, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 66, y: 385, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: -1, y: 410, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: -47, y: 427, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: -117, y: 476, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: -117, y: 476, rotateX: 0, rotateY: 0, scaleX: 1, scaleY: 1 },
  { x: -32, y: 547, rotateX: 0, rotateY: 0 },
  { x: 29, y: 594, rotateX: 0, rotateY: 0 },
  { x: 89, y: 615, rotateX: 0, rotateY: 0 },
  { x: 141, y: 624, rotateX: 0, rotateY: 0 },
  { x: 170, y: 641, rotateX: 0, rotateY: 0 },
  { x: 222, y: 660, rotateX: 0, rotateY: 0 },
  { x: 271, y: 687, rotateX: 0, rotateY: 0 },
  { x: 319, y: 709, rotateX: 0, rotateY: 0 },
  { x: 379, y: 733, rotateX: 0, rotateY: 0 },
  { x: 442, y: 758, rotateX: 0, rotateY: 0 },
  { x: 474, y: 771, rotateX: 0, rotateY: 0 },
  { x: 474, y: 771, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 450, y: 810, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 410, y: 841, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 378, y: 868, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 340, y: 883, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 285, y: 896, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 220, y: 915, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 150, y: 928, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 115, y: 974, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 109, y: 1011, rotateX: 0, rotateY: 0 },
  { x: 129, y: 1045, rotateX: 0, rotateY: 0 },
  { x: 156, y: 1102, rotateX: 0, rotateY: 0 },
]; */

/* import { styler, listen, value, pointer } from 'popmotion';
 const $value = []; 

const ball = document.querySelector(".hero2");
const ball2 = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ball2.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
    $value.push(ballXY.get());
    console.dir($value);  
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ballXY.stop();
  });    */
