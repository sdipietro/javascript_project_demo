/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/drawer */ \"./src/scripts/drawer.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log(\"Hello from index.js\");\n  // const main = document.getElementById(\"main\");\n  // new Example(main);\n\n  const canvas = document.getElementById(\"canvas\");\n  const drawer = new _scripts_drawer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ0Y7QUFFdENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBO0VBQ0E7O0VBRUEsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUMsTUFBTSxHQUFHLElBQUlMLHVEQUFNLENBQUNHLE1BQU0sQ0FBQztBQUNyQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3RfZGVtby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9zY3JpcHRzL2RyYXdlclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIGluZGV4LmpzXCIpO1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKGNhbnZhcyk7XG59KSJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiRHJhd2VyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/drawer.js":
/*!*******************************!*\
  !*** ./src/scripts/drawer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ \"./src/scripts/particle.js\");\n\nclass Drawer {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.mouse = {\n      x: undefined,\n      y: undefined\n    };\n    this.setupCanvas();\n    window.addEventListener('resize', () => {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    });\n  }\n  setupCanvas() {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    // this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));\n    // this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));\n    this.animate();\n  }\n  drawCircle() {\n    this.ctx.fillStyle = 'blue';\n    // this.ctx.fillRect(10, 10, 50, 50);\n    this.ctx.beginPath();\n    this.ctx.arc(this.mouse.x, this.mouse.y, 20, 0, Math.PI * 2);\n    this.ctx.fill();\n  }\n  handleCanvasClick(e) {\n    this.mouse.x = e.x;\n    this.mouse.y = e.y;\n    this.drawCircle();\n  }\n  handleMouseMove(e) {\n    this.mouse.x = e.x;\n    this.mouse.y = e.y;\n    this.drawCircle();\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawCircle();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drawer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbEMsTUFBTUMsTUFBTSxDQUFDO0VBQ1RDLFdBQVdBLENBQUNDLE1BQU0sRUFBRTtJQUNoQixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1RDLENBQUMsRUFBRUMsU0FBUztNQUNaQyxDQUFDLEVBQUVEO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQ0UsV0FBVyxDQUFDLENBQUM7SUFDbEJDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU07TUFDcENULE1BQU0sQ0FBQ1UsS0FBSyxHQUFHRixNQUFNLENBQUNHLFVBQVU7TUFDaENYLE1BQU0sQ0FBQ1ksTUFBTSxHQUFHSixNQUFNLENBQUNLLFdBQVc7SUFDdEMsQ0FBQyxDQUFDO0VBQ047RUFFQU4sV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDUCxNQUFNLENBQUNVLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxVQUFVO0lBQ3JDLElBQUksQ0FBQ1gsTUFBTSxDQUFDWSxNQUFNLEdBQUdKLE1BQU0sQ0FBQ0ssV0FBVztJQUN2QztJQUNBO0lBQ0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztFQUNsQjtFQUVBQyxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNkLEdBQUcsQ0FBQ2UsU0FBUyxHQUFHLE1BQU07SUFDM0I7SUFDQSxJQUFJLENBQUNmLEdBQUcsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ2lCLEdBQUcsQ0FBQyxJQUFJLENBQUNmLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRWEsSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVELElBQUksQ0FBQ25CLEdBQUcsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLGlCQUFpQkEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHbUIsQ0FBQyxDQUFDbkIsQ0FBQztJQUNsQixJQUFJLENBQUNELEtBQUssQ0FBQ0csQ0FBQyxHQUFHaUIsQ0FBQyxDQUFDakIsQ0FBQztJQUNsQixJQUFJLENBQUNTLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBRUFTLGVBQWVBLENBQUNELENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHbUIsQ0FBQyxDQUFDbkIsQ0FBQztJQUNsQixJQUFJLENBQUNELEtBQUssQ0FBQ0csQ0FBQyxHQUFHaUIsQ0FBQyxDQUFDakIsQ0FBQztJQUNsQixJQUFJLENBQUNTLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBRUFELE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ2IsR0FBRyxDQUFDd0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDekIsTUFBTSxDQUFDVSxLQUFLLEVBQUUsSUFBSSxDQUFDVixNQUFNLENBQUNZLE1BQU0sQ0FBQztJQUMvRCxJQUFJLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCVyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNaLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2xEO0FBQ0o7QUFFQSwrREFBZTdCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3RfZGVtby8uL3NyYy9zY3JpcHRzL2RyYXdlci5qcz85M2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0aWNsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG5jbGFzcyBEcmF3ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgICAgIHg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHk6IHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR1cENhbnZhcygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldHVwQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIC8vIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW52YXNDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMTAsIDEwLCA1MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCAyMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2FudmFzQ2xpY2soZSkge1xuICAgICAgICB0aGlzLm1vdXNlLnggPSBlLng7XG4gICAgICAgIHRoaXMubW91c2UueSA9IGUueTtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZS54ID0gZS54O1xuICAgICAgICB0aGlzLm1vdXNlLnkgPSBlLnk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7Il0sIm5hbWVzIjpbIlBhcnRpY2xlIiwiRHJhd2VyIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwibW91c2UiLCJ4IiwidW5kZWZpbmVkIiwieSIsInNldHVwQ2FudmFzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0ZSIsImRyYXdDaXJjbGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJlIiwiaGFuZGxlTW91c2VNb3ZlIiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/drawer.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUU3QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7RUFFQUQsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDSCxHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFDSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0X2RlbW8vLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5JdCdzIEFMSVZFISEhPC9oMT5cIlxuXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/particle.js":
/*!*********************************!*\
  !*** ./src/scripts/particle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Particle {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Particle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYXJ0aWNsZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0FBSWYsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3RfZGVtby8uL3NyYy9zY3JpcHRzL3BhcnRpY2xlLmpzP2MwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFydGljbGUge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlOyJdLCJuYW1lcyI6WyJQYXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/particle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3RfZGVtby8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;