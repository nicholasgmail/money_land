/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@popmotion/easing/dist/easing.es.js ***!
  \**********************************************************/
/*! exports provided: reversed, mirrored, createReversedEasing, createMirroredEasing, createExpoIn, createBackIn, createAnticipateEasing, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, bounceOut, bounceIn, bounceInOut, cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return mirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReversedEasing", function() { return createReversedEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirroredEasing", function() { return createMirroredEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return createAnticipateEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reversed(easeIn);
var easeInOut = /*#__PURE__*/mirrored(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reversed(circIn);
var circInOut = /*#__PURE__*/mirrored(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reversed(backIn);
var backInOut = /*#__PURE__*/mirrored(backIn);
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function (p) {
    return 1.0 - bounceOut(1.0 - p);
};
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    calcSampleValues();
    var resolver = function (aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}




/***/ }),

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@popmotion/popcorn/dist/popcorn.es.js ***!
  \************************************************************/
/*! exports provided: createAnticipateEasing, createBackIn, createExpoIn, cubicBezier, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, reversed, mirrored, angle, applyOffset, clamp, conditional, degreesToRadians, distance, interpolate, isPoint, isPoint3D, mix, mixArray, mixColor, mixComplex, mixObject, pipe, pointFromVector, progress, radiansToDegrees, smooth, smoothFrame, snap, springForce, springForceExpo, springForceLinear, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixObject", function() { return mixObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForce", function() { return springForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceExpo", function() { return springForceExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceLinear", function() { return springForceLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap$1; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createAnticipateEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["cubicBezier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["reversed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["mirrored"]; });







var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };

var radiansToDegrees = (function (radians) { return (radians * 180) / Math.PI; });

var angle = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
});

var applyOffset = (function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
});

var curryRange = (function (func) { return function (min, max, v) { return (v !== undefined ? func(min, max, v) : function (cv) { return func(min, max, cv); }); }; });

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);

var conditional = (function (check, apply) { return function (v) {
    return check(v) ? apply(v) : v;
}; });

var degreesToRadians = (function (degrees) { return (degrees * Math.PI) / 180; });

var isPoint = (function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
});

var isPoint3D = (function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
});

var distance1D = function (a, b) { return Math.abs(a - b); };
var distance = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
});

var progress = (function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});

var mix = (function (from, to, progress) {
    return -progress * from + progress * to + from;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color$$1) {
    return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = (function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
});

var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = (function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
});

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) { return mix(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = __assign({}, origin, target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var mixNumber = function (from, to) { return function (p) { return mix(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer(progress(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, clamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return clamp
        ? pipe(clamp$1(input[0], input[inputLength - 1]), interpolator)
        : interpolator;
}

var pointFromVector = (function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
});

var toDecimal = (function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
});

var smoothFrame = (function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(prevValue +
        (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
});

var smooth = (function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta
            ? smoothFrame(previousValue, v, timeDelta, strength)
            : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
});

var snap = (function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
});

var identity = function (v) { return v; };
var springForce = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = identity; }
    return curryRange(function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0
            ? origin + springModifiedDisplacement
            : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);

var velocityPerFrame = (function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
});

var velocityPerSecond = (function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
});

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
var wrap$1 = curryRange(wrap);

var clampProgress = clamp$1(0, 1);
var steps = (function (steps, direction) {
    if (direction === void 0) { direction = 'end'; }
    return function (progress) {
        progress =
            direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
});




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var timestamp = Date.now();
        var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

var createStep = (function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === 'function', 'Argument must be a function');
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive)
                toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer)
                    numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
});

var StepId;
(function (StepId) {
    StepId["Read"] = "read";
    StepId["Update"] = "update";
    StepId["Render"] = "render";
    StepId["PostRender"] = "postRender";
    StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = (1 / 60) * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    StepId.Read,
    StepId.Update,
    StepId.Render,
    StepId.PostRender
];
var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
var _a = stepsOrder.reduce(function (acc, key) {
    var step = createStep(setWillRunNextFrame);
    acc.sync[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) { keepAlive = false; }
        if (immediate === void 0) { immediate = false; }
        if (!willRunNextFrame)
            startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    acc.cancelSync[key] = function (process) { return step.cancel(process); };
    acc.steps[key] = step;
    return acc;
}, {
    steps: {},
    sync: {},
    cancelSync: {}
}), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
var processStep = function (stepId) { return steps[stepId].process(frame); };
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed)
        defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
var getFrameData = function () { return frame; };

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: valueTypes, easing, styler, Action, ValueReaction, action, calc, chain, composite, crossfade, css, decay, delay, everyFrame, inertia, keyframes, listen, merge, mouse, multicast, multitouch, parallel, physics, pointer, schedule, spring, stagger, svg, timeline, transform, tween, value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueTypes", function() { return style_value_types__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylefire */ "./node_modules/stylefire/dist/stylefire.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return stylefire__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");













var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props), { middleware: this.props.middleware ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([middleware], this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var _this = this;
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription), api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function (init) {
    return new Action({ init: init });
};

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var stepProgress = function (steps, progress) {
    var segment = 1 / (steps - 1);
    var subsegment = 1 / (2 * (steps - 1));
    var percentProgressOfTarget = Math.min(progress, 1);
    var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
    var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
    return segmentProgressOfTarget * segment;
};

var calc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    angle: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"],
    degreesToRadians: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"],
    distance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"],
    isPoint3D: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint3D"],
    isPoint: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint"],
    dilate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    getValueFromProgress: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    pointFromAngleAndDistance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pointFromVector"],
    getProgressFromValue: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"],
    radiansToDegrees: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["radiansToDegrees"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smoothFrame"],
    speedPerFrame: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"],
    speedPerSecond: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"],
    stepProgress: stepProgress
});

var isValueList = function (v) {
    return Array.isArray(v);
};
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(v);
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(),
            delta = _a.delta,
            timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.subscribers[this.subscribers.length - 1].update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, this.timeDelta) : Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                var _a;
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.some(function (key) {
            return isVectorProp(props[key], key);
        });
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_3__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vh"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var reduceArrayValue = function (i) {
    return function (props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        var childActionProps = vectorKeys.reduce(reduceArrayValue(i), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        return getActionCreator(v)(action, childActionProps);
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function (key) {
    return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        var childActionProps = vectorKeys.reduce(reduceObjectValue(key), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
        return map;
    }, {});
    return composite(actionMap);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createMixerAction = function (mixer) {
    return function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
        return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { from: 0, to: 1 })).pipe(mixer(from, to));
    };
};
var createColorAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"]);
var createComplexAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixComplex"]);
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    if (typeof prop === 'number') {
        return createAction;
    } else if (Array.isArray(prop)) {
        return createArrayAction;
    } else if (isUnitProp(prop)) {
        return createUnitAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].test(prop)) {
        return createColorAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].test(prop)) {
        return createComplexAction;
    } else if (typeof prop === 'object') {
        return createObjectAction;
    } else {
        return createAction;
    }
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = from + amplitude;
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        if (target !== idealTarget) amplitude = target - from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            } else {
                update(position);
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var inertia = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 700 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget;
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var prev = from;
        var current = from;
        var activeAnimation;
        var isOutOfBounds = function (v) {
            return min !== undefined && v < min || max !== undefined && v > max;
        };
        var boundaryNearest = function (v) {
            return Math.abs(min - v) < Math.abs(max - v) ? min : max;
        };
        var startAnimation = function (animation, next) {
            activeAnimation && activeAnimation.stop();
            activeAnimation = animation.start({
                update: update,
                complete: function () {
                    if (next) {
                        next();
                        return;
                    }
                    complete();
                }
            });
        };
        var startSpring = function (props) {
            startAnimation(spring(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta })));
        };
        if (isOutOfBounds(from)) {
            startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
        } else {
            var to = power * velocity + from;
            if (typeof modifyTarget !== 'undefined') {
                to = modifyTarget(to);
                modifyTarget = void 0;
                velocity = (to - from) / power;
            }
            var animation = decay({
                from: from,
                velocity: velocity,
                timeConstant: timeConstant,
                power: power,
                restDelta: restDelta,
                modifyTarget: modifyTarget
            });
            var next = void 0;
            if (isOutOfBounds(to)) {
                var boundary_1 = boundaryNearest(to);
                var heading_1 = boundary_1 == min ? -1 : 1;
                animation = animation.while(function (v) {
                    prev = current;
                    velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(v - prev, Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().delta);
                    current = v;
                    return boundary_1 - v * heading_1 > 0;
                });
                next = function () {
                    return startSpring({ from: current, to: boundary_1, velocity: velocity });
                };
            }
            startAnimation(animation, next);
        }
        return {
            stop: function () {
                return activeAnimation && activeAnimation.stop();
            }
        };
    });
};
var index = /*#__PURE__*/createVectorAction(inertia, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    min: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    max: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    }
});

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _d,
        _e = _a.reverseEase,
        reverseEase = _e === void 0 ? false : _e;
    if (reverseEase) {
        ease = Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["createReversedEasing"])(ease);
    }
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function (v) {
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var clampProgress = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"] : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f,
            _g = props.repeatDelay,
            repeatDelay = _g === void 0 ? 0 : _g;
        var _h = props.from,
            from = _h === void 0 ? 0 : _h,
            _j = props.to,
            to = _j === void 0 ? 1 : _j,
            _k = props.elapsed,
            elapsed = _k === void 0 ? 0 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseAnimation = function (reverseEase) {
            var _a;
            if (reverseEase === void 0) {
                reverseEase = false;
            }
            _a = [to, from], from = _a[0], to = _a[1];
            playhead = vectorScrubber({ from: from, to: to, ease: ease, reverseEase: reverseEase }).start(update);
        };
        var isTweenComplete = function () {
            var isComplete = isActive && elapsed > duration + repeatDelay;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            elapsed = duration - (elapsed - repeatDelay);
            if (loop && loopCount < loop) {
                loopCount++;
                return false;
            } else if (flip && flipCount < flip) {
                flipCount++;
                reverseAnimation();
                return false;
            } else if (yoyo && yoyoCount < yoyo) {
                yoyoCount++;
                reverseAnimation(yoyoCount % 2 !== 0);
                return false;
            }
            return true;
        };
        var updateTween = function () {
            currentProgress = clampProgress(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function () {
            isActive = true;
            process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
                var delta = _a.delta;
                elapsed += delta;
                updateTween();
                if (isTweenComplete()) {
                    framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                    complete && framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function () {
            isActive = false;
            if (process) framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, duration, elapsed);
            },
            getProgress: function () {
                return currentProgress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                if (!isActive) startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(0, duration, newProgress);
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateTween, false, true);
                return this;
            },
            reverse: function () {
                reverseAnimation();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () {
        return easing || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"];
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps), { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(springStrength, elapsed);
            }
            current += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset = staggerDelay;
            flatInstructions.push("" + (offset - duration));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeInOut"]);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction), { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps), { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
            initialRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
                var newRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$1 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(x || 0);
        var applyYOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer), { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var appendUnit = function (unit) {
    return function (v) {
        return "" + v + unit;
    };
};
var steps = function (st, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return function (v) {
        var current = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(min, max, v);
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(min, max, stepProgress(st, current));
    };
};
var transformMap = function (childTransformers) {
    return function (v) {
        var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    };
};

var transformers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    applyOffset: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"],
    clamp: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"],
    conditional: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["conditional"],
    interpolate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
    blendArray: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixArray"],
    blendColor: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"],
    pipe: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smooth"],
    snap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["snap"],
    generateStaticSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForce"],
    nonlinearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceExpo"],
    linearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceLinear"],
    wrap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["wrap"],
    appendUnit: appendUnit,
    steps: steps,
    transformMap: transformMap
});

var css = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(false, 'css() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_5__["default"])(element, props);
};
var svg = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(false, 'svg() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_5__["default"])(element, props);
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: alpha, color, complex, degrees, hex, hsla, number, percent, progressPercentage, px, rgbUnit, rgba, scale, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: clamp(0, 1) });
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
function getValuesAsArray(value) {
    return getValueFromFunctionString(value)
        .replace(/(,|\/)/g, ' ')
        .split(/ \s*/);
}
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/stylefire/dist/stylefire.es.js ***!
  \*****************************************************/
/*! exports provided: default, buildSVGAttrs, buildStyleProperty, createStylerFactory, isTransformProp, transformProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSVGAttrs", function() { return buildSVGAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyleProperty", function() { return buildStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformProps", function() { return transformProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.uncachedValues,
        uncachedValues = _b === void 0 ? new Set() : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        function setValue(key, value) {
            if (key.startsWith('--')) {
                props.hasCSSVariable = true;
            }
            var currentValue = state[key];
            state[key] = value;
            if (state[key] === currentValue) return;
            if (changedValues.indexOf(key) === -1) {
                changedValues.push(key);
            }
            if (!hasChanged) {
                hasChanged = true;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(styler.render);
            }
        }
        var styler = {
            get: function (key, forceRead) {
                if (forceRead === void 0) {
                    forceRead = false;
                }
                var useCached = !forceRead && useCache && !uncachedValues.has(key) && state[key] !== undefined;
                return useCached ? state[key] : onRead(key, props);
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    setValue(values, value);
                } else {
                    for (var key in values) {
                        setValue(key, values[key]);
                    }
                }
                return this;
            },
            render: function (forceRender) {
                if (forceRender === void 0) {
                    forceRender = false;
                }
                if (hasChanged || forceRender === true) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
        };
        return styler;
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== 'undefined';
var testElement;
var setDashPrefix = function (key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            if (noPrefix && key === 'clipPath' && dashCache.has(key)) {
                return;
            }
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function (key) {
    return setDashPrefix(key, key);
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) {
        isBrowser ? testPrefix(key) : setServerProperty(key);
    }
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
function isTransformProp(key) {
    return transformPropDictionary[key] === true;
}
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
var transformOriginProps = /*#__PURE__*/new Set(['originX', 'originY', 'originZ']);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var int = /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])( /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"]), { transform: Math.round });
var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    zIndex: int,
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    numOctaves: int
};
var getValueType = function (key) {
    return valueTypes[key];
};
var getValueAsType = function (value, type) {
    return type && typeof value === 'number' ? type.transform(value) : value;
};

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollKeys = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);

var blacklist = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP, 'transform']);
var translateAlias = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
function isCustomTemplate(v) {
    return typeof v === 'function';
}
function buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
    if (allowTransformNone === void 0) {
        allowTransformNone = true;
    }
    var transformString = '';
    var transformHasZ = false;
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        transformHasZ = key === 'z' ? true : transformHasZ;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += 'translateZ(0)';
    } else {
        transformString = transformString.trim();
    }
    if (isCustomTemplate(state.transform)) {
        transformString = state.transform(transform, transformIsDefault ? '' : transformString);
    } else if (allowTransformNone && transformIsDefault) {
        transformString = 'none';
    }
    return transformString;
}
function buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase, allowTransformNone) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (styles === void 0) {
        styles = {};
    }
    if (transform === void 0) {
        transform = {};
    }
    if (transformOrigin === void 0) {
        transformOrigin = {};
    }
    if (transformKeys === void 0) {
        transformKeys = [];
    }
    if (isDashCase === void 0) {
        isDashCase = false;
    }
    if (allowTransformNone === void 0) {
        allowTransformNone = true;
    }
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for (var key in state) {
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
            styles[prefixer(key, isDashCase)] = valueAsType;
        }
    }
    if (hasTransform || typeof state.transform === 'function') {
        styles.transform = buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration, allowTransformNone);
    }
    if (hasTransformOrigin) {
        styles.transformOrigin = (transformOrigin.originX || '50%') + " " + (transformOrigin.originY || '50%') + " " + (transformOrigin.originZ || 0);
    }
    return styles;
}
function createStyleBuilder(_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.enableHardwareAcceleration,
        enableHardwareAcceleration = _c === void 0 ? true : _c,
        _d = _b.isDashCase,
        isDashCase = _d === void 0 ? true : _d,
        _e = _b.allowTransformNone,
        allowTransformNone = _e === void 0 ? true : _e;
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function (state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase, allowTransformNone);
        return styles;
    };
}

function onRead(key, options) {
    var element = options.element,
        preparseOutput = options.preparseOutput;
    var defaultValueType = getValueType(key);
    if (isTransformProp(key)) {
        return defaultValueType ? defaultValueType.default || 0 : 0;
    } else if (scrollKeys.has(key)) {
        return element[key];
    } else {
        var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
        return preparseOutput && defaultValueType && defaultValueType.test(domValue) && defaultValueType.parse ? defaultValueType.parse(domValue) : domValue;
    }
}
function onRender(state, _a, changedValues) {
    var element = _a.element,
        buildStyles = _a.buildStyles,
        hasCSSVariable = _a.hasCSSVariable;
    Object.assign(element.style, buildStyles(state));
    if (hasCSSVariable) {
        var numChangedValues = changedValues.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = changedValues[i];
            if (key.startsWith('--')) {
                element.style.setProperty(key, state[key]);
            }
        }
    }
    if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
        element[SCROLL_LEFT] = state[SCROLL_LEFT];
    }
    if (changedValues.indexOf(SCROLL_TOP) !== -1) {
        element[SCROLL_TOP] = state[SCROLL_TOP];
    }
}
var cssStyler = /*#__PURE__*/createStyler({
    onRead: onRead,
    onRender: onRender,
    uncachedValues: scrollKeys
});
function createCssStyler(element, _a) {
    if (_a === void 0) {
        _a = {};
    }
    var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        allowTransformNone = _a.allowTransformNone,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["enableHardwareAcceleration", "allowTransformNone"]);
    return cssStyler(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ element: element, buildStyles: createStyleBuilder({
            enableHardwareAcceleration: enableHardwareAcceleration,
            allowTransformNone: allowTransformNone
        }), preparseOutput: true }, props));
}

var camelCaseAttributes = /*#__PURE__*/new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues']);

var defaultOrigin = 0.5;
var svgAttrsTemplate = function () {
    return {
        style: {}
    };
};
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(progress * length);
};
var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
function calcOrigin(origin, offset, size) {
    return typeof origin === 'string' ? origin : style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(offset + size * origin);
}
function calculateSVGTransformOrigin(dimensions, originX, originY) {
    return calcOrigin(originX, dimensions.x, dimensions.width) + " " + calcOrigin(originY, dimensions.y, dimensions.height);
}
var svgStyleConfig = {
    enableHardwareAcceleration: false,
    isDashCase: false
};
function buildSVGAttrs(_a, dimensions, totalPathLength, cssBuilder, attrs, isDashCase) {
    if (dimensions === void 0) {
        dimensions = unmeasured;
    }
    if (cssBuilder === void 0) {
        cssBuilder = createStyleBuilder(svgStyleConfig);
    }
    if (attrs === void 0) {
        attrs = svgAttrsTemplate();
    }
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrX = _a.attrX,
        attrY = _a.attrY,
        originX = _a.originX,
        originY = _a.originY,
        pathLength = _a.pathLength,
        _b = _a.pathSpacing,
        pathSpacing = _b === void 0 ? 1 : _b,
        _c = _a.pathOffset,
        pathOffset = _c === void 0 ? 0 : _c,
        state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    var style = cssBuilder(state);
    for (var key in style) {
        if (key === 'transform') {
            attrs.style.transform = style[key];
        } else {
            var attrKey = isDashCase && !camelCaseAttributes.has(key) ? camelToDash(key) : key;
            attrs[attrKey] = style[key];
        }
    }
    if (originX !== undefined || originY !== undefined || style.transform) {
        attrs.style.transformOrigin = calculateSVGTransformOrigin(dimensions, originX !== undefined ? originX : defaultOrigin, originY !== undefined ? originY : defaultOrigin);
    }
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (totalPathLength !== undefined && pathLength !== undefined) {
        attrs[isDashCase ? 'stroke-dashoffset' : 'strokeDashoffset'] = progressToPixels(-pathOffset, totalPathLength);
        attrs[isDashCase ? 'stroke-dasharray' : 'strokeDasharray'] = progressToPixels(pathLength, totalPathLength) + " " + progressToPixels(pathSpacing, totalPathLength);
    }
    return attrs;
}
function createAttrBuilder(dimensions, totalPathLength, isDashCase) {
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrs = svgAttrsTemplate();
    var cssBuilder = createStyleBuilder(svgStyleConfig);
    return function (state) {
        return buildSVGAttrs(state, dimensions, totalPathLength, cssBuilder, attrs, isDashCase);
    };
}

var getDimensions = function (element) {
    return typeof element.getBBox === 'function' ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function (element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }
};

var isPath = function (element) {
    return element.tagName === 'path';
};
var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType(key);
            return valueType ? valueType.default || 0 : 0;
        }
    },
    onRender: function (state, _a) {
        var element = _a.element,
            buildAttrs = _a.buildAttrs;
        var attrs = buildAttrs(state);
        for (var key in attrs) {
            if (key === 'style') {
                Object.assign(element.style, attrs.style);
            } else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
});
var svg = function (element) {
    var dimensions = getSVGElementDimensions(element);
    var pathLength = isPath(element) && element.getTotalLength ? element.getTotalLength() : undefined;
    return svgStyler({
        element: element,
        buildAttrs: createAttrBuilder(dimensions, pathLength)
    });
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var isHTMLElement = function (node) {
    return node instanceof HTMLElement || typeof node.click === 'function';
};
var isSVGElement = function (node) {
    return node instanceof SVGElement || 'ownerSVGElement' in node;
};
var createDOMStyler = function (node, props) {
    var styler;
    if (node === window) {
        styler = viewport(node);
    } else if (isHTMLElement(node)) {
        styler = createCssStyler(node, props);
    } else if (isSVGElement(node)) {
        styler = svg(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
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

var divStyler = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])(document.querySelector('.hero')); //карта для больших экранов движения

var divStylerLg = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])(document.querySelector(".hero-lg"));
var $values2 = [{
  x: 0,
  y: 0,
  rotateX: 0,
  rotateY: 0
}, {
  x: 70,
  y: 34,
  rotateX: 0,
  rotateY: 0
}, {
  x: 142,
  y: 64,
  rotateX: 0,
  rotateY: 0
}, {
  x: 218,
  y: 93,
  rotateX: 0,
  rotateY: 0
}, {
  x: 313,
  y: 137,
  rotateX: 0,
  rotateY: 0
}, {
  x: 388,
  y: 166,
  rotateX: 0,
  rotateY: 0
}, {
  x: 479,
  y: 207,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 389,
  y: 268,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 314,
  y: 313,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 225,
  y: 330,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 133,
  y: 358,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 66,
  y: 385,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: -1,
  y: 410,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: -47,
  y: 427,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: -117,
  y: 476,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: -117,
  y: 476,
  rotateX: 0,
  rotateY: 0,
  scaleX: 1,
  scaleY: 1
}, {
  x: -32,
  y: 547,
  rotateX: 0,
  rotateY: 0
}, {
  x: 29,
  y: 594,
  rotateX: 0,
  rotateY: 0
}, {
  x: 89,
  y: 615,
  rotateX: 0,
  rotateY: 0
}, {
  x: 141,
  y: 624,
  rotateX: 0,
  rotateY: 0
}, {
  x: 170,
  y: 641,
  rotateX: 0,
  rotateY: 0
}, {
  x: 222,
  y: 660,
  rotateX: 0,
  rotateY: 0
}, {
  x: 271,
  y: 687,
  rotateX: 0,
  rotateY: 0
}, {
  x: 319,
  y: 709,
  rotateX: 0,
  rotateY: 0
}, {
  x: 379,
  y: 733,
  rotateX: 0,
  rotateY: 0
}, {
  x: 442,
  y: 758,
  rotateX: 0,
  rotateY: 0
}, {
  x: 474,
  y: 771,
  rotateX: 0,
  rotateY: 0
}, {
  x: 474,
  y: 771,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 450,
  y: 810,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 410,
  y: 841,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 378,
  y: 868,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 340,
  y: 883,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 285,
  y: 896,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 220,
  y: 915,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 150,
  y: 928,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 115,
  y: 974,
  rotateX: 0,
  rotateY: 0,
  scaleX: -1,
  scaleY: 1
}, {
  x: 109,
  y: 1011,
  rotateX: 0,
  rotateY: 0
}, {
  x: 129,
  y: 1045,
  rotateX: 0,
  rotateY: 0
}, {
  x: 156,
  y: 1102,
  rotateX: 0,
  rotateY: 0
}];
var $values = [{
  x: 0,
  y: 0
}, {
  x: 39,
  y: 10
}, {
  x: 63,
  y: 15
}, {
  x: 79,
  y: 25
}, {
  x: 98,
  y: 31
}, {
  x: 120,
  y: 42
}, {
  x: 140,
  y: 50
}, {
  x: 157,
  y: 57
}, {
  x: 169,
  y: 63
}, {
  x: 183,
  y: 72
}, {
  x: 202,
  y: 78
}, {
  x: 211,
  y: 85
}, {
  x: 211,
  y: 85,
  scaleX: -1,
  scaleY: 1
}, {
  x: 208,
  y: 100,
  scaleX: -1,
  scaleY: 1
}, {
  x: 195,
  y: 107,
  scaleX: -1,
  scaleY: 1
}, {
  x: 177,
  y: 112,
  scaleX: -1,
  scaleY: 1
}, {
  x: 165,
  y: 120,
  scaleX: -1,
  scaleY: 1
}, {
  x: 150,
  y: 124,
  scaleX: -1,
  scaleY: 1
}, {
  x: 140,
  y: 128,
  scaleX: -1,
  scaleY: 1
}, {
  x: 123,
  y: 132,
  scaleX: -1,
  scaleY: 1
}, {
  x: 113,
  y: 138,
  scaleX: -1,
  scaleY: 1
}, {
  x: 97,
  y: 141,
  scaleX: -1,
  scaleY: 1
}, {
  x: 82,
  y: 146,
  scaleX: -1,
  scaleY: 1
}, {
  x: 69,
  y: 150,
  scaleX: -1,
  scaleY: 1
}, {
  x: 59,
  y: 153,
  scaleX: -1,
  scaleY: 1
}, {
  x: 49,
  y: 156,
  scaleX: -1,
  scaleY: 1
}, {
  x: 36,
  y: 160,
  scaleX: -1,
  scaleY: 1
}, {
  x: 23,
  y: 164,
  scaleX: -1,
  scaleY: 1
}, {
  x: 11,
  y: 168,
  scaleX: -1,
  scaleY: 1
}, {
  x: 4,
  y: 174,
  scaleX: -1,
  scaleY: 1
}, {
  x: -5,
  y: 179,
  scaleX: -1,
  scaleY: 1
}, {
  x: -10,
  y: 185,
  scaleX: -1,
  scaleY: 1
}, {
  x: -10,
  y: 185,
  scaleX: -1,
  scaleY: 1
}, {
  x: -10,
  y: 185,
  scaleX: -1,
  scaleY: 1
}, {
  x: -21,
  y: 191,
  scaleX: -1,
  scaleY: 1
}, {
  x: -25,
  y: 198,
  scaleX: -1,
  scaleY: 1
}, {
  x: -26,
  y: 210,
  scaleX: -1,
  scaleY: 1
}, {
  x: -26,
  y: 210,
  scaleX: 1,
  scaleY: 1
}, {
  x: -21,
  y: 219
}, {
  x: -9,
  y: 228
}, {
  x: -5,
  y: 233
}, {
  x: 8,
  y: 240
}, {
  x: 20,
  y: 246
}, {
  x: 33,
  y: 250
}, {
  x: 44,
  y: 254
}, {
  x: 53,
  y: 256
}, {
  x: 66,
  y: 258
}, {
  x: 78,
  y: 264
}, {
  x: 89,
  y: 268
}, {
  x: 104,
  y: 275
}, {
  x: 112,
  y: 279
}, {
  x: 124,
  y: 286
}, {
  x: 134,
  y: 289
}, {
  x: 150,
  y: 295
}, {
  x: 157,
  y: 296
}, {
  x: 179,
  y: 302
}, {
  x: 197,
  y: 311
}, {
  x: 210,
  y: 316
}, {
  x: 215,
  y: 329
}, {
  x: 215,
  y: 329,
  scaleX: -1,
  scaleY: 1
}, {
  x: 204,
  y: 342,
  scaleX: -1,
  scaleY: 1
}, {
  x: 199,
  y: 353,
  scaleX: -1,
  scaleY: 1
}, {
  x: 180,
  y: 358,
  scaleX: -1,
  scaleY: 1
}, {
  x: 153,
  y: 359,
  scaleX: -1,
  scaleY: 1
}, {
  x: 146,
  y: 368,
  scaleX: -1,
  scaleY: 1
}, {
  x: 130,
  y: 375,
  scaleX: -1,
  scaleY: 1
}, {
  x: 115,
  y: 379,
  scaleX: -1,
  scaleY: 1
}, {
  x: 98,
  y: 385,
  scaleX: -1,
  scaleY: 1
}, {
  x: 78,
  y: 391,
  scaleX: -1,
  scaleY: 1
}, {
  x: 61,
  y: 405,
  scaleX: -1,
  scaleY: 1
}, {
  x: 59,
  y: 423,
  scaleX: -1,
  scaleY: 1
}, {
  x: 66,
  y: 445,
  scaleX: -1,
  scaleY: 1
}, {
  x: 81,
  y: 461,
  scaleX: -1,
  scaleY: 1
}, {
  x: 84,
  y: 471,
  scaleX: -1,
  scaleY: 1
}, {
  x: 83,
  y: 492,
  scaleX: -1,
  scaleY: 1
}, {
  x: 88,
  y: 515,
  scaleX: -1,
  scaleY: 1
}, {
  x: 92,
  y: 548,
  scaleX: -1,
  scaleY: 1
}, {
  x: 94,
  y: 568,
  scaleX: -1,
  scaleY: 1
}, {
  x: 96,
  y: 594,
  scaleX: -1,
  scaleY: 1
}, {
  x: 98,
  y: 622,
  scaleX: -1,
  scaleY: 1
}, {
  x: 98,
  y: 622,
  scaleX: 1,
  scaleY: 1
}, {
  x: 100,
  y: 657
}, {
  x: 100,
  y: 670
}, {
  x: 101,
  y: 702
}, {
  x: 101,
  y: 734
}, {
  x: 101,
  y: 757
}, {
  x: 103,
  y: 784
}, {
  x: 97,
  y: 830
}, {
  x: 94,
  y: 862
}, {
  x: 92,
  y: 888
}, {
  x: 92,
  y: 888,
  scaleX: .5,
  scaleY: .5
}, {
  x: 92,
  y: 888,
  scaleX: 0,
  scaleY: 0
}];
var $value = [];
var $map = document.querySelector('.section-map');
var $knowledgeAndExperience = document.createElement('div');
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

var $sectionKnowled = document.querySelector(".knowledge-and-experience");
var $sectionKnowledS = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])($sectionKnowled);
var $sectionKnowledXY = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])({
  x: 83,
  y: 48
}, $sectionKnowledS.set);
Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["pointer"])($sectionKnowledXY.get()).start(function (e) {
  e.preventDefault();
  $value.push($sectionKnowledXY.get());
});

function addSectionKnowled() {
  var $seeOpportunities = document.createElement('div');
  $seeOpportunities.classList.add("see-opportunities");
  $map.appendChild($seeOpportunities);
  var $seeOpportunitie = document.querySelector(".see-opportunities");
  var $seeOpportunitiesS = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])($seeOpportunitie);
  var $seeOpportunitiesXY = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])({
    x: 98,
    y: 42
  }, $seeOpportunitiesS.set);
  Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["pointer"])($seeOpportunitiesXY.get()).start(function (e) {
    e.preventDefault();
    $value.push($seeOpportunitiesXY.get());
  });
}

Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
  values: $values,
  duration: 20000,
  //easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity //times: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

}).start({
  update: function update(v) {
    divStyler.set(v);

    if (Math.round(v.x) == 79 && Math.round(v.y) == 25) {
      $sectionKnowled.remove();
      addSectionKnowled();
    }

    ;
  },
  complete: function complete() {
    return console.log('hello');
  }
});

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Misha_project\money_land\src\assets\js\app.js */"./src/assets/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map