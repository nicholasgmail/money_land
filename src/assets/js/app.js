//старий вариант анимации easing, keyframes,
//import { styler } from 'popmotion';
//import { render } from 'node-sass';

/* const anchors = document.querySelectorAll('a.section-looc__scrollto')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
} */


//const divStylerSm = styler(document.querySelector('.hero-sm'));
//const divStylerMd = styler(document.querySelector('.hero-md'));

import { styler, keyframes, action, spring, listen, pointer, value } from "popmotion";
const divStyler = styler(document.querySelector('.hero'));
//карта для больших экранов движения
const divStylerLg = styler(document.querySelector(".hero-lg"));


const $values2 = [{ x: 0, y: 0, rotateX: 0, rotateY: 0 },
  { x: 70, y: 34, rotateX: 0, rotateY: 0 },
  { x: 142, y: 64, rotateX: 0, rotateY: 0 },
  { x: 218, y: 93, rotateX: 0, rotateY: 0 },
  { x: 313, y: 137, rotateX: 0, rotateY: 0 },
  { x: 388, y: 166, rotateX: 0, rotateY: 0 },
  { x: 479, y: 207, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 389, y: 268, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 314, y: 313, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 225, y: 330, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 133, y: 358, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 66, y: 385, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: -1, y: 410, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: -47, y: 427, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: -117, y: 476, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: -117, y: 476, rotateX: 0, rotateY: 0, scaleX: 1, scaleY: 1  },
  { x: -32, y: 547, rotateX: 0, rotateY: 0},
  { x: 29, y: 594, rotateX: 0, rotateY: 0 },
  { x: 89, y: 615, rotateX: 0, rotateY: 0 },
  { x: 141, y: 624, rotateX: 0, rotateY: 0 },
  { x: 170, y: 641, rotateX: 0, rotateY: 0 },
  { x: 222, y: 660, rotateX: 0, rotateY: 0 },
  { x: 271, y: 687, rotateX: 0, rotateY: 0 },
  { x: 319, y: 709, rotateX: 0, rotateY: 0 },
  { x: 379, y: 733, rotateX: 0, rotateY: 0 },
  { x: 442, y: 758, rotateX: 0, rotateY: 0 },
  { x: 474, y: 771, rotateX: 0, rotateY: 0},
  { x: 474, y: 771, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 450, y: 810, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1 },
  { x: 410, y: 841, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 378, y: 868, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 340, y: 883, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 285, y: 896, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 220, y: 915, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 150, y: 928, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 115, y: 974, rotateX: 0, rotateY: 0, scaleX: -1, scaleY: 1  },
  { x: 109, y: 1011, rotateX: 0, rotateY: 0 },
  { x: 129, y: 1045, rotateX: 0, rotateY: 0 },
  { x: 156, y: 1102, rotateX: 0, rotateY: 0 }];

var $values = [
  {x: 0, y: 0},
  {x: 39, y: 10},
  {x: 63, y: 15},
  {x: 79, y: 25},
  {x: 98, y: 31},
  {x: 120, y: 42},
  {x: 140, y: 50},
  {x: 157, y: 57},
  {x: 169, y: 63},
  {x: 183, y: 72},
   {x: 202, y: 78},
   {x: 211, y: 85},
   {x: 211, y: 85, scaleX: -1, scaleY: 1},
   {x: 208, y: 100, scaleX: -1, scaleY: 1},
   {x: 195, y: 107, scaleX: -1, scaleY: 1},
   {x: 177, y: 112, scaleX: -1, scaleY: 1},
   {x: 165, y: 120, scaleX: -1, scaleY: 1},
   {x: 150, y: 124, scaleX: -1, scaleY: 1},
   {x: 140, y: 128, scaleX: -1, scaleY: 1},
   {x: 123, y: 132, scaleX: -1, scaleY: 1},
   {x: 113, y: 138, scaleX: -1, scaleY: 1},
   {x: 97, y: 141, scaleX: -1, scaleY: 1},
   {x: 82, y: 146, scaleX: -1, scaleY: 1},
   {x: 69, y: 150, scaleX: -1, scaleY: 1},
   {x: 59, y: 153, scaleX: -1, scaleY: 1},
   {x: 49, y: 156, scaleX: -1, scaleY: 1},
   {x: 36, y: 160, scaleX: -1, scaleY: 1},
   {x: 23, y: 164, scaleX: -1, scaleY: 1},
   {x: 11, y: 168, scaleX: -1, scaleY: 1},
   {x: 4, y: 174, scaleX: -1, scaleY: 1},
   {x: -5, y: 179, scaleX: -1, scaleY: 1},
   {x: -10, y: 185, scaleX: -1, scaleY: 1},
   {x: -10, y: 185, scaleX: -1, scaleY: 1},
   {x: -10, y: 185, scaleX: -1, scaleY: 1},
   {x: -21, y: 191, scaleX: -1, scaleY: 1},
   {x: -25, y: 198, scaleX: -1, scaleY: 1},
   {x: -26, y: 210, scaleX: -1, scaleY: 1},
   {x: -26, y: 210, scaleX: 1, scaleY: 1},
   {x: -21, y: 219},
   {x: -9, y: 228},
   {x: -5, y: 233},
   {x: 8, y: 240},
   {x: 20, y: 246},
   {x: 33, y: 250},
   {x: 44, y: 254},
   {x: 53, y: 256},
   {x: 66, y: 258},
   {x: 78, y: 264},
   {x: 89, y: 268},
   {x: 104, y: 275},
   {x: 112, y: 279},
   {x: 124, y: 286},
   {x: 134, y: 289},
   {x: 150, y: 295},
   {x: 157, y: 296},
   {x: 179, y: 302},
   {x: 197, y: 311},
   {x: 210, y: 316},
   {x: 215, y: 329},
   {x: 215, y: 329, scaleX: -1, scaleY: 1},
   {x: 204, y: 342, scaleX: -1, scaleY: 1},
   {x: 199, y: 353, scaleX: -1, scaleY: 1},
   {x: 180, y: 358, scaleX: -1, scaleY: 1},
   {x: 153, y: 359, scaleX: -1, scaleY: 1},
   {x: 146, y: 368, scaleX: -1, scaleY: 1},
   {x: 130, y: 375, scaleX: -1, scaleY: 1},
   {x: 115, y: 379, scaleX: -1, scaleY: 1},
   {x: 98, y: 385, scaleX: -1, scaleY: 1},
   {x: 78, y: 391, scaleX: -1, scaleY: 1},
   {x: 61, y: 405, scaleX: -1, scaleY: 1},
   {x: 59, y: 423, scaleX: -1, scaleY: 1},
   {x: 66, y: 445, scaleX: -1, scaleY: 1},
   {x: 81, y: 461, scaleX: -1, scaleY: 1},
   {x: 84, y: 471, scaleX: -1, scaleY: 1},
   {x: 83, y: 492, scaleX: -1, scaleY: 1},
   {x: 88, y: 515, scaleX: -1, scaleY: 1},
   {x: 92, y: 548, scaleX: -1, scaleY: 1},
   {x: 94, y: 568, scaleX: -1, scaleY: 1},
   {x: 96, y: 594, scaleX: -1, scaleY: 1},
   {x: 98, y: 622, scaleX: -1, scaleY: 1},
   {x: 98, y: 622, scaleX: 1, scaleY: 1},
   {x: 100, y: 657},
   {x: 100, y: 670},
   {x: 101, y: 702},
   {x: 101, y: 734},
   {x: 101, y: 757},
   {x: 103, y: 784},
   {x: 97, y: 830},
   {x: 94, y: 862},
   {x: 92, y: 888},
   {x: 92, y: 888, scaleX: .5, scaleY: .5},
   {x: 92, y: 888, scaleX: 0, scaleY: 0},
  ]
const $value = [];
var $map = document.querySelector('.section-map');
var  $knowledgeAndExperience = document.createElement('div');
  $knowledgeAndExperience.classList.add("knowledge-and-experience");
  $map.appendChild($knowledgeAndExperience);
/* const ball = document.querySelector(".knowledge-and-experience");
const ball2 = styler(document.querySelector(".knowledge-and-experience"));
const ballXY = value({ x: 83, y: 48 }, ball2.set);

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
  });  */
 const $sectionKnowled = document.querySelector(".knowledge-and-experience");
  const $sectionKnowledS = styler($sectionKnowled);
  const $sectionKnowledXY = value({ x: 83, y: 48 }, $sectionKnowledS.set);
  pointer($sectionKnowledXY.get()).start((e)=>{
    e.preventDefault();
    $value.push($sectionKnowledXY.get());
  });

function addSectionKnowled(){
    
var  $seeOpportunities = document.createElement('div');
$seeOpportunities.classList.add("see-opportunities");
  $map.appendChild($seeOpportunities);
    const $seeOpportunitie = document.querySelector(".see-opportunities");
    const $seeOpportunitiesS = styler($seeOpportunitie);
    const $seeOpportunitiesXY = value({ x: 98, y: 42 }, $seeOpportunitiesS.set);

      $value.push($seeOpportunitiesXY.get());      
    
  }

keyframes({
  values: $values,
  duration: 20000,
  //easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
})
.start({
  update: (v) => {
    divStyler.set(v);
    if(Math.round(v.x) == 79 && Math.round(v.y) == 25) {
      $sectionKnowled.remove();
      addSectionKnowled();
    };
  },
  complete: () => console.log('hello')
}); 
