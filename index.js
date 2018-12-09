webpackJsonp([18],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(288);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/**
	 * Created by madlord on 16/1/27.
	 */
	var baseWidth=375;
	var baseRemSize=10;
	(function () {
	    function upadte() {
	        var w=Math.min(window.screen.width,document.body.clientWidth,document.documentElement.getBoundingClientRect().width);
	        document.getElementsByTagName('html')[0].style['font-size']=w/baseWidth*baseRemSize+'px'
	    }
	    module.exports={
	        init:function (bw) {
	            baseWidth=bw||375;
	            window.addEventListener('resize',upadte)
	            upadte();
	        },
	
	        getOneREMSize:function () {
	            return parseFloat(document.getElementsByTagName('html')[0].style['font-size']);
	        }
	    }
	})();
	


/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //response layout util
	
	
	var _rlu = __webpack_require__(3);
	
	var _rlu2 = _interopRequireDefault(_rlu);
	
	__webpack_require__(289);
	
	var _main = __webpack_require__(290);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _text = __webpack_require__(297);
	
	var _text2 = _interopRequireDefault(_text);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _ins;
	
	var BootLoader = function () {
	    function BootLoader() {
	        _classCallCheck(this, BootLoader);
	
	        if (!_ins) {
	            _ins = this;
	        }
	        return _ins;
	    }
	
	    _createClass(BootLoader, [{
	        key: 'init',
	        value: function init() {
	            _rlu2.default.init(375);
	            _main2.default.getInstance().init();
	            (0, _text2.default)();
	        }
	    }], [{
	        key: 'getInstance',
	        value: function getInstance() {
	            if (!_ins) {
	                _ins = new BootLoader();
	            }
	            return _ins;
	        }
	    }]);
	
	    return BootLoader;
	}();
	
	BootLoader.getInstance().init();

/***/ },

/***/ 289:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	// import _OrbitControls from 'three-orbit-controls';
	
	
	var _star = __webpack_require__(291);
	
	var _star2 = _interopRequireDefault(_star);
	
	var _polygons = __webpack_require__(294);
	
	var _stagepoints = __webpack_require__(295);
	
	var _meteors = __webpack_require__(296);
	
	var _meteors2 = _interopRequireDefault(_meteors);
	
	var _debug = __webpack_require__(293);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pentagrams = (0, _polygons.shuffleArray)((0, _polygons.getPentagram)([0, 0, 0], 10));
	var Circles = (0, _polygons.getCircle)([0, 0, 0], 5);
	
	// let OrbitControls = _OrbitControls(THREE);
	var STAR_TOTAL_NUMBER = 1200;
	var _insance = void 0;
	
	// create star tree params;
	var drawTopCount = 3;
	var CREATE_INTERVAL = 200;
	var ptimer = 0;
	var ctimer = 0;
	var ctimer2 = 0;
	var ttimer = 0;
	var SingleTreeLine = [
	// tree foot
	[-1, 0, 0], [-2, 0, 0], [-3, 0, 0],
	// tree leg
	[-3, 1, 0], [-3, 2, 0], [-3, 3, 0], [-3, 4, 0],
	// 3rd tree
	[-4, 4, 0], [-5, 4, 0], [-6, 4, 0], [-7, 4, 0], [-6, 4.5, 0], [-5.2, 5, 0], [-4.4, 5.5, 0], [-3.8, 6, 0], [-3, 6.5, 0],
	// 2nd tree
	[-4, 6.5, 0], [-5, 6.5, 0], [-6, 6.5, 0], [-5.25, 7, 0], [-4.5, 7.5, 0], [-3.75, 8, 0], [-3, 8.5, 0], [-2, 9, 0],
	// 1st tree //todo pos incorrect
	[-3, 9, 0], [-4, 9, 0], [-5, 9, 0], [-4, 9.6, 0], [-3, 10.2, 0], [-2, 10.8, 0], [-1, 11.4, 0]];
	
	var deg45ShadowLine = SingleTreeLine.map(function (item) {
		var _item = _slicedToArray(item, 3),
		    x = _item[0],
		    y = _item[1],
		    z = _item[2];
	
		var r = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
		return [r * Math.cos(Math.PI / 4), y, r * Math.sin(Math.PI / 4)];
	});
	
	var deg90ShadowLine = SingleTreeLine.map(function (item) {
		var _item2 = _slicedToArray(item, 3),
		    x = _item2[0],
		    y = _item2[1],
		    z = _item2[2];
	
		var r = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
		return [r * Math.cos(Math.PI / 2), y, r * Math.sin(Math.PI / 2)];
	});
	
	// tree use
	var index = 0;
	
	// pantagram use
	var panIndex = 0;
	
	// circle use
	var cIndex = 0;
	
	var Main = function () {
		function Main() {
			_classCallCheck(this, Main);
		}
	
		_createClass(Main, [{
			key: 'init',
			value: function init() {
				this._scene = new THREE.Scene();
	
				this._camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
				// this._camera.position.set(0, 0, 0);
				this._camera.position.set(0, 0, 50);
				this._camera.lookAt(new THREE.Vector3(0, 0, -1));
				this._scene.add(this._camera);
	
				this._renderer = new THREE.WebGLRenderer({ antialias: true });
				this._renderer.setClearColor(0x000000);
				this._renderer.setSize(window.innerWidth, window.innerHeight);
				document.body.appendChild(this._renderer.domElement);
	
				// this._controls = new OrbitControls(this._camera);
				this._rayCaster = new THREE.Raycaster();
	
				this._light = new THREE.DirectionalLight(0xffffff, 1);
				this._light.position.set(0, 0, -1);
				this._scene.add(this._light);
	
				this.starList = [];
				// this.createStars();
	
				document.addEventListener('mousedown', this.onSelect.bind(this));
				document.addEventListener('touchstart', this.onSelect.bind(this));
				this._tick();
			}
		}, {
			key: 'onSelect',
			value: function onSelect(event) {
				// console.
				(`${event.clientX} ${event.clientY}`);
				this.mouse = {};
				this.mouse.x = event.clientX / window.innerWidth * 2 - 1;
				this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			}
		}, {
			key: 'drawCircle',
			value: function drawCircle() {
				if (!ctimer) {
					ctimer = Date.now();
				}
				var now = Date.now();
				if (now - ctimer > CREATE_INTERVAL) {
					ctimer = Date.now();
					var star = void 0;
					if (cIndex < Circles.length) {
						star = new _star2.default(this._scene, Circles[cIndex]);
						this.circlePoint.add(star);
						this.starList.push(star);
						cIndex++;
					}
				}
			}
		}, {
			key: 'drawPentagram',
			value: function drawPentagram() {
				if (!ptimer) {
					ptimer = Date.now();
				}
				var now = Date.now();
				if (now - ptimer > CREATE_INTERVAL) {
					ptimer = Date.now();
					var star = void 0;
					if (panIndex < Pentagrams.length) {
						star = new _star2.default(this._scene, Pentagrams[panIndex]);
						// this._scene.add(star);
						this.pentaPoint.add(star);
						this.starList.push(star);
						panIndex++;
					}
				}
				// requestAnimationFrame(() => this.drawPentagram());
			}
		}, {
			key: 'drawStarTree',
			value: function drawStarTree() {
				if (!ttimer) {
					ttimer = Date.now();
				}
	
				var now = Date.now();
				if (now - ttimer > CREATE_INTERVAL) {
					ttimer = Date.now();
					var star = void 0;
					if (index < SingleTreeLine.length) {
						star = new _star2.default(this._scene, SingleTreeLine[SingleTreeLine.length - index - 1]);
					} else if (index < SingleTreeLine.length * 2) {
						var tmp = SingleTreeLine[index - SingleTreeLine.length];
						tmp[0] = -tmp[0];
						star = new _star2.default(this._scene, tmp);
					} else if (index < SingleTreeLine.length * 3) {
						var _tmp = deg45ShadowLine[3 * deg45ShadowLine.length - index - 1];
						star = new _star2.default(this._scene, _tmp);
					} else if (index < SingleTreeLine.length * 4) {
						var _tmp2 = deg45ShadowLine[index - 3 * deg45ShadowLine.length];
						_tmp2[0] = -_tmp2[0];
						star = new _star2.default(this._scene, _tmp2);
					} else if (index < SingleTreeLine.length * 5) {
						var _tmp3 = deg45ShadowLine[5 * deg45ShadowLine.length - index - 1];
						_tmp3[2] = -_tmp3[2];
						star = new _star2.default(this._scene, _tmp3);
					} else if (index < SingleTreeLine.length * 6) {
						var _tmp4 = deg45ShadowLine[index - 5 * deg45ShadowLine.length];
						_tmp4[0] = -_tmp4[0];
						star = new _star2.default(this._scene, _tmp4);
					} else if (index < SingleTreeLine.length * 7) {
						var _tmp5 = deg90ShadowLine[7 * deg45ShadowLine.length - index - 1];
						star = new _star2.default(this._scene, _tmp5);
					} else if (index < SingleTreeLine.length * 8) {
						var _tmp6 = deg90ShadowLine[index - 7 * deg45ShadowLine.length];
						_tmp6[2] = -_tmp6[2];
						star = new _star2.default(this._scene, _tmp6);
					} else {
						if (drawTopCount > 0) {
							star = new _star2.default(this._scene, [0, 12, 0], { min_scale: 3 });
							drawTopCount--;
						}
					}
	
					if (star) {
						// this._scene.add(star);
						this.treePoint.add(star);
						this.starList.push(star);
						index++;
					}
				}
	
				// requestAnimationFrame(() => this.drawStarTree());
			}
		}, {
			key: 'createStars',
			value: function createStars() {
				for (var i = 0; i < STAR_TOTAL_NUMBER; i++) {
					var star = new _star2.default(this._scene);
					this._scene.add(star);
					this.starList.push(star);
				}
			}
		}, {
			key: '_tick',
			value: function _tick() {
				var _this = this;
	
				requestAnimationFrame(function () {
					_this._tick();
				});
				if (!this._timer) {
					this._timer = Date.now();
					this._ticker = 0;
				}
				if (Date.now() - this._timer > 1000) {
					this._timer = Date.now();
					(0, _
					 
					 
					 2.default)('time pass: ' + ++this._ticker + 's');
				}
	
				for (var i = 0, len = this.starList && this.starList.length; i < len; i++) {
					this.starList[i].update();
				}
	
				if (!this.pentaPoint) {
					this.pentaPoint = (0, _stagepoints.productStagePoint)(this._scene, null, 'penta');
				}
				this.drawPentagram();
	
				// if(this._ticker > 25){
				if (!this.circlePoint) {
					this.circlePoint = (0, _stagepoints.productStagePoint)(this._scene, [0, 1.4, 0], 'circle');
				}
				this.drawCircle();
				// }
	
				if (this._ticker > 33) {
					if (!this.treePoint) {
						this.treePoint = (0, _stagepoints.productStagePoint)(this._scene, [0, -5, 0], 'tree');
					}
					this.drawStarTree();
				}
	
				var meteor = (0, _meteors2.default)(this._scene);
				meteor && this.starList.push(meteor);
	
				this.pentaPoint && this.pentaPoint.update();
				this.circlePoint && this.circlePoint.update();
				this.treePoint && this.treePoint.update();
	
				if (this.mouse) {
					this._rayCaster.setFromCamera(this.mouse, this._camera);
					var intersects = this._rayCaster.intersectObjects(this.starList);
					var entity = void 0;
					if (intersects.length > 0) {
						if (entity != intersects[0].object) {
							entity = intersects[0].object;
							entity.focus();
						}
					}
				}
				this.mouse = null;
	
				this._renderer.render(this._scene, this._camera);
			}
		}], [{
			key: 'getInstance',
			value: function getInstance() {
				if (!_insance) {
					_insance = new Main();
				}
				return _insance;
			}
		}]);
	
		return Main;
	}();
	
	exports.default = Main;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.getColor = getColor;
	
	var _particle = __webpack_require__(292);
	
	var _particle2 = _interopRequireDefault(_particle);
	
	var _debug = __webpack_require__(293);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var START_COLOR = 0x66;
	var END_COLOR = 0xff;
	
	function getColor() {
		var color1 = (Math.random() * (END_COLOR - START_COLOR) + START_COLOR << 0).toString(16);
		var color2 = (Math.random() * (END_COLOR - START_COLOR) + START_COLOR << 0).toString(16);
		var color3 = (Math.random() * (END_COLOR - START_COLOR) + START_COLOR << 0).toString(16);
		return '#' + color1 + color2 + color3;
	}
	
	function random(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	/**
	 * @param opts: {
	 * 	min_scale, scale_counter_origin, color
	 * }
	 */
	
	var Star = function (_THREE$Sprite) {
		_inherits(Star, _THREE$Sprite);
	
		function Star(scene, position) {
			var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
			_classCallCheck(this, Star);
	
			var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, new THREE.SpriteMaterial({
				color: opts.color || getColor(),
				map: THREE.ImageUtils.loadTexture(_particle2.default),
				transparent: true,
				blending: THREE.AdditiveBlending
			})));
	
			_this.scene = scene;
			_this._scaleCounter = opts.scale_counter_origin === undefined ? random(0, 180) : opts.scale_counter_origin;
			_this._init(position);
			_this._basicScale = opts.min_scale || 1.5;
			return _this;
		}
	
		_createClass(Star, [{
			key: '_init',
			value: function _init(position) {
				if (position) {
					var _position;
	
					(_position = this.position).set.apply(_position, _toConsumableArray(position));
				} else {
					this.position.set(random(-50, 50), random(-50, 50), random(-50, 50));
				}
			}
		}, {
			key: 'focus',
			value: function focus() {
				console.log('you foucs on ' + this.id);
			}
		}, {
			key: 'update',
			value: function update() {
				this._scaleCounter++;
				var rad = Math.sin(this._scaleCounter * Math.PI / 180);
				var scale = this._basicScale * rad;
				// log(`scale is ${rad}`);
				this.scale.set(scale, scale, scale);
			}
		}]);
	
		return Star;
	}(THREE.Sprite);
	
	exports.default = Star;

/***/ },

/***/ 292:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZDNkRDQThEODY2MTFFNUFGREJFMkNFNURBMTZENjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzZDNkRDQTlEODY2MTFFNUFGREJFMkNFNURBMTZENjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkM2RENBNkQ4NjYxMUU1QUZEQkUyQ0U1REExNkQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkM2RENBN0Q4NjYxMUU1QUZEQkUyQ0U1REExNkQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhDes6YAAC7RSURBVHja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"

/***/ },

/***/ 293:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var usedInfo = [];
	
	exports.default = function (info) {
	    if (usedInfo.indexOf(info) > -1) {
	        return;
	    }
	    usedInfo.push(info);
// 	    console.log("debug info: " + info);
	};

/***/ },

/***/ 294:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.shuffleArray = shuffleArray;
	exports.getPentagram = getPentagram;
	exports.getCircle = getCircle;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DELTA = 1;
	function sin(angle) {
	    return Math.sin(Math.PI / 180 * angle);
	}
	function cos(angle) {
	    return Math.cos(Math.PI / 180 * angle);
	}
	
	function shuffleArray(numbersArray) {
	    var len = numbersArray && numbersArray.length,
	        i = len,
	        j = void 0,
	        temp = void 0,
	        arr = numbersArray.slice();
	    if (i == 0) return;
	    while (--i) {
	        j = Math.floor(Math.random() * (i + 1));
	        temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	    return arr;
	}
	
	function getLine(startPoint, endPoint) {
	    var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DELTA;
	
	    var _startPoint = _slicedToArray(startPoint, 3),
	        x1 = _startPoint[0],
	        y1 = _startPoint[1],
	        z1 = _startPoint[2];
	
	    var _endPoint = _slicedToArray(endPoint, 3),
	        x2 = _endPoint[0],
	        y2 = _endPoint[1],
	        z2 = _endPoint[2];
	
	    var n1 = (x2 - x1) / delta;
	    var n2 = (y2 - y1) / delta;
	    var n3 = (z2 - z1) / delta;
	    var n = Math.max(Math.abs(n1), Math.abs(n2), Math.abs(n3));
	
	    var res = [];
	    for (var i = 1; i < n; i++) {
	        res.push([x1 + n1 * i / n, y1 + n2 * i / n, z1 + n3 * i / n]);
	    }
	    return res;
	}
	
	/**
	 *     3 
	 *   1   2
	 *    4 5
	 */
	function getPentagram(centerPosition, radius) {
	    var _centerPosition = _slicedToArray(centerPosition, 3),
	        x = _centerPosition[0],
	        y = _centerPosition[1],
	        z = _centerPosition[2];
	
	    var vertex1 = [x - radius * cos(28), y + radius * sin(28), z];
	    var vertex2 = [x + radius * cos(28), y + radius * sin(28), z];
	    var vertex3 = [x, y + radius, z];
	    var vertex4 = [x - radius * sin(36), y - radius * cos(36), z];
	    var vertex5 = [x + radius * sin(36), y - radius * cos(36), z];
	    var res = [];
	    res.push(vertex1);
	    res.push.apply(res, _toConsumableArray(getLine(vertex1, vertex2)));
	    res.push(vertex2);
	    res.push.apply(res, _toConsumableArray(getLine(vertex2, vertex4)));
	    res.push(vertex4);
	    res.push.apply(res, _toConsumableArray(getLine(vertex4, vertex3)));
	    res.push(vertex3);
	    res.push.apply(res, _toConsumableArray(getLine(vertex3, vertex5)));
	    res.push(vertex5);
	    res.push.apply(res, _toConsumableArray(getLine(vertex5, vertex1)));
	    return res;
	}
	
	/**
	 *  1
	 * 1 1
	 *  1 
	 * @param centerPosition 
	 * @param radius 
	 * @param delta 
	 */
	function getCircle(centerPosition, radius) {
	    var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DELTA;
	
	    var n = 2 * Math.PI * radius / delta;
	
	    var _centerPosition2 = _slicedToArray(centerPosition, 3),
	        x = _centerPosition2[0],
	        y = _centerPosition2[1],
	        z = _centerPosition2[2];
	
	    var res = [];
	    for (var i = 0; i < n; i++) {
	        res.push([x + radius * sin(360 * i / n), y + radius * cos(360 * i / n), z]);
	    }
	    return res;
	}

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.productMeteors = productMeteors;
	exports.productStagePoint = productStagePoint;
	
	var _debug = __webpack_require__(293);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var COLOR = '#ffffff';
	
	// product meteors
	function productMeteors() {}
	
	// product stage point
	function productStagePoint(scene, position, type) {
	    var geometry = new THREE.Geometry();
	    var material = new THREE.LineBasicMaterial({ color: COLOR });
	    var curveObject = new THREE.Line(geometry, material);
	
	    if (position) {
	        var _curveObject$position;
	
	        (_curveObject$position = curveObject.position).set.apply(_curveObject$position, _toConsumableArray(position));
	    }
	
	    curveObject.material.transparent = true;
	    generateUpdate(curveObject, type);
	    scene.add(curveObject);
	    return curveObject;
	}
	
	function generateUpdate(obj, type) {
	    switch (type) {
	        case 'penta':
	            // 旋转 移出视角
	            obj.waitToMove = 8000;
	            // 移回视角
	            obj.waitToMove2 = 58000;
	            obj.timer = Date.now();
	            obj.scaleNum = 1;
	            obj.update = function () {
	                if (Date.now() - this.timer > this.waitToMove && Date.now() - this.timer < this.waitToMove2) {
	                    (0, _debug2.default)('pentagram start move');
	                    this.rotation.z -= .002;
	                    if (this.position.z < 55) {
	                        this.position.z += .04;
	                    }
	                    if (this.position.z > 50 && this.position.y > -45) {
	                        this.position.y -= 1;
	                    }
	                }
	                if (Date.now() - this.timer > this.waitToMove2) {
	                    (0, _debug2.default)('pentagram start move2');
	                    this.rotation.z -= .002;
	                    if (this.position.y < -6) {
	                        this.position.y += .02;
	                    }
	                    if (this.position.z > 0) {
	                        this.position.z -= .02;
	                    }
	                    if (this.rotation.x < 1.25) {
	                        this.rotation.x += .05;
	                    }
	                    if (this.scaleNum < 1.5) {
	                        this.scaleNum += .05;
	                        this.scale.set(this.scaleNum, this.scaleNum, this.scaleNum);
	                    }
	                }
	            };
	            break;
	        case 'circle':
	            obj.timer = Date.now();
	            obj.rotateSpeed = .0025 + Math.random() * .0025;
	            obj.scaleCounter = 0;
	            // 旋转
	            obj.waitToMove1 = 7000;
	            // 缩小
	            obj.waitToMove2 = 12000;
	            // 继续缩小
	            obj.waitToMove3 = 25000;
	            // 旋转
	            obj.waitToMove4 = 47000;
	            // 变成光环
	            obj.waitToMove5 = 68000;
	
	            obj.scaleNum = 1;
	            obj.update = function () {
	                (0, _debug2.default)('circle start rotate');
	                // this.rotation.z += this.rotateSpeed;  
	                if (Date.now() - this.timer > this.waitToMove1 && Date.now() - this.timer < this.waitToMove3) {
	                    this.rotation.z -= .002;
	                }
	                if (Date.now() - this.timer > this.waitToMove2 && obj.scaleNum > .5) {
	                    this.scaleNum -= .0005;
	                    this.scale.set(obj.scaleNum, obj.scaleNum, obj.scaleNum);
	                }
	                if (Date.now() - this.timer > this.waitToMove3 && this.position.y < 7.5) {
	                    if (this.scaleNum > .9) {
	                        this.scaleNum -= .0005;
	                        this.scale.set(obj.scaleNum, obj.scaleNum, obj.scaleNum);
	                    }
	                    this.position.y += .015;
	                    this.rotation.x += .004;
	                }
	                if (Date.now() - this.timer > this.waitToMove4) {
	                    (0, _debug2.default)('cirlce start move4');
	                    this.rotation.z -= .002;
	                }
	                if (Date.now() - this.timer > this.waitToMove5) {
	                    (0, _debug2.default)('cirlce start move5');
	                    if (this.position.y < 11.4) {
	                        this.position.y += .0035;
	                    }
	                    if (this.scaleNum > .5) {
	                        this.scaleNum -= .0005;
	                        this.scale.set(obj.scaleNum, obj.scaleNum, obj.scaleNum);
	                    }
	                }
	            };
	            break;
	        case 'tree':
	            obj.timer = Date.now();
	            obj.waitToRotate = 15000;
	            obj.waitToClose = 35000;
	            obj.update = function () {
	                if (Date.now() - this.timer > this.waitToRotate) {
	                    (0, _debug2.default)('tree start rotate');
	                    this.rotation.y += .003;
	                }
	                if (Date.now() - this.timer > this.waitToClose && this.position.z < 20) {
	                    (0, _debug2.default)('tree start close');
	                    this.position.z += .02;
	                }
	            };
	    }
	}

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _star = __webpack_require__(291);
	
	var _star2 = _interopRequireDefault(_star);
	
	var _debug = __webpack_require__(293);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 每次尝试调用产生的几率
	var percent = 1;
	var step = 1;
	var MAX_NUM = 100;
	
	var ranF = function ranF() {
	    return Math.random() > .5 ? 1 : -1;
	};
	
	var ranNum = function ranNum(min, max) {
	    return Math.random() * (max - min) + min;
	};
	
	var generPosition = function generPosition() {
	    return [ranF() * ranNum(2, 10), ranF() * ranNum(2, 20), ranF() * ranNum(0, 10)];
	};
	
	var flag = false;
	var counter = 0;
	
	exports.default = function (scene) {
	    // if(!flag) {
	    if (Math.random() * percent < 1) {
	        percent += step;
	        counter++;
	        if (counter > MAX_NUM) {
	            return;
	        }
	
	        flag = true;
	        var pos = generPosition();
	        (0, _debug2.default)('product a meteor');
	
	        var star = new _star2.default(scene, pos, {
	            scale_counter_origin: 0,
	            min_scale: 2
	        });
	        scene.add(star);
	        return star;
	    }
	};

/***/ },

/***/ 297:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var NAME = 'Nagisa';
	
	var currentName = '';
	
	exports.default = function () {
	    currentName = NAME;
	    currentName = location.search.replace(/\?name=([^&]+)/, '$1');
	    if (currentName.indexOf('%') > -1) {
	        currentName = decodeURIComponent(currentName);
	    }
	    currentName = currentName || NAME;
	    // mid text
	    var div = document.createElement('div');
	    div.id = 'j_to';
	    div.className = 'class-to';
	    div.innerHTML = '<p class="bp p title">To:</p><p class="bp p tr">' + currentName + '</p>';
	    document.body.appendChild(div);
	
	    document.querySelectorAll('.p').forEach(function (p) {
	        p.className += ' ani1';
	        setTimeout(function () {
	            p.className = p.className.replace('ani1', 'ani2');
	        }, 5000);
	    });
	
	    // bottom text
	    var div2 = document.createElement('div');
	    div2.id = 'j_m';
	    div2.className = 'class-merry';
	    div2.innerHTML = '<p class="bp p2 tc">Merry Chrismas</p>';
	    if (currentName == NAME) {
	        div2.innerHTML = '<p class="bp p2">Merry Chrismas &</p><p class="bp p2 tr">Happy Birthday</p>';
	    }
	    document.body.appendChild(div2);
	
	    // top text
	    var div3 = document.createElement('div');
	    div3.id = 'j_t';
	    div3.className = 'class-name';
	    div3.innerHTML = '<p class="bp p3">To:</p><p class="bp p3 tr">' + currentName + '</p>';
	    document.body.appendChild(div3);
	};

/***/ }

});
//# sourceMappingURL=starsky.map
