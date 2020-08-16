import { mq, bp } from "./mq";

if (mq.max("small")) {
  var $maps = [
    { x: 0, y: 0 },
    { x: 39, y: 10 },
    { x: 63, y: 15 },
    { x: 79, y: 25 },
    { x: 98, y: 31 },
    { x: 120, y: 42 },
    { x: 140, y: 50 },
    { x: 157, y: 57 },
    { x: 169, y: 63 },
    { x: 183, y: 72 },
    { x: 202, y: 78 },
    { x: 211, y: 85 },
    { x: 211, y: 85, scaleX: -1, scaleY: 1 },
    { x: 208, y: 100, scaleX: -1, scaleY: 1 },
    { x: 195, y: 107, scaleX: -1, scaleY: 1 },
    { x: 177, y: 112, scaleX: -1, scaleY: 1 },
    { x: 165, y: 120, scaleX: -1, scaleY: 1 },
    { x: 150, y: 124, scaleX: -1, scaleY: 1 },
    { x: 140, y: 128, scaleX: -1, scaleY: 1 },
    { x: 123, y: 132, scaleX: -1, scaleY: 1 },
    { x: 113, y: 138, scaleX: -1, scaleY: 1 },
    { x: 97, y: 141, scaleX: -1, scaleY: 1 },
    { x: 82, y: 146, scaleX: -1, scaleY: 1 },
    { x: 69, y: 150, scaleX: -1, scaleY: 1 },
    { x: 59, y: 153, scaleX: -1, scaleY: 1 },
    { x: 49, y: 156, scaleX: -1, scaleY: 1 },
    { x: 36, y: 160, scaleX: -1, scaleY: 1 },
    { x: 23, y: 164, scaleX: -1, scaleY: 1 },
    { x: 11, y: 168, scaleX: -1, scaleY: 1 },
    { x: 4, y: 174, scaleX: -1, scaleY: 1 },
    { x: -5, y: 179, scaleX: -1, scaleY: 1 },
    { x: -10, y: 185, scaleX: -1, scaleY: 1 },
    { x: -10, y: 185, scaleX: -1, scaleY: 1 },
    { x: -10, y: 185, scaleX: -1, scaleY: 1 },
    { x: -21, y: 191, scaleX: -1, scaleY: 1 },
    { x: -25, y: 198, scaleX: -1, scaleY: 1 },
    { x: -26, y: 210, scaleX: -1, scaleY: 1 },
    { x: -26, y: 210, scaleX: 1, scaleY: 1 },
    { x: -21, y: 219 },
    { x: -9, y: 228 },
    { x: -5, y: 233 },
    { x: 8, y: 240 },
    { x: 20, y: 246 },
    { x: 33, y: 250 },
    { x: 44, y: 254 },
    { x: 53, y: 256 },
    { x: 66, y: 258 },
    { x: 78, y: 264 },
    { x: 89, y: 268 },
    { x: 104, y: 275 },
    { x: 112, y: 279 },
    { x: 124, y: 286 },
    { x: 134, y: 289 },
    { x: 150, y: 295 },
    { x: 157, y: 296 },
    { x: 179, y: 302 },
    { x: 197, y: 311 },
    { x: 210, y: 316 },
    { x: 215, y: 329 },
    { x: 215, y: 329, scaleX: -1, scaleY: 1 },
    { x: 204, y: 342, scaleX: -1, scaleY: 1 },
    { x: 199, y: 353, scaleX: -1, scaleY: 1 },
    { x: 180, y: 358, scaleX: -1, scaleY: 1 },
    { x: 153, y: 359, scaleX: -1, scaleY: 1 },
    { x: 146, y: 368, scaleX: -1, scaleY: 1 },
    { x: 130, y: 375, scaleX: -1, scaleY: 1 },
    { x: 115, y: 379, scaleX: -1, scaleY: 1 },
    { x: 98, y: 385, scaleX: -1, scaleY: 1 },
    { x: 78, y: 391, scaleX: -1, scaleY: 1 },
    { x: 61, y: 405, scaleX: -1, scaleY: 1 },
    { x: 59, y: 423, scaleX: -1, scaleY: 1 },
    { x: 66, y: 445, scaleX: -1, scaleY: 1 },
    { x: 81, y: 461, scaleX: -1, scaleY: 1 },
    { x: 84, y: 471, scaleX: -1, scaleY: 1 },
    { x: 83, y: 492, scaleX: -1, scaleY: 1 },
    { x: 88, y: 515, scaleX: -1, scaleY: 1 },
    { x: 92, y: 548, scaleX: -1, scaleY: 1 },
    { x: 94, y: 568, scaleX: -1, scaleY: 1 },
    { x: 96, y: 594, scaleX: -1, scaleY: 1 },
    { x: 98, y: 622, scaleX: -1, scaleY: 1 },
    { x: 98, y: 622, scaleX: 1, scaleY: 1 },
    { x: 100, y: 657 },
    { x: 100, y: 670 },
    { x: 101, y: 702 },
    { x: 101, y: 734 },
    { x: 101, y: 757 },
    { x: 103, y: 784 },
    { x: 97, y: 830 },
    { x: 94, y: 862 },
    { x: 92, y: 888 },
    { x: 92, y: 888, scaleX: 0.5, scaleY: 0.5 },
    { x: 92, y: 888, scaleX: 0, scaleY: 0 },
  ];
}
if (mq.inside(325, 420)) {
  var $maps = [
    { x: 0, y: 0 },
    { x: 58, y: 12 },
    { x: 81, y: 26 },
    { x: 102, y: 30 },
    { x: 130, y: 43 },
    { x: 153, y: 56 },
    { x: 180, y: 64 },
    { x: 198, y: 73 },
    { x: 212, y: 77 },
    { x: 235, y: 88 },
    { x: 254, y: 98, scaleX: -1, scaleY: 1 },
    { x: 251, y: 112, scaleX: -1, scaleY: 1 },
    { x: 239, y: 124, scaleX: -1, scaleY: 1 },
    { x: 222, y: 136, scaleX: -1, scaleY: 1 },
    { x: 206, y: 140, scaleX: -1, scaleY: 1 },
    { x: 190, y: 147, scaleX: -1, scaleY: 1 },
    { x: 160, y: 153, scaleX: -1, scaleY: 1 },
    { x: 145, y: 157, scaleX: -1, scaleY: 1 },
    { x: 122, y: 160, scaleX: -1, scaleY: 1 },
    { x: 107, y: 167, scaleX: -1, scaleY: 1 },
    { x: 95, y: 171, scaleX: -1, scaleY: 1 },
    { x: 85, y: 178, scaleX: -1, scaleY: 1 },
    { x: 76, y: 183, scaleX: -1, scaleY: 1 },
    { x: 50, y: 193, scaleX: -1, scaleY: 1 },
    { x: 11, y: 202, scaleX: -1, scaleY: 1 },
    { x: -10, y: 216, scaleX: -1, scaleY: 1 },
    { x: -28, y: 231, scaleX: -1, scaleY: 1 },
    { x: -25, y: 253, scaleX: -1, scaleY: 1 },
    { x: -13, y: 267 },
    { x: -13, y: 267 },
    { x: -6, y: 275 },
    { x: 22, y: 287 },
    { x: 39, y: 296 },
    { x: 62, y: 306 },
    { x: 92, y: 315 },
    { x: 117, y: 322 },
    { x: 135, y: 331 },
    { x: 155, y: 338 },
    { x: 167, y: 346 },
    { x: 206, y: 364 },
    { x: 254, y: 370 },
    { x: 254, y: 393, scaleX: -1, scaleY: 1 },
    { x: 243, y: 412, scaleX: -1, scaleY: 1 },
    { x: 231, y: 418, scaleX: -1, scaleY: 1 },
    { x: 206, y: 424, scaleX: -1, scaleY: 1 },
    { x: 192, y: 431, scaleX: -1, scaleY: 1 },
    { x: 160, y: 446, scaleX: -1, scaleY: 1 },
    { x: 126, y: 447, scaleX: -1, scaleY: 1 },
    { x: 118, y: 451, scaleX: -1, scaleY: 1 },
    { x: 80, y: 473, scaleX: -1, scaleY: 1 },
    { x: 82, y: 510 },
    { x: 102, y: 543 },
    { x: 109, y: 583 },
    { x: 113, y: 619 },
    { x: 113, y: 690 },
    { x: 111, y: 726 },
    { x: 104, y: 950 },
  ];
}
if (mq.min("medium")) {
  var $maps = [
    { x: 0, y: 0 },
    { x: 31, y: 10 },
    { x: 64, y: 20 },
    { x: 112, y: 36 },
    { x: 159, y: 43 },
    { x: 186, y: 59 },
    { x: 216, y: 72 },
    { x: 251, y: 75 },
    { x: 288, y: 95 },
    { x: 317, y: 110 },
    { x: 351, y: 125 },
    { x: 408, y: 155 },
    { x: 489, y: 194 },
    { x: 531, y: 213 },
    { x: 531, y: 213, scaleX: -1, scaleY: 1 },
    { x: 496, y: 247, scaleX: -1, scaleY: 1 },
    { x: 462, y: 269, scaleX: -1, scaleY: 1 },
    { x: 433, y: 288, scaleX: -1, scaleY: 1 },
    { x: 387, y: 303, scaleX: -1, scaleY: 1 },
    { x: 327, y: 317, scaleX: -1, scaleY: 1 },
    { x: 261, y: 331, scaleX: -1, scaleY: 1 },
    { x: 228, y: 342, scaleX: -1, scaleY: 1 },
    { x: 204, y: 354, scaleX: -1, scaleY: 1 },
    { x: 194, y: 362, scaleX: -1, scaleY: 1 },
    { x: 165, y: 370, scaleX: -1, scaleY: 1 },
    { x: 119, y: 380, scaleX: -1, scaleY: 1 },
    { x: 49, y: 402, scaleX: -1, scaleY: 1 },
    { x: 23, y: 418, scaleX: -1, scaleY: 1 },
    { x: -15, y: 439, scaleX: -1, scaleY: 1 },
    { x: -65, y: 475, scaleX: -1, scaleY: 1 },
    { x: -65, y: 475 },
    { x: -56, y: 481 },
    { x: -40, y: 517 },
    { x: 3, y: 576 },
    { x: 32, y: 582 },
    { x: 87, y: 600 },
    { x: 160, y: 612 },
    { x: 218, y: 642 },
    { x: 285, y: 671 },
    { x: 327, y: 689 },
    { x: 386, y: 702 },
    { x: 440, y: 722, scaleX: -(-1), scaleY: 1 },
    { x: 516, y: 764, scaleX: -1, scaleY: 1 },
    { x: 501, y: 828, scaleX: -1, scaleY: 1 },
    { x: 449, y: 867, scaleX: -1, scaleY: 1 },
    { x: 376, y: 881, scaleX: -1, scaleY: 1 },
    { x: 311, y: 895, scaleX: -1, scaleY: 1 },
    { x: 255, y: 918, scaleX: -1, scaleY: 1 },
    { x: 216, y: 946, scaleX: -1, scaleY: 1 },
    { x: 207, y: 997, scaleX: -1, scaleY: 1 },
    { x: 225, y: 1065 },
    { x: 232, y: 1124 },
    { x: 238, y: 1190 },
    { x: 244, y: 1278 },
    { x: 244, y: 1370 },
    { x: 255, y: 1499 },
    { x: 243, y: 1614 },
    { x: 243, y: 1615 },
    { x: 247, y: 1694 },
    { x: 247, y: 1767 },
    { x: 254, y: 1839 },
    { x: 239, y: 1945 },
    { x: 244, y: 2010, scaleX: 0.5, scaleY: 0.5  },
    { x: 248, y: 2124, scaleX: 0, scaleY: 0  },
  ];
}

export default $maps;
