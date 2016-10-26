/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// pull in desired CSS/SASS files
	__webpack_require__( 2 );

	// inject bundled Elm app into div#main
	var Elm = __webpack_require__( 6 );
	Elm.App.embed( document.getElementById( 'app' ) );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\n * -- BASE STYLES --\n * Most of these are inherited from Base, but I want to change a few.\n */\nbody {\n  color: #526066; }\n\nh2, h3 {\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  font-weight: 600; }\n\np {\n  line-height: 1.6em; }\n\n/*\n * -- Layout Styles --\n */\n.l-content {\n  margin: 0 auto; }\n\n.l-box {\n  padding: 0.5em 2em; }\n\n/*\n * -- MENU STYLES --\n * Make the menu have a very faint box-shadow.\n */\n.pure-menu {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }\n\n/*\n * -- BANNER --\n * The top banner with the headings. By using a combination\n * of `display: table;` and `display: table-cell;`, we can\n * vertically center the text.\n */\n.banner {\n  background: transparent url(\"/../img/fjelltur.jpg\") 0 0 no-repeat fixed;\n  text-align: center;\n  background-size: cover;\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://24.media.tumblr.com/ccb268832580ac12951828a1c179de69/tumblr_mo2xbk8JUK1st5lhmo1_1280.jpg', sizingMethod='scale');\n  height: 200px;\n  width: 100%;\n  margin-bottom: 3em;\n  display: table; }\n\n.banner-head {\n  display: table-cell;\n  vertical-align: middle;\n  margin-bottom: 0;\n  font-size: 2em;\n  color: white;\n  font-weight: 500;\n  text-shadow: 0 1px 1px black;\n  font-family: sans-serif; }\n\n/*\n * -- PRICING TABLE WRAPPER --\n * This element wraps up all the pricing table elements\n */\n.pricing-tables,\n.information {\n  max-width: 980px;\n  margin: 0 auto; }\n\n.pricing-tables {\n  margin-bottom: 3.125em;\n  text-align: center; }\n\n/*\n * -- PRICING TABLE  --\n * Every pricing table has the .pricing-table class\n */\n.pricing-table {\n  border: 1px solid #ddd;\n  margin: 0 0.5em 2em;\n  padding: 0 0 3em; }\n\n/*\n * -- PRICING TABLE HEADER COLORS --\n * Choose a different color based on the type of pricing table.\n */\n.pricing-table-free .pricing-table-header {\n  background: #519251; }\n\n.pricing-table-biz .pricing-table-header {\n  background: #2c4985; }\n\n/*\n * -- PRICING TABLE HEADER --\n * By default, a header is black/white, and has some styles for its <h2> name.\n */\n.pricing-table-header {\n  background: #111;\n  color: #fff; }\n\n.pricing-table-header h2 {\n  margin: 0;\n  padding-top: 2em;\n  font-size: 1em;\n  font-weight: normal; }\n\n/*\n * -- PRICING TABLE PRICE --\n * Styles for the price and the corresponding <span>per month</span>\n */\n.pricing-table-price {\n  font-size: 6em;\n  margin: 0.2em 0 0;\n  font-weight: 100; }\n\n.pricing-table-price span {\n  display: block;\n  text-transform: uppercase;\n  font-size: 0.2em;\n  padding-bottom: 2em;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  *color: #fff; }\n\n/*\n * -- PRICING TABLE LIST --\n * Each pricing table has a <ul> which is denoted by the .pricing-table-list class\n */\n.pricing-table-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  text-align: center; }\n\n/*\n * -- PRICING TABLE LIST ELEMENTS --\n * Styles for the individual list elements within each pricing table\n */\n.pricing-table-list li {\n  padding: 0.8em 0;\n  background: #f7f7f7;\n  border-bottom: 1px solid #e7e7e7; }\n\n/*\n * -- PRICING TABLE BUTTON --\n * Styles for the \"Choose\" button at the bottom of a pricing table.\n * This inherits from Pure Button.\n */\n.button-choose {\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #333;\n  border-radius: 2em;\n  font-weight: bold;\n  position: relative;\n  bottom: -1.5em; }\n\n.information-head {\n  color: black;\n  font-weight: 500; }\n\n.footer {\n  background: #111;\n  color: #888;\n  text-align: center; }\n\n.footer a {\n  color: #ddd; }\n\n/*\n * -- TABLET MEDIA QUERIES --\n * On tablets, we want to slightly adjust the size of the banner\n * text and add some vertical space between the various pricing tables\n */\n@media (min-width: 767px) {\n  .banner-head {\n    font-size: 4em; }\n  .pricing-table {\n    margin-bottom: 0; } }\n\n/*\n * -- PHONE MEDIA QUERIES --\n * On phones, we want to reduce the height and font-size of the banner further\n */\n@media (min-width: 480px) {\n  .banner {\n    height: 400px; }\n  .banner-head {\n    font-size: 3em; } }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';

	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}

	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}

	//import Native.List //

	var _elm_lang$core$Native_Array = function() {

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};

	}();
	//import Native.Utils //

	var _elm_lang$core$Native_Basics = function() {

	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}

	var ord = ['LT', 'EQ', 'GT'];

	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}

	function truncate(n)
	{
		return n | 0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}

	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};

	}();
	//import //

	var _elm_lang$core$Native_Utils = function() {

	// COMPARISONS

	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}


	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}

		if (x === y)
		{
			return true;
		}

		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}

		if (x === null || y === null)
		{
			return false
		}

		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}

		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}

		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}

		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.

	var LT = -1, EQ = 0, GT = 1;

	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}

		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}

		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}

		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}

		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}


	// COMMON VALUES

	var Tuple0 = {
		ctor: '_Tuple0'
	};

	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		return new String(c);
	}


	// GUID

	var count = 0;
	function guid(_)
	{
		return count++;
	}


	// RECORDS

	function update(oldRecord, updatedFields)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}


	//// LIST STUFF ////

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}

		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}


	// CRASHES

	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}


	// TO STRING

	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ':') + name + '>';
		}

		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}

		if (type === 'number')
		{
			return v + '';
		}

		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}

		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}

		if (v === null)
		{
			return 'null';
		}

		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);

			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task')
			{
				return '<task>'
			}

			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}

			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}

			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}

			if (v.ctor === '[]')
			{
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}

			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}

		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket)
			{
				return '<websocket>';
			}

			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}


	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,

		append: F2(append),

		crash: crash,
		crashCase: crashCase,

		toString: toString
	};

	}();
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p0) {
			var _p1 = _p0;
			return A2(f, _p1._0, _p1._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$snd = function (_p2) {
		var _p3 = _p2;
		return _p3._1;
	};
	var _elm_lang$core$Basics$fst = function (_p4) {
		var _p5 = _p4;
		return _p5._0;
	};
	var _elm_lang$core$Basics$always = F2(
		function (a, _p6) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$Never = function (a) {
		return {ctor: 'Never', _0: a};
	};

	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$oneOf = function (maybes) {
		oneOf:
		while (true) {
			var _p1 = maybes;
			if (_p1.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p3 = _p1._0;
				var _p2 = _p3;
				if (_p2.ctor === 'Nothing') {
					var _v3 = _p1._1;
					maybes = _v3;
					continue oneOf;
				} else {
					return _p3;
				}
			}
		}
	};
	var _elm_lang$core$Maybe$andThen = F2(
		function (maybeValue, callback) {
			var _p4 = maybeValue;
			if (_p4.ctor === 'Just') {
				return callback(_p4._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p5 = maybe;
			if (_p5.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p5._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p6._0._0, _p6._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});

	//import Native.Utils //

	var _elm_lang$core$Native_List = function() {

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}


	function range(lo, hi)
	{
		var list = Nil;
		if (lo <= hi)
		{
			do
			{
				list = Cons(hi, list);
			}
			while (hi-- > lo);
		}
		return list;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,
		range: range,

		foldr: F3(foldr),

		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};

	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return _elm_lang$core$Basics$not(
				A2(
					_elm_lang$core$List$any,
					function (_p2) {
						return _elm_lang$core$Basics$not(
							isOkay(_p2));
					},
					list));
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				_elm_lang$core$Native_List.range(
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return A2(
							_elm_lang$core$List_ops['::'],
							f(x),
							acc);
					}),
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (x, xs$) {
					return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return A2(
							_elm_lang$core$List_ops['::'],
							A2(f, x, _p11._0),
							accAcc);
					} else {
						return _elm_lang$core$Native_List.fromArray(
							[]);
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					_elm_lang$core$Native_List.fromArray(
						[b]),
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			_elm_lang$core$Native_List.fromArray(
				[]),
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: _elm_lang$core$Native_List.fromArray(
						[])
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
					_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var step = F2(
					function (x, rest) {
						return A2(
							_elm_lang$core$List_ops['::'],
							sep,
							A2(_elm_lang$core$List_ops['::'], x, rest));
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p21._1);
				return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = A2(_elm_lang$core$List_ops['::'], _p22._0, taken);
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					_elm_lang$core$Native_List.fromArray(
						[])));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return _elm_lang$core$Native_List.fromArray(
												[_p23._1._0, _p23._1._1._0]);
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return _elm_lang$core$Native_List.fromArray(
													[_p23._1._0, _p23._1._1._0, _p23._1._1._1._0]);
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? A2(
													_elm_lang$core$List_ops['::'],
													_p26,
													A2(
														_elm_lang$core$List_ops['::'],
														_p27,
														A2(
															_elm_lang$core$List_ops['::'],
															_p28,
															A2(
																_elm_lang$core$List_ops['::'],
																_p25,
																A2(_elm_lang$core$List$takeTailRec, n - 4, _p24))))) : A2(
													_elm_lang$core$List_ops['::'],
													_p26,
													A2(
														_elm_lang$core$List_ops['::'],
														_p27,
														A2(
															_elm_lang$core$List_ops['::'],
															_p28,
															A2(
																_elm_lang$core$List_ops['::'],
																_p25,
																A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)))));
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return _elm_lang$core$Native_List.fromArray(
						[_p23._1._0]);
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = A2(_elm_lang$core$List_ops['::'], value, result),
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				_elm_lang$core$Native_List.fromArray(
					[]),
				n,
				value);
		});

	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};

	//import Native.Utils //

	var _elm_lang$core$Native_Char = function() {

	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};

	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};

	//import Native.Utils //

	var _elm_lang$core$Native_Scheduler = function() {

	var MAX_STEPS = 10000;


	// TASKS

	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function andThen(task, callback)
	{
		return {
			ctor: '_Task_andThen',
			task: task,
			callback: callback
		};
	}

	function onError(task, callback)
	{
		return {
			ctor: '_Task_onError',
			task: task,
			callback: callback
		};
	}

	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}


	// PROCESSES

	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		enqueue(process);

		return process;
	}

	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}

	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}

	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}

			process.root = null;

			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);

			return function() { clearTimeout(id); };
		});
	}


	// STEP PROCESSES

	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;

			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});

				break;
			}

			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}

				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}

			throw new Error(ctor);
		}

		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);

		return numSteps;
	}


	// WORK QUEUE

	var working = false;
	var workQueue = [];

	function enqueue(process)
	{
		workQueue.push(process);

		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}

	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}


	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,

		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),

		rawSpawn: rawSpawn,
		rawSend: rawSend
	};

	}();
	//import //

	var _elm_lang$core$Native_Platform = function() {


	// PROGRAMS

	function addPublicModule(object, name, main)
	{
		var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

		object['worker'] = function worker(flags)
		{
			return init(undefined, flags, false);
		}

		object['embed'] = function embed(domNode, flags)
		{
			return init(domNode, flags, true);
		}

		object['fullscreen'] = function fullscreen(flags)
		{
			return init(document.body, flags, true);
		};
	}


	// PROGRAM FAIL

	function mainIsUndefined(name)
	{
		return function(domNode)
		{
			var message = 'Cannot initialize module `' + name +
				'` because it has no `main` value!\nWhat should I show on screen?';
			domNode.innerHTML = errorHtml(message);
			throw new Error(message);
		};
	}

	function errorHtml(message)
	{
		return '<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + message + '</pre>'
			+ '</div>';
	}


	// PROGRAM SUCCESS

	function makeEmbed(moduleName, main)
	{
		return function embed(rootDomNode, flags, withRenderer)
		{
			try
			{
				var program = mainToProgram(moduleName, main);
				if (!withRenderer)
				{
					program.renderer = dummyRenderer;
				}
				return makeEmbedHelp(moduleName, program, rootDomNode, flags);
			}
			catch (e)
			{
				rootDomNode.innerHTML = errorHtml(e.message);
				throw e;
			}
		};
	}

	function dummyRenderer()
	{
		return { update: function() {} };
	}


	// MAIN TO PROGRAM

	function mainToProgram(moduleName, wrappedMain)
	{
		var main = wrappedMain.main;

		if (typeof main.init === 'undefined')
		{
			var emptyBag = batch(_elm_lang$core$Native_List.Nil);
			var noChange = _elm_lang$core$Native_Utils.Tuple2(
				_elm_lang$core$Native_Utils.Tuple0,
				emptyBag
			);

			return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
				init: function() { return noChange; },
				view: function() { return main; },
				update: F2(function() { return noChange; }),
				subscriptions: function () { return emptyBag; }
			});
		}

		var flags = wrappedMain.flags;
		var init = flags
			? initWithFlags(moduleName, main.init, flags)
			: initWithoutFlags(moduleName, main.init);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: init,
			view: main.view,
			update: main.update,
			subscriptions: main.subscriptions,
		});
	}

	function initWithoutFlags(moduleName, realInit)
	{
		return function init(flags)
		{
			if (typeof flags !== 'undefined')
			{
				throw new Error(
					'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
					+ 'This module does not take arguments though! You probably need to change the\n'
					+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
				);
			}
			return realInit();
		};
	}

	function initWithFlags(moduleName, realInit, flagDecoder)
	{
		return function init(flags)
		{
			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Err')
			{
				throw new Error(
					'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
					+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
					+ result._0
				);
			}
			return realInit(result._0);
		};
	}


	// SETUP RUNTIME SYSTEM

	function makeEmbedHelp(moduleName, program, rootDomNode, flags)
	{
		var init = program.init;
		var update = program.update;
		var subscriptions = program.subscriptions;
		var view = program.view;
		var makeRenderer = program.renderer;

		// ambient state
		var managers = {};
		var renderer;

		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = init(flags);
			var model = results._0;
			renderer = makeRenderer(rootDomNode, enqueue, view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});

		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				renderer.update(view(model));
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}

		var mainProcess = spawnLoop(initApp, onMessage);

		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}

		var ports = setupEffects(managers, enqueue);

		return ports ? { ports: ports } : {};
	}


	// EFFECT MANAGERS

	var effectManagers = {};

	function setupEffects(managers, callback)
	{
		var ports;

		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];

			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}

			managers[key] = makeManager(manager, callback);
		}

		return ports;
	}

	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};

		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);

				case 'sub':
					return A3(onEffects, router, fx.subs, state);

				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}

	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}


	// HELPER for STATEFUL LOOPS

	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;

		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, handleMsg, loop);
		}

		var task = A2(andThen, init, loop);

		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}


	// BAGS

	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}

	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}


	// PIPE BAGS INTO EFFECT MANAGERS

	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);

		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};

			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}

	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;

			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}

	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}

		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;

		return A2(map, applyTaggers, value)
	}

	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}


	// PORTS

	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}


	// OUTGOING PORTS

	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});

	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				var value = converter(cmdList._0);
				for (var i = 0; i < subs.length; i++)
				{
					subs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function subscribe(callback)
		{
			subs.push(callback);
		}

		function unsubscribe(callback)
		{
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}

		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}


	// INCOMING PORTS

	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});

	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);

			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}

			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}

		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}

		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}

		function postInitSend(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			var value = result._0;
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		function send(incomingValue)
		{
			currentSend(incomingValue);
		}

		return { send: send };
	}

	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),

		// global setup
		mainToProgram: mainToProgram,
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,
		addPublicModule: addPublicModule,

		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};

	}();

	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};

	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		_elm_lang$core$Native_List.fromArray(
			[]));
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (result, callback) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$formatError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});

	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_p1._0,
					_elm_lang$core$Platform$sendToApp(router)));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (f, task) {
			return A2(
				_elm_lang$core$Task$onError,
				task,
				function (err) {
					return _elm_lang$core$Task$fail(
						f(err));
				});
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				});
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						});
				});
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								});
						});
				});
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										taskD,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										});
								});
						});
				});
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										taskD,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												taskE,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												});
										});
								});
						});
				});
		});
	var _elm_lang$core$Task$andMap = F2(
		function (taskFunc, taskValue) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskFunc,
				function (func) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskValue,
						function (value) {
							return _elm_lang$core$Task$succeed(
								func(value));
						});
				});
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p2 = tasks;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Native_List.fromArray(
					[]));
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				_p2._0,
				_elm_lang$core$Task$sequence(_p2._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p3) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$toMaybe = function (task) {
		return A2(
			_elm_lang$core$Task$onError,
			A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
			function (_p4) {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			});
	};
	var _elm_lang$core$Task$fromMaybe = F2(
		function ($default, maybe) {
			var _p5 = maybe;
			if (_p5.ctor === 'Just') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail($default);
			}
		});
	var _elm_lang$core$Task$toResult = function (task) {
		return A2(
			_elm_lang$core$Task$onError,
			A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
			function (msg) {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Result$Err(msg));
			});
	};
	var _elm_lang$core$Task$fromResult = function (result) {
		var _p6 = result;
		if (_p6.ctor === 'Ok') {
			return _elm_lang$core$Task$succeed(_p6._0);
		} else {
			return _elm_lang$core$Task$fail(_p6._0);
		}
	};
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p9, _p8, _p7) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$T = function (a) {
		return {ctor: 'T', _0: a};
	};
	var _elm_lang$core$Task$perform = F3(
		function (onFail, onSuccess, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$T(
					A2(
						_elm_lang$core$Task$onError,
						A2(_elm_lang$core$Task$map, onSuccess, task),
						function (x) {
							return _elm_lang$core$Task$succeed(
								onFail(x));
						})));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$T(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

	//import Native.Utils //

	var _elm_lang$core$Native_Debug = function() {

	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	return {
		crash: crash,
		log: F2(log)
	};

	}();
	//import Maybe, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_String = function() {

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}

	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		
		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}

		var i = 0;
		var is = [];

		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}	
		
		return _elm_lang$core$Native_List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if ('0' <= c && c <= '9')
			{
				continue;
			}
			if (c === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		return _elm_lang$core$Result$Ok(parseFloat(s));
	}

	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}

	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};

	}();

	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return A2(_elm_lang$core$List_ops['::'], key, keyList);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return A2(_elm_lang$core$List_ops['::'], value, valueList);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return A2(
						_elm_lang$core$List_ops['::'],
						{ctor: '_Tuple2', _0: key, _1: value},
						list);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					_elm_lang$core$Native_List.fromArray(
						[
							'Internal red-black tree invariant violated, expected ',
							msg,
							' and got ',
							_elm_lang$core$Basics$toString(c),
							'/',
							lgot,
							'/',
							rgot,
							'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
						])));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (c, l, r) {
			var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = c;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							c,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							c,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});

	//import Native.Scheduler //

	var _elm_lang$core$Native_Time = function() {

	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});

	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);

			return function() { clearInterval(id); };
		});
	}

	return {
		now: now,
		setInterval_: F2(setInterval_)
	};

	}();
	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		_elm_lang$core$Native_List.fromArray(
			[]));
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Native_Scheduler.spawn(
						A2(
							_elm_lang$core$Time$setInterval,
							_p1,
							A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
					function (id) {
						return A3(
							_elm_lang$core$Time$spawnHelp,
							router,
							_p0._1,
							A3(_elm_lang$core$Dict$insert, _p1, id, processes));
					});
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					_elm_lang$core$Native_List.fromArray(
						[_p6]),
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Time$now,
					function (time) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Task$sequence(
								A2(
									_elm_lang$core$List$map,
									function (tagger) {
										return A2(
											_elm_lang$core$Platform$sendToApp,
											router,
											tagger(time));
									},
									_p7._0)),
							function (_p8) {
								return _elm_lang$core$Task$succeed(state);
							});
					});
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Native_Scheduler.kill(id),
							function (_p14) {
								return _p13._2;
							})
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				killTask,
				function (_p20) {
					return A2(
						_elm_lang$core$Task$andThen,
						A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
						function (newProcesses) {
							return _elm_lang$core$Task$succeed(
								A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
						});
				});
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

	//import Maybe, Native.Array, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_Json = function() {


	// CORE DECODERS

	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function decodeObject(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function decodeTuple(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'tuple',
			func: f,
			decoders: decoders
		};
	}

	function andThen(decoder, callback)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function customAndThen(decoder, callback)
	{
		return {
			ctor: '<decoder>',
			tag: 'customAndThen',
			decoder: decoder,
			callback: callback
		};
	}

	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}


	// DECODING OBJECTS

	function decodeObject1(f, d1)
	{
		return decodeObject(f, [d1]);
	}

	function decodeObject2(f, d1, d2)
	{
		return decodeObject(f, [d1, d2]);
	}

	function decodeObject3(f, d1, d2, d3)
	{
		return decodeObject(f, [d1, d2, d3]);
	}

	function decodeObject4(f, d1, d2, d3, d4)
	{
		return decodeObject(f, [d1, d2, d3, d4]);
	}

	function decodeObject5(f, d1, d2, d3, d4, d5)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5]);
	}

	function decodeObject6(f, d1, d2, d3, d4, d5, d6)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
	}

	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}


	// DECODING TUPLES

	function decodeTuple1(f, d1)
	{
		return decodeTuple(f, [d1]);
	}

	function decodeTuple2(f, d1, d2)
	{
		return decodeTuple(f, [d1, d2]);
	}

	function decodeTuple3(f, d1, d2, d3)
	{
		return decodeTuple(f, [d1, d2, d3]);
	}

	function decodeTuple4(f, d1, d2, d3, d4)
	{
		return decodeTuple(f, [d1, d2, d3, d4]);
	}

	function decodeTuple5(f, d1, d2, d3, d4, d5)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5]);
	}

	function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
	}

	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}


	// DECODE HELPERS

	function ok(value)
	{
		return { tag: 'ok', value: value };
	}

	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}

	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}

	function badCustom(msg)
	{
		return { tag: 'custom', msg: msg };
	}

	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}

	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;

				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');

				case 'custom':
					return 'A `customDecoder` failed'
						+ (context === '_' ? '' : ' at ' + context)
						+ ' with the message: ' + problem.msg;

				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}

	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}


	// DECODE

	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}

	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}

	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}

				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}

				return badPrimitive('an Int', value);

			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);

			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);

			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);

			case 'value':
				return ok(value);

			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}

				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);

			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}

				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));

			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);

			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}

				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok')
					? result
					: badField(field, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}

				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);

			case 'tuple':
				var decoders = decoder.decoders;
				var len = decoders.length;

				if ( !(value instanceof Array) || value.length !== len )
				{
					return badPrimitive('a Tuple with ' + len + ' entries', value);
				}

				var answer = decoder.func;
				for (var i = 0; i < len; i++)
				{
					var result = runHelp(decoders[i], value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					answer = answer(result.value);
				}
				return ok(answer);

			case 'customAndThen':
				var result = runHelp(decoder.decoder, value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				var realResult = decoder.callback(result.value);
				if (realResult.ctor === 'Err')
				{
					return badCustom(realResult._0);
				}
				return ok(realResult._0);

			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);

					if (result.tag === 'ok')
					{
						return result;
					}

					errors.push(result);

					temp = temp._1;
				}
				return badOneOf(errors);

			case 'fail':
				return bad(decoder.msg);

			case 'succeed':
				return ok(decoder.msg);
		}
	}


	// EQUALITY

	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}

		if (a.tag !== b.tag)
		{
			return false;
		}

		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;

			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;

			case 'null':
				return a.value === b.value;

			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);

			case 'map-many':
			case 'tuple':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);

			case 'andThen':
			case 'customAndThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);

			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}

	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}


	// ENCODE

	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value)
	{
		return value;
	}

	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),

		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),

		decodeField: F2(decodeField),

		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),

		andThen: F2(andThen),
		customAndThen: F2(customAndThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,

		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,

		equality: equality
	};

	}();

	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

	var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
	var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
	var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
	var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
	var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
	var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
	var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
	var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
	var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
	var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
	var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
	var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
	var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
	var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
	var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
	var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
	_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
					}),
				decoder,
				fields);
		});
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

	var _elm_lang$dom$Native_Dom = function() {

	function on(node)
	{
		return function(eventName, decoder, toTask)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

				function performTask(event)
				{
					var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
					if (result.ctor === 'Ok')
					{
						_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
					}
				}

				node.addEventListener(eventName, performTask);

				return function()
				{
					node.removeEventListener(eventName, performTask);
				};
			});
		};
	}

	var rAF = typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };

	function withNode(id, doStuff)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			rAF(function()
			{
				var node = document.getElementById(id);
				if (node === null)
				{
					callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
					return;
				}
				callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
			});
		});
	}


	// FOCUS

	function focus(id)
	{
		return withNode(id, function(node) {
			node.focus();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function blur(id)
	{
		return withNode(id, function(node) {
			node.blur();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SCROLLING

	function getScrollTop(id)
	{
		return withNode(id, function(node) {
			return node.scrollTop;
		});
	}

	function setScrollTop(id, desiredScrollTop)
	{
		return withNode(id, function(node) {
			node.scrollTop = desiredScrollTop;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toBottom(id)
	{
		return withNode(id, function(node) {
			node.scrollTop = node.scrollHeight;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function getScrollLeft(id)
	{
		return withNode(id, function(node) {
			return node.scrollLeft;
		});
	}

	function setScrollLeft(id, desiredScrollLeft)
	{
		return withNode(id, function(node) {
			node.scrollLeft = desiredScrollLeft;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toRight(id)
	{
		return withNode(id, function(node) {
			node.scrollLeft = node.scrollWidth;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SIZE

	function width(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollWidth;
				case 'VisibleContent':
					return node.clientWidth;
				case 'VisibleContentWithBorders':
					return node.offsetWidth;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.right - rect.left;
			}
		});
	}

	function height(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollHeight;
				case 'VisibleContent':
					return node.clientHeight;
				case 'VisibleContentWithBorders':
					return node.offsetHeight;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.bottom - rect.top;
			}
		});
	}

	return {
		onDocument: F3(on(document)),
		onWindow: F3(on(window)),

		focus: focus,
		blur: blur,

		getScrollTop: getScrollTop,
		setScrollTop: F2(setScrollTop),
		getScrollLeft: getScrollLeft,
		setScrollLeft: F2(setScrollLeft),
		toBottom: toBottom,
		toRight: toRight,

		height: F2(height),
		width: F2(width)
	};

	}();

	var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
	var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

	//import Native.Json //

	var _elm_lang$virtual_dom$Native_VirtualDom = function() {

	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';



	////////////  VIRTUAL DOM NODES  ////////////


	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}


	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}


	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}


	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}


	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}

	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}

	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}

	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}



	// FACTS


	function organizeFacts(factList)
	{
		var namespace, facts = {};

		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;

			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}

		return {
			facts: facts,
			namespace: namespace
		};
	}



	////////////  PROPERTIES AND ATTRIBUTES  ////////////


	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}


	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}


	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}


	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}


	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}


	function equalEvents(a, b)
	{
		if (!a.options === b.options)
		{
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}



	////////////  RENDERER  ////////////


	function renderer(parent, tagger, initialVirtualNode)
	{
		var eventNode = { tagger: tagger, parent: undefined };

		var domNode = render(initialVirtualNode, eventNode);
		parent.appendChild(domNode);

		var state = 'NO_REQUEST';
		var currentVirtualNode = initialVirtualNode;
		var nextVirtualNode = initialVirtualNode;

		function registerVirtualNode(vNode)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextVirtualNode = vNode;
		}

		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/core/issues>.'
					);

				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';

					var patches = diff(currentVirtualNode, nextVirtualNode);
					domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
					currentVirtualNode = nextVirtualNode;

					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return { update: registerVirtualNode };
	}


	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(cb) { setTimeout(cb, 1000 / 60); };



	////////////  RENDER  ////////////


	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);

			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;

				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);

					subNode = subNode.node;
				}

				var subEventRoot = {
					tagger: tagger,
					parent: eventNode
				};

				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return document.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace
					? document.createElementNS(vNode.namespace, vNode.tag)
					: document.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace
					? document.createElementNS(vNode.namespace, vNode.tag)
					: document.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}



	////////////  APPLY FACTS  ////////////


	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];

			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;

				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;

				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;

				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;

				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;

				default:
					domNode[key] = value;
					break;
			}
		}
	}

	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;

		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}

	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;

			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}

				var message = value._0;

				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};

		eventHandler.info = info;

		return eventHandler;
	}

	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}

	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;

			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}



	////////////  DIFF  ////////////


	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}


	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}


	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}

		var aType = a.type;
		var bType = b.type;

		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}

		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;

			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;

				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;

					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);

					aSubNode = aSubNode.node;
				}

				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;

					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);

					bSubNode = bSubNode.node;
				}

				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}

				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;

			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffChildren(a, b, patches, index);
				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffKeyedChildren(a, b, patches, index);
				return;

			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}

				return;
		}
	}


	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}

		return true;
	}


	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;

		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}

			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };

				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey];

			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}

			diff = diff || {};
			diff[aKey] = bValue;
		}

		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}

		return diff;
	}


	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;

		var aLen = aChildren.length;
		var bLen = bChildren.length;

		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}

		// PAIRWISE DIFF EVERYTHING ELSE

		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}



	////////////  KEYED DIFF  ////////////


	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];

		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;

		var index = rootIndex;

		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];

			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;

			// check if keys match

			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex++;
				bIndex++;
				continue;
			}

			// look ahead 1 to detect insertions and removals.

			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;

			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}

			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}


			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex += 1;
				bIndex += 2;
				continue;
			}

			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 1;
				continue;
			}

			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			break;
		}

		// eat up any remaining nodes with removeNode and insertNode

		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}



	////////////  CHANGES FROM KEYED DIFF  ////////////


	var POSTFIX = '_elmW6BL';


	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};

			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;

			return;
		}

		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });

			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};

			return;
		}

		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}


	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);

			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};

			return;
		}

		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);

			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);

			return;
		}

		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}



	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.


	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}


	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;

		while (index === low)
		{
			var patchType = patch.type;

			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}

			i++;

			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}

		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;

				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}

				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}



	////////////  APPLY PATCHES  ////////////


	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}

		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}

	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}

	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return applyPatchRedraw(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);

			case 'p-tagger':
				domNode.elm_event_node_ref.tagger = patch.data;
				return domNode;

			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;

			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;

			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return applyPatchReorder(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new Error('Ran into an unknown patch!');
		}
	}


	function applyPatchRedraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}


	function applyPatchReorder(domNode, patch)
	{
		var data = patch.data;

		// remove end inserts
		var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

		// removals
		domNode = applyPatchesHelp(domNode, data.patches);

		// inserts
		var inserts = data.inserts;
		for (var i = 0; i < inserts.length; i++)
		{
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		}

		// add end inserts
		if (typeof frag !== 'undefined')
		{
			domNode.appendChild(frag);
		}

		return domNode;
	}


	function applyPatchReorderEndInsertsHelp(endInserts, patch)
	{
		if (typeof endInserts === 'undefined')
		{
			return;
		}

		var frag = document.createDocumentFragment();
		for (var i = 0; i < endInserts.length; i++)
		{
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode)
			);
		}
		return frag;
	}



	////////////  PROGRAMS  ////////////


	function programWithFlags(details)
	{
		return {
			init: details.init,
			update: details.update,
			subscriptions: details.subscriptions,
			view: details.view,
			renderer: renderer
		};
	}


	return {
		node: node,
		text: text,

		custom: custom,

		map: F2(map),

		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),

		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),

		programWithFlags: programWithFlags
	};

	}();
	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

	var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html_App$program = function (app) {
		return _elm_lang$html$Html_App$programWithFlags(
			_elm_lang$core$Native_Utils.update(
				app,
				{
					init: function (_p0) {
						return app.init;
					}
				}));
	};
	var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
		var _p2 = _p1;
		return _elm_lang$html$Html_App$programWithFlags(
			{
				init: function (_p3) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_p2.model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				},
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p2.update, msg, model),
							_elm_lang$core$Native_List.fromArray(
								[]));
					}),
				view: _p2.view,
				subscriptions: function (_p4) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type$ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$autosave = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Basics$fst,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

	var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
	var _elm_lang$html$Html_Events$targetChecked = A2(
		_elm_lang$core$Json_Decode$at,
		_elm_lang$core$Native_List.fromArray(
			['target', 'checked']),
		_elm_lang$core$Json_Decode$bool);
	var _elm_lang$html$Html_Events$targetValue = A2(
		_elm_lang$core$Json_Decode$at,
		_elm_lang$core$Native_List.fromArray(
			['target', 'value']),
		_elm_lang$core$Json_Decode$string);
	var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
	var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
	var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
	var _elm_lang$html$Html_Events$onFocus = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'focus',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onBlur = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'blur',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
		_elm_lang$html$Html_Events$defaultOptions,
		{preventDefault: true});
	var _elm_lang$html$Html_Events$onSubmit = function (msg) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'submit',
			_elm_lang$html$Html_Events$onSubmitOptions,
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onCheck = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'change',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
	};
	var _elm_lang$html$Html_Events$onInput = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'input',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
	};
	var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseout',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseover',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseenter',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseup',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mousedown',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'dblclick',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'click',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});

	var _elm_lang$navigation$Native_Navigation = function() {

	function go(n)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			if (n !== 0)
			{
				history.go(n);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function pushState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.pushState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}

	function replaceState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.replaceState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}

	function getLocation()
	{
		var location = document.location;

		return {
			href: location.href,
			host: location.host,
			hostname: location.hostname,
			protocol: location.protocol,
			origin: location.origin,
			port_: location.port,
			pathname: location.pathname,
			search: location.search,
			hash: location.hash,
			username: location.username,
			password: location.password
		};
	}


	return {
		go: go,
		pushState: pushState,
		replaceState: replaceState,
		getLocation: getLocation
	};

	}();

	var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
	var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
	var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
	var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
		return _elm_lang$core$Process$spawn(
			A3(
				_elm_lang$dom$Dom_LowLevel$onWindow,
				'popstate',
				_elm_lang$core$Json_Decode$value,
				function (_p0) {
					return A2(
						_elm_lang$core$Platform$sendToSelf,
						router,
						_elm_lang$navigation$Native_Navigation.getLocation(
							{ctor: '_Tuple0'}));
				}));
	};
	var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
	_elm_lang$navigation$Navigation_ops['&>'] = F2(
		function (task1, task2) {
			return A2(
				_elm_lang$core$Task$andThen,
				task1,
				function (_p1) {
					return task2;
				});
		});
	var _elm_lang$navigation$Navigation$notify = F3(
		function (router, subs, location) {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(location));
			};
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, subs)),
				_elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'}));
		});
	var _elm_lang$navigation$Navigation$onSelfMsg = F3(
		function (router, location, state) {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
				_elm_lang$core$Task$succeed(state));
		});
	var _elm_lang$navigation$Navigation$cmdHelp = F3(
		function (router, subs, cmd) {
			var _p4 = cmd;
			switch (_p4.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$go(_p4._0);
				case 'New':
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$navigation$Navigation$pushState(_p4._0),
						A2(_elm_lang$navigation$Navigation$notify, router, subs));
				default:
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$navigation$Navigation$replaceState(_p4._0),
						A2(_elm_lang$navigation$Navigation$notify, router, subs));
			}
		});
	var _elm_lang$navigation$Navigation$updateHelp = F2(
		function (func, _p5) {
			var _p6 = _p5;
			return {
				ctor: '_Tuple2',
				_0: _p6._0,
				_1: A2(_elm_lang$core$Platform_Cmd$map, func, _p6._1)
			};
		});
	var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$Location = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$navigation$Navigation$State = F2(
		function (a, b) {
			return {subs: a, process: b};
		});
	var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
		A2(
			_elm_lang$navigation$Navigation$State,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing));
	var _elm_lang$navigation$Navigation$onEffects = F4(
		function (router, cmds, subs, _p7) {
			var _p8 = _p7;
			var _p10 = _p8.process;
			var stepState = function () {
				var _p9 = {ctor: '_Tuple2', _0: subs, _1: _p10};
				_v4_2:
				do {
					if (_p9._0.ctor === '[]') {
						if (_p9._1.ctor === 'Just') {
							return A2(
								_elm_lang$navigation$Navigation_ops['&>'],
								_elm_lang$core$Process$kill(_p9._1._0),
								_elm_lang$core$Task$succeed(
									A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
						} else {
							break _v4_2;
						}
					} else {
						if (_p9._1.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Task$andThen,
								_elm_lang$navigation$Navigation$spawnPopState(router),
								function (pid) {
									return _elm_lang$core$Task$succeed(
										A2(
											_elm_lang$navigation$Navigation$State,
											subs,
											_elm_lang$core$Maybe$Just(pid)));
								});
						} else {
							break _v4_2;
						}
					}
				} while(false);
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$navigation$Navigation$State, subs, _p10));
			}();
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
						cmds)),
				stepState);
		});
	var _elm_lang$navigation$Navigation$UserMsg = function (a) {
		return {ctor: 'UserMsg', _0: a};
	};
	var _elm_lang$navigation$Navigation$Change = function (a) {
		return {ctor: 'Change', _0: a};
	};
	var _elm_lang$navigation$Navigation$Parser = function (a) {
		return {ctor: 'Parser', _0: a};
	};
	var _elm_lang$navigation$Navigation$makeParser = _elm_lang$navigation$Navigation$Parser;
	var _elm_lang$navigation$Navigation$Modify = function (a) {
		return {ctor: 'Modify', _0: a};
	};
	var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Modify(url));
	};
	var _elm_lang$navigation$Navigation$New = function (a) {
		return {ctor: 'New', _0: a};
	};
	var _elm_lang$navigation$Navigation$newUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$New(url));
	};
	var _elm_lang$navigation$Navigation$Jump = function (a) {
		return {ctor: 'Jump', _0: a};
	};
	var _elm_lang$navigation$Navigation$back = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(0 - n));
	};
	var _elm_lang$navigation$Navigation$forward = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(n));
	};
	var _elm_lang$navigation$Navigation$cmdMap = F2(
		function (_p11, myCmd) {
			var _p12 = myCmd;
			switch (_p12.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$Jump(_p12._0);
				case 'New':
					return _elm_lang$navigation$Navigation$New(_p12._0);
				default:
					return _elm_lang$navigation$Navigation$Modify(_p12._0);
			}
		});
	var _elm_lang$navigation$Navigation$Monitor = function (a) {
		return {ctor: 'Monitor', _0: a};
	};
	var _elm_lang$navigation$Navigation$programWithFlags = F2(
		function (_p13, stuff) {
			var _p14 = _p13;
			var _p16 = _p14._0;
			var location = _elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'});
			var init = function (flags) {
				return A2(
					_elm_lang$navigation$Navigation$updateHelp,
					_elm_lang$navigation$Navigation$UserMsg,
					A2(
						stuff.init,
						flags,
						_p16(location)));
			};
			var view = function (model) {
				return A2(
					_elm_lang$html$Html_App$map,
					_elm_lang$navigation$Navigation$UserMsg,
					stuff.view(model));
			};
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(_elm_lang$navigation$Navigation$Change)),
							A2(
							_elm_lang$core$Platform_Sub$map,
							_elm_lang$navigation$Navigation$UserMsg,
							stuff.subscriptions(model))
						]));
			};
			var update = F2(
				function (msg, model) {
					return A2(
						_elm_lang$navigation$Navigation$updateHelp,
						_elm_lang$navigation$Navigation$UserMsg,
						function () {
							var _p15 = msg;
							if (_p15.ctor === 'Change') {
								return A2(
									stuff.urlUpdate,
									_p16(_p15._0),
									model);
							} else {
								return A2(stuff.update, _p15._0, model);
							}
						}());
				});
			return _elm_lang$html$Html_App$programWithFlags(
				{init: init, view: view, update: update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$program = F2(
		function (parser, stuff) {
			return A2(
				_elm_lang$navigation$Navigation$programWithFlags,
				parser,
				_elm_lang$core$Native_Utils.update(
					stuff,
					{
						init: function (_p17) {
							return stuff.init;
						}
					}));
		});
	var _elm_lang$navigation$Navigation$subMap = F2(
		function (func, _p18) {
			var _p19 = _p18;
			return _elm_lang$navigation$Navigation$Monitor(
				function (_p20) {
					return func(
						_p19._0(_p20));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

	var _evancz$url_parser$UrlParser$oneOfHelp = F3(
		function (choices, chunks, formatter) {
			oneOfHelp:
			while (true) {
				var _p0 = choices;
				if (_p0.ctor === '[]') {
					return _elm_lang$core$Result$Err('Tried many parsers, but none of them worked!');
				} else {
					var _p1 = A2(_p0._0._0, chunks, formatter);
					if (_p1.ctor === 'Err') {
						var _v2 = _p0._1,
							_v3 = chunks,
							_v4 = formatter;
						choices = _v2;
						chunks = _v3;
						formatter = _v4;
						continue oneOfHelp;
					} else {
						return _elm_lang$core$Result$Ok(_p1._0);
					}
				}
			}
		});
	var _evancz$url_parser$UrlParser$Chunks = F2(
		function (a, b) {
			return {seen: a, rest: b};
		});
	var _evancz$url_parser$UrlParser$parse = F3(
		function (input, _p2, url) {
			var _p3 = _p2;
			var _p4 = A2(
				_p3._0,
				A2(
					_evancz$url_parser$UrlParser$Chunks,
					_elm_lang$core$Native_List.fromArray(
						[]),
					A2(_elm_lang$core$String$split, '/', url)),
				input);
			if (_p4.ctor === 'Err') {
				return _elm_lang$core$Result$Err(_p4._0);
			} else {
				var _p7 = _p4._0._1;
				var _p6 = _p4._0._0.rest;
				var _p5 = _p6;
				if (_p5.ctor === '[]') {
					return _elm_lang$core$Result$Ok(_p7);
				} else {
					if ((_p5._0 === '') && (_p5._1.ctor === '[]')) {
						return _elm_lang$core$Result$Ok(_p7);
					} else {
						return _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'The parser worked, but /',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$String$join, '/', _p6),
									' was left over.')));
					}
				}
			}
		});
	var _evancz$url_parser$UrlParser$Parser = function (a) {
		return {ctor: 'Parser', _0: a};
	};
	var _evancz$url_parser$UrlParser$s = function (str) {
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (_p8, result) {
					var _p9 = _p8;
					var _p12 = _p9.rest;
					var _p10 = _p12;
					if (_p10.ctor === '[]') {
						return _elm_lang$core$Result$Err(
							A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', str));
					} else {
						var _p11 = _p10._0;
						return _elm_lang$core$Native_Utils.eq(_p11, str) ? _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: A2(
									_evancz$url_parser$UrlParser$Chunks,
									A2(_elm_lang$core$List_ops['::'], _p11, _p9.seen),
									_p10._1),
								_1: result
							}) : _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Wanted /',
								A2(
									_elm_lang$core$Basics_ops['++'],
									str,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' but got /',
										A2(_elm_lang$core$String$join, '/', _p12)))));
					}
				}));
	};
	var _evancz$url_parser$UrlParser$custom = F2(
		function (tipe, stringToSomething) {
			return _evancz$url_parser$UrlParser$Parser(
				F2(
					function (_p13, func) {
						var _p14 = _p13;
						var _p15 = _p14.rest;
						if (_p15.ctor === '[]') {
							return _elm_lang$core$Result$Err(
								A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', tipe));
						} else {
							var _p17 = _p15._0;
							var _p16 = stringToSomething(_p17);
							if (_p16.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									{
										ctor: '_Tuple2',
										_0: A2(
											_evancz$url_parser$UrlParser$Chunks,
											A2(_elm_lang$core$List_ops['::'], _p17, _p14.seen),
											_p15._1),
										_1: func(_p16._0)
									});
							} else {
								return _elm_lang$core$Result$Err(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'Parsing `',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p17,
											A2(_elm_lang$core$Basics_ops['++'], '` went wrong: ', _p16._0))));
							}
						}
					}));
		});
	var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
	var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
	var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
	_evancz$url_parser$UrlParser_ops['</>'] = F2(
		function (_p19, _p18) {
			var _p20 = _p19;
			var _p21 = _p18;
			return _evancz$url_parser$UrlParser$Parser(
				F2(
					function (chunks, func) {
						return A2(
							_elm_lang$core$Result$andThen,
							A2(_p20._0, chunks, func),
							function (_p22) {
								var _p23 = _p22;
								return A2(_p21._0, _p23._0, _p23._1);
							});
					}));
		});
	var _evancz$url_parser$UrlParser$oneOf = function (choices) {
		return _evancz$url_parser$UrlParser$Parser(
			_evancz$url_parser$UrlParser$oneOfHelp(choices));
	};
	var _evancz$url_parser$UrlParser$format = F2(
		function (input, _p24) {
			var _p25 = _p24;
			return _evancz$url_parser$UrlParser$Parser(
				F2(
					function (chunks, func) {
						var _p26 = A2(_p25._0, chunks, input);
						if (_p26.ctor === 'Err') {
							return _elm_lang$core$Result$Err(_p26._0);
						} else {
							return _elm_lang$core$Result$Ok(
								{
									ctor: '_Tuple2',
									_0: _p26._0._0,
									_1: func(_p26._0._1)
								});
						}
					}));
		});

	var _moarwick$elm_webpack_starter$Routing$NotFoundRoute = {ctor: 'NotFoundRoute'};
	var _moarwick$elm_webpack_starter$Routing$routeFromResult = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _moarwick$elm_webpack_starter$Routing$NotFoundRoute;
		}
	};
	var _moarwick$elm_webpack_starter$Routing$KontaktRoute = {ctor: 'KontaktRoute'};
	var _moarwick$elm_webpack_starter$Routing$InformasjonRoute = {ctor: 'InformasjonRoute'};
	var _moarwick$elm_webpack_starter$Routing$HovedsideRoute = {ctor: 'HovedsideRoute'};
	var _moarwick$elm_webpack_starter$Routing$matchers = _evancz$url_parser$UrlParser$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_evancz$url_parser$UrlParser$format,
				_moarwick$elm_webpack_starter$Routing$HovedsideRoute,
				_evancz$url_parser$UrlParser$s('')),
				A2(
				_evancz$url_parser$UrlParser$format,
				_moarwick$elm_webpack_starter$Routing$InformasjonRoute,
				_evancz$url_parser$UrlParser$s('informasjon')),
				A2(
				_evancz$url_parser$UrlParser$format,
				_moarwick$elm_webpack_starter$Routing$KontaktRoute,
				_evancz$url_parser$UrlParser$s('kontakt'))
			]));
	var _moarwick$elm_webpack_starter$Routing$hashParser = function (location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			_elm_lang$core$Basics$identity,
			_moarwick$elm_webpack_starter$Routing$matchers,
			A2(_elm_lang$core$String$dropLeft, 1, location.hash));
	};
	var _moarwick$elm_webpack_starter$Routing$parser = _elm_lang$navigation$Navigation$makeParser(_moarwick$elm_webpack_starter$Routing$hashParser);

	var _moarwick$elm_webpack_starter$Models$initialModel = function (route) {
		return {
			pameldte: _elm_lang$core$Native_List.fromArray(
				[]),
			route: route,
			navn: '',
			epost: ''
		};
	};
	var _moarwick$elm_webpack_starter$Models$Model = F4(
		function (a, b, c, d) {
			return {pameldte: a, route: b, navn: c, epost: d};
		});

	var _moarwick$elm_webpack_starter$Messages$Epost = function (a) {
		return {ctor: 'Epost', _0: a};
	};
	var _moarwick$elm_webpack_starter$Messages$Navn = function (a) {
		return {ctor: 'Navn', _0: a};
	};
	var _moarwick$elm_webpack_starter$Messages$GaTilKontakt = {ctor: 'GaTilKontakt'};
	var _moarwick$elm_webpack_starter$Messages$GaTilHovedside = {ctor: 'GaTilHovedside'};
	var _moarwick$elm_webpack_starter$Messages$GaTilInformasjon = {ctor: 'GaTilInformasjon'};
	var _moarwick$elm_webpack_starter$Messages$MeldPa = {ctor: 'MeldPa'};

	var _moarwick$elm_webpack_starter$Meny$menyView = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('pure-menu pure-menu-horizontal')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$ul,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('pure-menu-list')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$li,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-menu-item')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$a,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('pure-menu-link'),
											_elm_lang$html$Html_Attributes$href('/#'),
											_elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Messages$GaTilHovedside)
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('119årslag')
										]))
								])),
							A2(
							_elm_lang$html$Html$li,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-menu-item')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$a,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('pure-menu-link'),
											_elm_lang$html$Html_Attributes$href('/#informasjon'),
											_elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Messages$GaTilInformasjon)
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Informasjon')
										]))
								])),
							A2(
							_elm_lang$html$Html$li,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-menu-item')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$a,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('pure-menu-link'),
											_elm_lang$html$Html_Attributes$href('/#kontakt'),
											_elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Messages$GaTilKontakt)
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Kontakt')
										]))
								]))
						]))
				]));
	};

	var _moarwick$elm_webpack_starter$Components_Informasjon$informasjonView = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('containter')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('information pure-g')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-u-1-3')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('l-box')
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$h3,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$class('information-head')
												]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Påmelding')
												])),
											A2(
											_elm_lang$html$Html$p,
											_elm_lang$core$Native_List.fromArray(
												[]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo\n                                                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.')
												]))
										]))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-u-1-3')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('l-box')
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$h3,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$class('information-head')
												]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Festen')
												])),
											A2(
											_elm_lang$html$Html$p,
											_elm_lang$core$Native_List.fromArray(
												[]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo\n                                                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.')
												]))
										]))
								])),
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-u-1-3')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('l-box')
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$h3,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$class('information-head')
												]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Overnatting')
												])),
											A2(
											_elm_lang$html$Html$p,
											_elm_lang$core$Native_List.fromArray(
												[]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo\n                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.')
												]))
										]))
								]))
						]))
				]));
	};

	var _moarwick$elm_webpack_starter$Components_Invitasjon$invitasjonView = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('information pure-g')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('pure-u-1')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('l-box')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$h3,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('information-head')
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Hei alle kjære venner og familie av mamma og pappa/Torunn og Trond!')
										])),
									A2(
									_elm_lang$html$Html$p,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Lørdag 3. juni 2017 vil vi gjerne få invitere dere til å bli med å feire at mamma og pappa fyller 60 år. Hold av datoen, så håper vi dere har tid, lyst og mulighet til å være med å gi disse fantastiske menneskene en bursdag de sent vil glemme!\n                      Alle er invitert med kjæreste/ektefelle/samboer, så spre gjerne ordet videre!')
										]))
								]))
						]))
				]));
	};

	var _moarwick$elm_webpack_starter$Components_Pamelding_Pamelding$pameldte = function (pameldt) {
		return A2(
			_elm_lang$html$Html$li,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('message')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$span,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('message-text')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(pameldt)
						]))
				]));
	};
	var _moarwick$elm_webpack_starter$Components_Pamelding_Pamelding$pameldingView = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('information pure-g')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('pure-u-1')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('l-box')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$form,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$input,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$type$('text'),
													_elm_lang$html$Html_Attributes$placeholder('Navn'),
													_elm_lang$html$Html_Events$onInput(_moarwick$elm_webpack_starter$Messages$Navn),
													_elm_lang$html$Html_Attributes$value(model.navn)
												]),
											_elm_lang$core$Native_List.fromArray(
												[])),
											A2(
											_elm_lang$html$Html$input,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$type$('mail'),
													_elm_lang$html$Html_Attributes$placeholder('E-post'),
													_elm_lang$html$Html_Events$onInput(_moarwick$elm_webpack_starter$Messages$Epost),
													_elm_lang$html$Html_Attributes$value(model.epost)
												]),
											_elm_lang$core$Native_List.fromArray(
												[])),
											A2(
											_elm_lang$html$Html$button,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Events$onClick(_moarwick$elm_webpack_starter$Messages$MeldPa)
												]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Bli med')
												]))
										]))
								])),
							A2(
							_elm_lang$html$Html$ul,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('message-list')
								]),
							A2(_elm_lang$core$List$map, _moarwick$elm_webpack_starter$Components_Pamelding_Pamelding$pameldte, model.pameldte))
						]))
				]));
	};

	var _moarwick$elm_webpack_starter$Components_Hovedside$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('container')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('banner')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$h1,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('banner-head')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Bli med å feire.')
										])),
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html$text('Torunn og Trond fyller 119 år.')
										]))
								]))
						])),
					_moarwick$elm_webpack_starter$Components_Invitasjon$invitasjonView(model),
					_moarwick$elm_webpack_starter$Components_Pamelding_Pamelding$pameldingView(model)
				]));
	};

	var _moarwick$elm_webpack_starter$Components_Kontakt$kontaktView = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('containter')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('information pure-g')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$div,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$class('pure-u-1')
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$html$Html$div,
									_elm_lang$core$Native_List.fromArray(
										[
											_elm_lang$html$Html_Attributes$class('l-box')
										]),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(
											_elm_lang$html$Html$h3,
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html_Attributes$class('information-head')
												]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Kontakt')
												])),
											A2(
											_elm_lang$html$Html$p,
											_elm_lang$core$Native_List.fromArray(
												[]),
											_elm_lang$core$Native_List.fromArray(
												[
													_elm_lang$html$Html$text('Har du noen spørsmål? Ta kontakt på tlf 000 00 000 eller mail mail@mail.no')
												]))
										]))
								]))
						]))
				]));
	};

	var _moarwick$elm_webpack_starter$View$notFoundView = A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text('Finner ikke')
			]));
	var _moarwick$elm_webpack_starter$View$page = function (model) {
		var _p0 = model.route;
		switch (_p0.ctor) {
			case 'HovedsideRoute':
				return _moarwick$elm_webpack_starter$Components_Hovedside$view(model);
			case 'InformasjonRoute':
				return _moarwick$elm_webpack_starter$Components_Informasjon$informasjonView(model);
			case 'KontaktRoute':
				return _moarwick$elm_webpack_starter$Components_Kontakt$kontaktView(model);
			default:
				return _moarwick$elm_webpack_starter$View$notFoundView;
		}
	};
	var _moarwick$elm_webpack_starter$View$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_moarwick$elm_webpack_starter$Meny$menyView(model),
					_moarwick$elm_webpack_starter$View$page(model)
				]));
	};
	var _moarwick$elm_webpack_starter$View$NoOp = {ctor: 'NoOp'};

	var _moarwick$elm_webpack_starter$App$update = F2(
		function (msg, model) {
			var _p0 = msg;
			switch (_p0.ctor) {
				case 'MeldPa':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								pameldte: A2(
									_elm_lang$core$List_ops['::'],
									_elm_lang$core$String$concat(
										_elm_lang$core$Native_List.fromArray(
											[model.navn, ' ', model.epost])),
									model.pameldte),
								navn: '',
								epost: ''
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'Navn':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{navn: _p0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'Epost':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{epost: _p0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'GaTilHovedside':
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _elm_lang$navigation$Navigation$newUrl('')
					};
				case 'GaTilInformasjon':
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _elm_lang$navigation$Navigation$newUrl('#informasjon')
					};
				default:
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _elm_lang$navigation$Navigation$newUrl('#kontakt')
					};
			}
		});
	var _moarwick$elm_webpack_starter$App$urlUpdate = F2(
		function (result, model) {
			var currentRoute = _moarwick$elm_webpack_starter$Routing$routeFromResult(result);
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{route: currentRoute}),
				_1: _elm_lang$core$Platform_Cmd$none
			};
		});
	var _moarwick$elm_webpack_starter$App$subscriptions = function (model) {
		return _elm_lang$core$Platform_Sub$none;
	};
	var _moarwick$elm_webpack_starter$App$init = function (result) {
		var currentRoute = _moarwick$elm_webpack_starter$Routing$routeFromResult(result);
		return {
			ctor: '_Tuple2',
			_0: _moarwick$elm_webpack_starter$Models$initialModel(currentRoute),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	};
	var _moarwick$elm_webpack_starter$App$main = {
		main: A2(
			_elm_lang$navigation$Navigation$program,
			_moarwick$elm_webpack_starter$Routing$parser,
			{init: _moarwick$elm_webpack_starter$App$init, subscriptions: _moarwick$elm_webpack_starter$App$subscriptions, update: _moarwick$elm_webpack_starter$App$update, urlUpdate: _moarwick$elm_webpack_starter$App$urlUpdate, view: _moarwick$elm_webpack_starter$View$view})
	};

	var Elm = {};
	Elm['App'] = Elm['App'] || {};
	_elm_lang$core$Native_Platform.addPublicModule(Elm['App'], 'App', typeof _moarwick$elm_webpack_starter$App$main === 'undefined' ? null : _moarwick$elm_webpack_starter$App$main);



	//////////////////// HMR BEGIN ////////////////////
	if (module.hot) {
	  (function(Elm) {
	    "use strict";
	    
	    //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
	    if (typeof Object.assign != 'function') {
	      Object.assign = function(target) {
	        'use strict';
	        if (target == null) {
	          throw new TypeError('Cannot convert undefined or null to object');
	        }
	    
	        target = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	          var source = arguments[index];
	          if (source != null) {
	            for (var key in source) {
	              if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	              }
	            }
	          }
	        }
	        return target;
	      };
	    }

	    var programWithFlags;
	    
	    try {
	      programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	    } catch (_) {
	      console.warn('[elm-hot] Hot-swapping disabled because VirtualDom module was not found.')
	      return;
	    }

	    var instances = module.hot.data
	      ? module.hot.data.instances || {}
	      : {};
	    var uid = module.hot.data
	      ? module.hot.uid || 0
	      : 0;

	    var cancellers = [];

	    var initializingInstance = null, swappingInstance = null;

	    module.hot.accept();
	    module.hot.dispose(function(data) {
	      data.instances = instances;
	      data.uid = uid;

	      // disable current instance
	      _elm_lang$core$Native_Scheduler.nativeBinding = function() {
	        return _elm_lang$core$Native_Scheduler.fail(new Error('[elm-hot] Inactive Elm instance.'))
	      }

	      if (cancellers.length) {
	        console.log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
	        try {
	          cancellers.forEach(function (cancel) {
	            cancel();
	          });
	        } catch (e) {
	          console.warn('[elm-hot] Kill process error: ' + e.message);
	        }
	      }
	    });

	    function getId() {
	      return ++uid;
	    }

	    function findPublicModules(parent, path) {
	      var modules = [];
	      for (var key in parent) {
	        var child = parent[key];
	        var currentPath = path ? path + '.' + key : key;
	        if ('fullscreen' in child) {
	          modules.push({
	            path: currentPath,
	            module: child
	          });
	        } else {
	          modules = modules.concat(findPublicModules(child, currentPath));
	        }
	      }
	      return modules;
	    }

	    function getPublicModule(path) {
	      var parts = path.split('.');
	      var parent = Elm;
	      for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        if (part in parent) {
	          parent = parent[part]
	        }
	        if (!parent) {
	          return null;
	        }
	      }
	      return parent
	    }

	    function registerInstance(domNode, flags, path, portSubscribes) {
	      var id = getId();
	      return instances[id] = {
	        id: id,
	        path: path,
	        domNode: domNode,
	        flags: flags,
	        portSubscribes: portSubscribes,
	        elmProxy: null
	      };
	    }

	    function wrapPublicModule(path, module) {
	      var embed = module.embed;
	      var fullscreen = module.fullscreen;
	      module.embed = function(domNode, flags) {
	        var elm;
	        var portSubscribes = {};
	        initializingInstance = registerInstance(domNode, flags, path, portSubscribes)
	        elm = embed(domNode, flags);
	        wrapPorts(elm, portSubscribes)
	        elm = initializingInstance.elmProxy = {
	          ports: elm.ports
	        };
	        initializingInstance = null;
	        return elm;
	      };

	      module.fullscreen = function (flags) {
	        var elm
	        var portSubscribes = {};
	        initializingInstance = registerInstance(document.body, flags, path, portSubscribes)
	        elm = fullscreen(flags);
	        wrapPorts(elm, portSubscribes)
	        elm = initializingInstance.elmProxy = {
	          ports: elm.ports
	        };
	        initializingInstance = null;
	        return elm;
	      }
	    }

	    function swap(instance) {
	      console.log('[elm-hot] Hot-swapping module: ' + instance.path)

	      swappingInstance = instance;

	      var domNode = instance.domNode;

	      while (domNode.lastChild) {
	        domNode.removeChild(domNode.lastChild);
	      }

	      var m = getPublicModule(instance.path)
	      var elm;
	      if (m) {
	        if (instance.isFullscreen) {
	          elm = m.fullscreen(instance.flags);
	        } else {
	          elm = m.embed(domNode, instance.flags);
	        }

	        instance.elmProxy.ports = elm.ports;

	        Object.keys(instance.portSubscribes).forEach(function(portName) {
	          if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
	            var handlers = instance.portSubscribes[portName];
	            if (!handlers.length) {
	              return;
	            }
	            console.log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \'' + portName + '\' (' + instance.path + ').');
	            handlers.forEach(function(handler) {
	              elm.ports[portName].subscribe(handler);
	            });
	          } else {
	            delete instance.portSubscribes[portName];
	            console.log('[elm-hot] Port was removed: ' + portName);
	          }
	        });
	      } else {
	        console.log('[elm-hot] Module was removed: ' + instance.path);
	      }

	      swappingInstance = null;
	    }

	    function wrapPorts(elm, portSubscribes) {
	      var portNames = Object.keys(elm.ports || {});
	      //hook ports
	      if (portNames.length) {
	        portNames
	          .filter(function(name) {
	            return 'subscribe' in elm.ports[name];
	          })
	          .forEach(function(portName) {
	            var port = elm.ports[portName];
	            var subscribe = port.subscribe;
	            var unsubscribe = port.unsubscribe;
	            elm.ports[portName] = Object.assign(port, {
	              subscribe: function(handler) {
	                console.log('[elm-hot] ports.' + portName + '.subscribe called.');
	                if (!portSubscribes[portName]) {
	                  portSubscribes[portName] = [ handler ];
	                } else {
	                  //TODO handle subscribing to single handler more than once?
	                  portSubscribes[portName].push(handler);
	                }
	                return subscribe.call(port, handler);
	              },
	              unsubscribe: function(handler) {
	                console.log('[elm-hot] ports.' + portName + '.unsubscribe called.');
	                var list = portSubscribes[portName];
	                if (list && list.indexOf(handler) !== -1) {
	                  list.splice(list.lastIndexOf(handler), 1);
	                } else {
	                  console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
	                }
	                return unsubscribe.call(port, handler);
	              }
	            });
	          });
	      }
	      return portSubscribes;
	    }

	    // hook program creation
	    _elm_lang$virtual_dom$VirtualDom$programWithFlags = function () {
	      var instance = initializingInstance;
	      var swapping = swappingInstance;
	      var tryFirstRender = !!swappingInstance;
	      var isInitialRender = true;
	      var program = programWithFlags.apply(this, arguments);

	      //var makeRenderer = program.renderer;
	      var init = program.init;
	      var view = program.view;
	      program.init = function () {
	        var result = init.apply(this, arguments);
	        if (swapping) {
	          result._0 = swapping.lastState;
	        }
	        return result;
	      };
	      program.view = function(model) {
	        var result;
	        // first render may fail if shape of model changed too much
	        if (tryFirstRender) {
	          tryFirstRender = false;
	          try {
	            result = view(model);
	          } catch (e) {
	            throw new Error('[elm-hot] Hot-swapping is not possible, please reload page.');
	          }
	        } else {
	          result = view(model);
	        }
	        if (instance) {
	          instance.lastState = model;
	        } else {
	          instance = swapping;
	        }
	        isInitialRender = false;
	        return result;
	      };
	      return program;
	    }

	    // hook process creation
	    var nativeBinding = _elm_lang$core$Native_Scheduler.nativeBinding
	    _elm_lang$core$Native_Scheduler.nativeBinding = function() {
	      var def = nativeBinding.apply(this, arguments);
	      var callback = def.callback
	      def.callback = function() {
	        var result = callback.apply(this, arguments)
	        if (result) {
	          cancellers.push(result);
	          return function() {
	            cancellers.splice(cancellers.indexOf(result), 1);
	            return result();
	          };
	        }
	        return result;
	      };
	      return def;
	    };

	    // swap instances
	    var removedInstances = [];
	    for (var id in instances) {
	      var instance = instances[id]
	      if (instance.domNode.parentNode) {
	        swap(instance);
	      } else {
	        removedInstances.push(id);
	      }
	    }

	    removedInstances.forEach(function (id) {
	      delete instance[id];
	    });

	    // wrap all public modules
	    var publicModules = findPublicModules(Elm);
	    publicModules.forEach(function (m) {
	      wrapPublicModule(m.path, m.module);
	    });
	  })(Elm);
	}
	//////////////////// HMR END ////////////////////


	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}

	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}

	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}

	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}

	}).call(this);



/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOGM1Nzk5MDgzYzU1NTQ4MDMzZiIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3R5bGVzL3N0eWxlcy5jc3M/YWQ0NyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbG0vQXBwLmVsbSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM4YzU3OTkwODNjNTU1NDgwMzNmXG4gKiovIiwiLy8gcHVsbCBpbiBkZXNpcmVkIENTUy9TQVNTIGZpbGVzXG5yZXF1aXJlKCAnLi9zdHlsZXMvc3R5bGVzLmNzcycgKTtcblxuLy8gaW5qZWN0IGJ1bmRsZWQgRWxtIGFwcCBpbnRvIGRpdiNtYWluXG52YXIgRWxtID0gcmVxdWlyZSggJy4uL2VsbS9BcHAnICk7XG5FbG0uQXBwLmVtYmVkKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FwcCcgKSApO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wdWJsaWMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHVibGljL3N0eWxlcy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIC0tIEJBU0UgU1RZTEVTIC0tXFxuICogTW9zdCBvZiB0aGVzZSBhcmUgaW5oZXJpdGVkIGZyb20gQmFzZSwgYnV0IEkgd2FudCB0byBjaGFuZ2UgYSBmZXcuXFxuICovXFxuYm9keSB7XFxuICBjb2xvcjogIzUyNjA2NjsgfVxcblxcbmgyLCBoMyB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG5cXG5wIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTsgfVxcblxcbi8qXFxuICogLS0gTGF5b3V0IFN0eWxlcyAtLVxcbiAqL1xcbi5sLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ubC1ib3gge1xcbiAgcGFkZGluZzogMC41ZW0gMmVtOyB9XFxuXFxuLypcXG4gKiAtLSBNRU5VIFNUWUxFUyAtLVxcbiAqIE1ha2UgdGhlIG1lbnUgaGF2ZSBhIHZlcnkgZmFpbnQgYm94LXNoYWRvdy5cXG4gKi9cXG4ucHVyZS1tZW51IHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG5cXG4vKlxcbiAqIC0tIEJBTk5FUiAtLVxcbiAqIFRoZSB0b3AgYmFubmVyIHdpdGggdGhlIGhlYWRpbmdzLiBCeSB1c2luZyBhIGNvbWJpbmF0aW9uXFxuICogb2YgYGRpc3BsYXk6IHRhYmxlO2AgYW5kIGBkaXNwbGF5OiB0YWJsZS1jZWxsO2AsIHdlIGNhblxcbiAqIHZlcnRpY2FsbHkgY2VudGVyIHRoZSB0ZXh0LlxcbiAqL1xcbi5iYW5uZXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFxcXCIvLi4vaW1nL2ZqZWxsdHVyLmpwZ1xcXCIpIDAgMCBuby1yZXBlYXQgZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGFJbWFnZUxvYWRlcihzcmM9J2h0dHA6Ly8yNC5tZWRpYS50dW1ibHIuY29tL2NjYjI2ODgzMjU4MGFjMTI5NTE4MjhhMWMxNzlkZTY5L3R1bWJscl9tbzJ4Yms4SlVLMXN0NWxobW8xXzEyODAuanBnJywgc2l6aW5nTWV0aG9kPSdzY2FsZScpO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG5cXG4uYmFubmVyLWhlYWQge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyB9XFxuXFxuLypcXG4gKiAtLSBQUklDSU5HIFRBQkxFIFdSQVBQRVIgLS1cXG4gKiBUaGlzIGVsZW1lbnQgd3JhcHMgdXAgYWxsIHRoZSBwcmljaW5nIHRhYmxlIGVsZW1lbnRzXFxuICovXFxuLnByaWNpbmctdGFibGVzLFxcbi5pbmZvcm1hdGlvbiB7XFxuICBtYXgtd2lkdGg6IDk4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ucHJpY2luZy10YWJsZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMy4xMjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qXFxuICogLS0gUFJJQ0lORyBUQUJMRSAgLS1cXG4gKiBFdmVyeSBwcmljaW5nIHRhYmxlIGhhcyB0aGUgLnByaWNpbmctdGFibGUgY2xhc3NcXG4gKi9cXG4ucHJpY2luZy10YWJsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luOiAwIDAuNWVtIDJlbTtcXG4gIHBhZGRpbmc6IDAgMCAzZW07IH1cXG5cXG4vKlxcbiAqIC0tIFBSSUNJTkcgVEFCTEUgSEVBREVSIENPTE9SUyAtLVxcbiAqIENob29zZSBhIGRpZmZlcmVudCBjb2xvciBiYXNlZCBvbiB0aGUgdHlwZSBvZiBwcmljaW5nIHRhYmxlLlxcbiAqL1xcbi5wcmljaW5nLXRhYmxlLWZyZWUgLnByaWNpbmctdGFibGUtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICM1MTkyNTE7IH1cXG5cXG4ucHJpY2luZy10YWJsZS1iaXogLnByaWNpbmctdGFibGUtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMyYzQ5ODU7IH1cXG5cXG4vKlxcbiAqIC0tIFBSSUNJTkcgVEFCTEUgSEVBREVSIC0tXFxuICogQnkgZGVmYXVsdCwgYSBoZWFkZXIgaXMgYmxhY2svd2hpdGUsIGFuZCBoYXMgc29tZSBzdHlsZXMgZm9yIGl0cyA8aDI+IG5hbWUuXFxuICovXFxuLnByaWNpbmctdGFibGUtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wcmljaW5nLXRhYmxlLWhlYWRlciBoMiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLypcXG4gKiAtLSBQUklDSU5HIFRBQkxFIFBSSUNFIC0tXFxuICogU3R5bGVzIGZvciB0aGUgcHJpY2UgYW5kIHRoZSBjb3JyZXNwb25kaW5nIDxzcGFuPnBlciBtb250aDwvc3Bhbj5cXG4gKi9cXG4ucHJpY2luZy10YWJsZS1wcmljZSB7XFxuICBmb250LXNpemU6IDZlbTtcXG4gIG1hcmdpbjogMC4yZW0gMCAwO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxcblxcbi5wcmljaW5nLXRhYmxlLXByaWNlIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICpjb2xvcjogI2ZmZjsgfVxcblxcbi8qXFxuICogLS0gUFJJQ0lORyBUQUJMRSBMSVNUIC0tXFxuICogRWFjaCBwcmljaW5nIHRhYmxlIGhhcyBhIDx1bD4gd2hpY2ggaXMgZGVub3RlZCBieSB0aGUgLnByaWNpbmctdGFibGUtbGlzdCBjbGFzc1xcbiAqL1xcbi5wcmljaW5nLXRhYmxlLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qXFxuICogLS0gUFJJQ0lORyBUQUJMRSBMSVNUIEVMRU1FTlRTIC0tXFxuICogU3R5bGVzIGZvciB0aGUgaW5kaXZpZHVhbCBsaXN0IGVsZW1lbnRzIHdpdGhpbiBlYWNoIHByaWNpbmcgdGFibGVcXG4gKi9cXG4ucHJpY2luZy10YWJsZS1saXN0IGxpIHtcXG4gIHBhZGRpbmc6IDAuOGVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7IH1cXG5cXG4vKlxcbiAqIC0tIFBSSUNJTkcgVEFCTEUgQlVUVE9OIC0tXFxuICogU3R5bGVzIGZvciB0aGUgXFxcIkNob29zZVxcXCIgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgYSBwcmljaW5nIHRhYmxlLlxcbiAqIFRoaXMgaW5oZXJpdHMgZnJvbSBQdXJlIEJ1dHRvbi5cXG4gKi9cXG4uYnV0dG9uLWNob29zZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC0xLjVlbTsgfVxcblxcbi5pbmZvcm1hdGlvbi1oZWFkIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogI2RkZDsgfVxcblxcbi8qXFxuICogLS0gVEFCTEVUIE1FRElBIFFVRVJJRVMgLS1cXG4gKiBPbiB0YWJsZXRzLCB3ZSB3YW50IHRvIHNsaWdodGx5IGFkanVzdCB0aGUgc2l6ZSBvZiB0aGUgYmFubmVyXFxuICogdGV4dCBhbmQgYWRkIHNvbWUgdmVydGljYWwgc3BhY2UgYmV0d2VlbiB0aGUgdmFyaW91cyBwcmljaW5nIHRhYmxlc1xcbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xcbiAgLmJhbm5lci1oZWFkIHtcXG4gICAgZm9udC1zaXplOiA0ZW07IH1cXG4gIC5wcmljaW5nLXRhYmxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfSB9XFxuXFxuLypcXG4gKiAtLSBQSE9ORSBNRURJQSBRVUVSSUVTIC0tXFxuICogT24gcGhvbmVzLCB3ZSB3YW50IHRvIHJlZHVjZSB0aGUgaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgdGhlIGJhbm5lciBmdXJ0aGVyXFxuICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuYmFubmVyIHtcXG4gICAgaGVpZ2h0OiA0MDBweDsgfVxcbiAgLmJhbm5lci1oZWFkIHtcXG4gICAgZm9udC1zaXplOiAzZW07IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9wdWJsaWMvc3R5bGVzL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRjIoZnVuKVxue1xuICBmdW5jdGlvbiB3cmFwcGVyKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bihhLGIpOyB9OyB9XG4gIHdyYXBwZXIuYXJpdHkgPSAyO1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBGMyhmdW4pXG57XG4gIGZ1bmN0aW9uIHdyYXBwZXIoYSkge1xuICAgIHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7IHJldHVybiBmdW4oYSwgYiwgYyk7IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDM7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEY0KGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkKTsgfTsgfTsgfTtcbiAgfVxuICB3cmFwcGVyLmFyaXR5ID0gNDtcbiAgd3JhcHBlci5mdW5jID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjUoZnVuKVxue1xuICBmdW5jdGlvbiB3cmFwcGVyKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUpOyB9OyB9OyB9OyB9O1xuICB9XG4gIHdyYXBwZXIuYXJpdHkgPSA1O1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBGNihmdW4pXG57XG4gIGZ1bmN0aW9uIHdyYXBwZXIoYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmKTsgfTsgfTsgfTsgfTsgfTtcbiAgfVxuICB3cmFwcGVyLmFyaXR5ID0gNjtcbiAgd3JhcHBlci5mdW5jID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjcoZnVuKVxue1xuICBmdW5jdGlvbiB3cmFwcGVyKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZyk7IH07IH07IH07IH07IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDc7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEY4KGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuY3Rpb24oaCkge1xuICAgIHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZywgaCk7IH07IH07IH07IH07IH07IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDg7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEY5KGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuY3Rpb24oaCkgeyByZXR1cm4gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSk7IH07IH07IH07IH07IH07IH07IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDk7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEEyKGZ1biwgYSwgYilcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gMlxuICAgID8gZnVuLmZ1bmMoYSwgYilcbiAgICA6IGZ1bihhKShiKTtcbn1cbmZ1bmN0aW9uIEEzKGZ1biwgYSwgYiwgYylcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gM1xuICAgID8gZnVuLmZ1bmMoYSwgYiwgYylcbiAgICA6IGZ1bihhKShiKShjKTtcbn1cbmZ1bmN0aW9uIEE0KGZ1biwgYSwgYiwgYywgZClcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gNFxuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZClcbiAgICA6IGZ1bihhKShiKShjKShkKTtcbn1cbmZ1bmN0aW9uIEE1KGZ1biwgYSwgYiwgYywgZCwgZSlcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gNVxuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZCwgZSlcbiAgICA6IGZ1bihhKShiKShjKShkKShlKTtcbn1cbmZ1bmN0aW9uIEE2KGZ1biwgYSwgYiwgYywgZCwgZSwgZilcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gNlxuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZCwgZSwgZilcbiAgICA6IGZ1bihhKShiKShjKShkKShlKShmKTtcbn1cbmZ1bmN0aW9uIEE3KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZylcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gN1xuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZCwgZSwgZiwgZylcbiAgICA6IGZ1bihhKShiKShjKShkKShlKShmKShnKTtcbn1cbmZ1bmN0aW9uIEE4KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaClcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gOFxuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZCwgZSwgZiwgZywgaClcbiAgICA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKTtcbn1cbmZ1bmN0aW9uIEE5KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSlcbntcbiAgcmV0dXJuIGZ1bi5hcml0eSA9PT0gOVxuICAgID8gZnVuLmZ1bmMoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSlcbiAgICA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKShpKTtcbn1cblxuLy9pbXBvcnQgTmF0aXZlLkxpc3QgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheSA9IGZ1bmN0aW9uKCkge1xuXG4vLyBBIFJSQi1UcmVlIGhhcyB0d28gZGlzdGluY3QgZGF0YSB0eXBlcy5cbi8vIExlYWYgLT4gXCJoZWlnaHRcIiAgaXMgYWx3YXlzIDBcbi8vICAgICAgICAgXCJ0YWJsZVwiICAgaXMgYW4gYXJyYXkgb2YgZWxlbWVudHNcbi8vIE5vZGUgLT4gXCJoZWlnaHRcIiAgaXMgYWx3YXlzIGdyZWF0ZXIgdGhhbiAwXG4vLyAgICAgICAgIFwidGFibGVcIiAgIGlzIGFuIGFycmF5IG9mIGNoaWxkIG5vZGVzXG4vLyAgICAgICAgIFwibGVuZ3Roc1wiIGlzIGFuIGFycmF5IG9mIGFjY3VtdWxhdGVkIGxlbmd0aHMgb2YgdGhlIGNoaWxkIG5vZGVzXG5cbi8vIE0gaXMgdGhlIG1heGltYWwgdGFibGUgc2l6ZS4gMzIgc2VlbXMgZmFzdC4gRSBpcyB0aGUgYWxsb3dlZCBpbmNyZWFzZVxuLy8gb2Ygc2VhcmNoIHN0ZXBzIHdoZW4gY29uY2F0dGluZyB0byBmaW5kIGFuIGluZGV4LiBMb3dlciB2YWx1ZXMgd2lsbFxuLy8gZGVjcmVhc2UgYmFsYW5jaW5nLCBidXQgd2lsbCBpbmNyZWFzZSBzZWFyY2ggc3RlcHMuXG52YXIgTSA9IDMyO1xudmFyIEUgPSAyO1xuXG4vLyBBbiBlbXB0eSBhcnJheS5cbnZhciBlbXB0eSA9IHtcblx0Y3RvcjogJ19BcnJheScsXG5cdGhlaWdodDogMCxcblx0dGFibGU6IFtdXG59O1xuXG5cbmZ1bmN0aW9uIGdldChpLCBhcnJheSlcbntcblx0aWYgKGkgPCAwIHx8IGkgPj0gbGVuZ3RoKGFycmF5KSlcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdJbmRleCAnICsgaSArICcgaXMgb3V0IG9mIHJhbmdlLiBDaGVjayB0aGUgbGVuZ3RoIG9mICcgK1xuXHRcdFx0J3lvdXIgYXJyYXkgZmlyc3Qgb3IgdXNlIGdldE1heWJlIG9yIGdldFdpdGhEZWZhdWx0LicpO1xuXHR9XG5cdHJldHVybiB1bnNhZmVHZXQoaSwgYXJyYXkpO1xufVxuXG5cbmZ1bmN0aW9uIHVuc2FmZUdldChpLCBhcnJheSlcbntcblx0Zm9yICh2YXIgeCA9IGFycmF5LmhlaWdodDsgeCA+IDA7IHgtLSlcblx0e1xuXHRcdHZhciBzbG90ID0gaSA+PiAoeCAqIDUpO1xuXHRcdHdoaWxlIChhcnJheS5sZW5ndGhzW3Nsb3RdIDw9IGkpXG5cdFx0e1xuXHRcdFx0c2xvdCsrO1xuXHRcdH1cblx0XHRpZiAoc2xvdCA+IDApXG5cdFx0e1xuXHRcdFx0aSAtPSBhcnJheS5sZW5ndGhzW3Nsb3QgLSAxXTtcblx0XHR9XG5cdFx0YXJyYXkgPSBhcnJheS50YWJsZVtzbG90XTtcblx0fVxuXHRyZXR1cm4gYXJyYXkudGFibGVbaV07XG59XG5cblxuLy8gU2V0cyB0aGUgdmFsdWUgYXQgdGhlIGluZGV4IGkuIE9ubHkgdGhlIG5vZGVzIGxlYWRpbmcgdG8gaSB3aWxsIGdldFxuLy8gY29waWVkIGFuZCB1cGRhdGVkLlxuZnVuY3Rpb24gc2V0KGksIGl0ZW0sIGFycmF5KVxue1xuXHRpZiAoaSA8IDAgfHwgbGVuZ3RoKGFycmF5KSA8PSBpKVxuXHR7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cdHJldHVybiB1bnNhZmVTZXQoaSwgaXRlbSwgYXJyYXkpO1xufVxuXG5cbmZ1bmN0aW9uIHVuc2FmZVNldChpLCBpdGVtLCBhcnJheSlcbntcblx0YXJyYXkgPSBub2RlQ29weShhcnJheSk7XG5cblx0aWYgKGFycmF5LmhlaWdodCA9PT0gMClcblx0e1xuXHRcdGFycmF5LnRhYmxlW2ldID0gaXRlbTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHR2YXIgc2xvdCA9IGdldFNsb3QoaSwgYXJyYXkpO1xuXHRcdGlmIChzbG90ID4gMClcblx0XHR7XG5cdFx0XHRpIC09IGFycmF5Lmxlbmd0aHNbc2xvdCAtIDFdO1xuXHRcdH1cblx0XHRhcnJheS50YWJsZVtzbG90XSA9IHVuc2FmZVNldChpLCBpdGVtLCBhcnJheS50YWJsZVtzbG90XSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUobGVuLCBmKVxue1xuXHRpZiAobGVuIDw9IDApXG5cdHtcblx0XHRyZXR1cm4gZW1wdHk7XG5cdH1cblx0dmFyIGggPSBNYXRoLmZsb29yKCBNYXRoLmxvZyhsZW4pIC8gTWF0aC5sb2coTSkgKTtcblx0cmV0dXJuIGluaXRpYWxpemVfKGYsIGgsIDAsIGxlbik7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVfKGYsIGgsIGZyb20sIHRvKVxue1xuXHRpZiAoaCA9PT0gMClcblx0e1xuXHRcdHZhciB0YWJsZSA9IG5ldyBBcnJheSgodG8gLSBmcm9tKSAlIChNICsgMSkpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdCAgdGFibGVbaV0gPSBmKGZyb20gKyBpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0dGFibGU6IHRhYmxlXG5cdFx0fTtcblx0fVxuXG5cdHZhciBzdGVwID0gTWF0aC5wb3coTSwgaCk7XG5cdHZhciB0YWJsZSA9IG5ldyBBcnJheShNYXRoLmNlaWwoKHRvIC0gZnJvbSkgLyBzdGVwKSk7XG5cdHZhciBsZW5ndGhzID0gbmV3IEFycmF5KHRhYmxlLmxlbmd0aCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR0YWJsZVtpXSA9IGluaXRpYWxpemVfKGYsIGggLSAxLCBmcm9tICsgKGkgKiBzdGVwKSwgTWF0aC5taW4oZnJvbSArICgoaSArIDEpICogc3RlcCksIHRvKSk7XG5cdFx0bGVuZ3Roc1tpXSA9IGxlbmd0aCh0YWJsZVtpXSkgKyAoaSA+IDAgPyBsZW5ndGhzW2ktMV0gOiAwKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogaCxcblx0XHR0YWJsZTogdGFibGUsXG5cdFx0bGVuZ3RoczogbGVuZ3Roc1xuXHR9O1xufVxuXG5mdW5jdGlvbiBmcm9tTGlzdChsaXN0KVxue1xuXHRpZiAobGlzdC5jdG9yID09PSAnW10nKVxuXHR7XG5cdFx0cmV0dXJuIGVtcHR5O1xuXHR9XG5cblx0Ly8gQWxsb2NhdGUgTSBzaXplZCBibG9ja3MgKHRhYmxlKSBhbmQgd3JpdGUgbGlzdCBlbGVtZW50cyB0byBpdC5cblx0dmFyIHRhYmxlID0gbmV3IEFycmF5KE0pO1xuXHR2YXIgbm9kZXMgPSBbXTtcblx0dmFyIGkgPSAwO1xuXG5cdHdoaWxlIChsaXN0LmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHR0YWJsZVtpXSA9IGxpc3QuXzA7XG5cdFx0bGlzdCA9IGxpc3QuXzE7XG5cdFx0aSsrO1xuXG5cdFx0Ly8gdGFibGUgaXMgZnVsbCwgc28gd2UgY2FuIHB1c2ggYSBsZWFmIGNvbnRhaW5pbmcgaXQgaW50byB0aGVcblx0XHQvLyBuZXh0IG5vZGUuXG5cdFx0aWYgKGkgPT09IE0pXG5cdFx0e1xuXHRcdFx0dmFyIGxlYWYgPSB7XG5cdFx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHRcdHRhYmxlOiB0YWJsZVxuXHRcdFx0fTtcblx0XHRcdGZyb21MaXN0UHVzaChsZWFmLCBub2Rlcyk7XG5cdFx0XHR0YWJsZSA9IG5ldyBBcnJheShNKTtcblx0XHRcdGkgPSAwO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1heWJlIHRoZXJlIGlzIHNvbWV0aGluZyBsZWZ0IG9uIHRoZSB0YWJsZS5cblx0aWYgKGkgPiAwKVxuXHR7XG5cdFx0dmFyIGxlYWYgPSB7XG5cdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdGhlaWdodDogMCxcblx0XHRcdHRhYmxlOiB0YWJsZS5zcGxpY2UoMCwgaSlcblx0XHR9O1xuXHRcdGZyb21MaXN0UHVzaChsZWFmLCBub2Rlcyk7XG5cdH1cblxuXHQvLyBHbyB0aHJvdWdoIGFsbCBvZiB0aGUgbm9kZXMgYW5kIGV2ZW50dWFsbHkgcHVzaCB0aGVtIGludG8gaGlnaGVyIG5vZGVzLlxuXHRmb3IgKHZhciBoID0gMDsgaCA8IG5vZGVzLmxlbmd0aCAtIDE7IGgrKylcblx0e1xuXHRcdGlmIChub2Rlc1toXS50YWJsZS5sZW5ndGggPiAwKVxuXHRcdHtcblx0XHRcdGZyb21MaXN0UHVzaChub2Rlc1toXSwgbm9kZXMpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBoZWFkID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG5cdGlmIChoZWFkLmhlaWdodCA+IDAgJiYgaGVhZC50YWJsZS5sZW5ndGggPT09IDEpXG5cdHtcblx0XHRyZXR1cm4gaGVhZC50YWJsZVswXTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXR1cm4gaGVhZDtcblx0fVxufVxuXG4vLyBQdXNoIGEgbm9kZSBpbnRvIGEgaGlnaGVyIG5vZGUgYXMgYSBjaGlsZC5cbmZ1bmN0aW9uIGZyb21MaXN0UHVzaCh0b1B1c2gsIG5vZGVzKVxue1xuXHR2YXIgaCA9IHRvUHVzaC5oZWlnaHQ7XG5cblx0Ly8gTWF5YmUgdGhlIG5vZGUgb24gdGhpcyBoZWlnaHQgZG9lcyBub3QgZXhpc3QuXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IGgpXG5cdHtcblx0XHR2YXIgbm9kZSA9IHtcblx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0aGVpZ2h0OiBoICsgMSxcblx0XHRcdHRhYmxlOiBbXSxcblx0XHRcdGxlbmd0aHM6IFtdXG5cdFx0fTtcblx0XHRub2Rlcy5wdXNoKG5vZGUpO1xuXHR9XG5cblx0bm9kZXNbaF0udGFibGUucHVzaCh0b1B1c2gpO1xuXHR2YXIgbGVuID0gbGVuZ3RoKHRvUHVzaCk7XG5cdGlmIChub2Rlc1toXS5sZW5ndGhzLmxlbmd0aCA+IDApXG5cdHtcblx0XHRsZW4gKz0gbm9kZXNbaF0ubGVuZ3Roc1tub2Rlc1toXS5sZW5ndGhzLmxlbmd0aCAtIDFdO1xuXHR9XG5cdG5vZGVzW2hdLmxlbmd0aHMucHVzaChsZW4pO1xuXG5cdGlmIChub2Rlc1toXS50YWJsZS5sZW5ndGggPT09IE0pXG5cdHtcblx0XHRmcm9tTGlzdFB1c2gobm9kZXNbaF0sIG5vZGVzKTtcblx0XHRub2Rlc1toXSA9IHtcblx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0aGVpZ2h0OiBoICsgMSxcblx0XHRcdHRhYmxlOiBbXSxcblx0XHRcdGxlbmd0aHM6IFtdXG5cdFx0fTtcblx0fVxufVxuXG4vLyBQdXNoZXMgYW4gaXRlbSB2aWEgcHVzaF8gdG8gdGhlIGJvdHRvbSByaWdodCBvZiBhIHRyZWUuXG5mdW5jdGlvbiBwdXNoKGl0ZW0sIGEpXG57XG5cdHZhciBwdXNoZWQgPSBwdXNoXyhpdGVtLCBhKTtcblx0aWYgKHB1c2hlZCAhPT0gbnVsbClcblx0e1xuXHRcdHJldHVybiBwdXNoZWQ7XG5cdH1cblxuXHR2YXIgbmV3VHJlZSA9IGNyZWF0ZShpdGVtLCBhLmhlaWdodCk7XG5cdHJldHVybiBzaWJsaXNlKGEsIG5ld1RyZWUpO1xufVxuXG4vLyBSZWN1cnNpdmVseSB0cmllcyB0byBwdXNoIGFuIGl0ZW0gdG8gdGhlIGJvdHRvbS1yaWdodCBtb3N0XG4vLyB0cmVlIHBvc3NpYmxlLiBJZiB0aGVyZSBpcyBubyBzcGFjZSBsZWZ0IGZvciB0aGUgaXRlbSxcbi8vIG51bGwgd2lsbCBiZSByZXR1cm5lZC5cbmZ1bmN0aW9uIHB1c2hfKGl0ZW0sIGEpXG57XG5cdC8vIEhhbmRsZSByZXN1cnNpb24gc3RvcCBhdCBsZWFmIGxldmVsLlxuXHRpZiAoYS5oZWlnaHQgPT09IDApXG5cdHtcblx0XHRpZiAoYS50YWJsZS5sZW5ndGggPCBNKVxuXHRcdHtcblx0XHRcdHZhciBuZXdBID0ge1xuXHRcdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHR0YWJsZTogYS50YWJsZS5zbGljZSgpXG5cdFx0XHR9O1xuXHRcdFx0bmV3QS50YWJsZS5wdXNoKGl0ZW0pO1xuXHRcdFx0cmV0dXJuIG5ld0E7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0ICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvLyBSZWN1cnNpdmVseSBwdXNoXG5cdHZhciBwdXNoZWQgPSBwdXNoXyhpdGVtLCBib3RSaWdodChhKSk7XG5cblx0Ly8gVGhlcmUgd2FzIHNwYWNlIGluIHRoZSBib3R0b20gcmlnaHQgdHJlZSwgc28gdGhlIHNsb3Qgd2lsbFxuXHQvLyBiZSB1cGRhdGVkLlxuXHRpZiAocHVzaGVkICE9PSBudWxsKVxuXHR7XG5cdFx0dmFyIG5ld0EgPSBub2RlQ29weShhKTtcblx0XHRuZXdBLnRhYmxlW25ld0EudGFibGUubGVuZ3RoIC0gMV0gPSBwdXNoZWQ7XG5cdFx0bmV3QS5sZW5ndGhzW25ld0EubGVuZ3Rocy5sZW5ndGggLSAxXSsrO1xuXHRcdHJldHVybiBuZXdBO1xuXHR9XG5cblx0Ly8gV2hlbiB0aGVyZSB3YXMgbm8gc3BhY2UgbGVmdCwgY2hlY2sgaWYgdGhlcmUgaXMgc3BhY2UgbGVmdFxuXHQvLyBmb3IgYSBuZXcgc2xvdCB3aXRoIGEgdHJlZSB3aGljaCBjb250YWlucyBvbmx5IHRoZSBpdGVtXG5cdC8vIGF0IHRoZSBib3R0b20uXG5cdGlmIChhLnRhYmxlLmxlbmd0aCA8IE0pXG5cdHtcblx0XHR2YXIgbmV3U2xvdCA9IGNyZWF0ZShpdGVtLCBhLmhlaWdodCAtIDEpO1xuXHRcdHZhciBuZXdBID0gbm9kZUNvcHkoYSk7XG5cdFx0bmV3QS50YWJsZS5wdXNoKG5ld1Nsb3QpO1xuXHRcdG5ld0EubGVuZ3Rocy5wdXNoKG5ld0EubGVuZ3Roc1tuZXdBLmxlbmd0aHMubGVuZ3RoIC0gMV0gKyBsZW5ndGgobmV3U2xvdCkpO1xuXHRcdHJldHVybiBuZXdBO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIENvbnZlcnRzIGFuIGFycmF5IGludG8gYSBsaXN0IG9mIGVsZW1lbnRzLlxuZnVuY3Rpb24gdG9MaXN0KGEpXG57XG5cdHJldHVybiB0b0xpc3RfKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbCwgYSk7XG59XG5cbmZ1bmN0aW9uIHRvTGlzdF8obGlzdCwgYSlcbntcblx0Zm9yICh2YXIgaSA9IGEudGFibGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG5cdHtcblx0XHRsaXN0ID1cblx0XHRcdGEuaGVpZ2h0ID09PSAwXG5cdFx0XHRcdD8gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuQ29ucyhhLnRhYmxlW2ldLCBsaXN0KVxuXHRcdFx0XHQ6IHRvTGlzdF8obGlzdCwgYS50YWJsZVtpXSk7XG5cdH1cblx0cmV0dXJuIGxpc3Q7XG59XG5cbi8vIE1hcHMgYSBmdW5jdGlvbiBvdmVyIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheS5cbmZ1bmN0aW9uIG1hcChmLCBhKVxue1xuXHR2YXIgbmV3QSA9IHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGEuaGVpZ2h0LFxuXHRcdHRhYmxlOiBuZXcgQXJyYXkoYS50YWJsZS5sZW5ndGgpXG5cdH07XG5cdGlmIChhLmhlaWdodCA+IDApXG5cdHtcblx0XHRuZXdBLmxlbmd0aHMgPSBhLmxlbmd0aHM7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLnRhYmxlLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0bmV3QS50YWJsZVtpXSA9XG5cdFx0XHRhLmhlaWdodCA9PT0gMFxuXHRcdFx0XHQ/IGYoYS50YWJsZVtpXSlcblx0XHRcdFx0OiBtYXAoZiwgYS50YWJsZVtpXSk7XG5cdH1cblx0cmV0dXJuIG5ld0E7XG59XG5cbi8vIE1hcHMgYSBmdW5jdGlvbiBvdmVyIHRoZSBlbGVtZW50cyB3aXRoIHRoZWlyIGluZGV4IGFzIGZpcnN0IGFyZ3VtZW50LlxuZnVuY3Rpb24gaW5kZXhlZE1hcChmLCBhKVxue1xuXHRyZXR1cm4gaW5kZXhlZE1hcF8oZiwgYSwgMCk7XG59XG5cbmZ1bmN0aW9uIGluZGV4ZWRNYXBfKGYsIGEsIGZyb20pXG57XG5cdHZhciBuZXdBID0ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogYS5oZWlnaHQsXG5cdFx0dGFibGU6IG5ldyBBcnJheShhLnRhYmxlLmxlbmd0aClcblx0fTtcblx0aWYgKGEuaGVpZ2h0ID4gMClcblx0e1xuXHRcdG5ld0EubGVuZ3RocyA9IGEubGVuZ3Rocztcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGEudGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRuZXdBLnRhYmxlW2ldID1cblx0XHRcdGEuaGVpZ2h0ID09PSAwXG5cdFx0XHRcdD8gQTIoZiwgZnJvbSArIGksIGEudGFibGVbaV0pXG5cdFx0XHRcdDogaW5kZXhlZE1hcF8oZiwgYS50YWJsZVtpXSwgaSA9PSAwID8gZnJvbSA6IGZyb20gKyBhLmxlbmd0aHNbaSAtIDFdKTtcblx0fVxuXHRyZXR1cm4gbmV3QTtcbn1cblxuZnVuY3Rpb24gZm9sZGwoZiwgYiwgYSlcbntcblx0aWYgKGEuaGVpZ2h0ID09PSAwKVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLnRhYmxlLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGIgPSBBMihmLCBhLnRhYmxlW2ldLCBiKTtcblx0XHR9XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLnRhYmxlLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGIgPSBmb2xkbChmLCBiLCBhLnRhYmxlW2ldKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGZvbGRyKGYsIGIsIGEpXG57XG5cdGlmIChhLmhlaWdodCA9PT0gMClcblx0e1xuXHRcdGZvciAodmFyIGkgPSBhLnRhYmxlLmxlbmd0aDsgaS0tOyApXG5cdFx0e1xuXHRcdFx0YiA9IEEyKGYsIGEudGFibGVbaV0sIGIpO1xuXHRcdH1cblx0fVxuXHRlbHNlXG5cdHtcblx0XHRmb3IgKHZhciBpID0gYS50YWJsZS5sZW5ndGg7IGktLTsgKVxuXHRcdHtcblx0XHRcdGIgPSBmb2xkcihmLCBiLCBhLnRhYmxlW2ldKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGI7XG59XG5cbi8vIFRPRE86IGN1cnJlbnRseSwgaXQgc2xpY2VzIHRoZSByaWdodCwgdGhlbiB0aGUgbGVmdC4gVGhpcyBjYW4gYmVcbi8vIG9wdGltaXplZC5cbmZ1bmN0aW9uIHNsaWNlKGZyb20sIHRvLCBhKVxue1xuXHRpZiAoZnJvbSA8IDApXG5cdHtcblx0XHRmcm9tICs9IGxlbmd0aChhKTtcblx0fVxuXHRpZiAodG8gPCAwKVxuXHR7XG5cdFx0dG8gKz0gbGVuZ3RoKGEpO1xuXHR9XG5cdHJldHVybiBzbGljZUxlZnQoZnJvbSwgc2xpY2VSaWdodCh0bywgYSkpO1xufVxuXG5mdW5jdGlvbiBzbGljZVJpZ2h0KHRvLCBhKVxue1xuXHRpZiAodG8gPT09IGxlbmd0aChhKSlcblx0e1xuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGxlYWYgbGV2ZWwuXG5cdGlmIChhLmhlaWdodCA9PT0gMClcblx0e1xuXHRcdHZhciBuZXdBID0geyBjdG9yOidfQXJyYXknLCBoZWlnaHQ6MCB9O1xuXHRcdG5ld0EudGFibGUgPSBhLnRhYmxlLnNsaWNlKDAsIHRvKTtcblx0XHRyZXR1cm4gbmV3QTtcblx0fVxuXG5cdC8vIFNsaWNlIHRoZSByaWdodCByZWN1cnNpdmVseS5cblx0dmFyIHJpZ2h0ID0gZ2V0U2xvdCh0bywgYSk7XG5cdHZhciBzbGljZWQgPSBzbGljZVJpZ2h0KHRvIC0gKHJpZ2h0ID4gMCA/IGEubGVuZ3Roc1tyaWdodCAtIDFdIDogMCksIGEudGFibGVbcmlnaHRdKTtcblxuXHQvLyBNYXliZSB0aGUgYSBub2RlIGlzIG5vdCBldmVuIG5lZWRlZCwgYXMgc2xpY2VkIGNvbnRhaW5zIHRoZSB3aG9sZSBzbGljZS5cblx0aWYgKHJpZ2h0ID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIHNsaWNlZDtcblx0fVxuXG5cdC8vIENyZWF0ZSBuZXcgbm9kZS5cblx0dmFyIG5ld0EgPSB7XG5cdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0aGVpZ2h0OiBhLmhlaWdodCxcblx0XHR0YWJsZTogYS50YWJsZS5zbGljZSgwLCByaWdodCksXG5cdFx0bGVuZ3RoczogYS5sZW5ndGhzLnNsaWNlKDAsIHJpZ2h0KVxuXHR9O1xuXHRpZiAoc2xpY2VkLnRhYmxlLmxlbmd0aCA+IDApXG5cdHtcblx0XHRuZXdBLnRhYmxlW3JpZ2h0XSA9IHNsaWNlZDtcblx0XHRuZXdBLmxlbmd0aHNbcmlnaHRdID0gbGVuZ3RoKHNsaWNlZCkgKyAocmlnaHQgPiAwID8gbmV3QS5sZW5ndGhzW3JpZ2h0IC0gMV0gOiAwKTtcblx0fVxuXHRyZXR1cm4gbmV3QTtcbn1cblxuZnVuY3Rpb24gc2xpY2VMZWZ0KGZyb20sIGEpXG57XG5cdGlmIChmcm9tID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHQvLyBIYW5kbGUgbGVhZiBsZXZlbC5cblx0aWYgKGEuaGVpZ2h0ID09PSAwKVxuXHR7XG5cdFx0dmFyIG5ld0EgPSB7IGN0b3I6J19BcnJheScsIGhlaWdodDowIH07XG5cdFx0bmV3QS50YWJsZSA9IGEudGFibGUuc2xpY2UoZnJvbSwgYS50YWJsZS5sZW5ndGggKyAxKTtcblx0XHRyZXR1cm4gbmV3QTtcblx0fVxuXG5cdC8vIFNsaWNlIHRoZSBsZWZ0IHJlY3Vyc2l2ZWx5LlxuXHR2YXIgbGVmdCA9IGdldFNsb3QoZnJvbSwgYSk7XG5cdHZhciBzbGljZWQgPSBzbGljZUxlZnQoZnJvbSAtIChsZWZ0ID4gMCA/IGEubGVuZ3Roc1tsZWZ0IC0gMV0gOiAwKSwgYS50YWJsZVtsZWZ0XSk7XG5cblx0Ly8gTWF5YmUgdGhlIGEgbm9kZSBpcyBub3QgZXZlbiBuZWVkZWQsIGFzIHNsaWNlZCBjb250YWlucyB0aGUgd2hvbGUgc2xpY2UuXG5cdGlmIChsZWZ0ID09PSBhLnRhYmxlLmxlbmd0aCAtIDEpXG5cdHtcblx0XHRyZXR1cm4gc2xpY2VkO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIG5ldyBub2RlLlxuXHR2YXIgbmV3QSA9IHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGEuaGVpZ2h0LFxuXHRcdHRhYmxlOiBhLnRhYmxlLnNsaWNlKGxlZnQsIGEudGFibGUubGVuZ3RoICsgMSksXG5cdFx0bGVuZ3RoczogbmV3IEFycmF5KGEudGFibGUubGVuZ3RoIC0gbGVmdClcblx0fTtcblx0bmV3QS50YWJsZVswXSA9IHNsaWNlZDtcblx0dmFyIGxlbiA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbmV3QS50YWJsZS5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGxlbiArPSBsZW5ndGgobmV3QS50YWJsZVtpXSk7XG5cdFx0bmV3QS5sZW5ndGhzW2ldID0gbGVuO1xuXHR9XG5cblx0cmV0dXJuIG5ld0E7XG59XG5cbi8vIEFwcGVuZHMgdHdvIHRyZWVzLlxuZnVuY3Rpb24gYXBwZW5kKGEsYilcbntcblx0aWYgKGEudGFibGUubGVuZ3RoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGI7XG5cdH1cblx0aWYgKGIudGFibGUubGVuZ3RoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHR2YXIgYyA9IGFwcGVuZF8oYSwgYik7XG5cblx0Ly8gQ2hlY2sgaWYgYm90aCBub2RlcyBjYW4gYmUgY3J1bnNoZWQgdG9nZXRoZXIuXG5cdGlmIChjWzBdLnRhYmxlLmxlbmd0aCArIGNbMV0udGFibGUubGVuZ3RoIDw9IE0pXG5cdHtcblx0XHRpZiAoY1swXS50YWJsZS5sZW5ndGggPT09IDApXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGNbMV07XG5cdFx0fVxuXHRcdGlmIChjWzFdLnRhYmxlLmxlbmd0aCA9PT0gMClcblx0XHR7XG5cdFx0XHRyZXR1cm4gY1swXTtcblx0XHR9XG5cblx0XHQvLyBBZGp1c3QgLnRhYmxlIGFuZCAubGVuZ3Roc1xuXHRcdGNbMF0udGFibGUgPSBjWzBdLnRhYmxlLmNvbmNhdChjWzFdLnRhYmxlKTtcblx0XHRpZiAoY1swXS5oZWlnaHQgPiAwKVxuXHRcdHtcblx0XHRcdHZhciBsZW4gPSBsZW5ndGgoY1swXSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNbMV0ubGVuZ3Rocy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0Y1sxXS5sZW5ndGhzW2ldICs9IGxlbjtcblx0XHRcdH1cblx0XHRcdGNbMF0ubGVuZ3RocyA9IGNbMF0ubGVuZ3Rocy5jb25jYXQoY1sxXS5sZW5ndGhzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY1swXTtcblx0fVxuXG5cdGlmIChjWzBdLmhlaWdodCA+IDApXG5cdHtcblx0XHR2YXIgdG9SZW1vdmUgPSBjYWxjVG9SZW1vdmUoYSwgYik7XG5cdFx0aWYgKHRvUmVtb3ZlID4gRSlcblx0XHR7XG5cdFx0XHRjID0gc2h1ZmZsZShjWzBdLCBjWzFdLCB0b1JlbW92ZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHNpYmxpc2UoY1swXSwgY1sxXSk7XG59XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgdHdvIG5vZGVzOyByaWdodCBhbmQgbGVmdC4gT25lIG5vZGUgX21heV8gYmUgZW1wdHkuXG5mdW5jdGlvbiBhcHBlbmRfKGEsIGIpXG57XG5cdGlmIChhLmhlaWdodCA9PT0gMCAmJiBiLmhlaWdodCA9PT0gMClcblx0e1xuXHRcdHJldHVybiBbYSwgYl07XG5cdH1cblxuXHRpZiAoYS5oZWlnaHQgIT09IDEgfHwgYi5oZWlnaHQgIT09IDEpXG5cdHtcblx0XHRpZiAoYS5oZWlnaHQgPT09IGIuaGVpZ2h0KVxuXHRcdHtcblx0XHRcdGEgPSBub2RlQ29weShhKTtcblx0XHRcdGIgPSBub2RlQ29weShiKTtcblx0XHRcdHZhciBhcHBlbmRlZCA9IGFwcGVuZF8oYm90UmlnaHQoYSksIGJvdExlZnQoYikpO1xuXG5cdFx0XHRpbnNlcnRSaWdodChhLCBhcHBlbmRlZFsxXSk7XG5cdFx0XHRpbnNlcnRMZWZ0KGIsIGFwcGVuZGVkWzBdKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoYS5oZWlnaHQgPiBiLmhlaWdodClcblx0XHR7XG5cdFx0XHRhID0gbm9kZUNvcHkoYSk7XG5cdFx0XHR2YXIgYXBwZW5kZWQgPSBhcHBlbmRfKGJvdFJpZ2h0KGEpLCBiKTtcblxuXHRcdFx0aW5zZXJ0UmlnaHQoYSwgYXBwZW5kZWRbMF0pO1xuXHRcdFx0YiA9IHBhcmVudGlzZShhcHBlbmRlZFsxXSwgYXBwZW5kZWRbMV0uaGVpZ2h0ICsgMSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRiID0gbm9kZUNvcHkoYik7XG5cdFx0XHR2YXIgYXBwZW5kZWQgPSBhcHBlbmRfKGEsIGJvdExlZnQoYikpO1xuXG5cdFx0XHR2YXIgbGVmdCA9IGFwcGVuZGVkWzBdLnRhYmxlLmxlbmd0aCA9PT0gMCA/IDAgOiAxO1xuXHRcdFx0dmFyIHJpZ2h0ID0gbGVmdCA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0aW5zZXJ0TGVmdChiLCBhcHBlbmRlZFtsZWZ0XSk7XG5cdFx0XHRhID0gcGFyZW50aXNlKGFwcGVuZGVkW3JpZ2h0XSwgYXBwZW5kZWRbcmlnaHRdLmhlaWdodCArIDEpO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIGJhbGFuY2luZyBpcyBuZWVkZWQgYW5kIHJldHVybiBiYXNlZCBvbiB0aGF0LlxuXHRpZiAoYS50YWJsZS5sZW5ndGggPT09IDAgfHwgYi50YWJsZS5sZW5ndGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4gW2EsIGJdO1xuXHR9XG5cblx0dmFyIHRvUmVtb3ZlID0gY2FsY1RvUmVtb3ZlKGEsIGIpO1xuXHRpZiAodG9SZW1vdmUgPD0gRSlcblx0e1xuXHRcdHJldHVybiBbYSwgYl07XG5cdH1cblx0cmV0dXJuIHNodWZmbGUoYSwgYiwgdG9SZW1vdmUpO1xufVxuXG4vLyBIZWxwZXJmdW5jdGlvbnMgZm9yIGFwcGVuZF8uIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBhdCB0aGUgc2lkZSBvZiB0aGUgcGFyZW50LlxuZnVuY3Rpb24gaW5zZXJ0UmlnaHQocGFyZW50LCBub2RlKVxue1xuXHR2YXIgaW5kZXggPSBwYXJlbnQudGFibGUubGVuZ3RoIC0gMTtcblx0cGFyZW50LnRhYmxlW2luZGV4XSA9IG5vZGU7XG5cdHBhcmVudC5sZW5ndGhzW2luZGV4XSA9IGxlbmd0aChub2RlKTtcblx0cGFyZW50Lmxlbmd0aHNbaW5kZXhdICs9IGluZGV4ID4gMCA/IHBhcmVudC5sZW5ndGhzW2luZGV4IC0gMV0gOiAwO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRMZWZ0KHBhcmVudCwgbm9kZSlcbntcblx0aWYgKG5vZGUudGFibGUubGVuZ3RoID4gMClcblx0e1xuXHRcdHBhcmVudC50YWJsZVswXSA9IG5vZGU7XG5cdFx0cGFyZW50Lmxlbmd0aHNbMF0gPSBsZW5ndGgobm9kZSk7XG5cblx0XHR2YXIgbGVuID0gbGVuZ3RoKHBhcmVudC50YWJsZVswXSk7XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXJlbnQubGVuZ3Rocy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRsZW4gKz0gbGVuZ3RoKHBhcmVudC50YWJsZVtpXSk7XG5cdFx0XHRwYXJlbnQubGVuZ3Roc1tpXSA9IGxlbjtcblx0XHR9XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cGFyZW50LnRhYmxlLnNoaWZ0KCk7XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXJlbnQubGVuZ3Rocy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRwYXJlbnQubGVuZ3Roc1tpXSA9IHBhcmVudC5sZW5ndGhzW2ldIC0gcGFyZW50Lmxlbmd0aHNbMF07XG5cdFx0fVxuXHRcdHBhcmVudC5sZW5ndGhzLnNoaWZ0KCk7XG5cdH1cbn1cblxuLy8gUmV0dXJucyB0aGUgZXh0cmEgc2VhcmNoIHN0ZXBzIGZvciBFLiBSZWZlciB0byB0aGUgcGFwZXIuXG5mdW5jdGlvbiBjYWxjVG9SZW1vdmUoYSwgYilcbntcblx0dmFyIHN1Ykxlbmd0aHMgPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGEudGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRzdWJMZW5ndGhzICs9IGEudGFibGVbaV0udGFibGUubGVuZ3RoO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYi50YWJsZS5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHN1Ykxlbmd0aHMgKz0gYi50YWJsZVtpXS50YWJsZS5sZW5ndGg7XG5cdH1cblxuXHR2YXIgdG9SZW1vdmUgPSBhLnRhYmxlLmxlbmd0aCArIGIudGFibGUubGVuZ3RoO1xuXHRyZXR1cm4gdG9SZW1vdmUgLSAoTWF0aC5mbG9vcigoc3ViTGVuZ3RocyAtIDEpIC8gTSkgKyAxKTtcbn1cblxuLy8gZ2V0Miwgc2V0MiBhbmQgc2F2ZVNsb3QgYXJlIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBlbGVtZW50cyBvdmVyIHR3byBhcnJheXMuXG5mdW5jdGlvbiBnZXQyKGEsIGIsIGluZGV4KVxue1xuXHRyZXR1cm4gaW5kZXggPCBhLmxlbmd0aFxuXHRcdD8gYVtpbmRleF1cblx0XHQ6IGJbaW5kZXggLSBhLmxlbmd0aF07XG59XG5cbmZ1bmN0aW9uIHNldDIoYSwgYiwgaW5kZXgsIHZhbHVlKVxue1xuXHRpZiAoaW5kZXggPCBhLmxlbmd0aClcblx0e1xuXHRcdGFbaW5kZXhdID0gdmFsdWU7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0YltpbmRleCAtIGEubGVuZ3RoXSA9IHZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNhdmVTbG90KGEsIGIsIGluZGV4LCBzbG90KVxue1xuXHRzZXQyKGEudGFibGUsIGIudGFibGUsIGluZGV4LCBzbG90KTtcblxuXHR2YXIgbCA9IChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gYS5sZW5ndGhzLmxlbmd0aClcblx0XHQ/IDBcblx0XHQ6IGdldDIoYS5sZW5ndGhzLCBhLmxlbmd0aHMsIGluZGV4IC0gMSk7XG5cblx0c2V0MihhLmxlbmd0aHMsIGIubGVuZ3RocywgaW5kZXgsIGwgKyBsZW5ndGgoc2xvdCkpO1xufVxuXG4vLyBDcmVhdGVzIGEgbm9kZSBvciBsZWFmIHdpdGggYSBnaXZlbiBsZW5ndGggYXQgdGhlaXIgYXJyYXlzIGZvciBwZXJmb21hbmNlLlxuLy8gSXMgb25seSB1c2VkIGJ5IHNodWZmbGUuXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGgsIGxlbmd0aClcbntcblx0aWYgKGxlbmd0aCA8IDApXG5cdHtcblx0XHRsZW5ndGggPSAwO1xuXHR9XG5cdHZhciBhID0ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogaCxcblx0XHR0YWJsZTogbmV3IEFycmF5KGxlbmd0aClcblx0fTtcblx0aWYgKGggPiAwKVxuXHR7XG5cdFx0YS5sZW5ndGhzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cdH1cblx0cmV0dXJuIGE7XG59XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgdHdvIGJhbGFuY2VkIG5vZGVzLlxuZnVuY3Rpb24gc2h1ZmZsZShhLCBiLCB0b1JlbW92ZSlcbntcblx0dmFyIG5ld0EgPSBjcmVhdGVOb2RlKGEuaGVpZ2h0LCBNYXRoLm1pbihNLCBhLnRhYmxlLmxlbmd0aCArIGIudGFibGUubGVuZ3RoIC0gdG9SZW1vdmUpKTtcblx0dmFyIG5ld0IgPSBjcmVhdGVOb2RlKGEuaGVpZ2h0LCBuZXdBLnRhYmxlLmxlbmd0aCAtIChhLnRhYmxlLmxlbmd0aCArIGIudGFibGUubGVuZ3RoIC0gdG9SZW1vdmUpKTtcblxuXHQvLyBTa2lwIHRoZSBzbG90cyB3aXRoIHNpemUgTS4gTW9yZSBwcmVjaXNlOiBjb3B5IHRoZSBzbG90IHJlZmVyZW5jZXNcblx0Ly8gdG8gdGhlIG5ldyBub2RlXG5cdHZhciByZWFkID0gMDtcblx0d2hpbGUgKGdldDIoYS50YWJsZSwgYi50YWJsZSwgcmVhZCkudGFibGUubGVuZ3RoICUgTSA9PT0gMClcblx0e1xuXHRcdHNldDIobmV3QS50YWJsZSwgbmV3Qi50YWJsZSwgcmVhZCwgZ2V0MihhLnRhYmxlLCBiLnRhYmxlLCByZWFkKSk7XG5cdFx0c2V0MihuZXdBLmxlbmd0aHMsIG5ld0IubGVuZ3RocywgcmVhZCwgZ2V0MihhLmxlbmd0aHMsIGIubGVuZ3RocywgcmVhZCkpO1xuXHRcdHJlYWQrKztcblx0fVxuXG5cdC8vIFB1bGxpbmcgaXRlbXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBjYWNoaW5nIGluIGEgc2xvdCBiZWZvcmUgd3JpdGluZ1xuXHQvLyBpdCBpbnRvIHRoZSBuZXcgbm9kZXMuXG5cdHZhciB3cml0ZSA9IHJlYWQ7XG5cdHZhciBzbG90ID0gbmV3IGNyZWF0ZU5vZGUoYS5oZWlnaHQgLSAxLCAwKTtcblx0dmFyIGZyb20gPSAwO1xuXG5cdC8vIElmIHRoZSBjdXJyZW50IHNsb3QgaXMgc3RpbGwgY29udGFpbmluZyBkYXRhLCB0aGVuIHRoZXJlIHdpbGwgYmUgYXRcblx0Ly8gbGVhc3Qgb25lIG1vcmUgd3JpdGUsIHNvIHdlIGRvIG5vdCBicmVhayB0aGlzIGxvb3AgeWV0LlxuXHR3aGlsZSAocmVhZCAtIHdyaXRlIC0gKHNsb3QudGFibGUubGVuZ3RoID4gMCA/IDEgOiAwKSA8IHRvUmVtb3ZlKVxuXHR7XG5cdFx0Ly8gRmluZCBvdXQgdGhlIG1heCBwb3NzaWJsZSBpdGVtcyBmb3IgY29weWluZy5cblx0XHR2YXIgc291cmNlID0gZ2V0MihhLnRhYmxlLCBiLnRhYmxlLCByZWFkKTtcblx0XHR2YXIgdG8gPSBNYXRoLm1pbihNIC0gc2xvdC50YWJsZS5sZW5ndGgsIHNvdXJjZS50YWJsZS5sZW5ndGgpO1xuXG5cdFx0Ly8gQ29weSBhbmQgYWRqdXN0IHNpemUgdGFibGUuXG5cdFx0c2xvdC50YWJsZSA9IHNsb3QudGFibGUuY29uY2F0KHNvdXJjZS50YWJsZS5zbGljZShmcm9tLCB0bykpO1xuXHRcdGlmIChzbG90LmhlaWdodCA+IDApXG5cdFx0e1xuXHRcdFx0dmFyIGxlbiA9IHNsb3QubGVuZ3Rocy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gbGVuOyBpIDwgbGVuICsgdG8gLSBmcm9tOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHNsb3QubGVuZ3Roc1tpXSA9IGxlbmd0aChzbG90LnRhYmxlW2ldKTtcblx0XHRcdFx0c2xvdC5sZW5ndGhzW2ldICs9IChpID4gMCA/IHNsb3QubGVuZ3Roc1tpIC0gMV0gOiAwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmcm9tICs9IHRvO1xuXG5cdFx0Ly8gT25seSBwcm9jZWVkIHRvIG5leHQgc2xvdHNbaV0gaWYgdGhlIGN1cnJlbnQgb25lIHdhc1xuXHRcdC8vIGZ1bGx5IGNvcGllZC5cblx0XHRpZiAoc291cmNlLnRhYmxlLmxlbmd0aCA8PSB0bylcblx0XHR7XG5cdFx0XHRyZWFkKys7IGZyb20gPSAwO1xuXHRcdH1cblxuXHRcdC8vIE9ubHkgY3JlYXRlIGEgbmV3IHNsb3QgaWYgdGhlIGN1cnJlbnQgb25lIGlzIGZpbGxlZCB1cC5cblx0XHRpZiAoc2xvdC50YWJsZS5sZW5ndGggPT09IE0pXG5cdFx0e1xuXHRcdFx0c2F2ZVNsb3QobmV3QSwgbmV3Qiwgd3JpdGUsIHNsb3QpO1xuXHRcdFx0c2xvdCA9IGNyZWF0ZU5vZGUoYS5oZWlnaHQgLSAxLCAwKTtcblx0XHRcdHdyaXRlKys7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2xlYW51cCBhZnRlciB0aGUgbG9vcC4gQ29weSB0aGUgbGFzdCBzbG90IGludG8gdGhlIG5ldyBub2Rlcy5cblx0aWYgKHNsb3QudGFibGUubGVuZ3RoID4gMClcblx0e1xuXHRcdHNhdmVTbG90KG5ld0EsIG5ld0IsIHdyaXRlLCBzbG90KTtcblx0XHR3cml0ZSsrO1xuXHR9XG5cblx0Ly8gU2hpZnQgdGhlIHVudG91Y2hlZCBzbG90cyB0byB0aGUgbGVmdFxuXHR3aGlsZSAocmVhZCA8IGEudGFibGUubGVuZ3RoICsgYi50YWJsZS5sZW5ndGggKVxuXHR7XG5cdFx0c2F2ZVNsb3QobmV3QSwgbmV3Qiwgd3JpdGUsIGdldDIoYS50YWJsZSwgYi50YWJsZSwgcmVhZCkpO1xuXHRcdHJlYWQrKztcblx0XHR3cml0ZSsrO1xuXHR9XG5cblx0cmV0dXJuIFtuZXdBLCBuZXdCXTtcbn1cblxuLy8gTmF2aWdhdGlvbiBmdW5jdGlvbnNcbmZ1bmN0aW9uIGJvdFJpZ2h0KGEpXG57XG5cdHJldHVybiBhLnRhYmxlW2EudGFibGUubGVuZ3RoIC0gMV07XG59XG5mdW5jdGlvbiBib3RMZWZ0KGEpXG57XG5cdHJldHVybiBhLnRhYmxlWzBdO1xufVxuXG4vLyBDb3BpZXMgYSBub2RlIGZvciB1cGRhdGluZy4gTm90ZSB0aGF0IHlvdSBzaG91bGQgbm90IHVzZSB0aGlzIGlmXG4vLyBvbmx5IHVwZGF0aW5nIG9ubHkgb25lIG9mIFwidGFibGVcIiBvciBcImxlbmd0aHNcIiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbmZ1bmN0aW9uIG5vZGVDb3B5KGEpXG57XG5cdHZhciBuZXdBID0ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogYS5oZWlnaHQsXG5cdFx0dGFibGU6IGEudGFibGUuc2xpY2UoKVxuXHR9O1xuXHRpZiAoYS5oZWlnaHQgPiAwKVxuXHR7XG5cdFx0bmV3QS5sZW5ndGhzID0gYS5sZW5ndGhzLnNsaWNlKCk7XG5cdH1cblx0cmV0dXJuIG5ld0E7XG59XG5cbi8vIFJldHVybnMgaG93IG1hbnkgaXRlbXMgYXJlIGluIHRoZSB0cmVlLlxuZnVuY3Rpb24gbGVuZ3RoKGFycmF5KVxue1xuXHRpZiAoYXJyYXkuaGVpZ2h0ID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGFycmF5LnRhYmxlLmxlbmd0aDtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXR1cm4gYXJyYXkubGVuZ3Roc1thcnJheS5sZW5ndGhzLmxlbmd0aCAtIDFdO1xuXHR9XG59XG5cbi8vIENhbGN1bGF0ZXMgaW4gd2hpY2ggc2xvdCBvZiBcInRhYmxlXCIgdGhlIGl0ZW0gcHJvYmFibHkgaXMsIHRoZW5cbi8vIGZpbmQgdGhlIGV4YWN0IHNsb3QgdmlhIGZvcndhcmQgc2VhcmNoaW5nIGluICBcImxlbmd0aHNcIi4gUmV0dXJucyB0aGUgaW5kZXguXG5mdW5jdGlvbiBnZXRTbG90KGksIGEpXG57XG5cdHZhciBzbG90ID0gaSA+PiAoNSAqIGEuaGVpZ2h0KTtcblx0d2hpbGUgKGEubGVuZ3Roc1tzbG90XSA8PSBpKVxuXHR7XG5cdFx0c2xvdCsrO1xuXHR9XG5cdHJldHVybiBzbG90O1xufVxuXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIGEgdHJlZSB3aXRoIGEgZ2l2ZW4gaGVpZ2h0IGNvbnRhaW5pbmdcbi8vIG9ubHkgdGhlIGdpdmVuIGl0ZW0uXG5mdW5jdGlvbiBjcmVhdGUoaXRlbSwgaClcbntcblx0aWYgKGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHR0YWJsZTogW2l0ZW1dXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogaCxcblx0XHR0YWJsZTogW2NyZWF0ZShpdGVtLCBoIC0gMSldLFxuXHRcdGxlbmd0aHM6IFsxXVxuXHR9O1xufVxuXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIGEgdHJlZSB0aGF0IGNvbnRhaW5zIHRoZSBnaXZlbiB0cmVlLlxuZnVuY3Rpb24gcGFyZW50aXNlKHRyZWUsIGgpXG57XG5cdGlmIChoID09PSB0cmVlLmhlaWdodClcblx0e1xuXHRcdHJldHVybiB0cmVlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGgsXG5cdFx0dGFibGU6IFtwYXJlbnRpc2UodHJlZSwgaCAtIDEpXSxcblx0XHRsZW5ndGhzOiBbbGVuZ3RoKHRyZWUpXVxuXHR9O1xufVxuXG4vLyBFbXBoYXNpemVzIGJsb29kIGJyb3RoZXJob29kIGJlbmVhdGggdHdvIHRyZWVzLlxuZnVuY3Rpb24gc2libGlzZShhLCBiKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogYS5oZWlnaHQgKyAxLFxuXHRcdHRhYmxlOiBbYSwgYl0sXG5cdFx0bGVuZ3RoczogW2xlbmd0aChhKSwgbGVuZ3RoKGEpICsgbGVuZ3RoKGIpXVxuXHR9O1xufVxuXG5mdW5jdGlvbiB0b0pTQXJyYXkoYSlcbntcblx0dmFyIGpzQXJyYXkgPSBuZXcgQXJyYXkobGVuZ3RoKGEpKTtcblx0dG9KU0FycmF5Xyhqc0FycmF5LCAwLCBhKTtcblx0cmV0dXJuIGpzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvSlNBcnJheV8oanNBcnJheSwgaSwgYSlcbntcblx0Zm9yICh2YXIgdCA9IDA7IHQgPCBhLnRhYmxlLmxlbmd0aDsgdCsrKVxuXHR7XG5cdFx0aWYgKGEuaGVpZ2h0ID09PSAwKVxuXHRcdHtcblx0XHRcdGpzQXJyYXlbaSArIHRdID0gYS50YWJsZVt0XTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHZhciBpbmMgPSB0ID09PSAwID8gMCA6IGEubGVuZ3Roc1t0IC0gMV07XG5cdFx0XHR0b0pTQXJyYXlfKGpzQXJyYXksIGkgKyBpbmMsIGEudGFibGVbdF0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBmcm9tSlNBcnJheShqc0FycmF5KVxue1xuXHRpZiAoanNBcnJheS5sZW5ndGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4gZW1wdHk7XG5cdH1cblx0dmFyIGggPSBNYXRoLmZsb29yKE1hdGgubG9nKGpzQXJyYXkubGVuZ3RoKSAvIE1hdGgubG9nKE0pKTtcblx0cmV0dXJuIGZyb21KU0FycmF5Xyhqc0FycmF5LCBoLCAwLCBqc0FycmF5Lmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGZyb21KU0FycmF5Xyhqc0FycmF5LCBoLCBmcm9tLCB0bylcbntcblx0aWYgKGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHR0YWJsZToganNBcnJheS5zbGljZShmcm9tLCB0bylcblx0XHR9O1xuXHR9XG5cblx0dmFyIHN0ZXAgPSBNYXRoLnBvdyhNLCBoKTtcblx0dmFyIHRhYmxlID0gbmV3IEFycmF5KE1hdGguY2VpbCgodG8gLSBmcm9tKSAvIHN0ZXApKTtcblx0dmFyIGxlbmd0aHMgPSBuZXcgQXJyYXkodGFibGUubGVuZ3RoKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHRhYmxlW2ldID0gZnJvbUpTQXJyYXlfKGpzQXJyYXksIGggLSAxLCBmcm9tICsgKGkgKiBzdGVwKSwgTWF0aC5taW4oZnJvbSArICgoaSArIDEpICogc3RlcCksIHRvKSk7XG5cdFx0bGVuZ3Roc1tpXSA9IGxlbmd0aCh0YWJsZVtpXSkgKyAoaSA+IDAgPyBsZW5ndGhzW2kgLSAxXSA6IDApO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0aGVpZ2h0OiBoLFxuXHRcdHRhYmxlOiB0YWJsZSxcblx0XHRsZW5ndGhzOiBsZW5ndGhzXG5cdH07XG59XG5cbnJldHVybiB7XG5cdGVtcHR5OiBlbXB0eSxcblx0ZnJvbUxpc3Q6IGZyb21MaXN0LFxuXHR0b0xpc3Q6IHRvTGlzdCxcblx0aW5pdGlhbGl6ZTogRjIoaW5pdGlhbGl6ZSksXG5cdGFwcGVuZDogRjIoYXBwZW5kKSxcblx0cHVzaDogRjIocHVzaCksXG5cdHNsaWNlOiBGMyhzbGljZSksXG5cdGdldDogRjIoZ2V0KSxcblx0c2V0OiBGMyhzZXQpLFxuXHRtYXA6IEYyKG1hcCksXG5cdGluZGV4ZWRNYXA6IEYyKGluZGV4ZWRNYXApLFxuXHRmb2xkbDogRjMoZm9sZGwpLFxuXHRmb2xkcjogRjMoZm9sZHIpLFxuXHRsZW5ndGg6IGxlbmd0aCxcblxuXHR0b0pTQXJyYXk6IHRvSlNBcnJheSxcblx0ZnJvbUpTQXJyYXk6IGZyb21KU0FycmF5XG59O1xuXG59KCk7XG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MgPSBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gZGl2KGEsIGIpXG57XG5cdHJldHVybiAoYSAvIGIpIHwgMDtcbn1cbmZ1bmN0aW9uIHJlbShhLCBiKVxue1xuXHRyZXR1cm4gYSAlIGI7XG59XG5mdW5jdGlvbiBtb2QoYSwgYilcbntcblx0aWYgKGIgPT09IDApXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwZXJmb3JtIG1vZCAwLiBEaXZpc2lvbiBieSB6ZXJvIGVycm9yLicpO1xuXHR9XG5cdHZhciByID0gYSAlIGI7XG5cdHZhciBtID0gYSA9PT0gMCA/IDAgOiAoYiA+IDAgPyAoYSA+PSAwID8gciA6IHIgKyBiKSA6IC1tb2QoLWEsIC1iKSk7XG5cblx0cmV0dXJuIG0gPT09IGIgPyAwIDogbTtcbn1cbmZ1bmN0aW9uIGxvZ0Jhc2UoYmFzZSwgbilcbntcblx0cmV0dXJuIE1hdGgubG9nKG4pIC8gTWF0aC5sb2coYmFzZSk7XG59XG5mdW5jdGlvbiBuZWdhdGUobilcbntcblx0cmV0dXJuIC1uO1xufVxuZnVuY3Rpb24gYWJzKG4pXG57XG5cdHJldHVybiBuIDwgMCA/IC1uIDogbjtcbn1cblxuZnVuY3Rpb24gbWluKGEsIGIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKGEsIGIpIDwgMCA/IGEgOiBiO1xufVxuZnVuY3Rpb24gbWF4KGEsIGIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKGEsIGIpID4gMCA/IGEgOiBiO1xufVxuZnVuY3Rpb24gY2xhbXAobG8sIGhpLCBuKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChuLCBsbykgPCAwXG5cdFx0PyBsb1xuXHRcdDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChuLCBoaSkgPiAwXG5cdFx0XHQ/IGhpXG5cdFx0XHQ6IG47XG59XG5cbnZhciBvcmQgPSBbJ0xUJywgJ0VRJywgJ0dUJ107XG5cbmZ1bmN0aW9uIGNvbXBhcmUoeCwgeSlcbntcblx0cmV0dXJuIHsgY3Rvcjogb3JkW19lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoeCwgeSkgKyAxXSB9O1xufVxuXG5mdW5jdGlvbiB4b3IoYSwgYilcbntcblx0cmV0dXJuIGEgIT09IGI7XG59XG5mdW5jdGlvbiBub3QoYilcbntcblx0cmV0dXJuICFiO1xufVxuZnVuY3Rpb24gaXNJbmZpbml0ZShuKVxue1xuXHRyZXR1cm4gbiA9PT0gSW5maW5pdHkgfHwgbiA9PT0gLUluZmluaXR5O1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZShuKVxue1xuXHRyZXR1cm4gbiB8IDA7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMoZClcbntcblx0cmV0dXJuIGQgKiBNYXRoLlBJIC8gMTgwO1xufVxuZnVuY3Rpb24gdHVybnModClcbntcblx0cmV0dXJuIDIgKiBNYXRoLlBJICogdDtcbn1cbmZ1bmN0aW9uIGZyb21Qb2xhcihwb2ludClcbntcblx0dmFyIHIgPSBwb2ludC5fMDtcblx0dmFyIHQgPSBwb2ludC5fMTtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTIociAqIE1hdGguY29zKHQpLCByICogTWF0aC5zaW4odCkpO1xufVxuZnVuY3Rpb24gdG9Qb2xhcihwb2ludClcbntcblx0dmFyIHggPSBwb2ludC5fMDtcblx0dmFyIHkgPSBwb2ludC5fMTtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTIoTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLCBNYXRoLmF0YW4yKHksIHgpKTtcbn1cblxucmV0dXJuIHtcblx0ZGl2OiBGMihkaXYpLFxuXHRyZW06IEYyKHJlbSksXG5cdG1vZDogRjIobW9kKSxcblxuXHRwaTogTWF0aC5QSSxcblx0ZTogTWF0aC5FLFxuXHRjb3M6IE1hdGguY29zLFxuXHRzaW46IE1hdGguc2luLFxuXHR0YW46IE1hdGgudGFuLFxuXHRhY29zOiBNYXRoLmFjb3MsXG5cdGFzaW46IE1hdGguYXNpbixcblx0YXRhbjogTWF0aC5hdGFuLFxuXHRhdGFuMjogRjIoTWF0aC5hdGFuMiksXG5cblx0ZGVncmVlczogZGVncmVlcyxcblx0dHVybnM6IHR1cm5zLFxuXHRmcm9tUG9sYXI6IGZyb21Qb2xhcixcblx0dG9Qb2xhcjogdG9Qb2xhcixcblxuXHRzcXJ0OiBNYXRoLnNxcnQsXG5cdGxvZ0Jhc2U6IEYyKGxvZ0Jhc2UpLFxuXHRuZWdhdGU6IG5lZ2F0ZSxcblx0YWJzOiBhYnMsXG5cdG1pbjogRjIobWluKSxcblx0bWF4OiBGMihtYXgpLFxuXHRjbGFtcDogRjMoY2xhbXApLFxuXHRjb21wYXJlOiBGMihjb21wYXJlKSxcblxuXHR4b3I6IEYyKHhvciksXG5cdG5vdDogbm90LFxuXG5cdHRydW5jYXRlOiB0cnVuY2F0ZSxcblx0Y2VpbGluZzogTWF0aC5jZWlsLFxuXHRmbG9vcjogTWF0aC5mbG9vcixcblx0cm91bmQ6IE1hdGgucm91bmQsXG5cdHRvRmxvYXQ6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHg7IH0sXG5cdGlzTmFOOiBpc05hTixcblx0aXNJbmZpbml0ZTogaXNJbmZpbml0ZVxufTtcblxufSgpO1xuLy9pbXBvcnQgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscyA9IGZ1bmN0aW9uKCkge1xuXG4vLyBDT01QQVJJU09OU1xuXG5mdW5jdGlvbiBlcSh4LCB5KVxue1xuXHR2YXIgc3RhY2sgPSBbXTtcblx0dmFyIGlzRXF1YWwgPSBlcUhlbHAoeCwgeSwgMCwgc3RhY2spO1xuXHR2YXIgcGFpcjtcblx0d2hpbGUgKGlzRXF1YWwgJiYgKHBhaXIgPSBzdGFjay5wb3AoKSkpXG5cdHtcblx0XHRpc0VxdWFsID0gZXFIZWxwKHBhaXIueCwgcGFpci55LCAwLCBzdGFjayk7XG5cdH1cblx0cmV0dXJuIGlzRXF1YWw7XG59XG5cblxuZnVuY3Rpb24gZXFIZWxwKHgsIHksIGRlcHRoLCBzdGFjaylcbntcblx0aWYgKGRlcHRoID4gMTAwKVxuXHR7XG5cdFx0c3RhY2sucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0Jylcblx0e1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdUcnlpbmcgdG8gdXNlIGAoPT0pYCBvbiBmdW5jdGlvbnMuIFRoZXJlIGlzIG5vIHdheSB0byBrbm93IGlmIGZ1bmN0aW9ucyBhcmUgXCJ0aGUgc2FtZVwiIGluIHRoZSBFbG0gc2Vuc2UuJ1xuXHRcdFx0XHQrICcgUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cDovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2VsbS1sYW5nL2NvcmUvbGF0ZXN0L0Jhc2ljcyM9PSdcblx0XHRcdFx0KyAnIHdoaWNoIGRlc2NyaWJlcyB3aHkgaXQgaXMgdGhpcyB3YXkgYW5kIHdoYXQgdGhlIGJldHRlciB2ZXJzaW9uIHdpbGwgbG9vayBsaWtlLidcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICh4ID09PSBudWxsIHx8IHkgPT09IG51bGwpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGlmICh4IGluc3RhbmNlb2YgRGF0ZSlcblx0e1xuXHRcdHJldHVybiB4LmdldFRpbWUoKSA9PT0geS5nZXRUaW1lKCk7XG5cdH1cblxuXHRpZiAoISgnY3RvcicgaW4geCkpXG5cdHtcblx0XHRmb3IgKHZhciBrZXkgaW4geClcblx0XHR7XG5cdFx0XHRpZiAoIWVxSGVscCh4W2tleV0sIHlba2V5XSwgZGVwdGggKyAxLCBzdGFjaykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBjb252ZXJ0IERpY3RzIGFuZCBTZXRzIHRvIGxpc3RzXG5cdGlmICh4LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHguY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHR7XG5cdFx0eCA9IF9lbG1fbGFuZyRjb3JlJERpY3QkdG9MaXN0KHgpO1xuXHRcdHkgPSBfZWxtX2xhbmckY29yZSREaWN0JHRvTGlzdCh5KTtcblx0fVxuXHRpZiAoeC5jdG9yID09PSAnU2V0X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSBfZWxtX2xhbmckY29yZSRTZXQkdG9MaXN0KHgpO1xuXHRcdHkgPSBfZWxtX2xhbmckY29yZSRTZXQkdG9MaXN0KHkpO1xuXHR9XG5cblx0Ly8gY2hlY2sgaWYgbGlzdHMgYXJlIGVxdWFsIHdpdGhvdXQgcmVjdXJzaW9uXG5cdGlmICh4LmN0b3IgPT09ICc6OicpXG5cdHtcblx0XHR2YXIgYSA9IHg7XG5cdFx0dmFyIGIgPSB5O1xuXHRcdHdoaWxlIChhLmN0b3IgPT09ICc6OicgJiYgYi5jdG9yID09PSAnOjonKVxuXHRcdHtcblx0XHRcdGlmICghZXFIZWxwKGEuXzAsIGIuXzAsIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRhID0gYS5fMTtcblx0XHRcdGIgPSBiLl8xO1xuXHRcdH1cblx0XHRyZXR1cm4gYS5jdG9yID09PSBiLmN0b3I7XG5cdH1cblxuXHQvLyBjaGVjayBpZiBBcnJheXMgYXJlIGVxdWFsXG5cdGlmICh4LmN0b3IgPT09ICdfQXJyYXknKVxuXHR7XG5cdFx0dmFyIHhzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnRvSlNBcnJheSh4KTtcblx0XHR2YXIgeXMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkudG9KU0FycmF5KHkpO1xuXHRcdGlmICh4cy5sZW5ndGggIT09IHlzLmxlbmd0aClcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0aWYgKCFlcUhlbHAoeHNbaV0sIHlzW2ldLCBkZXB0aCArIDEsIHN0YWNrKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICghZXFIZWxwKHguY3RvciwgeS5jdG9yLCBkZXB0aCArIDEsIHN0YWNrKSlcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB4KVxuXHR7XG5cdFx0aWYgKCFlcUhlbHAoeFtrZXldLCB5W2tleV0sIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbi8vIENvZGUgaW4gR2VuZXJhdGUvSmF2YVNjcmlwdC5ocywgQmFzaWNzLmpzLCBhbmQgTGlzdC5qcyBkZXBlbmRzIG9uXG4vLyB0aGUgcGFydGljdWxhciBpbnRlZ2VyIHZhbHVlcyBhc3NpZ25lZCB0byBMVCwgRVEsIGFuZCBHVC5cblxudmFyIExUID0gLTEsIEVRID0gMCwgR1QgPSAxO1xuXG5mdW5jdGlvbiBjbXAoeCwgeSlcbntcblx0aWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0Jylcblx0e1xuXHRcdHJldHVybiB4ID09PSB5ID8gRVEgOiB4IDwgeSA/IExUIDogR1Q7XG5cdH1cblxuXHRpZiAoeCBpbnN0YW5jZW9mIFN0cmluZylcblx0e1xuXHRcdHZhciBhID0geC52YWx1ZU9mKCk7XG5cdFx0dmFyIGIgPSB5LnZhbHVlT2YoKTtcblx0XHRyZXR1cm4gYSA9PT0gYiA/IEVRIDogYSA8IGIgPyBMVCA6IEdUO1xuXHR9XG5cblx0aWYgKHguY3RvciA9PT0gJzo6JyB8fCB4LmN0b3IgPT09ICdbXScpXG5cdHtcblx0XHR3aGlsZSAoeC5jdG9yID09PSAnOjonICYmIHkuY3RvciA9PT0gJzo6Jylcblx0XHR7XG5cdFx0XHR2YXIgb3JkID0gY21wKHguXzAsIHkuXzApO1xuXHRcdFx0aWYgKG9yZCAhPT0gRVEpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBvcmQ7XG5cdFx0XHR9XG5cdFx0XHR4ID0geC5fMTtcblx0XHRcdHkgPSB5Ll8xO1xuXHRcdH1cblx0XHRyZXR1cm4geC5jdG9yID09PSB5LmN0b3IgPyBFUSA6IHguY3RvciA9PT0gJ1tdJyA/IExUIDogR1Q7XG5cdH1cblxuXHRpZiAoeC5jdG9yLnNsaWNlKDAsIDYpID09PSAnX1R1cGxlJylcblx0e1xuXHRcdHZhciBvcmQ7XG5cdFx0dmFyIG4gPSB4LmN0b3Iuc2xpY2UoNikgLSAwO1xuXHRcdHZhciBlcnIgPSAnY2Fubm90IGNvbXBhcmUgdHVwbGVzIHdpdGggbW9yZSB0aGFuIDYgZWxlbWVudHMuJztcblx0XHRpZiAobiA9PT0gMCkgcmV0dXJuIEVRO1xuXHRcdGlmIChuID49IDEpIHsgb3JkID0gY21wKHguXzAsIHkuXzApOyBpZiAob3JkICE9PSBFUSkgcmV0dXJuIG9yZDtcblx0XHRpZiAobiA+PSAyKSB7IG9yZCA9IGNtcCh4Ll8xLCB5Ll8xKTsgaWYgKG9yZCAhPT0gRVEpIHJldHVybiBvcmQ7XG5cdFx0aWYgKG4gPj0gMykgeyBvcmQgPSBjbXAoeC5fMiwgeS5fMik7IGlmIChvcmQgIT09IEVRKSByZXR1cm4gb3JkO1xuXHRcdGlmIChuID49IDQpIHsgb3JkID0gY21wKHguXzMsIHkuXzMpOyBpZiAob3JkICE9PSBFUSkgcmV0dXJuIG9yZDtcblx0XHRpZiAobiA+PSA1KSB7IG9yZCA9IGNtcCh4Ll80LCB5Ll80KTsgaWYgKG9yZCAhPT0gRVEpIHJldHVybiBvcmQ7XG5cdFx0aWYgKG4gPj0gNikgeyBvcmQgPSBjbXAoeC5fNSwgeS5fNSk7IGlmIChvcmQgIT09IEVRKSByZXR1cm4gb3JkO1xuXHRcdGlmIChuID49IDcpIHRocm93IG5ldyBFcnJvcignQ29tcGFyaXNvbiBlcnJvcjogJyArIGVycik7IH0gfSB9IH0gfSB9XG5cdFx0cmV0dXJuIEVRO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdCdDb21wYXJpc29uIGVycm9yOiBjb21wYXJpc29uIGlzIG9ubHkgZGVmaW5lZCBvbiBpbnRzLCAnXG5cdFx0KyAnZmxvYXRzLCB0aW1lcywgY2hhcnMsIHN0cmluZ3MsIGxpc3RzIG9mIGNvbXBhcmFibGUgdmFsdWVzLCAnXG5cdFx0KyAnYW5kIHR1cGxlcyBvZiBjb21wYXJhYmxlIHZhbHVlcy4nXG5cdCk7XG59XG5cblxuLy8gQ09NTU9OIFZBTFVFU1xuXG52YXIgVHVwbGUwID0ge1xuXHRjdG9yOiAnX1R1cGxlMCdcbn07XG5cbmZ1bmN0aW9uIFR1cGxlMih4LCB5KVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRfMDogeCxcblx0XHRfMTogeVxuXHR9O1xufVxuXG5mdW5jdGlvbiBjaHIoYylcbntcblx0cmV0dXJuIG5ldyBTdHJpbmcoYyk7XG59XG5cblxuLy8gR1VJRFxuXG52YXIgY291bnQgPSAwO1xuZnVuY3Rpb24gZ3VpZChfKVxue1xuXHRyZXR1cm4gY291bnQrKztcbn1cblxuXG4vLyBSRUNPUkRTXG5cbmZ1bmN0aW9uIHVwZGF0ZShvbGRSZWNvcmQsIHVwZGF0ZWRGaWVsZHMpXG57XG5cdHZhciBuZXdSZWNvcmQgPSB7fTtcblx0Zm9yICh2YXIga2V5IGluIG9sZFJlY29yZClcblx0e1xuXHRcdHZhciB2YWx1ZSA9IChrZXkgaW4gdXBkYXRlZEZpZWxkcykgPyB1cGRhdGVkRmllbGRzW2tleV0gOiBvbGRSZWNvcmRba2V5XTtcblx0XHRuZXdSZWNvcmRba2V5XSA9IHZhbHVlO1xuXHR9XG5cdHJldHVybiBuZXdSZWNvcmQ7XG59XG5cblxuLy8vLyBMSVNUIFNUVUZGIC8vLy9cblxudmFyIE5pbCA9IHsgY3RvcjogJ1tdJyB9O1xuXG5mdW5jdGlvbiBDb25zKGhkLCB0bClcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnOjonLFxuXHRcdF8wOiBoZCxcblx0XHRfMTogdGxcblx0fTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHhzLCB5cylcbntcblx0Ly8gYXBwZW5kIFN0cmluZ3Ncblx0aWYgKHR5cGVvZiB4cyA9PT0gJ3N0cmluZycpXG5cdHtcblx0XHRyZXR1cm4geHMgKyB5cztcblx0fVxuXG5cdC8vIGFwcGVuZCBMaXN0c1xuXHRpZiAoeHMuY3RvciA9PT0gJ1tdJylcblx0e1xuXHRcdHJldHVybiB5cztcblx0fVxuXHR2YXIgcm9vdCA9IENvbnMoeHMuXzAsIE5pbCk7XG5cdHZhciBjdXJyID0gcm9vdDtcblx0eHMgPSB4cy5fMTtcblx0d2hpbGUgKHhzLmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHRjdXJyLl8xID0gQ29ucyh4cy5fMCwgTmlsKTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdGN1cnIgPSBjdXJyLl8xO1xuXHR9XG5cdGN1cnIuXzEgPSB5cztcblx0cmV0dXJuIHJvb3Q7XG59XG5cblxuLy8gQ1JBU0hFU1xuXG5mdW5jdGlvbiBjcmFzaChtb2R1bGVOYW1lLCByZWdpb24pXG57XG5cdHJldHVybiBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0J1JhbiBpbnRvIGEgYERlYnVnLmNyYXNoYCBpbiBtb2R1bGUgYCcgKyBtb2R1bGVOYW1lICsgJ2AgJyArIHJlZ2lvblRvU3RyaW5nKHJlZ2lvbikgKyAnXFxuJ1xuXHRcdFx0KyAnVGhlIG1lc3NhZ2UgcHJvdmlkZWQgYnkgdGhlIGNvZGUgYXV0aG9yIGlzOlxcblxcbiAgICAnXG5cdFx0XHQrIG1lc3NhZ2Vcblx0XHQpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBjcmFzaENhc2UobW9kdWxlTmFtZSwgcmVnaW9uLCB2YWx1ZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnUmFuIGludG8gYSBgRGVidWcuY3Jhc2hgIGluIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYFxcblxcbidcblx0XHRcdCsgJ1RoaXMgd2FzIGNhdXNlZCBieSB0aGUgYGNhc2VgIGV4cHJlc3Npb24gJyArIHJlZ2lvblRvU3RyaW5nKHJlZ2lvbikgKyAnLlxcbidcblx0XHRcdCsgJ09uZSBvZiB0aGUgYnJhbmNoZXMgZW5kZWQgd2l0aCBhIGNyYXNoIGFuZCB0aGUgZm9sbG93aW5nIHZhbHVlIGdvdCB0aHJvdWdoOlxcblxcbiAgICAnICsgdG9TdHJpbmcodmFsdWUpICsgJ1xcblxcbidcblx0XHRcdCsgJ1RoZSBtZXNzYWdlIHByb3ZpZGVkIGJ5IHRoZSBjb2RlIGF1dGhvciBpczpcXG5cXG4gICAgJ1xuXHRcdFx0KyBtZXNzYWdlXG5cdFx0KTtcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVnaW9uVG9TdHJpbmcocmVnaW9uKVxue1xuXHRpZiAocmVnaW9uLnN0YXJ0LmxpbmUgPT0gcmVnaW9uLmVuZC5saW5lKVxuXHR7XG5cdFx0cmV0dXJuICdvbiBsaW5lICcgKyByZWdpb24uc3RhcnQubGluZTtcblx0fVxuXHRyZXR1cm4gJ2JldHdlZW4gbGluZXMgJyArIHJlZ2lvbi5zdGFydC5saW5lICsgJyBhbmQgJyArIHJlZ2lvbi5lbmQubGluZTtcbn1cblxuXG4vLyBUTyBTVFJJTkdcblxuZnVuY3Rpb24gdG9TdHJpbmcodilcbntcblx0dmFyIHR5cGUgPSB0eXBlb2Ygdjtcblx0aWYgKHR5cGUgPT09ICdmdW5jdGlvbicpXG5cdHtcblx0XHR2YXIgbmFtZSA9IHYuZnVuYyA/IHYuZnVuYy5uYW1lIDogdi5uYW1lO1xuXHRcdHJldHVybiAnPGZ1bmN0aW9uJyArIChuYW1lID09PSAnJyA/ICcnIDogJzonKSArIG5hbWUgKyAnPic7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKVxuXHR7XG5cdFx0cmV0dXJuIHYgPyAnVHJ1ZScgOiAnRmFsc2UnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuIHYgKyAnJztcblx0fVxuXG5cdGlmICh2IGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuICdcXCcnICsgYWRkU2xhc2hlcyh2LCB0cnVlKSArICdcXCcnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuICdcIicgKyBhZGRTbGFzaGVzKHYsIGZhbHNlKSArICdcIic7XG5cdH1cblxuXHRpZiAodiA9PT0gbnVsbClcblx0e1xuXHRcdHJldHVybiAnbnVsbCc7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgJ2N0b3InIGluIHYpXG5cdHtcblx0XHR2YXIgY3RvclN0YXJ0ZXIgPSB2LmN0b3Iuc3Vic3RyaW5nKDAsIDUpO1xuXG5cdFx0aWYgKGN0b3JTdGFydGVyID09PSAnX1R1cGwnKVxuXHRcdHtcblx0XHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRcdGZvciAodmFyIGsgaW4gdilcblx0XHRcdHtcblx0XHRcdFx0aWYgKGsgPT09ICdjdG9yJykgY29udGludWU7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHRvU3RyaW5nKHZba10pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnKCcgKyBvdXRwdXQuam9pbignLCcpICsgJyknO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yU3RhcnRlciA9PT0gJ19UYXNrJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gJzx0YXNrPidcblx0XHR9XG5cblx0XHRpZiAodi5jdG9yID09PSAnX0FycmF5Jylcblx0XHR7XG5cdFx0XHR2YXIgbGlzdCA9IF9lbG1fbGFuZyRjb3JlJEFycmF5JHRvTGlzdCh2KTtcblx0XHRcdHJldHVybiAnQXJyYXkuZnJvbUxpc3QgJyArIHRvU3RyaW5nKGxpc3QpO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICc8ZGVjb2Rlcj4nKVxuXHRcdHtcblx0XHRcdHJldHVybiAnPGRlY29kZXI+Jztcblx0XHR9XG5cblx0XHRpZiAodi5jdG9yID09PSAnX1Byb2Nlc3MnKVxuXHRcdHtcblx0XHRcdHJldHVybiAnPHByb2Nlc3M6JyArIHYuaWQgKyAnPic7XG5cdFx0fVxuXG5cdFx0aWYgKHYuY3RvciA9PT0gJzo6Jylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJ1snICsgdG9TdHJpbmcodi5fMCk7XG5cdFx0XHR2ID0gdi5fMTtcblx0XHRcdHdoaWxlICh2LmN0b3IgPT09ICc6OicpXG5cdFx0XHR7XG5cdFx0XHRcdG91dHB1dCArPSAnLCcgKyB0b1N0cmluZyh2Ll8wKTtcblx0XHRcdFx0diA9IHYuXzE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3V0cHV0ICsgJ10nO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICdbXScpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICdbXSc7XG5cdFx0fVxuXG5cdFx0aWYgKHYuY3RvciA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICdTZXQuZnJvbUxpc3QgJyArIHRvU3RyaW5nKF9lbG1fbGFuZyRjb3JlJFNldCR0b0xpc3QodikpO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHYuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiAnRGljdC5mcm9tTGlzdCAnICsgdG9TdHJpbmcoX2VsbV9sYW5nJGNvcmUkRGljdCR0b0xpc3QodikpO1xuXHRcdH1cblxuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRmb3IgKHZhciBpIGluIHYpXG5cdFx0e1xuXHRcdFx0aWYgKGkgPT09ICdjdG9yJykgY29udGludWU7XG5cdFx0XHR2YXIgc3RyID0gdG9TdHJpbmcodltpXSk7XG5cdFx0XHR2YXIgYzAgPSBzdHJbMF07XG5cdFx0XHR2YXIgcGFyZW5sZXNzID0gYzAgPT09ICd7JyB8fCBjMCA9PT0gJygnIHx8IGMwID09PSAnPCcgfHwgYzAgPT09ICdcIicgfHwgc3RyLmluZGV4T2YoJyAnKSA8IDA7XG5cdFx0XHRvdXRwdXQgKz0gJyAnICsgKHBhcmVubGVzcyA/IHN0ciA6ICcoJyArIHN0ciArICcpJyk7XG5cdFx0fVxuXHRcdHJldHVybiB2LmN0b3IgKyBvdXRwdXQ7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHRpZiAodiBpbnN0YW5jZW9mIERhdGUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICc8JyArIHYudG9TdHJpbmcoKSArICc+Jztcblx0XHR9XG5cblx0XHRpZiAodi5lbG1fd2ViX3NvY2tldClcblx0XHR7XG5cdFx0XHRyZXR1cm4gJzx3ZWJzb2NrZXQ+Jztcblx0XHR9XG5cblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0Zm9yICh2YXIgayBpbiB2KVxuXHRcdHtcblx0XHRcdG91dHB1dC5wdXNoKGsgKyAnID0gJyArIHRvU3RyaW5nKHZba10pKTtcblx0XHR9XG5cdFx0aWYgKG91dHB1dC5sZW5ndGggPT09IDApXG5cdFx0e1xuXHRcdFx0cmV0dXJuICd7fSc7XG5cdFx0fVxuXHRcdHJldHVybiAneyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnIH0nO1xuXHR9XG5cblx0cmV0dXJuICc8aW50ZXJuYWwgc3RydWN0dXJlPic7XG59XG5cbmZ1bmN0aW9uIGFkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHRcdCAgLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdFx0ICAucmVwbGFjZSgvXFx0L2csICdcXFxcdCcpXG5cdFx0XHQgIC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHRcdCAgLnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdFx0ICAucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXHRpZiAoaXNDaGFyKVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cdH1cbn1cblxuXG5yZXR1cm4ge1xuXHRlcTogZXEsXG5cdGNtcDogY21wLFxuXHRUdXBsZTA6IFR1cGxlMCxcblx0VHVwbGUyOiBUdXBsZTIsXG5cdGNocjogY2hyLFxuXHR1cGRhdGU6IHVwZGF0ZSxcblx0Z3VpZDogZ3VpZCxcblxuXHRhcHBlbmQ6IEYyKGFwcGVuZCksXG5cblx0Y3Jhc2g6IGNyYXNoLFxuXHRjcmFzaENhc2U6IGNyYXNoQ2FzZSxcblxuXHR0b1N0cmluZzogdG9TdHJpbmdcbn07XG5cbn0oKTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkdW5jdXJyeSA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgX3AwKSB7XG5cdFx0dmFyIF9wMSA9IF9wMDtcblx0XHRyZXR1cm4gQTIoZiwgX3AxLl8wLCBfcDEuXzEpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkY3VycnkgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIGEsIGIpIHtcblx0XHRyZXR1cm4gZihcblx0XHRcdHtjdG9yOiAnX1R1cGxlMicsIF8wOiBhLCBfMTogYn0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkZmxpcCA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgYiwgYSkge1xuXHRcdHJldHVybiBBMihmLCBhLCBiKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHNuZCA9IGZ1bmN0aW9uIChfcDIpIHtcblx0dmFyIF9wMyA9IF9wMjtcblx0cmV0dXJuIF9wMy5fMTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGZzdCA9IGZ1bmN0aW9uIChfcDQpIHtcblx0dmFyIF9wNSA9IF9wNDtcblx0cmV0dXJuIF9wNS5fMDtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGFsd2F5cyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgX3A2KSB7XG5cdFx0cmV0dXJuIGE7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpZGVudGl0eSA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiB4O1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJzx8J10gPSBGMihcblx0ZnVuY3Rpb24gKGYsIHgpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyd8PiddID0gRjIoXG5cdGZ1bmN0aW9uICh4LCBmKSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snPj4nXSA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgZywgeCkge1xuXHRcdHJldHVybiBnKFxuXHRcdFx0Zih4KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snPDwnXSA9IEYzKFxuXHRmdW5jdGlvbiAoZywgZiwgeCkge1xuXHRcdHJldHVybiBnKFxuXHRcdFx0Zih4KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5hcHBlbmQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnRvU3RyaW5nO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpc0luZmluaXRlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5pc0luZmluaXRlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpc05hTiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuaXNOYU47XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvRmxvYXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnRvRmxvYXQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGNlaWxpbmcgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmNlaWxpbmc7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGZsb29yID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5mbG9vcjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkdHJ1bmNhdGUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnRydW5jYXRlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRyb3VuZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3Mucm91bmQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJG5vdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3Mubm90O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR4b3IgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnhvcjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJ3x8J10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLm9yO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snJiYnXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYW5kO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRtYXggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLm1heDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkbWluID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5taW47XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGNvbXBhcmUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmNvbXBhcmU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyc+PSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5nZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJzw9J10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmxlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snPiddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5ndDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJzwnXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MubHQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycvPSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5uZXE7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyc9PSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5lcTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkcGkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnBpO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRjbGFtcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuY2xhbXA7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGxvZ0Jhc2UgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmxvZ0Jhc2U7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGFicyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYWJzO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRuZWdhdGUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLm5lZ2F0ZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Mkc3FydCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3Muc3FydDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkYXRhbjIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmF0YW4yO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhdGFuID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5hdGFuO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhc2luID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5hc2luO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhY29zID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5hY29zO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0YW4gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnRhbjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Mkc2luID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5zaW47XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGNvcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuY29zO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snXiddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5leHA7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyclJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLm1vZDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkcmVtID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5yZW07XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycvLyddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5kaXY7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycvJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmZsb2F0RGl2O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKiddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5tdWw7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyctJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnN1YjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysnXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYWRkO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1BvbGFyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy50b1BvbGFyO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRmcm9tUG9sYXIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmZyb21Qb2xhcjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkdHVybnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnR1cm5zO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRkZWdyZWVzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5kZWdyZWVzO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRyYWRpYW5zID0gZnVuY3Rpb24gKHQpIHtcblx0cmV0dXJuIHQ7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRHVCA9IHtjdG9yOiAnR1QnfTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkRVEgPSB7Y3RvcjogJ0VRJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJExUID0ge2N0b3I6ICdMVCd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyROZXZlciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ05ldmVyJywgXzA6IGF9O1xufTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJHdpdGhEZWZhdWx0ID0gRjIoXG5cdGZ1bmN0aW9uICgkZGVmYXVsdCwgbWF5YmUpIHtcblx0XHR2YXIgX3AwID0gbWF5YmU7XG5cdFx0aWYgKF9wMC5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBfcDAuXzA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAkZGVmYXVsdDtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcgPSB7Y3RvcjogJ05vdGhpbmcnfTtcbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSRvbmVPZiA9IGZ1bmN0aW9uIChtYXliZXMpIHtcblx0b25lT2Y6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dmFyIF9wMSA9IG1heWJlcztcblx0XHRpZiAoX3AxLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3AzID0gX3AxLl8wO1xuXHRcdFx0dmFyIF9wMiA9IF9wMztcblx0XHRcdGlmIChfcDIuY3RvciA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdHZhciBfdjMgPSBfcDEuXzE7XG5cdFx0XHRcdG1heWJlcyA9IF92Mztcblx0XHRcdFx0Y29udGludWUgb25lT2Y7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3AzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSRhbmRUaGVuID0gRjIoXG5cdGZ1bmN0aW9uIChtYXliZVZhbHVlLCBjYWxsYmFjaykge1xuXHRcdHZhciBfcDQgPSBtYXliZVZhbHVlO1xuXHRcdGlmIChfcDQuY3RvciA9PT0gJ0p1c3QnKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soX3A0Ll8wKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnSnVzdCcsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBtYXliZSkge1xuXHRcdHZhciBfcDUgPSBtYXliZTtcblx0XHRpZiAoX3A1LmN0b3IgPT09ICdKdXN0Jykge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdGYoX3A1Ll8wKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkbWFwMiA9IEYzKFxuXHRmdW5jdGlvbiAoZnVuYywgbWEsIG1iKSB7XG5cdFx0dmFyIF9wNiA9IHtjdG9yOiAnX1R1cGxlMicsIF8wOiBtYSwgXzE6IG1ifTtcblx0XHRpZiAoKChfcDYuY3RvciA9PT0gJ19UdXBsZTInKSAmJiAoX3A2Ll8wLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDYuXzEuY3RvciA9PT0gJ0p1c3QnKSkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEEyKGZ1bmMsIF9wNi5fMC5fMCwgX3A2Ll8xLl8wKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkbWFwMyA9IEY0KFxuXHRmdW5jdGlvbiAoZnVuYywgbWEsIG1iLCBtYykge1xuXHRcdHZhciBfcDcgPSB7Y3RvcjogJ19UdXBsZTMnLCBfMDogbWEsIF8xOiBtYiwgXzI6IG1jfTtcblx0XHRpZiAoKCgoX3A3LmN0b3IgPT09ICdfVHVwbGUzJykgJiYgKF9wNy5fMC5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A3Ll8xLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDcuXzIuY3RvciA9PT0gJ0p1c3QnKSkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEEzKGZ1bmMsIF9wNy5fMC5fMCwgX3A3Ll8xLl8wLCBfcDcuXzIuXzApKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSRtYXA0ID0gRjUoXG5cdGZ1bmN0aW9uIChmdW5jLCBtYSwgbWIsIG1jLCBtZCkge1xuXHRcdHZhciBfcDggPSB7Y3RvcjogJ19UdXBsZTQnLCBfMDogbWEsIF8xOiBtYiwgXzI6IG1jLCBfMzogbWR9O1xuXHRcdGlmICgoKCgoX3A4LmN0b3IgPT09ICdfVHVwbGU0JykgJiYgKF9wOC5fMC5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A4Ll8xLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDguXzIuY3RvciA9PT0gJ0p1c3QnKSkgJiYgKF9wOC5fMy5jdG9yID09PSAnSnVzdCcpKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0QTQoZnVuYywgX3A4Ll8wLl8wLCBfcDguXzEuXzAsIF9wOC5fMi5fMCwgX3A4Ll8zLl8wKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkbWFwNSA9IEY2KFxuXHRmdW5jdGlvbiAoZnVuYywgbWEsIG1iLCBtYywgbWQsIG1lKSB7XG5cdFx0dmFyIF9wOSA9IHtjdG9yOiAnX1R1cGxlNScsIF8wOiBtYSwgXzE6IG1iLCBfMjogbWMsIF8zOiBtZCwgXzQ6IG1lfTtcblx0XHRpZiAoKCgoKChfcDkuY3RvciA9PT0gJ19UdXBsZTUnKSAmJiAoX3A5Ll8wLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDkuXzEuY3RvciA9PT0gJ0p1c3QnKSkgJiYgKF9wOS5fMi5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A5Ll8zLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDkuXzQuY3RvciA9PT0gJ0p1c3QnKSkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEE1KGZ1bmMsIF9wOS5fMC5fMCwgX3A5Ll8xLl8wLCBfcDkuXzIuXzAsIF9wOS5fMy5fMCwgX3A5Ll80Ll8wKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG5cbi8vaW1wb3J0IE5hdGl2ZS5VdGlscyAvL1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QgPSBmdW5jdGlvbigpIHtcblxudmFyIE5pbCA9IHsgY3RvcjogJ1tdJyB9O1xuXG5mdW5jdGlvbiBDb25zKGhkLCB0bClcbntcblx0cmV0dXJuIHsgY3RvcjogJzo6JywgXzA6IGhkLCBfMTogdGwgfTtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5KGFycilcbntcblx0dmFyIG91dCA9IE5pbDtcblx0Zm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0b3V0ID0gQ29ucyhhcnJbaV0sIG91dCk7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh4cylcbntcblx0dmFyIG91dCA9IFtdO1xuXHR3aGlsZSAoeHMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdG91dC5wdXNoKHhzLl8wKTtcblx0XHR4cyA9IHhzLl8xO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuZnVuY3Rpb24gcmFuZ2UobG8sIGhpKVxue1xuXHR2YXIgbGlzdCA9IE5pbDtcblx0aWYgKGxvIDw9IGhpKVxuXHR7XG5cdFx0ZG9cblx0XHR7XG5cdFx0XHRsaXN0ID0gQ29ucyhoaSwgbGlzdCk7XG5cdFx0fVxuXHRcdHdoaWxlIChoaS0tID4gbG8pO1xuXHR9XG5cdHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiBmb2xkcihmLCBiLCB4cylcbntcblx0dmFyIGFyciA9IHRvQXJyYXkoeHMpO1xuXHR2YXIgYWNjID0gYjtcblx0Zm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0YWNjID0gQTIoZiwgYXJyW2ldLCBhY2MpO1xuXHR9XG5cdHJldHVybiBhY2M7XG59XG5cbmZ1bmN0aW9uIG1hcDIoZiwgeHMsIHlzKVxue1xuXHR2YXIgYXJyID0gW107XG5cdHdoaWxlICh4cy5jdG9yICE9PSAnW10nICYmIHlzLmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHRhcnIucHVzaChBMihmLCB4cy5fMCwgeXMuXzApKTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdH1cblx0cmV0dXJuIGZyb21BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBtYXAzKGYsIHhzLCB5cywgenMpXG57XG5cdHZhciBhcnIgPSBbXTtcblx0d2hpbGUgKHhzLmN0b3IgIT09ICdbXScgJiYgeXMuY3RvciAhPT0gJ1tdJyAmJiB6cy5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0YXJyLnB1c2goQTMoZiwgeHMuXzAsIHlzLl8wLCB6cy5fMCkpO1xuXHRcdHhzID0geHMuXzE7XG5cdFx0eXMgPSB5cy5fMTtcblx0XHR6cyA9IHpzLl8xO1xuXHR9XG5cdHJldHVybiBmcm9tQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gbWFwNChmLCB3cywgeHMsIHlzLCB6cylcbntcblx0dmFyIGFyciA9IFtdO1xuXHR3aGlsZSAoICAgd3MuY3RvciAhPT0gJ1tdJ1xuXHRcdCAgICYmIHhzLmN0b3IgIT09ICdbXSdcblx0XHQgICAmJiB5cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgenMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdGFyci5wdXNoKEE0KGYsIHdzLl8wLCB4cy5fMCwgeXMuXzAsIHpzLl8wKSk7XG5cdFx0d3MgPSB3cy5fMTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdFx0enMgPSB6cy5fMTtcblx0fVxuXHRyZXR1cm4gZnJvbUFycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIG1hcDUoZiwgdnMsIHdzLCB4cywgeXMsIHpzKVxue1xuXHR2YXIgYXJyID0gW107XG5cdHdoaWxlICggICB2cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgd3MuY3RvciAhPT0gJ1tdJ1xuXHRcdCAgICYmIHhzLmN0b3IgIT09ICdbXSdcblx0XHQgICAmJiB5cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgenMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdGFyci5wdXNoKEE1KGYsIHZzLl8wLCB3cy5fMCwgeHMuXzAsIHlzLl8wLCB6cy5fMCkpO1xuXHRcdHZzID0gdnMuXzE7XG5cdFx0d3MgPSB3cy5fMTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdFx0enMgPSB6cy5fMTtcblx0fVxuXHRyZXR1cm4gZnJvbUFycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIHNvcnRCeShmLCB4cylcbntcblx0cmV0dXJuIGZyb21BcnJheSh0b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChmKGEpLCBmKGIpKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBzb3J0V2l0aChmLCB4cylcbntcblx0cmV0dXJuIGZyb21BcnJheSh0b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgb3JkID0gZihhKShiKS5jdG9yO1xuXHRcdHJldHVybiBvcmQgPT09ICdFUScgPyAwIDogb3JkID09PSAnTFQnID8gLTEgOiAxO1xuXHR9KSk7XG59XG5cbnJldHVybiB7XG5cdE5pbDogTmlsLFxuXHRDb25zOiBDb25zLFxuXHRjb25zOiBGMihDb25zKSxcblx0dG9BcnJheTogdG9BcnJheSxcblx0ZnJvbUFycmF5OiBmcm9tQXJyYXksXG5cdHJhbmdlOiByYW5nZSxcblxuXHRmb2xkcjogRjMoZm9sZHIpLFxuXG5cdG1hcDI6IEYzKG1hcDIpLFxuXHRtYXAzOiBGNChtYXAzKSxcblx0bWFwNDogRjUobWFwNCksXG5cdG1hcDU6IEY2KG1hcDUpLFxuXHRzb3J0Qnk6IEYyKHNvcnRCeSksXG5cdHNvcnRXaXRoOiBGMihzb3J0V2l0aClcbn07XG5cbn0oKTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHNvcnRXaXRoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3Quc29ydFdpdGg7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRzb3J0QnkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5zb3J0Qnk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRzb3J0ID0gZnVuY3Rpb24gKHhzKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRMaXN0JHNvcnRCeSwgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGlkZW50aXR5LCB4cyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkZHJvcCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgbGlzdCkge1xuXHRcdGRyb3A6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKG4sIDApIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDAgPSBsaXN0O1xuXHRcdFx0XHRpZiAoX3AwLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgX3YxID0gbiAtIDEsXG5cdFx0XHRcdFx0XHRfdjIgPSBfcDAuXzE7XG5cdFx0XHRcdFx0biA9IF92MTtcblx0XHRcdFx0XHRsaXN0ID0gX3YyO1xuXHRcdFx0XHRcdGNvbnRpbnVlIGRyb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwNSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lm1hcDU7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXA0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QubWFwNDtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JG1hcDMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5tYXAzO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwMiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lm1hcDI7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRhbnkgPSBGMihcblx0ZnVuY3Rpb24gKGlzT2theSwgbGlzdCkge1xuXHRcdGFueTpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9wMSA9IGxpc3Q7XG5cdFx0XHRpZiAoX3AxLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGlzT2theShfcDEuXzApKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIF92NCA9IGlzT2theSxcblx0XHRcdFx0XHRcdF92NSA9IF9wMS5fMTtcblx0XHRcdFx0XHRpc09rYXkgPSBfdjQ7XG5cdFx0XHRcdFx0bGlzdCA9IF92NTtcblx0XHRcdFx0XHRjb250aW51ZSBhbnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkYWxsID0gRjIoXG5cdGZ1bmN0aW9uIChpc09rYXksIGxpc3QpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkQmFzaWNzJG5vdChcblx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGFueSxcblx0XHRcdFx0ZnVuY3Rpb24gKF9wMikge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRCYXNpY3Mkbm90KFxuXHRcdFx0XHRcdFx0aXNPa2F5KF9wMikpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsaXN0KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mb2xkcjtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIGxpc3QpIHtcblx0XHRmb2xkbDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9wMyA9IGxpc3Q7XG5cdFx0XHRpZiAoX3AzLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjcgPSBmdW5jLFxuXHRcdFx0XHRcdF92OCA9IEEyKGZ1bmMsIF9wMy5fMCwgYWNjKSxcblx0XHRcdFx0XHRfdjkgPSBfcDMuXzE7XG5cdFx0XHRcdGZ1bmMgPSBfdjc7XG5cdFx0XHRcdGFjYyA9IF92ODtcblx0XHRcdFx0bGlzdCA9IF92OTtcblx0XHRcdFx0Y29udGludWUgZm9sZGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGxlbmd0aCA9IGZ1bmN0aW9uICh4cykge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uIChfcDQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKyAxO1xuXHRcdFx0fSksXG5cdFx0MCxcblx0XHR4cyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3Qkc3VtID0gZnVuY3Rpb24gKG51bWJlcnMpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0XHRyZXR1cm4geCArIHk7XG5cdFx0XHR9KSxcblx0XHQwLFxuXHRcdG51bWJlcnMpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHByb2R1Y3QgPSBmdW5jdGlvbiAobnVtYmVycykge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRcdHJldHVybiB4ICogeTtcblx0XHRcdH0pLFxuXHRcdDEsXG5cdFx0bnVtYmVycyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWF4aW11bSA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHZhciBfcDUgPSBsaXN0O1xuXHRpZiAoX3A1LmN0b3IgPT09ICc6OicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwsIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRtYXgsIF9wNS5fMCwgX3A1Ll8xKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtaW5pbXVtID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0dmFyIF9wNiA9IGxpc3Q7XG5cdGlmIChfcDYuY3RvciA9PT0gJzo6Jykge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTMoX2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCwgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJG1pbiwgX3A2Ll8wLCBfcDYuXzEpKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGluZGV4ZWRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAyLFxuXHRcdFx0Zixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnJhbmdlKFxuXHRcdFx0XHQwLFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGxlbmd0aCh4cykgLSAxKSxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtZW1iZXIgPSBGMihcblx0ZnVuY3Rpb24gKHgsIHhzKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRhbnksXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmVxKGEsIHgpO1xuXHRcdFx0fSxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRpc0VtcHR5ID0gZnVuY3Rpb24gKHhzKSB7XG5cdHZhciBfcDcgPSB4cztcblx0aWYgKF9wNy5jdG9yID09PSAnW10nKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkdGFpbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHZhciBfcDggPSBsaXN0O1xuXHRpZiAoX3A4LmN0b3IgPT09ICc6OicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChfcDguXzEpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkaGVhZCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHZhciBfcDkgPSBsaXN0O1xuXHRpZiAoX3A5LmN0b3IgPT09ICc6OicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChfcDkuXzApO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzID0gX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmNvbnM7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHhzKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgYWNjKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sXG5cdFx0XHRcdFx0XHRmKHgpLFxuXHRcdFx0XHRcdFx0YWNjKTtcblx0XHRcdFx0fSksXG5cdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFtdKSxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRmaWx0ZXIgPSBGMihcblx0ZnVuY3Rpb24gKHByZWQsIHhzKSB7XG5cdFx0dmFyIGNvbmRpdGlvbmFsQ29ucyA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIHhzJCkge1xuXHRcdFx0XHRyZXR1cm4gcHJlZCh4KSA/IEEyKF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLCB4LCB4cyQpIDogeHMkO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdGNvbmRpdGlvbmFsQ29ucyxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0W10pLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JG1heWJlQ29ucyA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgbXgsIHhzKSB7XG5cdFx0dmFyIF9wMTAgPSBmKG14KTtcblx0XHRpZiAoX3AxMC5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgX3AxMC5fMCwgeHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGZpbHRlck1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXliZUNvbnMoZiksXG5cdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFtdKSxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRyZXZlcnNlID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIHgsIHkpO1xuXHRcdFx0fSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W10pLFxuXHRcdGxpc3QpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHNjYW5sID0gRjMoXG5cdGZ1bmN0aW9uIChmLCBiLCB4cykge1xuXHRcdHZhciBzY2FuMSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIGFjY0FjYykge1xuXHRcdFx0XHR2YXIgX3AxMSA9IGFjY0FjYztcblx0XHRcdFx0aWYgKF9wMTEuY3RvciA9PT0gJzo6Jykge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0QTIoZiwgeCwgX3AxMS5fMCksXG5cdFx0XHRcdFx0XHRhY2NBY2MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRMaXN0JHJldmVyc2UoXG5cdFx0XHRBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdFx0c2NhbjEsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbYl0pLFxuXHRcdFx0XHR4cykpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGFwcGVuZCA9IEYyKFxuXHRmdW5jdGlvbiAoeHMsIHlzKSB7XG5cdFx0dmFyIF9wMTIgPSB5cztcblx0XHRpZiAoX3AxMi5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgeCwgeSk7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdHlzLFxuXHRcdFx0XHR4cyk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0cykge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGFwcGVuZCxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXSksXG5cdFx0bGlzdHMpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGNvbmNhdE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgbGlzdCkge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwLCBmLCBsaXN0KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcGFydGl0aW9uID0gRjIoXG5cdGZ1bmN0aW9uIChwcmVkLCBsaXN0KSB7XG5cdFx0dmFyIHN0ZXAgPSBGMihcblx0XHRcdGZ1bmN0aW9uICh4LCBfcDEzKSB7XG5cdFx0XHRcdHZhciBfcDE0ID0gX3AxMztcblx0XHRcdFx0dmFyIF9wMTYgPSBfcDE0Ll8wO1xuXHRcdFx0XHR2YXIgX3AxNSA9IF9wMTQuXzE7XG5cdFx0XHRcdHJldHVybiBwcmVkKHgpID8ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogQTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIHgsIF9wMTYpLFxuXHRcdFx0XHRcdF8xOiBfcDE1XG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdF8wOiBfcDE2LFxuXHRcdFx0XHRcdF8xOiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgeCwgX3AxNSlcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRzdGVwLFxuXHRcdFx0e1xuXHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W10pLFxuXHRcdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0fSxcblx0XHRcdGxpc3QpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHVuemlwID0gZnVuY3Rpb24gKHBhaXJzKSB7XG5cdHZhciBzdGVwID0gRjIoXG5cdFx0ZnVuY3Rpb24gKF9wMTgsIF9wMTcpIHtcblx0XHRcdHZhciBfcDE5ID0gX3AxODtcblx0XHRcdHZhciBfcDIwID0gX3AxNztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XzA6IEEyKF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLCBfcDE5Ll8wLCBfcDIwLl8wKSxcblx0XHRcdFx0XzE6IEEyKF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLCBfcDE5Ll8xLCBfcDIwLl8xKVxuXHRcdFx0fTtcblx0XHR9KTtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIsXG5cdFx0c3RlcCxcblx0XHR7XG5cdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRbXSksXG5cdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRbXSlcblx0XHR9LFxuXHRcdHBhaXJzKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRpbnRlcnNwZXJzZSA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCB4cykge1xuXHRcdHZhciBfcDIxID0geHM7XG5cdFx0aWYgKF9wMjEuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0W10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc3RlcCA9IEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgcmVzdCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0c2VwLFxuXHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIHgsIHJlc3QpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR2YXIgc3BlcnNlZCA9IEEzKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRzdGVwLFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W10pLFxuXHRcdFx0XHRfcDIxLl8xKTtcblx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgX3AyMS5fMCwgc3BlcnNlZCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHRha2VSZXZlcnNlID0gRjMoXG5cdGZ1bmN0aW9uIChuLCBsaXN0LCB0YWtlbikge1xuXHRcdHRha2VSZXZlcnNlOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChuLCAwKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIHRha2VuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMjIgPSBsaXN0O1xuXHRcdFx0XHRpZiAoX3AyMi5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRha2VuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfdjIzID0gbiAtIDEsXG5cdFx0XHRcdFx0XHRfdjI0ID0gX3AyMi5fMSxcblx0XHRcdFx0XHRcdF92MjUgPSBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgX3AyMi5fMCwgdGFrZW4pO1xuXHRcdFx0XHRcdG4gPSBfdjIzO1xuXHRcdFx0XHRcdGxpc3QgPSBfdjI0O1xuXHRcdFx0XHRcdHRha2VuID0gX3YyNTtcblx0XHRcdFx0XHRjb250aW51ZSB0YWtlUmV2ZXJzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlVGFpbFJlYyA9IEYyKFxuXHRmdW5jdGlvbiAobiwgbGlzdCkge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRMaXN0JHJldmVyc2UoXG5cdFx0XHRBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlUmV2ZXJzZSxcblx0XHRcdFx0bixcblx0XHRcdFx0bGlzdCxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtdKSkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHRha2VGYXN0ID0gRjMoXG5cdGZ1bmN0aW9uIChjdHIsIG4sIGxpc3QpIHtcblx0XHRpZiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChuLCAwKSA8IDEpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFtdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9wMjMgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogbiwgXzE6IGxpc3R9O1xuXHRcdFx0X3YyNl81OlxuXHRcdFx0ZG8ge1xuXHRcdFx0XHRfdjI2XzE6XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoX3AyMy5jdG9yID09PSAnX1R1cGxlMicpIHtcblx0XHRcdFx0XHRcdGlmIChfcDIzLl8xLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoX3AyMy5fMS5fMS5jdG9yID09PSAnOjonKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChfcDIzLl8wKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MjZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbX3AyMy5fMS5fMCwgX3AyMy5fMS5fMS5fMF0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyMy5fMS5fMS5fMS5jdG9yID09PSAnOjonKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtfcDIzLl8xLl8wLCBfcDIzLl8xLl8xLl8wLCBfcDIzLl8xLl8xLl8xLl8wXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YyNl81O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjMuXzEuXzEuXzEuY3RvciA9PT0gJzo6JykgJiYgKF9wMjMuXzEuXzEuXzEuXzEuY3RvciA9PT0gJzo6JykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3AyOCA9IF9wMjMuXzEuXzEuXzEuXzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9wMjcgPSBfcDIzLl8xLl8xLl8wO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBfcDI2ID0gX3AyMy5fMS5fMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3AyNSA9IF9wMjMuXzEuXzEuXzEuXzEuXzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9wMjQgPSBfcDIzLl8xLl8xLl8xLl8xLl8xO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChjdHIsIDEwMDApID4gMCkgPyBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyOCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJExpc3QkdGFrZVRhaWxSZWMsIG4gLSA0LCBfcDI0KSkpKSkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyOCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzWyc6OiddLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3AyNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkdGFrZUZhc3QsIGN0ciArIDEsIG4gLSA0LCBfcDI0KSkpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YyNl81O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChfcDIzLl8wID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjI2XzE7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MjZfNTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX3YyNl81O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W19wMjMuXzEuXzBdKTtcblx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHRha2UgPSBGMihcblx0ZnVuY3Rpb24gKG4sIGxpc3QpIHtcblx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlRmFzdCwgMCwgbiwgbGlzdCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcmVwZWF0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAocmVzdWx0LCBuLCB2YWx1ZSkge1xuXHRcdHJlcGVhdEhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKG4sIDApIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF92MjcgPSBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgdmFsdWUsIHJlc3VsdCksXG5cdFx0XHRcdFx0X3YyOCA9IG4gLSAxLFxuXHRcdFx0XHRcdF92MjkgPSB2YWx1ZTtcblx0XHRcdFx0cmVzdWx0ID0gX3YyNztcblx0XHRcdFx0biA9IF92Mjg7XG5cdFx0XHRcdHZhbHVlID0gX3YyOTtcblx0XHRcdFx0Y29udGludWUgcmVwZWF0SGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcmVwZWF0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCB2YWx1ZSkge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkcmVwZWF0SGVscCxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0W10pLFxuXHRcdFx0bixcblx0XHRcdHZhbHVlKTtcblx0fSk7XG5cbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRhcHBlbmQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuYXBwZW5kO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGxlbmd0aCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5sZW5ndGg7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkaXNFbXB0eSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmVxKFxuXHRcdF9lbG1fbGFuZyRjb3JlJEFycmF5JGxlbmd0aChhcnJheSksXG5cdFx0MCk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHNsaWNlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnNsaWNlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHNldCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5zZXQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZ2V0ID0gRjIoXG5cdGZ1bmN0aW9uIChpLCBhcnJheSkge1xuXHRcdHJldHVybiAoKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoMCwgaSkgPCAxKSAmJiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChcblx0XHRcdGksXG5cdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkubGVuZ3RoKGFycmF5KSkgPCAwKSkgPyBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmdldCwgaSwgYXJyYXkpKSA6IF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHB1c2ggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkucHVzaDtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRlbXB0eSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5lbXB0eTtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRmaWx0ZXIgPSBGMihcblx0ZnVuY3Rpb24gKGlzT2theSwgYXJyKSB7XG5cdFx0dmFyIHVwZGF0ZSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIHhzKSB7XG5cdFx0XHRcdHJldHVybiBpc09rYXkoeCkgPyBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkucHVzaCwgeCwgeHMpIDogeHM7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmZvbGRsLCB1cGRhdGUsIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5lbXB0eSwgYXJyKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZm9sZHIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZm9sZHI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZm9sZGwgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZm9sZGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkaW5kZXhlZE1hcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5pbmRleGVkTWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JG1hcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5tYXA7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkdG9JbmRleGVkTGlzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAyLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHYwLCB2MSkge1xuXHRcdFx0XHRyZXR1cm4ge2N0b3I6ICdfVHVwbGUyJywgXzA6IHYwLCBfMTogdjF9O1xuXHRcdFx0fSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QucmFuZ2UoXG5cdFx0XHQwLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5Lmxlbmd0aChhcnJheSkgLSAxKSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkudG9MaXN0KGFycmF5KSk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHRvTGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS50b0xpc3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZnJvbUxpc3QgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZnJvbUxpc3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5pbml0aWFsaXplO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHJlcGVhdCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEFycmF5JGluaXRpYWxpemUsXG5cdFx0XHRuLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJGFsd2F5cyhlKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JEFycmF5ID0ge2N0b3I6ICdBcnJheSd9O1xuXG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9DaGFyID0gZnVuY3Rpb24oKSB7XG5cbnJldHVybiB7XG5cdGZyb21Db2RlOiBmdW5jdGlvbihjKSB7IHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKFN0cmluZy5mcm9tQ2hhckNvZGUoYykpOyB9LFxuXHR0b0NvZGU6IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGMuY2hhckNvZGVBdCgwKTsgfSxcblx0dG9VcHBlcjogZnVuY3Rpb24oYykgeyByZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihjLnRvVXBwZXJDYXNlKCkpOyB9LFxuXHR0b0xvd2VyOiBmdW5jdGlvbihjKSB7IHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKGMudG9Mb3dlckNhc2UoKSk7IH0sXG5cdHRvTG9jYWxlVXBwZXI6IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoYy50b0xvY2FsZVVwcGVyQ2FzZSgpKTsgfSxcblx0dG9Mb2NhbGVMb3dlcjogZnVuY3Rpb24oYykgeyByZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihjLnRvTG9jYWxlTG93ZXJDYXNlKCkpOyB9XG59O1xuXG59KCk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRmcm9tQ29kZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9DaGFyLmZyb21Db2RlO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkdG9Db2RlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIudG9Db2RlO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkdG9Mb2NhbGVMb3dlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9DaGFyLnRvTG9jYWxlTG93ZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciR0b0xvY2FsZVVwcGVyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIudG9Mb2NhbGVVcHBlcjtcbnZhciBfZWxtX2xhbmckY29yZSRDaGFyJHRvTG93ZXIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQ2hhci50b0xvd2VyO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkdG9VcHBlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9DaGFyLnRvVXBwZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc0JldHdlZW4gPSBGMyhcblx0ZnVuY3Rpb24gKGxvdywgaGlnaCwgJGNoYXIpIHtcblx0XHR2YXIgY29kZSA9IF9lbG1fbGFuZyRjb3JlJENoYXIkdG9Db2RlKCRjaGFyKTtcblx0XHRyZXR1cm4gKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoXG5cdFx0XHRjb2RlLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQ2hhciR0b0NvZGUobG93KSkgPiAtMSkgJiYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoXG5cdFx0XHRjb2RlLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQ2hhciR0b0NvZGUoaGlnaCkpIDwgMSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkaXNVcHBlciA9IEEyKFxuXHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignQScpLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCdaJykpO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkaXNMb3dlciA9IEEyKFxuXHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignYScpLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCd6JykpO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkaXNEaWdpdCA9IEEyKFxuXHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignMCcpLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCc5JykpO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkaXNPY3REaWdpdCA9IEEyKFxuXHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignMCcpLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCc3JykpO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkaXNIZXhEaWdpdCA9IGZ1bmN0aW9uICgkY2hhcikge1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkQ2hhciRpc0RpZ2l0KCRjaGFyKSB8fCAoQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkQ2hhciRpc0JldHdlZW4sXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignYScpLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJ2YnKSxcblx0XHQkY2hhcikgfHwgQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkQ2hhciRpc0JldHdlZW4sXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignQScpLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJ0YnKSxcblx0XHQkY2hhcikpO1xufTtcblxuLy9pbXBvcnQgTmF0aXZlLlV0aWxzIC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyID0gZnVuY3Rpb24oKSB7XG5cbnZhciBNQVhfU1RFUFMgPSAxMDAwMDtcblxuXG4vLyBUQVNLU1xuXG5mdW5jdGlvbiBzdWNjZWVkKHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVGFza19zdWNjZWVkJyxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuZnVuY3Rpb24gZmFpbChlcnJvcilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1Rhc2tfZmFpbCcsXG5cdFx0dmFsdWU6IGVycm9yXG5cdH07XG59XG5cbmZ1bmN0aW9uIG5hdGl2ZUJpbmRpbmcoY2FsbGJhY2spXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJ19UYXNrX25hdGl2ZUJpbmRpbmcnLFxuXHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRjYW5jZWw6IG51bGxcblx0fTtcbn1cblxuZnVuY3Rpb24gYW5kVGhlbih0YXNrLCBjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1Rhc2tfYW5kVGhlbicsXG5cdFx0dGFzazogdGFzayxcblx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0fTtcbn1cblxuZnVuY3Rpb24gb25FcnJvcih0YXNrLCBjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1Rhc2tfb25FcnJvcicsXG5cdFx0dGFzazogdGFzayxcblx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1Rhc2tfcmVjZWl2ZScsXG5cdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdH07XG59XG5cblxuLy8gUFJPQ0VTU0VTXG5cbmZ1bmN0aW9uIHJhd1NwYXduKHRhc2spXG57XG5cdHZhciBwcm9jZXNzID0ge1xuXHRcdGN0b3I6ICdfUHJvY2VzcycsXG5cdFx0aWQ6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5ndWlkKCksXG5cdFx0cm9vdDogdGFzayxcblx0XHRzdGFjazogbnVsbCxcblx0XHRtYWlsYm94OiBbXVxuXHR9O1xuXG5cdGVucXVldWUocHJvY2Vzcyk7XG5cblx0cmV0dXJuIHByb2Nlc3M7XG59XG5cbmZ1bmN0aW9uIHNwYXduKHRhc2spXG57XG5cdHJldHVybiBuYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIHByb2Nlc3MgPSByYXdTcGF3bih0YXNrKTtcblx0XHRjYWxsYmFjayhzdWNjZWVkKHByb2Nlc3MpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJhd1NlbmQocHJvY2VzcywgbXNnKVxue1xuXHRwcm9jZXNzLm1haWxib3gucHVzaChtc2cpO1xuXHRlbnF1ZXVlKHByb2Nlc3MpO1xufVxuXG5mdW5jdGlvbiBzZW5kKHByb2Nlc3MsIG1zZylcbntcblx0cmV0dXJuIG5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRyYXdTZW5kKHByb2Nlc3MsIG1zZyk7XG5cdFx0Y2FsbGJhY2soc3VjY2VlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBraWxsKHByb2Nlc3MpXG57XG5cdHJldHVybiBuYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIHJvb3QgPSBwcm9jZXNzLnJvb3Q7XG5cdFx0aWYgKHJvb3QuY3RvciA9PT0gJ19UYXNrX25hdGl2ZUJpbmRpbmcnICYmIHJvb3QuY2FuY2VsKVxuXHRcdHtcblx0XHRcdHJvb3QuY2FuY2VsKCk7XG5cdFx0fVxuXG5cdFx0cHJvY2Vzcy5yb290ID0gbnVsbDtcblxuXHRcdGNhbGxiYWNrKHN1Y2NlZWQoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSlcbntcblx0cmV0dXJuIG5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2soc3VjY2VlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwKSk7XG5cdFx0fSwgdGltZSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cdH0pO1xufVxuXG5cbi8vIFNURVAgUFJPQ0VTU0VTXG5cbmZ1bmN0aW9uIHN0ZXAobnVtU3RlcHMsIHByb2Nlc3MpXG57XG5cdHdoaWxlIChudW1TdGVwcyA8IE1BWF9TVEVQUylcblx0e1xuXHRcdHZhciBjdG9yID0gcHJvY2Vzcy5yb290LmN0b3I7XG5cblx0XHRpZiAoY3RvciA9PT0gJ19UYXNrX3N1Y2NlZWQnKVxuXHRcdHtcblx0XHRcdHdoaWxlIChwcm9jZXNzLnN0YWNrICYmIHByb2Nlc3Muc3RhY2suY3RvciA9PT0gJ19UYXNrX29uRXJyb3InKVxuXHRcdFx0e1xuXHRcdFx0XHRwcm9jZXNzLnN0YWNrID0gcHJvY2Vzcy5zdGFjay5yZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2Nlc3Muc3RhY2sgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzcy5yb290ID0gcHJvY2Vzcy5zdGFjay5jYWxsYmFjayhwcm9jZXNzLnJvb3QudmFsdWUpO1xuXHRcdFx0cHJvY2Vzcy5zdGFjayA9IHByb2Nlc3Muc3RhY2sucmVzdDtcblx0XHRcdCsrbnVtU3RlcHM7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gJ19UYXNrX2ZhaWwnKVxuXHRcdHtcblx0XHRcdHdoaWxlIChwcm9jZXNzLnN0YWNrICYmIHByb2Nlc3Muc3RhY2suY3RvciA9PT0gJ19UYXNrX2FuZFRoZW4nKVxuXHRcdFx0e1xuXHRcdFx0XHRwcm9jZXNzLnN0YWNrID0gcHJvY2Vzcy5zdGFjay5yZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2Nlc3Muc3RhY2sgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzcy5yb290ID0gcHJvY2Vzcy5zdGFjay5jYWxsYmFjayhwcm9jZXNzLnJvb3QudmFsdWUpO1xuXHRcdFx0cHJvY2Vzcy5zdGFjayA9IHByb2Nlc3Muc3RhY2sucmVzdDtcblx0XHRcdCsrbnVtU3RlcHM7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gJ19UYXNrX2FuZFRoZW4nKVxuXHRcdHtcblx0XHRcdHByb2Nlc3Muc3RhY2sgPSB7XG5cdFx0XHRcdGN0b3I6ICdfVGFza19hbmRUaGVuJyxcblx0XHRcdFx0Y2FsbGJhY2s6IHByb2Nlc3Mucm9vdC5jYWxsYmFjayxcblx0XHRcdFx0cmVzdDogcHJvY2Vzcy5zdGFja1xuXHRcdFx0fTtcblx0XHRcdHByb2Nlc3Mucm9vdCA9IHByb2Nlc3Mucm9vdC50YXNrO1xuXHRcdFx0KytudW1TdGVwcztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSAnX1Rhc2tfb25FcnJvcicpXG5cdFx0e1xuXHRcdFx0cHJvY2Vzcy5zdGFjayA9IHtcblx0XHRcdFx0Y3RvcjogJ19UYXNrX29uRXJyb3InLFxuXHRcdFx0XHRjYWxsYmFjazogcHJvY2Vzcy5yb290LmNhbGxiYWNrLFxuXHRcdFx0XHRyZXN0OiBwcm9jZXNzLnN0YWNrXG5cdFx0XHR9O1xuXHRcdFx0cHJvY2Vzcy5yb290ID0gcHJvY2Vzcy5yb290LnRhc2s7XG5cdFx0XHQrK251bVN0ZXBzO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09ICdfVGFza19uYXRpdmVCaW5kaW5nJylcblx0XHR7XG5cdFx0XHRwcm9jZXNzLnJvb3QuY2FuY2VsID0gcHJvY2Vzcy5yb290LmNhbGxiYWNrKGZ1bmN0aW9uKG5ld1Jvb3QpIHtcblx0XHRcdFx0cHJvY2Vzcy5yb290ID0gbmV3Um9vdDtcblx0XHRcdFx0ZW5xdWV1ZShwcm9jZXNzKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gJ19UYXNrX3JlY2VpdmUnKVxuXHRcdHtcblx0XHRcdHZhciBtYWlsYm94ID0gcHJvY2Vzcy5tYWlsYm94O1xuXHRcdFx0aWYgKG1haWxib3gubGVuZ3RoID09PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0cHJvY2Vzcy5yb290ID0gcHJvY2Vzcy5yb290LmNhbGxiYWNrKG1haWxib3guc2hpZnQoKSk7XG5cdFx0XHQrK251bVN0ZXBzO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKGN0b3IpO1xuXHR9XG5cblx0aWYgKG51bVN0ZXBzIDwgTUFYX1NURVBTKVxuXHR7XG5cdFx0cmV0dXJuIG51bVN0ZXBzICsgMTtcblx0fVxuXHRlbnF1ZXVlKHByb2Nlc3MpO1xuXG5cdHJldHVybiBudW1TdGVwcztcbn1cblxuXG4vLyBXT1JLIFFVRVVFXG5cbnZhciB3b3JraW5nID0gZmFsc2U7XG52YXIgd29ya1F1ZXVlID0gW107XG5cbmZ1bmN0aW9uIGVucXVldWUocHJvY2Vzcylcbntcblx0d29ya1F1ZXVlLnB1c2gocHJvY2Vzcyk7XG5cblx0aWYgKCF3b3JraW5nKVxuXHR7XG5cdFx0c2V0VGltZW91dCh3b3JrLCAwKTtcblx0XHR3b3JraW5nID0gdHJ1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3b3JrKClcbntcblx0dmFyIG51bVN0ZXBzID0gMDtcblx0dmFyIHByb2Nlc3M7XG5cdHdoaWxlIChudW1TdGVwcyA8IE1BWF9TVEVQUyAmJiAocHJvY2VzcyA9IHdvcmtRdWV1ZS5zaGlmdCgpKSlcblx0e1xuXHRcdGlmIChwcm9jZXNzLnJvb3QpXG5cdFx0e1xuXHRcdFx0bnVtU3RlcHMgPSBzdGVwKG51bVN0ZXBzLCBwcm9jZXNzKTtcblx0XHR9XG5cdH1cblx0aWYgKCFwcm9jZXNzKVxuXHR7XG5cdFx0d29ya2luZyA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXHRzZXRUaW1lb3V0KHdvcmssIDApO1xufVxuXG5cbnJldHVybiB7XG5cdHN1Y2NlZWQ6IHN1Y2NlZWQsXG5cdGZhaWw6IGZhaWwsXG5cdG5hdGl2ZUJpbmRpbmc6IG5hdGl2ZUJpbmRpbmcsXG5cdGFuZFRoZW46IEYyKGFuZFRoZW4pLFxuXHRvbkVycm9yOiBGMihvbkVycm9yKSxcblx0cmVjZWl2ZTogcmVjZWl2ZSxcblxuXHRzcGF3bjogc3Bhd24sXG5cdGtpbGw6IGtpbGwsXG5cdHNsZWVwOiBzbGVlcCxcblx0c2VuZDogRjIoc2VuZCksXG5cblx0cmF3U3Bhd246IHJhd1NwYXduLFxuXHRyYXdTZW5kOiByYXdTZW5kXG59O1xuXG59KCk7XG4vL2ltcG9ydCAvL1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtID0gZnVuY3Rpb24oKSB7XG5cblxuLy8gUFJPR1JBTVNcblxuZnVuY3Rpb24gYWRkUHVibGljTW9kdWxlKG9iamVjdCwgbmFtZSwgbWFpbilcbntcblx0dmFyIGluaXQgPSBtYWluID8gbWFrZUVtYmVkKG5hbWUsIG1haW4pIDogbWFpbklzVW5kZWZpbmVkKG5hbWUpO1xuXG5cdG9iamVjdFsnd29ya2VyJ10gPSBmdW5jdGlvbiB3b3JrZXIoZmxhZ3MpXG5cdHtcblx0XHRyZXR1cm4gaW5pdCh1bmRlZmluZWQsIGZsYWdzLCBmYWxzZSk7XG5cdH1cblxuXHRvYmplY3RbJ2VtYmVkJ10gPSBmdW5jdGlvbiBlbWJlZChkb21Ob2RlLCBmbGFncylcblx0e1xuXHRcdHJldHVybiBpbml0KGRvbU5vZGUsIGZsYWdzLCB0cnVlKTtcblx0fVxuXG5cdG9iamVjdFsnZnVsbHNjcmVlbiddID0gZnVuY3Rpb24gZnVsbHNjcmVlbihmbGFncylcblx0e1xuXHRcdHJldHVybiBpbml0KGRvY3VtZW50LmJvZHksIGZsYWdzLCB0cnVlKTtcblx0fTtcbn1cblxuXG4vLyBQUk9HUkFNIEZBSUxcblxuZnVuY3Rpb24gbWFpbklzVW5kZWZpbmVkKG5hbWUpXG57XG5cdHJldHVybiBmdW5jdGlvbihkb21Ob2RlKVxuXHR7XG5cdFx0dmFyIG1lc3NhZ2UgPSAnQ2Fubm90IGluaXRpYWxpemUgbW9kdWxlIGAnICsgbmFtZSArXG5cdFx0XHQnYCBiZWNhdXNlIGl0IGhhcyBubyBgbWFpbmAgdmFsdWUhXFxuV2hhdCBzaG91bGQgSSBzaG93IG9uIHNjcmVlbj8nO1xuXHRcdGRvbU5vZGUuaW5uZXJIVE1MID0gZXJyb3JIdG1sKG1lc3NhZ2UpO1xuXHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZXJyb3JIdG1sKG1lc3NhZ2UpXG57XG5cdHJldHVybiAnPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDoxZW07XCI+J1xuXHRcdCsgJzxoMiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbDtcIj48Yj5Pb3BzITwvYj4gU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBzdGFydGluZyB5b3VyIEVsbSBwcm9ncmFtLjwvaDI+J1xuXHRcdCsgJzxwcmUgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6MWVtO1wiPicgKyBtZXNzYWdlICsgJzwvcHJlPidcblx0XHQrICc8L2Rpdj4nO1xufVxuXG5cbi8vIFBST0dSQU0gU1VDQ0VTU1xuXG5mdW5jdGlvbiBtYWtlRW1iZWQobW9kdWxlTmFtZSwgbWFpbilcbntcblx0cmV0dXJuIGZ1bmN0aW9uIGVtYmVkKHJvb3REb21Ob2RlLCBmbGFncywgd2l0aFJlbmRlcmVyKVxuXHR7XG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0dmFyIHByb2dyYW0gPSBtYWluVG9Qcm9ncmFtKG1vZHVsZU5hbWUsIG1haW4pO1xuXHRcdFx0aWYgKCF3aXRoUmVuZGVyZXIpXG5cdFx0XHR7XG5cdFx0XHRcdHByb2dyYW0ucmVuZGVyZXIgPSBkdW1teVJlbmRlcmVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1ha2VFbWJlZEhlbHAobW9kdWxlTmFtZSwgcHJvZ3JhbSwgcm9vdERvbU5vZGUsIGZsYWdzKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGUpXG5cdFx0e1xuXHRcdFx0cm9vdERvbU5vZGUuaW5uZXJIVE1MID0gZXJyb3JIdG1sKGUubWVzc2FnZSk7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gZHVtbXlSZW5kZXJlcigpXG57XG5cdHJldHVybiB7IHVwZGF0ZTogZnVuY3Rpb24oKSB7fSB9O1xufVxuXG5cbi8vIE1BSU4gVE8gUFJPR1JBTVxuXG5mdW5jdGlvbiBtYWluVG9Qcm9ncmFtKG1vZHVsZU5hbWUsIHdyYXBwZWRNYWluKVxue1xuXHR2YXIgbWFpbiA9IHdyYXBwZWRNYWluLm1haW47XG5cblx0aWYgKHR5cGVvZiBtYWluLmluaXQgPT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0dmFyIGVtcHR5QmFnID0gYmF0Y2goX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuTmlsKTtcblx0XHR2YXIgbm9DaGFuZ2UgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMCxcblx0XHRcdGVtcHR5QmFnXG5cdFx0KTtcblxuXHRcdHJldHVybiBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9ncmFtV2l0aEZsYWdzKHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbm9DaGFuZ2U7IH0sXG5cdFx0XHR2aWV3OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1haW47IH0sXG5cdFx0XHR1cGRhdGU6IEYyKGZ1bmN0aW9uKCkgeyByZXR1cm4gbm9DaGFuZ2U7IH0pLFxuXHRcdFx0c3Vic2NyaXB0aW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW1wdHlCYWc7IH1cblx0XHR9KTtcblx0fVxuXG5cdHZhciBmbGFncyA9IHdyYXBwZWRNYWluLmZsYWdzO1xuXHR2YXIgaW5pdCA9IGZsYWdzXG5cdFx0PyBpbml0V2l0aEZsYWdzKG1vZHVsZU5hbWUsIG1haW4uaW5pdCwgZmxhZ3MpXG5cdFx0OiBpbml0V2l0aG91dEZsYWdzKG1vZHVsZU5hbWUsIG1haW4uaW5pdCk7XG5cblx0cmV0dXJuIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb2dyYW1XaXRoRmxhZ3Moe1xuXHRcdGluaXQ6IGluaXQsXG5cdFx0dmlldzogbWFpbi52aWV3LFxuXHRcdHVwZGF0ZTogbWFpbi51cGRhdGUsXG5cdFx0c3Vic2NyaXB0aW9uczogbWFpbi5zdWJzY3JpcHRpb25zLFxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFdpdGhvdXRGbGFncyhtb2R1bGVOYW1lLCByZWFsSW5pdClcbntcblx0cmV0dXJuIGZ1bmN0aW9uIGluaXQoZmxhZ3MpXG5cdHtcblx0XHRpZiAodHlwZW9mIGZsYWdzICE9PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdZb3UgYXJlIGdpdmluZyBtb2R1bGUgYCcgKyBtb2R1bGVOYW1lICsgJ2AgYW4gYXJndW1lbnQgaW4gSmF2YVNjcmlwdC5cXG4nXG5cdFx0XHRcdCsgJ1RoaXMgbW9kdWxlIGRvZXMgbm90IHRha2UgYXJndW1lbnRzIHRob3VnaCEgWW91IHByb2JhYmx5IG5lZWQgdG8gY2hhbmdlIHRoZVxcbidcblx0XHRcdFx0KyAnaW5pdGlhbGl6YXRpb24gY29kZSB0byBzb21ldGhpbmcgbGlrZSBgRWxtLicgKyBtb2R1bGVOYW1lICsgJy5mdWxsc2NyZWVuKClgJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlYWxJbml0KCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGluaXRXaXRoRmxhZ3MobW9kdWxlTmFtZSwgcmVhbEluaXQsIGZsYWdEZWNvZGVyKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gaW5pdChmbGFncylcblx0e1xuXHRcdHZhciByZXN1bHQgPSBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW4sIGZsYWdEZWNvZGVyLCBmbGFncyk7XG5cdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnRXJyJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdZb3UgYXJlIHRyeWluZyB0byBpbml0aWFsaXplIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYCB3aXRoIGFuIHVuZXhwZWN0ZWQgYXJndW1lbnQuXFxuJ1xuXHRcdFx0XHQrICdXaGVuIHRyeWluZyB0byBjb252ZXJ0IGl0IHRvIGEgdXNhYmxlIEVsbSB2YWx1ZSwgSSBydW4gaW50byB0aGlzIHByb2JsZW06XFxuXFxuJ1xuXHRcdFx0XHQrIHJlc3VsdC5fMFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlYWxJbml0KHJlc3VsdC5fMCk7XG5cdH07XG59XG5cblxuLy8gU0VUVVAgUlVOVElNRSBTWVNURU1cblxuZnVuY3Rpb24gbWFrZUVtYmVkSGVscChtb2R1bGVOYW1lLCBwcm9ncmFtLCByb290RG9tTm9kZSwgZmxhZ3MpXG57XG5cdHZhciBpbml0ID0gcHJvZ3JhbS5pbml0O1xuXHR2YXIgdXBkYXRlID0gcHJvZ3JhbS51cGRhdGU7XG5cdHZhciBzdWJzY3JpcHRpb25zID0gcHJvZ3JhbS5zdWJzY3JpcHRpb25zO1xuXHR2YXIgdmlldyA9IHByb2dyYW0udmlldztcblx0dmFyIG1ha2VSZW5kZXJlciA9IHByb2dyYW0ucmVuZGVyZXI7XG5cblx0Ly8gYW1iaWVudCBzdGF0ZVxuXHR2YXIgbWFuYWdlcnMgPSB7fTtcblx0dmFyIHJlbmRlcmVyO1xuXG5cdC8vIGluaXQgYW5kIHVwZGF0ZSBzdGF0ZSBpbiBtYWluIHByb2Nlc3Ncblx0dmFyIGluaXRBcHAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgcmVzdWx0cyA9IGluaXQoZmxhZ3MpO1xuXHRcdHZhciBtb2RlbCA9IHJlc3VsdHMuXzA7XG5cdFx0cmVuZGVyZXIgPSBtYWtlUmVuZGVyZXIocm9vdERvbU5vZGUsIGVucXVldWUsIHZpZXcobW9kZWwpKTtcblx0XHR2YXIgY21kcyA9IHJlc3VsdHMuXzE7XG5cdFx0dmFyIHN1YnMgPSBzdWJzY3JpcHRpb25zKG1vZGVsKTtcblx0XHRkaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZHMsIHN1YnMpO1xuXHRcdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChtb2RlbCkpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBvbk1lc3NhZ2UobXNnLCBtb2RlbClcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXN1bHRzID0gQTIodXBkYXRlLCBtc2csIG1vZGVsKTtcblx0XHRcdG1vZGVsID0gcmVzdWx0cy5fMDtcblx0XHRcdHJlbmRlcmVyLnVwZGF0ZSh2aWV3KG1vZGVsKSk7XG5cdFx0XHR2YXIgY21kcyA9IHJlc3VsdHMuXzE7XG5cdFx0XHR2YXIgc3VicyA9IHN1YnNjcmlwdGlvbnMobW9kZWwpO1xuXHRcdFx0ZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCBjbWRzLCBzdWJzKTtcblx0XHRcdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChtb2RlbCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIG1haW5Qcm9jZXNzID0gc3Bhd25Mb29wKGluaXRBcHAsIG9uTWVzc2FnZSk7XG5cblx0ZnVuY3Rpb24gZW5xdWV1ZShtc2cpXG5cdHtcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnJhd1NlbmQobWFpblByb2Nlc3MsIG1zZyk7XG5cdH1cblxuXHR2YXIgcG9ydHMgPSBzZXR1cEVmZmVjdHMobWFuYWdlcnMsIGVucXVldWUpO1xuXG5cdHJldHVybiBwb3J0cyA/IHsgcG9ydHM6IHBvcnRzIH0gOiB7fTtcbn1cblxuXG4vLyBFRkZFQ1QgTUFOQUdFUlNcblxudmFyIGVmZmVjdE1hbmFnZXJzID0ge307XG5cbmZ1bmN0aW9uIHNldHVwRWZmZWN0cyhtYW5hZ2VycywgY2FsbGJhY2spXG57XG5cdHZhciBwb3J0cztcblxuXHQvLyBzZXR1cCBhbGwgbmVjZXNzYXJ5IGVmZmVjdCBtYW5hZ2Vyc1xuXHRmb3IgKHZhciBrZXkgaW4gZWZmZWN0TWFuYWdlcnMpXG5cdHtcblx0XHR2YXIgbWFuYWdlciA9IGVmZmVjdE1hbmFnZXJzW2tleV07XG5cblx0XHRpZiAobWFuYWdlci5pc0ZvcmVpZ24pXG5cdFx0e1xuXHRcdFx0cG9ydHMgPSBwb3J0cyB8fCB7fTtcblx0XHRcdHBvcnRzW2tleV0gPSBtYW5hZ2VyLnRhZyA9PT0gJ2NtZCdcblx0XHRcdFx0PyBzZXR1cE91dGdvaW5nUG9ydChrZXkpXG5cdFx0XHRcdDogc2V0dXBJbmNvbWluZ1BvcnQoa2V5LCBjYWxsYmFjayk7XG5cdFx0fVxuXG5cdFx0bWFuYWdlcnNba2V5XSA9IG1ha2VNYW5hZ2VyKG1hbmFnZXIsIGNhbGxiYWNrKTtcblx0fVxuXG5cdHJldHVybiBwb3J0cztcbn1cblxuZnVuY3Rpb24gbWFrZU1hbmFnZXIoaW5mbywgY2FsbGJhY2spXG57XG5cdHZhciByb3V0ZXIgPSB7XG5cdFx0bWFpbjogY2FsbGJhY2ssXG5cdFx0c2VsZjogdW5kZWZpbmVkXG5cdH07XG5cblx0dmFyIHRhZyA9IGluZm8udGFnO1xuXHR2YXIgb25FZmZlY3RzID0gaW5mby5vbkVmZmVjdHM7XG5cdHZhciBvblNlbGZNc2cgPSBpbmZvLm9uU2VsZk1zZztcblxuXHRmdW5jdGlvbiBvbk1lc3NhZ2UobXNnLCBzdGF0ZSlcblx0e1xuXHRcdGlmIChtc2cuY3RvciA9PT0gJ3NlbGYnKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMyhvblNlbGZNc2csIHJvdXRlciwgbXNnLl8wLCBzdGF0ZSk7XG5cdFx0fVxuXG5cdFx0dmFyIGZ4ID0gbXNnLl8wO1xuXHRcdHN3aXRjaCAodGFnKVxuXHRcdHtcblx0XHRcdGNhc2UgJ2NtZCc6XG5cdFx0XHRcdHJldHVybiBBMyhvbkVmZmVjdHMsIHJvdXRlciwgZnguY21kcywgc3RhdGUpO1xuXG5cdFx0XHRjYXNlICdzdWInOlxuXHRcdFx0XHRyZXR1cm4gQTMob25FZmZlY3RzLCByb3V0ZXIsIGZ4LnN1YnMsIHN0YXRlKTtcblxuXHRcdFx0Y2FzZSAnZngnOlxuXHRcdFx0XHRyZXR1cm4gQTQob25FZmZlY3RzLCByb3V0ZXIsIGZ4LmNtZHMsIGZ4LnN1YnMsIHN0YXRlKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgcHJvY2VzcyA9IHNwYXduTG9vcChpbmZvLmluaXQsIG9uTWVzc2FnZSk7XG5cdHJvdXRlci5zZWxmID0gcHJvY2Vzcztcblx0cmV0dXJuIHByb2Nlc3M7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb0FwcChyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJvdXRlci5tYWluKG1zZyk7XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb1NlbGYocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnNlbmQsIHJvdXRlci5zZWxmLCB7XG5cdFx0Y3RvcjogJ3NlbGYnLFxuXHRcdF8wOiBtc2dcblx0fSk7XG59XG5cblxuLy8gSEVMUEVSIGZvciBTVEFURUZVTCBMT09QU1xuXG5mdW5jdGlvbiBzcGF3bkxvb3AoaW5pdCwgb25NZXNzYWdlKVxue1xuXHR2YXIgYW5kVGhlbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuYW5kVGhlbjtcblxuXHRmdW5jdGlvbiBsb29wKHN0YXRlKVxuXHR7XG5cdFx0dmFyIGhhbmRsZU1zZyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIucmVjZWl2ZShmdW5jdGlvbihtc2cpIHtcblx0XHRcdHJldHVybiBvbk1lc3NhZ2UobXNnLCBzdGF0ZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIEEyKGFuZFRoZW4sIGhhbmRsZU1zZywgbG9vcCk7XG5cdH1cblxuXHR2YXIgdGFzayA9IEEyKGFuZFRoZW4sIGluaXQsIGxvb3ApO1xuXG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnJhd1NwYXduKHRhc2spO1xufVxuXG5cbi8vIEJBR1NcblxuZnVuY3Rpb24gbGVhZihob21lKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ2xlYWYnLFxuXHRcdFx0aG9tZTogaG9tZSxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdH07XG59XG5cbmZ1bmN0aW9uIGJhdGNoKGxpc3QpXG57XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ25vZGUnLFxuXHRcdGJyYW5jaGVzOiBsaXN0XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1hcCh0YWdnZXIsIGJhZylcbntcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnbWFwJyxcblx0XHR0YWdnZXI6IHRhZ2dlcixcblx0XHR0cmVlOiBiYWdcblx0fVxufVxuXG5cbi8vIFBJUEUgQkFHUyBJTlRPIEVGRkVDVCBNQU5BR0VSU1xuXG5mdW5jdGlvbiBkaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZEJhZywgc3ViQmFnKVxue1xuXHR2YXIgZWZmZWN0c0RpY3QgPSB7fTtcblx0Z2F0aGVyRWZmZWN0cyh0cnVlLCBjbWRCYWcsIGVmZmVjdHNEaWN0LCBudWxsKTtcblx0Z2F0aGVyRWZmZWN0cyhmYWxzZSwgc3ViQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cblx0Zm9yICh2YXIgaG9tZSBpbiBtYW5hZ2Vycylcblx0e1xuXHRcdHZhciBmeCA9IGhvbWUgaW4gZWZmZWN0c0RpY3Rcblx0XHRcdD8gZWZmZWN0c0RpY3RbaG9tZV1cblx0XHRcdDoge1xuXHRcdFx0XHRjbWRzOiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWwsXG5cdFx0XHRcdHN1YnM6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbFxuXHRcdFx0fTtcblxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIucmF3U2VuZChtYW5hZ2Vyc1tob21lXSwgeyBjdG9yOiAnZngnLCBfMDogZnggfSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2F0aGVyRWZmZWN0cyhpc0NtZCwgYmFnLCBlZmZlY3RzRGljdCwgdGFnZ2Vycylcbntcblx0c3dpdGNoIChiYWcudHlwZSlcblx0e1xuXHRcdGNhc2UgJ2xlYWYnOlxuXHRcdFx0dmFyIGhvbWUgPSBiYWcuaG9tZTtcblx0XHRcdHZhciBlZmZlY3QgPSB0b0VmZmVjdChpc0NtZCwgaG9tZSwgdGFnZ2VycywgYmFnLnZhbHVlKTtcblx0XHRcdGVmZmVjdHNEaWN0W2hvbWVdID0gaW5zZXJ0KGlzQ21kLCBlZmZlY3QsIGVmZmVjdHNEaWN0W2hvbWVdKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgJ25vZGUnOlxuXHRcdFx0dmFyIGxpc3QgPSBiYWcuYnJhbmNoZXM7XG5cdFx0XHR3aGlsZSAobGlzdC5jdG9yICE9PSAnW10nKVxuXHRcdFx0e1xuXHRcdFx0XHRnYXRoZXJFZmZlY3RzKGlzQ21kLCBsaXN0Ll8wLCBlZmZlY3RzRGljdCwgdGFnZ2Vycyk7XG5cdFx0XHRcdGxpc3QgPSBsaXN0Ll8xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAnbWFwJzpcblx0XHRcdGdhdGhlckVmZmVjdHMoaXNDbWQsIGJhZy50cmVlLCBlZmZlY3RzRGljdCwge1xuXHRcdFx0XHR0YWdnZXI6IGJhZy50YWdnZXIsXG5cdFx0XHRcdHJlc3Q6IHRhZ2dlcnNcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCB2YWx1ZSlcbntcblx0ZnVuY3Rpb24gYXBwbHlUYWdnZXJzKHgpXG5cdHtcblx0XHR2YXIgdGVtcCA9IHRhZ2dlcnM7XG5cdFx0d2hpbGUgKHRlbXApXG5cdFx0e1xuXHRcdFx0eCA9IHRlbXAudGFnZ2VyKHgpO1xuXHRcdFx0dGVtcCA9IHRlbXAucmVzdDtcblx0XHR9XG5cdFx0cmV0dXJuIHg7XG5cdH1cblxuXHR2YXIgbWFwID0gaXNDbWRcblx0XHQ/IGVmZmVjdE1hbmFnZXJzW2hvbWVdLmNtZE1hcFxuXHRcdDogZWZmZWN0TWFuYWdlcnNbaG9tZV0uc3ViTWFwO1xuXG5cdHJldHVybiBBMihtYXAsIGFwcGx5VGFnZ2VycywgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGluc2VydChpc0NtZCwgbmV3RWZmZWN0LCBlZmZlY3RzKVxue1xuXHRlZmZlY3RzID0gZWZmZWN0cyB8fCB7XG5cdFx0Y21kczogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuTmlsLFxuXHRcdHN1YnM6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbFxuXHR9O1xuXHRpZiAoaXNDbWQpXG5cdHtcblx0XHRlZmZlY3RzLmNtZHMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5jbWRzKTtcblx0XHRyZXR1cm4gZWZmZWN0cztcblx0fVxuXHRlZmZlY3RzLnN1YnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5Db25zKG5ld0VmZmVjdCwgZWZmZWN0cy5zdWJzKTtcblx0cmV0dXJuIGVmZmVjdHM7XG59XG5cblxuLy8gUE9SVFNcblxuZnVuY3Rpb24gY2hlY2tQb3J0TmFtZShuYW1lKVxue1xuXHRpZiAobmFtZSBpbiBlZmZlY3RNYW5hZ2Vycylcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnQgbmFtZWQgYCcgKyBuYW1lICsgJ2AsIGJ1dCB5b3VyIHByb2dyYW0gaGFzIG11bHRpcGxlLicpO1xuXHR9XG59XG5cblxuLy8gT1VUR09JTkcgUE9SVFNcblxuZnVuY3Rpb24gb3V0Z29pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0Y2hlY2tQb3J0TmFtZShuYW1lKTtcblx0ZWZmZWN0TWFuYWdlcnNbbmFtZV0gPSB7XG5cdFx0dGFnOiAnY21kJyxcblx0XHRjbWRNYXA6IG91dGdvaW5nUG9ydE1hcCxcblx0XHRjb252ZXJ0ZXI6IGNvbnZlcnRlcixcblx0XHRpc0ZvcmVpZ246IHRydWVcblx0fTtcblx0cmV0dXJuIGxlYWYobmFtZSk7XG59XG5cbnZhciBvdXRnb2luZ1BvcnRNYXAgPSBGMihmdW5jdGlvbiBjbWRNYXAodGFnZ2VyLCB2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWU7XG59KTtcblxuZnVuY3Rpb24gc2V0dXBPdXRnb2luZ1BvcnQobmFtZSlcbntcblx0dmFyIHN1YnMgPSBbXTtcblx0dmFyIGNvbnZlcnRlciA9IGVmZmVjdE1hbmFnZXJzW25hbWVdLmNvbnZlcnRlcjtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKG51bGwpO1xuXG5cdGZ1bmN0aW9uIG9uRWZmZWN0cyhyb3V0ZXIsIGNtZExpc3QsIHN0YXRlKVxuXHR7XG5cdFx0d2hpbGUgKGNtZExpc3QuY3RvciAhPT0gJ1tdJylcblx0XHR7XG5cdFx0XHR2YXIgdmFsdWUgPSBjb252ZXJ0ZXIoY21kTGlzdC5fMCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHN1YnNbaV0odmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0Y21kTGlzdCA9IGNtZExpc3QuXzE7XG5cdFx0fVxuXHRcdHJldHVybiBpbml0O1xuXHR9XG5cblx0ZWZmZWN0TWFuYWdlcnNbbmFtZV0uaW5pdCA9IGluaXQ7XG5cdGVmZmVjdE1hbmFnZXJzW25hbWVdLm9uRWZmZWN0cyA9IEYzKG9uRWZmZWN0cyk7XG5cblx0Ly8gUFVCTElDIEFQSVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdHN1YnMucHVzaChjYWxsYmFjayk7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpbmRleCA9IHN1YnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYgKGluZGV4ID49IDApXG5cdFx0e1xuXHRcdFx0c3Vicy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdFx0dW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG5cdH07XG59XG5cblxuLy8gSU5DT01JTkcgUE9SVFNcblxuZnVuY3Rpb24gaW5jb21pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0Y2hlY2tQb3J0TmFtZShuYW1lKTtcblx0ZWZmZWN0TWFuYWdlcnNbbmFtZV0gPSB7XG5cdFx0dGFnOiAnc3ViJyxcblx0XHRzdWJNYXA6IGluY29taW5nUG9ydE1hcCxcblx0XHRjb252ZXJ0ZXI6IGNvbnZlcnRlcixcblx0XHRpc0ZvcmVpZ246IHRydWVcblx0fTtcblx0cmV0dXJuIGxlYWYobmFtZSk7XG59XG5cbnZhciBpbmNvbWluZ1BvcnRNYXAgPSBGMihmdW5jdGlvbiBzdWJNYXAodGFnZ2VyLCBmaW5hbFRhZ2dlcilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKVxuXHR7XG5cdFx0cmV0dXJuIHRhZ2dlcihmaW5hbFRhZ2dlcih2YWx1ZSkpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHNldHVwSW5jb21pbmdQb3J0KG5hbWUsIGNhbGxiYWNrKVxue1xuXHR2YXIgc2VudEJlZm9yZUluaXQgPSBbXTtcblx0dmFyIHN1YnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWw7XG5cdHZhciBjb252ZXJ0ZXIgPSBlZmZlY3RNYW5hZ2Vyc1tuYW1lXS5jb252ZXJ0ZXI7XG5cdHZhciBjdXJyZW50T25FZmZlY3RzID0gcHJlSW5pdE9uRWZmZWN0cztcblx0dmFyIGN1cnJlbnRTZW5kID0gcHJlSW5pdFNlbmQ7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChudWxsKTtcblxuXHRmdW5jdGlvbiBwcmVJbml0T25FZmZlY3RzKHJvdXRlciwgc3ViTGlzdCwgc3RhdGUpXG5cdHtcblx0XHR2YXIgcG9zdEluaXRSZXN1bHQgPSBwb3N0SW5pdE9uRWZmZWN0cyhyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKTtcblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzZW50QmVmb3JlSW5pdC5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRwb3N0SW5pdFNlbmQoc2VudEJlZm9yZUluaXRbaV0pO1xuXHRcdH1cblxuXHRcdHNlbnRCZWZvcmVJbml0ID0gbnVsbDsgLy8gdG8gcmVsZWFzZSBvYmplY3RzIGhlbGQgaW4gcXVldWVcblx0XHRjdXJyZW50U2VuZCA9IHBvc3RJbml0U2VuZDtcblx0XHRjdXJyZW50T25FZmZlY3RzID0gcG9zdEluaXRPbkVmZmVjdHM7XG5cdFx0cmV0dXJuIHBvc3RJbml0UmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9zdEluaXRPbkVmZmVjdHMocm91dGVyLCBzdWJMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHN1YnMgPSBzdWJMaXN0O1xuXHRcdHJldHVybiBpbml0O1xuXHR9XG5cblx0ZnVuY3Rpb24gb25FZmZlY3RzKHJvdXRlciwgc3ViTGlzdCwgc3RhdGUpXG5cdHtcblx0XHRyZXR1cm4gY3VycmVudE9uRWZmZWN0cyhyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKTtcblx0fVxuXG5cdGVmZmVjdE1hbmFnZXJzW25hbWVdLmluaXQgPSBpbml0O1xuXHRlZmZlY3RNYW5hZ2Vyc1tuYW1lXS5vbkVmZmVjdHMgPSBGMyhvbkVmZmVjdHMpO1xuXG5cdC8vIFBVQkxJQyBBUElcblxuXHRmdW5jdGlvbiBwcmVJbml0U2VuZCh2YWx1ZSlcblx0e1xuXHRcdHNlbnRCZWZvcmVJbml0LnB1c2godmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9zdEluaXRTZW5kKGluY29taW5nVmFsdWUpXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gQTIoX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUsIGNvbnZlcnRlciwgaW5jb21pbmdWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnRXJyJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBzZW5kIGFuIHVuZXhwZWN0ZWQgdHlwZSBvZiB2YWx1ZSB0aHJvdWdoIHBvcnQgYCcgKyBuYW1lICsgJ2A6XFxuJyArIHJlc3VsdC5fMCk7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbHVlID0gcmVzdWx0Ll8wO1xuXHRcdHZhciB0ZW1wID0gc3Vicztcblx0XHR3aGlsZSAodGVtcC5jdG9yICE9PSAnW10nKVxuXHRcdHtcblx0XHRcdGNhbGxiYWNrKHRlbXAuXzAodmFsdWUpKTtcblx0XHRcdHRlbXAgPSB0ZW1wLl8xO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNlbmQoaW5jb21pbmdWYWx1ZSlcblx0e1xuXHRcdGN1cnJlbnRTZW5kKGluY29taW5nVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHsgc2VuZDogc2VuZCB9O1xufVxuXG5yZXR1cm4ge1xuXHQvLyByb3V0ZXJzXG5cdHNlbmRUb0FwcDogRjIoc2VuZFRvQXBwKSxcblx0c2VuZFRvU2VsZjogRjIoc2VuZFRvU2VsZiksXG5cblx0Ly8gZ2xvYmFsIHNldHVwXG5cdG1haW5Ub1Byb2dyYW06IG1haW5Ub1Byb2dyYW0sXG5cdGVmZmVjdE1hbmFnZXJzOiBlZmZlY3RNYW5hZ2Vycyxcblx0b3V0Z29pbmdQb3J0OiBvdXRnb2luZ1BvcnQsXG5cdGluY29taW5nUG9ydDogaW5jb21pbmdQb3J0LFxuXHRhZGRQdWJsaWNNb2R1bGU6IGFkZFB1YmxpY01vZHVsZSxcblxuXHQvLyBlZmZlY3QgYmFnc1xuXHRsZWFmOiBsZWFmLFxuXHRiYXRjaDogYmF0Y2gsXG5cdG1hcDogRjIobWFwKVxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kaGFjayA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9TZWxmID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLnNlbmRUb1NlbGY7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLnNlbmRUb0FwcDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRQcm9ncmFtID0ge2N0b3I6ICdQcm9ncmFtJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kVGFzayA9IHtjdG9yOiAnVGFzayd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJFByb2Nlc3NJZCA9IHtjdG9yOiAnUHJvY2Vzc0lkJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kUm91dGVyID0ge2N0b3I6ICdSb3V0ZXInfTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRiYXRjaCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5iYXRjaDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZSA9IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRiYXRjaChcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFtdKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kX29wcyA9IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZF9vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWRfb3BzWychJ10gPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBjb21tYW5kcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRfMDogbW9kZWwsXG5cdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJGJhdGNoKGNvbW1hbmRzKVxuXHRcdH07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRDbWQgPSB7Y3RvcjogJ0NtZCd9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JHRvTWF5YmUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdHZhciBfcDAgPSByZXN1bHQ7XG5cdGlmIChfcDAuY3RvciA9PT0gJ09rJykge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KF9wMC5fMCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JHdpdGhEZWZhdWx0ID0gRjIoXG5cdGZ1bmN0aW9uIChkZWYsIHJlc3VsdCkge1xuXHRcdHZhciBfcDEgPSByZXN1bHQ7XG5cdFx0aWYgKF9wMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRyZXR1cm4gX3AxLl8wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVyciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ0VycicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JGFuZFRoZW4gPSBGMihcblx0ZnVuY3Rpb24gKHJlc3VsdCwgY2FsbGJhY2spIHtcblx0XHR2YXIgX3AyID0gcmVzdWx0O1xuXHRcdGlmIChfcDIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKF9wMi5fMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wMi5fMCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2sgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdPaycsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgcmEpIHtcblx0XHR2YXIgX3AzID0gcmE7XG5cdFx0aWYgKF9wMy5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKFxuXHRcdFx0XHRmdW5jKF9wMy5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDMuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JG1hcDIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIHJhLCByYikge1xuXHRcdHZhciBfcDQgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogcmEsIF8xOiByYn07XG5cdFx0aWYgKF9wNC5fMC5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRpZiAoX3A0Ll8xLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRBMihmdW5jLCBfcDQuXzAuXzAsIF9wNC5fMS5fMCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A0Ll8xLl8wKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A0Ll8wLl8wKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRtYXAzID0gRjQoXG5cdGZ1bmN0aW9uIChmdW5jLCByYSwgcmIsIHJjKSB7XG5cdFx0dmFyIF9wNSA9IHtjdG9yOiAnX1R1cGxlMycsIF8wOiByYSwgXzE6IHJiLCBfMjogcmN9O1xuXHRcdGlmIChfcDUuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0aWYgKF9wNS5fMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdGlmIChfcDUuXzIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2soXG5cdFx0XHRcdFx0XHRBMyhmdW5jLCBfcDUuXzAuXzAsIF9wNS5fMS5fMCwgX3A1Ll8yLl8wKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8yLl8wKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8xLl8wKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8wLl8wKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRtYXA0ID0gRjUoXG5cdGZ1bmN0aW9uIChmdW5jLCByYSwgcmIsIHJjLCByZCkge1xuXHRcdHZhciBfcDYgPSB7Y3RvcjogJ19UdXBsZTQnLCBfMDogcmEsIF8xOiByYiwgXzI6IHJjLCBfMzogcmR9O1xuXHRcdGlmIChfcDYuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0aWYgKF9wNi5fMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdGlmIChfcDYuXzIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdGlmIChfcDYuXzMuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRcdFx0QTQoZnVuYywgX3A2Ll8wLl8wLCBfcDYuXzEuXzAsIF9wNi5fMi5fMCwgX3A2Ll8zLl8wKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMy5fMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMi5fMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMS5fMCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMC5fMCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRSZXN1bHQkbWFwNSA9IEY2KFxuXHRmdW5jdGlvbiAoZnVuYywgcmEsIHJiLCByYywgcmQsIHJlKSB7XG5cdFx0dmFyIF9wNyA9IHtjdG9yOiAnX1R1cGxlNScsIF8wOiByYSwgXzE6IHJiLCBfMjogcmMsIF8zOiByZCwgXzQ6IHJlfTtcblx0XHRpZiAoX3A3Ll8wLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdGlmIChfcDcuXzEuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRpZiAoX3A3Ll8yLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRpZiAoX3A3Ll8zLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRcdGlmIChfcDcuXzQuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKFxuXHRcdFx0XHRcdFx0XHRcdEE1KGZ1bmMsIF9wNy5fMC5fMCwgX3A3Ll8xLl8wLCBfcDcuXzIuXzAsIF9wNy5fMy5fMCwgX3A3Ll80Ll8wKSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzQuXzApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzMuXzApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzIuXzApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzEuXzApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzAuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JGZvcm1hdEVycm9yID0gRjIoXG5cdGZ1bmN0aW9uIChmLCByZXN1bHQpIHtcblx0XHR2YXIgX3A4ID0gcmVzdWx0O1xuXHRcdGlmIChfcDguY3RvciA9PT0gJ09rJykge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhfcDguXzApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcblx0XHRcdFx0ZihfcDguXzApKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRmcm9tTWF5YmUgPSBGMihcblx0ZnVuY3Rpb24gKGVyciwgbWF5YmUpIHtcblx0XHR2YXIgX3A5ID0gbWF5YmU7XG5cdFx0aWYgKF9wOS5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2soX3A5Ll8wKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoZXJyKTtcblx0XHR9XG5cdH0pO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRvbkVycm9yID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5vbkVycm9yO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuYW5kVGhlbjtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJHNwYXduQ21kID0gRjIoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIF9wMCkge1xuXHRcdHZhciBfcDEgPSBfcDA7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3Bhd24oXG5cdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRfcDEuXzAsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJHNlbmRUb0FwcChyb3V0ZXIpKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skZmFpbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuZmFpbDtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcEVycm9yID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB0YXNrKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRvbkVycm9yLFxuXHRcdFx0dGFzayxcblx0XHRcdGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skZmFpbChcblx0XHRcdFx0XHRmKGVycikpO1xuXHRcdFx0fSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZDtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHR0YXNrQSxcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0ZnVuYyhhKSk7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCB0YXNrQSwgdGFza0IpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHR0YXNrQSxcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0dGFza0IsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdEEyKGZ1bmMsIGEsIGIpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDMgPSBGNChcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHR0YXNrQSxcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0dGFza0IsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0XHR0YXNrQyxcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMoZnVuYywgYSwgYiwgYykpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDQgPSBGNShcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MsIHRhc2tEKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0dGFza0EsXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdHRhc2tCLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRcdFx0dGFza0MsXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFza0QsXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEE0KGZ1bmMsIGEsIGIsIGMsIGQpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDUgPSBGNihcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MsIHRhc2tELCB0YXNrRSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdHRhc2tBLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHR0YXNrQixcblx0XHRcdFx0XHRmdW5jdGlvbiAoYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRcdHRhc2tDLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRcdFx0XHRcdHRhc2tELFxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXNrRSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTUoZnVuYywgYSwgYiwgYywgZCwgZSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kTWFwID0gRjIoXG5cdGZ1bmN0aW9uICh0YXNrRnVuYywgdGFza1ZhbHVlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0dGFza0Z1bmMsXG5cdFx0XHRmdW5jdGlvbiAoZnVuYykge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdHRhc2tWYWx1ZSxcblx0XHRcdFx0XHRmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdGZ1bmModmFsdWUpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJHNlcXVlbmNlID0gZnVuY3Rpb24gKHRhc2tzKSB7XG5cdHZhciBfcDIgPSB0YXNrcztcblx0aWYgKF9wMi5jdG9yID09PSAnW10nKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0W10pKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG1hcDIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIHgsIHkpO1xuXHRcdFx0XHR9KSxcblx0XHRcdF9wMi5fMCxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc2VxdWVuY2UoX3AyLl8xKSk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRvbkVmZmVjdHMgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgY29tbWFuZHMsIHN0YXRlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsXG5cdFx0XHRmdW5jdGlvbiAoX3AzKSB7XG5cdFx0XHRcdHJldHVybiB7Y3RvcjogJ19UdXBsZTAnfTtcblx0XHRcdH0sXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJHNlcXVlbmNlKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJHNwYXduQ21kKHJvdXRlciksXG5cdFx0XHRcdFx0Y29tbWFuZHMpKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skdG9NYXliZSA9IGZ1bmN0aW9uICh0YXNrKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG9uRXJyb3IsXG5cdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QsIHRhc2spLFxuXHRcdGZ1bmN0aW9uIChfcDQpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZyk7XG5cdFx0fSk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skZnJvbU1heWJlID0gRjIoXG5cdGZ1bmN0aW9uICgkZGVmYXVsdCwgbWF5YmUpIHtcblx0XHR2YXIgX3A1ID0gbWF5YmU7XG5cdFx0aWYgKF9wNS5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoX3A1Ll8wKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skZmFpbCgkZGVmYXVsdCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJHRvUmVzdWx0ID0gZnVuY3Rpb24gKHRhc2spIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skb25FcnJvcixcblx0XHRBMihfZWxtX2xhbmckY29yZSRUYXNrJG1hcCwgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rLCB0YXNrKSxcblx0XHRmdW5jdGlvbiAobXNnKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKG1zZykpO1xuXHRcdH0pO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJGZyb21SZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdHZhciBfcDYgPSByZXN1bHQ7XG5cdGlmIChfcDYuY3RvciA9PT0gJ09rJykge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoX3A2Ll8wKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRmYWlsKF9wNi5fMCk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRpbml0ID0gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHR7Y3RvcjogJ19UdXBsZTAnfSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKF9wOSwgX3A4LCBfcDcpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJGNvbW1hbmQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubGVhZignVGFzaycpO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skVCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ1QnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skcGVyZm9ybSA9IEYzKFxuXHRmdW5jdGlvbiAob25GYWlsLCBvblN1Y2Nlc3MsIHRhc2spIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRjb21tYW5kKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRUKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG9uRXJyb3IsXG5cdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsIG9uU3VjY2VzcywgdGFzayksXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdG9uRmFpbCh4KSk7XG5cdFx0XHRcdFx0fSkpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRjbWRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKHRhZ2dlciwgX3AxMCkge1xuXHRcdHZhciBfcDExID0gX3AxMDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRUKFxuXHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsIHRhZ2dlciwgX3AxMS5fMCkpO1xuXHR9KTtcbl9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5lZmZlY3RNYW5hZ2Vyc1snVGFzayddID0ge3BrZzogJ2VsbS1sYW5nL2NvcmUnLCBpbml0OiBfZWxtX2xhbmckY29yZSRUYXNrJGluaXQsIG9uRWZmZWN0czogX2VsbV9sYW5nJGNvcmUkVGFzayRvbkVmZmVjdHMsIG9uU2VsZk1zZzogX2VsbV9sYW5nJGNvcmUkVGFzayRvblNlbGZNc2csIHRhZzogJ2NtZCcsIGNtZE1hcDogX2VsbV9sYW5nJGNvcmUkVGFzayRjbWRNYXB9O1xuXG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBsb2codGFnLCB2YWx1ZSlcbntcblx0dmFyIG1zZyA9IHRhZyArICc6ICcgKyBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMudG9TdHJpbmcodmFsdWUpO1xuXHR2YXIgcHJvY2VzcyA9IHByb2Nlc3MgfHwge307XG5cdGlmIChwcm9jZXNzLnN0ZG91dClcblx0e1xuXHRcdHByb2Nlc3Muc3Rkb3V0LndyaXRlKG1zZyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Y29uc29sZS5sb2cobXNnKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyYXNoKG1lc3NhZ2UpXG57XG5cdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxucmV0dXJuIHtcblx0Y3Jhc2g6IGNyYXNoLFxuXHRsb2c6IEYyKGxvZylcbn07XG5cbn0oKTtcbi8vaW1wb3J0IE1heWJlLCBOYXRpdmUuTGlzdCwgTmF0aXZlLlV0aWxzLCBSZXN1bHQgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gaXNFbXB0eShzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gY29ucyhjaHIsIHN0cilcbntcblx0cmV0dXJuIGNociArIHN0cjtcbn1cbmZ1bmN0aW9uIHVuY29ucyhzdHIpXG57XG5cdHZhciBoZCA9IHN0clswXTtcblx0aWYgKGhkKVxuXHR7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMihfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKGhkKSwgc3RyLnNsaWNlKDEpKSk7XG5cdH1cblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5mdW5jdGlvbiBhcHBlbmQoYSwgYilcbntcblx0cmV0dXJuIGEgKyBiO1xufVxuZnVuY3Rpb24gY29uY2F0KHN0cnMpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC50b0FycmF5KHN0cnMpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gbGVuZ3RoKHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGg7XG59XG5mdW5jdGlvbiBtYXAoZiwgc3RyKVxue1xuXHR2YXIgb3V0ID0gc3RyLnNwbGl0KCcnKTtcblx0Zm9yICh2YXIgaSA9IG91dC5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0b3V0W2ldID0gZihfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKG91dFtpXSkpO1xuXHR9XG5cdHJldHVybiBvdXQuam9pbignJyk7XG59XG5mdW5jdGlvbiBmaWx0ZXIocHJlZCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5tYXAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocikuZmlsdGVyKHByZWQpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gcmV2ZXJzZShzdHIpXG57XG5cdHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGZvbGRsKGYsIGIsIHN0cilcbntcblx0dmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG5cdHtcblx0XHRiID0gQTIoZiwgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihzdHJbaV0pLCBiKTtcblx0fVxuXHRyZXR1cm4gYjtcbn1cbmZ1bmN0aW9uIGZvbGRyKGYsIGIsIHN0cilcbntcblx0Zm9yICh2YXIgaSA9IHN0ci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0YiA9IEEyKGYsIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoc3RyW2ldKSwgYik7XG5cdH1cblx0cmV0dXJuIGI7XG59XG5mdW5jdGlvbiBzcGxpdChzZXAsIHN0cilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShzdHIuc3BsaXQoc2VwKSk7XG59XG5mdW5jdGlvbiBqb2luKHNlcCwgc3Rycylcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnRvQXJyYXkoc3Rycykuam9pbihzZXApO1xufVxuZnVuY3Rpb24gcmVwZWF0KG4sIHN0cilcbntcblx0dmFyIHJlc3VsdCA9ICcnO1xuXHR3aGlsZSAobiA+IDApXG5cdHtcblx0XHRpZiAobiAmIDEpXG5cdFx0e1xuXHRcdFx0cmVzdWx0ICs9IHN0cjtcblx0XHR9XG5cdFx0biA+Pj0gMSwgc3RyICs9IHN0cjtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuZnVuY3Rpb24gbGVmdChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/ICcnIDogc3RyLnNsaWNlKDAsIG4pO1xufVxuZnVuY3Rpb24gcmlnaHQobiwgc3RyKVxue1xuXHRyZXR1cm4gbiA8IDEgPyAnJyA6IHN0ci5zbGljZSgtbik7XG59XG5mdW5jdGlvbiBkcm9wTGVmdChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/IHN0ciA6IHN0ci5zbGljZShuKTtcbn1cbmZ1bmN0aW9uIGRyb3BSaWdodChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/IHN0ciA6IHN0ci5zbGljZSgwLCAtbik7XG59XG5mdW5jdGlvbiBwYWQobiwgY2hyLCBzdHIpXG57XG5cdHZhciBoYWxmID0gKG4gLSBzdHIubGVuZ3RoKSAvIDI7XG5cdHJldHVybiByZXBlYXQoTWF0aC5jZWlsKGhhbGYpLCBjaHIpICsgc3RyICsgcmVwZWF0KGhhbGYgfCAwLCBjaHIpO1xufVxuZnVuY3Rpb24gcGFkUmlnaHQobiwgY2hyLCBzdHIpXG57XG5cdHJldHVybiBzdHIgKyByZXBlYXQobiAtIHN0ci5sZW5ndGgsIGNocik7XG59XG5mdW5jdGlvbiBwYWRMZWZ0KG4sIGNociwgc3RyKVxue1xuXHRyZXR1cm4gcmVwZWF0KG4gLSBzdHIubGVuZ3RoLCBjaHIpICsgc3RyO1xufVxuXG5mdW5jdGlvbiB0cmltKHN0cilcbntcblx0cmV0dXJuIHN0ci50cmltKCk7XG59XG5mdW5jdGlvbiB0cmltTGVmdChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCAnJyk7XG59XG5mdW5jdGlvbiB0cmltUmlnaHQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgJycpO1xufVxuXG5mdW5jdGlvbiB3b3JkcyhzdHIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoc3RyLnRyaW0oKS5zcGxpdCgvXFxzKy9nKSk7XG59XG5mdW5jdGlvbiBsaW5lcyhzdHIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoc3RyLnNwbGl0KC9cXHJcXG58XFxyfFxcbi9nKSk7XG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5mdW5jdGlvbiB0b0xvd2VyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBhbnkocHJlZCwgc3RyKVxue1xuXHRmb3IgKHZhciBpID0gc3RyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRpZiAocHJlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKHN0cltpXSkpKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhbGwocHJlZCwgc3RyKVxue1xuXHRmb3IgKHZhciBpID0gc3RyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRpZiAoIXByZWQoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihzdHJbaV0pKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPiAtMTtcbn1cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIuaW5kZXhPZihzdWIpID09PSAwO1xufVxuZnVuY3Rpb24gZW5kc1dpdGgoc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoID49IHN1Yi5sZW5ndGggJiZcblx0XHRzdHIubGFzdEluZGV4T2Yoc3ViKSA9PT0gc3RyLmxlbmd0aCAtIHN1Yi5sZW5ndGg7XG59XG5mdW5jdGlvbiBpbmRleGVzKHN1Yiwgc3RyKVxue1xuXHR2YXIgc3ViTGVuID0gc3ViLmxlbmd0aDtcblx0XG5cdGlmIChzdWJMZW4gPCAxKVxuXHR7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbDtcblx0fVxuXG5cdHZhciBpID0gMDtcblx0dmFyIGlzID0gW107XG5cblx0d2hpbGUgKChpID0gc3RyLmluZGV4T2Yoc3ViLCBpKSkgPiAtMSlcblx0e1xuXHRcdGlzLnB1c2goaSk7XG5cdFx0aSA9IGkgKyBzdWJMZW47XG5cdH1cdFxuXHRcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShpcyk7XG59XG5cbmZ1bmN0aW9uIHRvSW50KHMpXG57XG5cdHZhciBsZW4gPSBzLmxlbmd0aDtcblx0aWYgKGxlbiA9PT0gMClcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKFwiY291bGQgbm90IGNvbnZlcnQgc3RyaW5nICdcIiArIHMgKyBcIicgdG8gYW4gSW50XCIgKTtcblx0fVxuXHR2YXIgc3RhcnQgPSAwO1xuXHRpZiAoc1swXSA9PT0gJy0nKVxuXHR7XG5cdFx0aWYgKGxlbiA9PT0gMSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcImNvdWxkIG5vdCBjb252ZXJ0IHN0cmluZyAnXCIgKyBzICsgXCInIHRvIGFuIEludFwiICk7XG5cdFx0fVxuXHRcdHN0YXJ0ID0gMTtcblx0fVxuXHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW47ICsraSlcblx0e1xuXHRcdHZhciBjID0gc1tpXTtcblx0XHRpZiAoYyA8ICcwJyB8fCAnOScgPCBjKVxuXHRcdHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKFwiY291bGQgbm90IGNvbnZlcnQgc3RyaW5nICdcIiArIHMgKyBcIicgdG8gYW4gSW50XCIgKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhwYXJzZUludChzLCAxMCkpO1xufVxuXG5mdW5jdGlvbiB0b0Zsb2F0KHMpXG57XG5cdHZhciBsZW4gPSBzLmxlbmd0aDtcblx0aWYgKGxlbiA9PT0gMClcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKFwiY291bGQgbm90IGNvbnZlcnQgc3RyaW5nICdcIiArIHMgKyBcIicgdG8gYSBGbG9hdFwiICk7XG5cdH1cblx0dmFyIHN0YXJ0ID0gMDtcblx0aWYgKHNbMF0gPT09ICctJylcblx0e1xuXHRcdGlmIChsZW4gPT09IDEpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoXCJjb3VsZCBub3QgY29udmVydCBzdHJpbmcgJ1wiICsgcyArIFwiJyB0byBhIEZsb2F0XCIgKTtcblx0XHR9XG5cdFx0c3RhcnQgPSAxO1xuXHR9XG5cdHZhciBkb3RDb3VudCA9IDA7XG5cdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGxlbjsgKytpKVxuXHR7XG5cdFx0dmFyIGMgPSBzW2ldO1xuXHRcdGlmICgnMCcgPD0gYyAmJiBjIDw9ICc5Jylcblx0XHR7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGMgPT09ICcuJylcblx0XHR7XG5cdFx0XHRkb3RDb3VudCArPSAxO1xuXHRcdFx0aWYgKGRvdENvdW50IDw9IDEpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcImNvdWxkIG5vdCBjb252ZXJ0IHN0cmluZyAnXCIgKyBzICsgXCInIHRvIGEgRmxvYXRcIiApO1xuXHR9XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2socGFyc2VGbG9hdChzKSk7XG59XG5cbmZ1bmN0aW9uIHRvTGlzdChzdHIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoc3RyLnNwbGl0KCcnKS5tYXAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocikpO1xufVxuZnVuY3Rpb24gZnJvbUxpc3QoY2hhcnMpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC50b0FycmF5KGNoYXJzKS5qb2luKCcnKTtcbn1cblxucmV0dXJuIHtcblx0aXNFbXB0eTogaXNFbXB0eSxcblx0Y29uczogRjIoY29ucyksXG5cdHVuY29uczogdW5jb25zLFxuXHRhcHBlbmQ6IEYyKGFwcGVuZCksXG5cdGNvbmNhdDogY29uY2F0LFxuXHRsZW5ndGg6IGxlbmd0aCxcblx0bWFwOiBGMihtYXApLFxuXHRmaWx0ZXI6IEYyKGZpbHRlciksXG5cdHJldmVyc2U6IHJldmVyc2UsXG5cdGZvbGRsOiBGMyhmb2xkbCksXG5cdGZvbGRyOiBGMyhmb2xkciksXG5cblx0c3BsaXQ6IEYyKHNwbGl0KSxcblx0am9pbjogRjIoam9pbiksXG5cdHJlcGVhdDogRjIocmVwZWF0KSxcblxuXHRzbGljZTogRjMoc2xpY2UpLFxuXHRsZWZ0OiBGMihsZWZ0KSxcblx0cmlnaHQ6IEYyKHJpZ2h0KSxcblx0ZHJvcExlZnQ6IEYyKGRyb3BMZWZ0KSxcblx0ZHJvcFJpZ2h0OiBGMihkcm9wUmlnaHQpLFxuXG5cdHBhZDogRjMocGFkKSxcblx0cGFkTGVmdDogRjMocGFkTGVmdCksXG5cdHBhZFJpZ2h0OiBGMyhwYWRSaWdodCksXG5cblx0dHJpbTogdHJpbSxcblx0dHJpbUxlZnQ6IHRyaW1MZWZ0LFxuXHR0cmltUmlnaHQ6IHRyaW1SaWdodCxcblxuXHR3b3Jkczogd29yZHMsXG5cdGxpbmVzOiBsaW5lcyxcblxuXHR0b1VwcGVyOiB0b1VwcGVyLFxuXHR0b0xvd2VyOiB0b0xvd2VyLFxuXG5cdGFueTogRjIoYW55KSxcblx0YWxsOiBGMihhbGwpLFxuXG5cdGNvbnRhaW5zOiBGMihjb250YWlucyksXG5cdHN0YXJ0c1dpdGg6IEYyKHN0YXJ0c1dpdGgpLFxuXHRlbmRzV2l0aDogRjIoZW5kc1dpdGgpLFxuXHRpbmRleGVzOiBGMihpbmRleGVzKSxcblxuXHR0b0ludDogdG9JbnQsXG5cdHRvRmxvYXQ6IHRvRmxvYXQsXG5cdHRvTGlzdDogdG9MaXN0LFxuXHRmcm9tTGlzdDogZnJvbUxpc3Rcbn07XG5cbn0oKTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRmcm9tTGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZnJvbUxpc3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvTGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudG9MaXN0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0b0Zsb2F0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy50b0Zsb2F0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0b0ludCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudG9JbnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGluZGljZXMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmluZGV4ZXM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGluZGV4ZXMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmluZGV4ZXM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGVuZHNXaXRoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5lbmRzV2l0aDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckc3RhcnRzV2l0aCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuc3RhcnRzV2l0aDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckY29udGFpbnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmNvbnRhaW5zO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRhbGwgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmFsbDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckYW55ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5hbnk7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvTG93ZXIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRvTG93ZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvVXBwZXIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRvVXBwZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGxpbmVzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5saW5lcztcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckd29yZHMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLndvcmRzO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0cmltUmlnaHQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRyaW1SaWdodDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckdHJpbUxlZnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRyaW1MZWZ0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0cmltID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy50cmltO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRwYWRSaWdodCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcucGFkUmlnaHQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHBhZExlZnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnBhZExlZnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHBhZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcucGFkO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRkcm9wUmlnaHQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmRyb3BSaWdodDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckZHJvcExlZnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmRyb3BMZWZ0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRyaWdodCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcucmlnaHQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGxlZnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmxlZnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHNsaWNlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5zbGljZTtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckcmVwZWF0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5yZXBlYXQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGpvaW4gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmpvaW47XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHNwbGl0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5zcGxpdDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckZm9sZHIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmZvbGRyO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRmb2xkbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZm9sZGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHJldmVyc2UgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnJldmVyc2U7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGZpbHRlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZmlsdGVyO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLm1hcDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckbGVuZ3RoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5sZW5ndGg7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGNvbmNhdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuY29uY2F0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRhcHBlbmQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmFwcGVuZDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckdW5jb25zID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy51bmNvbnM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGNvbnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmNvbnM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGZyb21DaGFyID0gZnVuY3Rpb24gKCRjaGFyKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRTdHJpbmckY29ucywgJGNoYXIsICcnKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGlzRW1wdHkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmlzRW1wdHk7XG5cbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmLCBhY2MsIHQpIHtcblx0XHRmb2xkcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9wMCA9IHQ7XG5cdFx0XHRpZiAoX3AwLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF92MSA9IGYsXG5cdFx0XHRcdFx0X3YyID0gQTMoXG5cdFx0XHRcdFx0Zixcblx0XHRcdFx0XHRfcDAuXzEsXG5cdFx0XHRcdFx0X3AwLl8yLFxuXHRcdFx0XHRcdEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIsIGYsIGFjYywgX3AwLl80KSksXG5cdFx0XHRcdFx0X3YzID0gX3AwLl8zO1xuXHRcdFx0XHRmID0gX3YxO1xuXHRcdFx0XHRhY2MgPSBfdjI7XG5cdFx0XHRcdHQgPSBfdjM7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRrZXlzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwga2V5TGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIGtleSwga2V5TGlzdCk7XG5cdFx0XHR9KSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXSksXG5cdFx0ZGljdCk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkdmFsdWVzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgdmFsdWVMaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgdmFsdWUsIHZhbHVlTGlzdCk7XG5cdFx0XHR9KSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXSksXG5cdFx0ZGljdCk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkdG9MaXN0ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgbGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sXG5cdFx0XHRcdFx0e2N0b3I6ICdfVHVwbGUyJywgXzA6IGtleSwgXzE6IHZhbHVlfSxcblx0XHRcdFx0XHRsaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtdKSxcblx0XHRkaWN0KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgYWNjLCBkaWN0KSB7XG5cdFx0Zm9sZGw6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfcDEgPSBkaWN0O1xuXHRcdFx0aWYgKF9wMS5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjUgPSBmLFxuXHRcdFx0XHRcdF92NiA9IEEzKFxuXHRcdFx0XHRcdGYsXG5cdFx0XHRcdFx0X3AxLl8xLFxuXHRcdFx0XHRcdF9wMS5fMixcblx0XHRcdFx0XHRBMyhfZWxtX2xhbmckY29yZSREaWN0JGZvbGRsLCBmLCBhY2MsIF9wMS5fMykpLFxuXHRcdFx0XHRcdF92NyA9IF9wMS5fNDtcblx0XHRcdFx0ZiA9IF92NTtcblx0XHRcdFx0YWNjID0gX3Y2O1xuXHRcdFx0XHRkaWN0ID0gX3Y3O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkbDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkbWVyZ2UgPSBGNihcblx0ZnVuY3Rpb24gKGxlZnRTdGVwLCBib3RoU3RlcCwgcmlnaHRTdGVwLCBsZWZ0RGljdCwgcmlnaHREaWN0LCBpbml0aWFsUmVzdWx0KSB7XG5cdFx0dmFyIHN0ZXBTdGF0ZSA9IEYzKFxuXHRcdFx0ZnVuY3Rpb24gKHJLZXksIHJWYWx1ZSwgX3AyKSB7XG5cdFx0XHRcdHN0ZXBTdGF0ZTpcblx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHR2YXIgX3AzID0gX3AyO1xuXHRcdFx0XHRcdHZhciBfcDkgPSBfcDMuXzE7XG5cdFx0XHRcdFx0dmFyIF9wOCA9IF9wMy5fMDtcblx0XHRcdFx0XHR2YXIgX3A0ID0gX3A4O1xuXHRcdFx0XHRcdGlmIChfcDQuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRfMDogX3A4LFxuXHRcdFx0XHRcdFx0XHRfMTogQTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIF9wOSlcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfcDcgPSBfcDQuXzE7XG5cdFx0XHRcdFx0XHR2YXIgX3A2ID0gX3A0Ll8wLl8xO1xuXHRcdFx0XHRcdFx0dmFyIF9wNSA9IF9wNC5fMC5fMDtcblx0XHRcdFx0XHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKF9wNSwgcktleSkgPCAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfdjEwID0gcktleSxcblx0XHRcdFx0XHRcdFx0XHRfdjExID0gclZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdF92MTIgPSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBfcDcsXG5cdFx0XHRcdFx0XHRcdFx0XzE6IEEzKGxlZnRTdGVwLCBfcDUsIF9wNiwgX3A5KVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRyS2V5ID0gX3YxMDtcblx0XHRcdFx0XHRcdFx0clZhbHVlID0gX3YxMTtcblx0XHRcdFx0XHRcdFx0X3AyID0gX3YxMjtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgc3RlcFN0YXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoX3A1LCByS2V5KSA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wOCxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBMyhyaWdodFN0ZXAsIHJLZXksIHJWYWx1ZSwgX3A5KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDcsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogQTQoYm90aFN0ZXAsIF9wNSwgX3A2LCByVmFsdWUsIF9wOSlcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR2YXIgX3AxMCA9IEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCxcblx0XHRcdHN0ZXBTdGF0ZSxcblx0XHRcdHtcblx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCR0b0xpc3QobGVmdERpY3QpLFxuXHRcdFx0XHRfMTogaW5pdGlhbFJlc3VsdFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0RGljdCk7XG5cdFx0dmFyIGxlZnRvdmVycyA9IF9wMTAuXzA7XG5cdFx0dmFyIGludGVybWVkaWF0ZVJlc3VsdCA9IF9wMTAuXzE7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoX3AxMSwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0dmFyIF9wMTIgPSBfcDExO1xuXHRcdFx0XHRcdHJldHVybiBBMyhsZWZ0U3RlcCwgX3AxMi5fMCwgX3AxMi5fMSwgcmVzdWx0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRpbnRlcm1lZGlhdGVSZXN1bHQsXG5cdFx0XHRsZWZ0b3ZlcnMpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHJlcG9ydFJlbUJ1ZyA9IEY0KFxuXHRmdW5jdGlvbiAobXNnLCBjLCBsZ290LCByZ290KSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1Zy5jcmFzaChcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFN0cmluZyRjb25jYXQoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnSW50ZXJuYWwgcmVkLWJsYWNrIHRyZWUgaW52YXJpYW50IHZpb2xhdGVkLCBleHBlY3RlZCAnLFxuXHRcdFx0XHRcdFx0bXNnLFxuXHRcdFx0XHRcdFx0JyBhbmQgZ290ICcsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoYyksXG5cdFx0XHRcdFx0XHQnLycsXG5cdFx0XHRcdFx0XHRsZ290LFxuXHRcdFx0XHRcdFx0Jy8nLFxuXHRcdFx0XHRcdFx0cmdvdCxcblx0XHRcdFx0XHRcdCdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgYnVnIHRvIDxodHRwczovL2dpdGh1Yi5jb20vZWxtLWxhbmcvY29yZS9pc3N1ZXM+J1xuXHRcdFx0XHRcdF0pKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkaXNCQmxhY2sgPSBmdW5jdGlvbiAoZGljdCkge1xuXHR2YXIgX3AxMyA9IGRpY3Q7XG5cdF92MTRfMjpcblx0ZG8ge1xuXHRcdGlmIChfcDEzLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRpZiAoX3AxMy5fMC5jdG9yID09PSAnQkJsYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrIF92MTRfMjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKF9wMTMuXzAuY3RvciA9PT0gJ0xCQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWsgX3YxNF8yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSB3aGlsZShmYWxzZSk7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRzaXplSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgZGljdCkge1xuXHRcdHNpemVIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AxNCA9IGRpY3Q7XG5cdFx0XHRpZiAoX3AxNC5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YxNiA9IEEyKF9lbG1fbGFuZyRjb3JlJERpY3Qkc2l6ZUhlbHAsIG4gKyAxLCBfcDE0Ll80KSxcblx0XHRcdFx0XHRfdjE3ID0gX3AxNC5fMztcblx0XHRcdFx0biA9IF92MTY7XG5cdFx0XHRcdGRpY3QgPSBfdjE3O1xuXHRcdFx0XHRjb250aW51ZSBzaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3Qkc2l6ZSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSREaWN0JHNpemVIZWxwLCAwLCBkaWN0KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9wMTUgPSBkaWN0O1xuXHRcdFx0aWYgKF9wMTUuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMTYgPSBBMihfZWxtX2xhbmckY29yZSRCYXNpY3MkY29tcGFyZSwgdGFyZ2V0S2V5LCBfcDE1Ll8xKTtcblx0XHRcdFx0c3dpdGNoIChfcDE2LmN0b3IpIHtcblx0XHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0XHR2YXIgX3YyMCA9IHRhcmdldEtleSxcblx0XHRcdFx0XHRcdFx0X3YyMSA9IF9wMTUuXzM7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSBfdjIwO1xuXHRcdFx0XHRcdFx0ZGljdCA9IF92MjE7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX3AxNS5fMik7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBfdjIyID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHRfdjIzID0gX3AxNS5fNDtcblx0XHRcdFx0XHRcdHRhcmdldEtleSA9IF92MjI7XG5cdFx0XHRcdFx0XHRkaWN0ID0gX3YyMztcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtZW1iZXIgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgZGljdCkge1xuXHRcdHZhciBfcDE3ID0gQTIoX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQsIGtleSwgZGljdCk7XG5cdFx0aWYgKF9wMTcuY3RvciA9PT0gJ0p1c3QnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtYXhXaXRoRGVmYXVsdCA9IEYzKFxuXHRmdW5jdGlvbiAoaywgdiwgcikge1xuXHRcdG1heFdpdGhEZWZhdWx0OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AxOCA9IHI7XG5cdFx0XHRpZiAoX3AxOC5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBrLCBfMTogdn07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YyNiA9IF9wMTguXzEsXG5cdFx0XHRcdFx0X3YyNyA9IF9wMTguXzIsXG5cdFx0XHRcdFx0X3YyOCA9IF9wMTguXzQ7XG5cdFx0XHRcdGsgPSBfdjI2O1xuXHRcdFx0XHR2ID0gX3YyNztcblx0XHRcdFx0ciA9IF92Mjg7XG5cdFx0XHRcdGNvbnRpbnVlIG1heFdpdGhEZWZhdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCROQmxhY2sgPSB7Y3RvcjogJ05CbGFjayd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkQkJsYWNrID0ge2N0b3I6ICdCQmxhY2snfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrID0ge2N0b3I6ICdCbGFjayd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkYmxhY2tpc2ggPSBmdW5jdGlvbiAodCkge1xuXHR2YXIgX3AxOSA9IHQ7XG5cdGlmIChfcDE5LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0dmFyIF9wMjAgPSBfcDE5Ll8wO1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuZXEoX3AyMCwgX2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjaykgfHwgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmVxKF9wMjAsIF9lbG1fbGFuZyRjb3JlJERpY3QkQkJsYWNrKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JFJlZCA9IHtjdG9yOiAnUmVkJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtb3JlQmxhY2sgPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0dmFyIF9wMjEgPSBjb2xvcjtcblx0c3dpdGNoIChfcDIxLmN0b3IpIHtcblx0XHRjYXNlICdCbGFjayc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRCQmxhY2s7XG5cdFx0Y2FzZSAnUmVkJzpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrO1xuXHRcdGNhc2UgJ05CbGFjayc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRSZWQ7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcuY3Jhc2goJ0NhblxcJ3QgbWFrZSBhIGRvdWJsZSBibGFjayBub2RlIG1vcmUgYmxhY2shJyk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRsZXNzQmxhY2sgPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0dmFyIF9wMjIgPSBjb2xvcjtcblx0c3dpdGNoIChfcDIyLmN0b3IpIHtcblx0XHRjYXNlICdCQmxhY2snOlxuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2s7XG5cdFx0Y2FzZSAnQmxhY2snOlxuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUmVkO1xuXHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCROQmxhY2s7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcuY3Jhc2goJ0NhblxcJ3QgbWFrZSBhIG5lZ2F0aXZlIGJsYWNrIG5vZGUgbGVzcyBibGFjayEnKTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JExCQmxhY2sgPSB7Y3RvcjogJ0xCQmxhY2snfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayA9IHtjdG9yOiAnTEJsYWNrJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnUkJFbXB0eV9lbG1fYnVpbHRpbicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSA9IF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRpc0VtcHR5ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5lcShkaWN0LCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4gPSBGNShcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUpIHtcblx0XHRyZXR1cm4ge2N0b3I6ICdSQk5vZGVfZWxtX2J1aWx0aW4nLCBfMDogYSwgXzE6IGIsIF8yOiBjLCBfMzogZCwgXzQ6IGV9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGVuc3VyZUJsYWNrUm9vdCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHZhciBfcDIzID0gZGljdDtcblx0aWYgKChfcDIzLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjMuXzEsIF9wMjMuXzIsIF9wMjMuXzMsIF9wMjMuXzQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaWN0O1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHZhciBfcDI0ID0gZGljdDtcblx0aWYgKF9wMjQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gQTUoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrKF9wMjQuXzApLFxuXHRcdFx0X3AyNC5fMSxcblx0XHRcdF9wMjQuXzIsXG5cdFx0XHRfcDI0Ll8zLFxuXHRcdFx0X3AyNC5fNCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRiYWxhbmNlZFRyZWUgPSBmdW5jdGlvbiAoY29sKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoeGspIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHh2KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHlrKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoeXYpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHprKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHp2KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRsZXNzQmxhY2soY29sKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHlrLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjaywgeGssIHh2LCBhLCBiKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrLCB6aywgenYsIGMsIGQpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fTtcblx0fTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRibGFja2VuID0gZnVuY3Rpb24gKHQpIHtcblx0dmFyIF9wMjUgPSB0O1xuXHRpZiAoX3AyNS5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluKF9lbG1fbGFuZyRjb3JlJERpY3QkTEJsYWNrKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjUuXzEsIF9wMjUuXzIsIF9wMjUuXzMsIF9wMjUuXzQpO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVkZGVuID0gZnVuY3Rpb24gKHQpIHtcblx0dmFyIF9wMjYgPSB0O1xuXHRpZiAoX3AyNi5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0RlYnVnLmNyYXNoKCdjYW5cXCd0IG1ha2UgYSBMZWFmIHJlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX2VsbV9sYW5nJGNvcmUkRGljdCRSZWQsIF9wMjYuXzEsIF9wMjYuXzIsIF9wMjYuXzMsIF9wMjYuXzQpO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZUhlbHAgPSBmdW5jdGlvbiAodHJlZSkge1xuXHR2YXIgX3AyNyA9IHRyZWU7XG5cdF92MzZfNjpcblx0ZG8ge1xuXHRcdF92MzZfNTpcblx0XHRkbyB7XG5cdFx0XHRfdjM2XzQ6XG5cdFx0XHRkbyB7XG5cdFx0XHRcdF92MzZfMzpcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdF92MzZfMjpcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRfdjM2XzE6XG5cdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdF92MzZfMDpcblx0XHRcdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChfcDI3LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoX3AyNy5fMy5fMC5jdG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdSZWQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzMuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzMuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8xO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoKCgoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykgJiYgKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnQmxhY2snKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl80O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8xO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdOQmxhY2snOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKCgoKF9wMjcuXzAuY3RvciA9PT0gJ0JCbGFjaycpICYmIChfcDI3Ll8zLl8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDI3Ll8zLl80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ05CbGFjayc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKCgoX3AyNy5fNC5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzQuXzMuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzQuXzQuXzAuY3RvciA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKF9wMjcuXzMuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChfcDI3Ll80Ll8wLmN0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdSZWQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoKCgoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykgJiYgKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnQmxhY2snKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzMuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmVkJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll8zLl8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fMy5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll8zLl80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fMy5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl81O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKF9wMjcuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmVkJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fNC5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fNC5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl80O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8zLl8zLl8xKShfcDI3Ll8zLl8zLl8yKShfcDI3Ll8zLl8xKShfcDI3Ll8zLl8yKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll8zLl8zLl8zKShfcDI3Ll8zLl8zLl80KShfcDI3Ll8zLl80KShfcDI3Ll80KTtcblx0XHRcdFx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZWRUcmVlKF9wMjcuXzApKF9wMjcuXzMuXzEpKF9wMjcuXzMuXzIpKF9wMjcuXzMuXzQuXzEpKF9wMjcuXzMuXzQuXzIpKF9wMjcuXzEpKF9wMjcuXzIpKF9wMjcuXzMuXzMpKF9wMjcuXzMuXzQuXzMpKF9wMjcuXzMuXzQuXzQpKF9wMjcuXzQpO1xuXHRcdFx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll80Ll8zLl8xKShfcDI3Ll80Ll8zLl8yKShfcDI3Ll80Ll8xKShfcDI3Ll80Ll8yKShfcDI3Ll8zKShfcDI3Ll80Ll8zLl8zKShfcDI3Ll80Ll8zLl80KShfcDI3Ll80Ll80KTtcblx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll80Ll8xKShfcDI3Ll80Ll8yKShfcDI3Ll80Ll80Ll8xKShfcDI3Ll80Ll80Ll8yKShfcDI3Ll8zKShfcDI3Ll80Ll8zKShfcDI3Ll80Ll80Ll8zKShfcDI3Ll80Ll80Ll80KTtcblx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0X3AyNy5fNC5fMy5fMSxcblx0XHRcdFx0X3AyNy5fNC5fMy5fMixcblx0XHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjcuXzEsIF9wMjcuXzIsIF9wMjcuXzMsIF9wMjcuXzQuXzMuXzMpLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRfcDI3Ll80Ll8xLFxuXHRcdFx0XHRcdF9wMjcuXzQuXzIsXG5cdFx0XHRcdFx0X3AyNy5fNC5fMy5fNCxcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JHJlZGRlbihfcDI3Ll80Ll80KSkpO1xuXHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdHJldHVybiBBNShcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdF9wMjcuXzMuXzQuXzEsXG5cdFx0XHRfcDI3Ll8zLl80Ll8yLFxuXHRcdFx0QTUoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0X3AyNy5fMy5fMSxcblx0XHRcdFx0X3AyNy5fMy5fMixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRyZWRkZW4oX3AyNy5fMy5fMyksXG5cdFx0XHRcdF9wMjcuXzMuXzQuXzMpLFxuXHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjcuXzEsIF9wMjcuXzIsIF9wMjcuXzMuXzQuXzQsIF9wMjcuXzQpKTtcblx0fSB3aGlsZShmYWxzZSk7XG5cdHJldHVybiB0cmVlO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UgPSBGNShcblx0ZnVuY3Rpb24gKGMsIGssIHYsIGwsIHIpIHtcblx0XHR2YXIgdHJlZSA9IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBjLCBrLCB2LCBsLCByKTtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRibGFja2lzaCh0cmVlKSA/IF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZUhlbHAodHJlZSkgOiB0cmVlO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSA9IEY1KFxuXHRmdW5jdGlvbiAoYywgaywgdiwgbCwgcikge1xuXHRcdHJldHVybiAoX2VsbV9sYW5nJGNvcmUkRGljdCRpc0JCbGFjayhsKSB8fCBfZWxtX2xhbmckY29yZSREaWN0JGlzQkJsYWNrKHIpKSA/IEE1KFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRtb3JlQmxhY2soYyksXG5cdFx0XHRrLFxuXHRcdFx0dixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZShsKSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZShyKSkgOiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgYywgaywgdiwgbCwgcik7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtb3ZlTWF4ID0gRjUoXG5cdGZ1bmN0aW9uIChjLCBrLCB2LCBsLCByKSB7XG5cdFx0dmFyIF9wMjggPSByO1xuXHRcdGlmIChfcDI4LmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtLCBjLCBsLCByKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSxcblx0XHRcdFx0Yyxcblx0XHRcdFx0ayxcblx0XHRcdFx0dixcblx0XHRcdFx0bCxcblx0XHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRyZW1vdmVNYXgsIF9wMjguXzAsIF9wMjguXzEsIF9wMjguXzIsIF9wMjguXzMsIF9wMjguXzQpKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtID0gRjMoXG5cdGZ1bmN0aW9uIChjLCBsLCByKSB7XG5cdFx0dmFyIF9wMjkgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogbCwgXzE6IHJ9O1xuXHRcdGlmIChfcDI5Ll8wLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0aWYgKF9wMjkuXzEuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHZhciBfcDMwID0gYztcblx0XHRcdFx0c3dpdGNoIChfcDMwLmN0b3IpIHtcblx0XHRcdFx0XHRjYXNlICdSZWQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayk7XG5cdFx0XHRcdFx0Y2FzZSAnQmxhY2snOlxuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCQmxhY2spO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0RlYnVnLmNyYXNoKCdjYW5ub3QgaGF2ZSBiYmxhY2sgb3IgbmJsYWNrIG5vZGVzIGF0IHRoaXMgcG9pbnQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMzMgPSBfcDI5Ll8xLl8wO1xuXHRcdFx0XHR2YXIgX3AzMiA9IF9wMjkuXzAuXzA7XG5cdFx0XHRcdHZhciBfcDMxID0ge2N0b3I6ICdfVHVwbGUzJywgXzA6IGMsIF8xOiBfcDMyLCBfMjogX3AzM307XG5cdFx0XHRcdGlmICgoKChfcDMxLmN0b3IgPT09ICdfVHVwbGUzJykgJiYgKF9wMzEuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDMxLl8xLmN0b3IgPT09ICdMQmxhY2snKSkgJiYgKF9wMzEuXzIuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrLCBfcDI5Ll8xLl8xLCBfcDI5Ll8xLl8yLCBfcDI5Ll8xLl8zLCBfcDI5Ll8xLl80KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JHJlcG9ydFJlbUJ1Zyxcblx0XHRcdFx0XHRcdCdCbGFjay9MQmxhY2svUmVkJyxcblx0XHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoX3AzMiksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoX3AzMykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChfcDI5Ll8xLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHR2YXIgX3AzNiA9IF9wMjkuXzEuXzA7XG5cdFx0XHRcdHZhciBfcDM1ID0gX3AyOS5fMC5fMDtcblx0XHRcdFx0dmFyIF9wMzQgPSB7Y3RvcjogJ19UdXBsZTMnLCBfMDogYywgXzE6IF9wMzUsIF8yOiBfcDM2fTtcblx0XHRcdFx0aWYgKCgoKF9wMzQuY3RvciA9PT0gJ19UdXBsZTMnKSAmJiAoX3AzNC5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMzQuXzEuY3RvciA9PT0gJ1JlZCcpKSAmJiAoX3AzNC5fMi5jdG9yID09PSAnTEJsYWNrJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjkuXzAuXzEsIF9wMjkuXzAuXzIsIF9wMjkuXzAuXzMsIF9wMjkuXzAuXzQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkcmVwb3J0UmVtQnVnLFxuXHRcdFx0XHRcdFx0J0JsYWNrL1JlZC9MQmxhY2snLFxuXHRcdFx0XHRcdFx0Yyxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhfcDM1KSxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhfcDM2KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDQwID0gX3AyOS5fMC5fMjtcblx0XHRcdFx0dmFyIF9wMzkgPSBfcDI5Ll8wLl80O1xuXHRcdFx0XHR2YXIgX3AzOCA9IF9wMjkuXzAuXzE7XG5cdFx0XHRcdHZhciBsJCA9IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtb3ZlTWF4LCBfcDI5Ll8wLl8wLCBfcDM4LCBfcDQwLCBfcDI5Ll8wLl8zLCBfcDM5KTtcblx0XHRcdFx0dmFyIF9wMzcgPSBBMyhfZWxtX2xhbmckY29yZSREaWN0JG1heFdpdGhEZWZhdWx0LCBfcDM4LCBfcDQwLCBfcDM5KTtcblx0XHRcdFx0dmFyIGsgPSBfcDM3Ll8wO1xuXHRcdFx0XHR2YXIgdiA9IF9wMzcuXzE7XG5cdFx0XHRcdHJldHVybiBBNShfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSwgYywgaywgdiwgbCQsIHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIGRpY3QpIHtcblx0XHR2YXIgX3A0MSA9IGRpY3Q7XG5cdFx0aWYgKF9wNDEuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluKF9lbG1fbGFuZyRjb3JlJERpY3QkTEJsYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9wNDIgPSBfcDQxLl8xO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0X3A0MS5fMCxcblx0XHRcdFx0X3A0Mixcblx0XHRcdFx0QTIoZiwgX3A0MiwgX3A0MS5fMiksXG5cdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkbWFwLCBmLCBfcDQxLl8zKSxcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkRGljdCRtYXAsIGYsIF9wNDEuXzQpKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkU2FtZSA9IHtjdG9yOiAnU2FtZSd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkUmVtb3ZlID0ge2N0b3I6ICdSZW1vdmUnfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JEluc2VydCA9IHtjdG9yOiAnSW5zZXJ0J307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCR1cGRhdGUgPSBGMyhcblx0ZnVuY3Rpb24gKGssIGFsdGVyLCBkaWN0KSB7XG5cdFx0dmFyIHVwID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0XHRcdHZhciBfcDQzID0gZGljdDtcblx0XHRcdGlmIChfcDQzLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHR2YXIgX3A0NCA9IGFsdGVyKF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpO1xuXHRcdFx0XHRpZiAoX3A0NC5jdG9yID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRyZXR1cm4ge2N0b3I6ICdfVHVwbGUyJywgXzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkU2FtZSwgXzE6IF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHl9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRJbnNlcnQsXG5cdFx0XHRcdFx0XHRfMTogQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkUmVkLCBrLCBfcDQ0Ll8wLCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5LCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5KVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDU1ID0gX3A0My5fMjtcblx0XHRcdFx0dmFyIF9wNTQgPSBfcDQzLl80O1xuXHRcdFx0XHR2YXIgX3A1MyA9IF9wNDMuXzM7XG5cdFx0XHRcdHZhciBfcDUyID0gX3A0My5fMTtcblx0XHRcdFx0dmFyIF9wNTEgPSBfcDQzLl8wO1xuXHRcdFx0XHR2YXIgX3A0NSA9IEEyKF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRjb21wYXJlLCBrLCBfcDUyKTtcblx0XHRcdFx0c3dpdGNoIChfcDQ1LmN0b3IpIHtcblx0XHRcdFx0XHRjYXNlICdFUSc6XG5cdFx0XHRcdFx0XHR2YXIgX3A0NiA9IGFsdGVyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KF9wNTUpKTtcblx0XHRcdFx0XHRcdGlmIChfcDQ2LmN0b3IgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRSZW1vdmUsXG5cdFx0XHRcdFx0XHRcdFx0XzE6IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtLCBfcDUxLCBfcDUzLCBfcDU0KVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkU2FtZSxcblx0XHRcdFx0XHRcdFx0XHRfMTogQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9wNTEsIF9wNTIsIF9wNDYuXzAsIF9wNTMsIF9wNTQpXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAnTFQnOlxuXHRcdFx0XHRcdFx0dmFyIF9wNDcgPSB1cChfcDUzKTtcblx0XHRcdFx0XHRcdHZhciBmbGFnID0gX3A0Ny5fMDtcblx0XHRcdFx0XHRcdHZhciBuZXdMZWZ0ID0gX3A0Ny5fMTtcblx0XHRcdFx0XHRcdHZhciBfcDQ4ID0gZmxhZztcblx0XHRcdFx0XHRcdHN3aXRjaCAoX3A0OC5jdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ1NhbWUnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRTYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBfcDUxLCBfcDUyLCBfcDU1LCBuZXdMZWZ0LCBfcDU0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0luc2VydCc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JEluc2VydCxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UsIF9wNTEsIF9wNTIsIF9wNTUsIG5ld0xlZnQsIF9wNTQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkUmVtb3ZlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkYnViYmxlLCBfcDUxLCBfcDUyLCBfcDU1LCBuZXdMZWZ0LCBfcDU0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBfcDQ5ID0gdXAoX3A1NCk7XG5cdFx0XHRcdFx0XHR2YXIgZmxhZyA9IF9wNDkuXzA7XG5cdFx0XHRcdFx0XHR2YXIgbmV3UmlnaHQgPSBfcDQ5Ll8xO1xuXHRcdFx0XHRcdFx0dmFyIF9wNTAgPSBmbGFnO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChfcDUwLmN0b3IpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnU2FtZSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JFNhbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9wNTEsIF9wNTIsIF9wNTUsIF9wNTMsIG5ld1JpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0luc2VydCc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JEluc2VydCxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UsIF9wNTEsIF9wNTIsIF9wNTUsIF9wNTMsIG5ld1JpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JFJlbW92ZSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSwgX3A1MSwgX3A1MiwgX3A1NSwgX3A1MywgbmV3UmlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dmFyIF9wNTYgPSB1cChkaWN0KTtcblx0XHR2YXIgZmxhZyA9IF9wNTYuXzA7XG5cdFx0dmFyIHVwZGF0ZWREaWN0ID0gX3A1Ni5fMTtcblx0XHR2YXIgX3A1NyA9IGZsYWc7XG5cdFx0c3dpdGNoIChfcDU3LmN0b3IpIHtcblx0XHRcdGNhc2UgJ1NhbWUnOlxuXHRcdFx0XHRyZXR1cm4gdXBkYXRlZERpY3Q7XG5cdFx0XHRjYXNlICdJbnNlcnQnOlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRlbnN1cmVCbGFja1Jvb3QodXBkYXRlZERpY3QpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkYmxhY2tlbih1cGRhdGVkRGljdCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCA9IEYzKFxuXHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgZGljdCkge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkdXBkYXRlLFxuXHRcdFx0a2V5LFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJGFsd2F5cyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSkpLFxuXHRcdFx0ZGljdCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3Qkc2luZ2xldG9uID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBrZXksIHZhbHVlLCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCR1bmlvbiA9IEYyKFxuXHRmdW5jdGlvbiAodDEsIHQyKSB7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZGwsIF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCB0MiwgdDEpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGZpbHRlciA9IEYyKFxuXHRmdW5jdGlvbiAocHJlZGljYXRlLCBkaWN0aW9uYXJ5KSB7XG5cdFx0dmFyIGFkZCA9IEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGRpY3QpIHtcblx0XHRcdFx0cmV0dXJuIEEyKHByZWRpY2F0ZSwga2V5LCB2YWx1ZSkgPyBBMyhfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCwga2V5LCB2YWx1ZSwgZGljdCkgOiBkaWN0O1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZGwsIGFkZCwgX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSwgZGljdGlvbmFyeSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkaW50ZXJzZWN0ID0gRjIoXG5cdGZ1bmN0aW9uICh0MSwgdDIpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGZpbHRlcixcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoaywgX3A1OCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSREaWN0JG1lbWJlciwgaywgdDIpO1xuXHRcdFx0XHR9KSxcblx0XHRcdHQxKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRwYXJ0aXRpb24gPSBGMihcblx0ZnVuY3Rpb24gKHByZWRpY2F0ZSwgZGljdCkge1xuXHRcdHZhciBhZGQgPSBGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBfcDU5KSB7XG5cdFx0XHRcdHZhciBfcDYwID0gX3A1OTtcblx0XHRcdFx0dmFyIF9wNjIgPSBfcDYwLl8xO1xuXHRcdFx0XHR2YXIgX3A2MSA9IF9wNjAuXzA7XG5cdFx0XHRcdHJldHVybiBBMihwcmVkaWNhdGUsIGtleSwgdmFsdWUpID8ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsIGtleSwgdmFsdWUsIF9wNjEpLFxuXHRcdFx0XHRcdF8xOiBfcDYyXG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdF8wOiBfcDYxLFxuXHRcdFx0XHRcdF8xOiBBMyhfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCwga2V5LCB2YWx1ZSwgX3A2Milcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZGwsXG5cdFx0XHRhZGQsXG5cdFx0XHR7Y3RvcjogJ19UdXBsZTInLCBfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSwgXzE6IF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHl9LFxuXHRcdFx0ZGljdCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkZnJvbUxpc3QgPSBmdW5jdGlvbiAoYXNzb2NzKSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKF9wNjMsIGRpY3QpIHtcblx0XHRcdFx0dmFyIF9wNjQgPSBfcDYzO1xuXHRcdFx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsIF9wNjQuXzAsIF9wNjQuXzEsIGRpY3QpO1xuXHRcdFx0fSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSxcblx0XHRhc3NvY3MpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHJlbW92ZSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBkaWN0KSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCR1cGRhdGUsXG5cdFx0XHRrZXksXG5cdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkYWx3YXlzKF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpLFxuXHRcdFx0ZGljdCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkZGlmZiA9IEYyKFxuXHRmdW5jdGlvbiAodDEsIHQyKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCxcblx0XHRcdEYzKFxuXHRcdFx0XHRmdW5jdGlvbiAoaywgdiwgdCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSREaWN0JHJlbW92ZSwgaywgdCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0dDEsXG5cdFx0XHR0Mik7XG5cdH0pO1xuXG4vL2ltcG9ydCBOYXRpdmUuU2NoZWR1bGVyIC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfVGltZSA9IGZ1bmN0aW9uKCkge1xuXG52YXIgbm93ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxue1xuXHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQoRGF0ZS5ub3coKSkpO1xufSk7XG5cbmZ1bmN0aW9uIHNldEludGVydmFsXyhpbnRlcnZhbCwgdGFzaylcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTcGF3bih0YXNrKTtcblx0XHR9LCBpbnRlcnZhbCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGNsZWFySW50ZXJ2YWwoaWQpOyB9O1xuXHR9KTtcbn1cblxucmV0dXJuIHtcblx0bm93OiBub3csXG5cdHNldEludGVydmFsXzogRjIoc2V0SW50ZXJ2YWxfKVxufTtcblxufSgpO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRiYXRjaCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5iYXRjaDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9TdWIkbm9uZSA9IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRiYXRjaChcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFtdKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJG1hcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5tYXA7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJFN1YiA9IHtjdG9yOiAnU3ViJ307XG5cbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJHNldEludGVydmFsID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1RpbWUuc2V0SW50ZXJ2YWxfO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkc3Bhd25IZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIGludGVydmFscywgcHJvY2Vzc2VzKSB7XG5cdFx0dmFyIF9wMCA9IGludGVydmFscztcblx0XHRpZiAoX3AwLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQocHJvY2Vzc2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9wMSA9IF9wMC5fMDtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnNwYXduKFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGltZSRzZXRJbnRlcnZhbCxcblx0XHRcdFx0XHRcdF9wMSxcblx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJHNlbmRUb1NlbGYsIHJvdXRlciwgX3AxKSkpLFxuXHRcdFx0XHRmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUaW1lJHNwYXduSGVscCxcblx0XHRcdFx0XHRcdHJvdXRlcixcblx0XHRcdFx0XHRcdF9wMC5fMSxcblx0XHRcdFx0XHRcdEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBfcDEsIGlkLCBwcm9jZXNzZXMpKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGFkZE15U3ViID0gRjIoXG5cdGZ1bmN0aW9uIChfcDIsIHN0YXRlKSB7XG5cdFx0dmFyIF9wMyA9IF9wMjtcblx0XHR2YXIgX3A2ID0gX3AzLl8xO1xuXHRcdHZhciBfcDUgPSBfcDMuXzA7XG5cdFx0dmFyIF9wNCA9IEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkZ2V0LCBfcDUsIHN0YXRlKTtcblx0XHRpZiAoX3A0LmN0b3IgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCxcblx0XHRcdFx0X3A1LFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W19wNl0pLFxuXHRcdFx0XHRzdGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsXG5cdFx0XHRcdF9wNSxcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIF9wNiwgX3A0Ll8wKSxcblx0XHRcdFx0c3RhdGUpO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRpbk1pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uICh0KSB7XG5cdHJldHVybiB0O1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJG1pbGxpc2Vjb25kID0gMTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJHNlY29uZCA9IDEwMDAgKiBfZWxtX2xhbmckY29yZSRUaW1lJG1pbGxpc2Vjb25kO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkbWludXRlID0gNjAgKiBfZWxtX2xhbmckY29yZSRUaW1lJHNlY29uZDtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGhvdXIgPSA2MCAqIF9lbG1fbGFuZyRjb3JlJFRpbWUkbWludXRlO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkaW5Ib3VycyA9IGZ1bmN0aW9uICh0KSB7XG5cdHJldHVybiB0IC8gX2VsbV9sYW5nJGNvcmUkVGltZSRob3VyO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGluTWludXRlcyA9IGZ1bmN0aW9uICh0KSB7XG5cdHJldHVybiB0IC8gX2VsbV9sYW5nJGNvcmUkVGltZSRtaW51dGU7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkaW5TZWNvbmRzID0gZnVuY3Rpb24gKHQpIHtcblx0cmV0dXJuIHQgLyBfZWxtX2xhbmckY29yZSRUaW1lJHNlY29uZDtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRub3cgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfVGltZS5ub3c7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgaW50ZXJ2YWwsIHN0YXRlKSB7XG5cdFx0dmFyIF9wNyA9IEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkZ2V0LCBpbnRlcnZhbCwgc3RhdGUudGFnZ2Vycyk7XG5cdFx0aWYgKF9wNy5jdG9yID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoc3RhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGltZSRub3csXG5cdFx0XHRcdGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRzZXF1ZW5jZShcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKHRhZ2dlcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnZ2VyKHRpbWUpKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF9wNy5fMCkpLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9wOCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKHN0YXRlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkc3Vic2NyaXB0aW9uID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmxlYWYoJ1RpbWUnKTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJFN0YXRlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHt0YWdnZXJzOiBhLCBwcm9jZXNzZXM6IGJ9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGluaXQgPSBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdEEyKF9lbG1fbGFuZyRjb3JlJFRpbWUkU3RhdGUsIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHksIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHkpKTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJG9uRWZmZWN0cyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBzdWJzLCBfcDkpIHtcblx0XHR2YXIgX3AxMCA9IF9wOTtcblx0XHR2YXIgcmlnaHRTdGVwID0gRjMoXG5cdFx0XHRmdW5jdGlvbiAoX3AxMiwgaWQsIF9wMTEpIHtcblx0XHRcdFx0dmFyIF9wMTMgPSBfcDExO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUzJyxcblx0XHRcdFx0XHRfMDogX3AxMy5fMCxcblx0XHRcdFx0XHRfMTogX3AxMy5fMSxcblx0XHRcdFx0XHRfMjogQTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLmtpbGwoaWQpLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9wMTQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9wMTMuXzI7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0dmFyIGJvdGhTdGVwID0gRjQoXG5cdFx0XHRmdW5jdGlvbiAoaW50ZXJ2YWwsIHRhZ2dlcnMsIGlkLCBfcDE1KSB7XG5cdFx0XHRcdHZhciBfcDE2ID0gX3AxNTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMycsXG5cdFx0XHRcdFx0XzA6IF9wMTYuXzAsXG5cdFx0XHRcdFx0XzE6IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBpbnRlcnZhbCwgaWQsIF9wMTYuXzEpLFxuXHRcdFx0XHRcdF8yOiBfcDE2Ll8yXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR2YXIgbGVmdFN0ZXAgPSBGMyhcblx0XHRcdGZ1bmN0aW9uIChpbnRlcnZhbCwgdGFnZ2VycywgX3AxNykge1xuXHRcdFx0XHR2YXIgX3AxOCA9IF9wMTc7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTMnLFxuXHRcdFx0XHRcdF8wOiBBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgaW50ZXJ2YWwsIF9wMTguXzApLFxuXHRcdFx0XHRcdF8xOiBfcDE4Ll8xLFxuXHRcdFx0XHRcdF8yOiBfcDE4Ll8yXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR2YXIgbmV3VGFnZ2VycyA9IEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwsIF9lbG1fbGFuZyRjb3JlJFRpbWUkYWRkTXlTdWIsIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHksIHN1YnMpO1xuXHRcdHZhciBfcDE5ID0gQTYoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JG1lcmdlLFxuXHRcdFx0bGVmdFN0ZXAsXG5cdFx0XHRib3RoU3RlcCxcblx0XHRcdHJpZ2h0U3RlcCxcblx0XHRcdG5ld1RhZ2dlcnMsXG5cdFx0XHRfcDEwLnByb2Nlc3Nlcyxcblx0XHRcdHtcblx0XHRcdFx0Y3RvcjogJ19UdXBsZTMnLFxuXHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtdKSxcblx0XHRcdFx0XzE6IF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHksXG5cdFx0XHRcdF8yOiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pXG5cdFx0XHR9KTtcblx0XHR2YXIgc3Bhd25MaXN0ID0gX3AxOS5fMDtcblx0XHR2YXIgZXhpc3RpbmdEaWN0ID0gX3AxOS5fMTtcblx0XHR2YXIga2lsbFRhc2sgPSBfcDE5Ll8yO1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGtpbGxUYXNrLFxuXHRcdFx0ZnVuY3Rpb24gKF9wMjApIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRBMyhfZWxtX2xhbmckY29yZSRUaW1lJHNwYXduSGVscCwgcm91dGVyLCBzcGF3bkxpc3QsIGV4aXN0aW5nRGljdCksXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKG5ld1Byb2Nlc3Nlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGltZSRTdGF0ZSwgbmV3VGFnZ2VycywgbmV3UHJvY2Vzc2VzKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRFdmVyeSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7Y3RvcjogJ0V2ZXJ5JywgXzA6IGEsIF8xOiBifTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRldmVyeSA9IEYyKFxuXHRmdW5jdGlvbiAoaW50ZXJ2YWwsIHRhZ2dlcikge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUaW1lJHN1YnNjcmlwdGlvbihcblx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFRpbWUkRXZlcnksIGludGVydmFsLCB0YWdnZXIpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRzdWJNYXAgPSBGMihcblx0ZnVuY3Rpb24gKGYsIF9wMjEpIHtcblx0XHR2YXIgX3AyMiA9IF9wMjE7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGltZSRFdmVyeSxcblx0XHRcdF9wMjIuXzAsXG5cdFx0XHRmdW5jdGlvbiAoX3AyMykge1xuXHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRfcDIyLl8xKF9wMjMpKTtcblx0XHRcdH0pO1xuXHR9KTtcbl9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5lZmZlY3RNYW5hZ2Vyc1snVGltZSddID0ge3BrZzogJ2VsbS1sYW5nL2NvcmUnLCBpbml0OiBfZWxtX2xhbmckY29yZSRUaW1lJGluaXQsIG9uRWZmZWN0czogX2VsbV9sYW5nJGNvcmUkVGltZSRvbkVmZmVjdHMsIG9uU2VsZk1zZzogX2VsbV9sYW5nJGNvcmUkVGltZSRvblNlbGZNc2csIHRhZzogJ3N1YicsIHN1Yk1hcDogX2VsbV9sYW5nJGNvcmUkVGltZSRzdWJNYXB9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkRGVidWckY3Jhc2ggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcuY3Jhc2g7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGVidWckbG9nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0RlYnVnLmxvZztcblxuLy9pbXBvcnQgTWF5YmUsIE5hdGl2ZS5BcnJheSwgTmF0aXZlLkxpc3QsIE5hdGl2ZS5VdGlscywgUmVzdWx0IC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbiA9IGZ1bmN0aW9uKCkge1xuXG5cbi8vIENPUkUgREVDT0RFUlNcblxuZnVuY3Rpb24gc3VjY2VlZChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJzxkZWNvZGVyPicsXG5cdFx0dGFnOiAnc3VjY2VlZCcsXG5cdFx0bXNnOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gZmFpbChtc2cpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJzxkZWNvZGVyPicsXG5cdFx0dGFnOiAnZmFpbCcsXG5cdFx0bXNnOiBtc2dcblx0fTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlUHJpbWl0aXZlKHRhZylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6IHRhZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVDb250YWluZXIodGFnLCBkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogdGFnLFxuXHRcdGRlY29kZXI6IGRlY29kZXJcblx0fTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlTnVsbCh2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdudWxsJyxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRmllbGQoZmllbGQsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJzxkZWNvZGVyPicsXG5cdFx0dGFnOiAnZmllbGQnLFxuXHRcdGZpZWxkOiBmaWVsZCxcblx0XHRkZWNvZGVyOiBkZWNvZGVyXG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlY29kZUtleVZhbHVlUGFpcnMoZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdrZXktdmFsdWUnLFxuXHRcdGRlY29kZXI6IGRlY29kZXJcblx0fTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlT2JqZWN0KGYsIGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogJ21hcC1tYW55Jyxcblx0XHRmdW5jOiBmLFxuXHRcdGRlY29kZXJzOiBkZWNvZGVyc1xuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVUdXBsZShmLCBkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICd0dXBsZScsXG5cdFx0ZnVuYzogZixcblx0XHRkZWNvZGVyczogZGVjb2RlcnNcblx0fTtcbn1cblxuZnVuY3Rpb24gYW5kVGhlbihkZWNvZGVyLCBjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdhbmRUaGVuJyxcblx0XHRkZWNvZGVyOiBkZWNvZGVyLFxuXHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHR9O1xufVxuXG5mdW5jdGlvbiBjdXN0b21BbmRUaGVuKGRlY29kZXIsIGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogJ2N1c3RvbUFuZFRoZW4nLFxuXHRcdGRlY29kZXI6IGRlY29kZXIsXG5cdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdH07XG59XG5cbmZ1bmN0aW9uIG9uZU9mKGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogJ29uZU9mJyxcblx0XHRkZWNvZGVyczogZGVjb2RlcnNcblx0fTtcbn1cblxuXG4vLyBERUNPRElORyBPQkpFQ1RTXG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDEoZiwgZDEpXG57XG5cdHJldHVybiBkZWNvZGVPYmplY3QoZiwgW2QxXSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDIoZiwgZDEsIGQyKVxue1xuXHRyZXR1cm4gZGVjb2RlT2JqZWN0KGYsIFtkMSwgZDJdKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlT2JqZWN0MyhmLCBkMSwgZDIsIGQzKVxue1xuXHRyZXR1cm4gZGVjb2RlT2JqZWN0KGYsIFtkMSwgZDIsIGQzXSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDQoZiwgZDEsIGQyLCBkMywgZDQpXG57XG5cdHJldHVybiBkZWNvZGVPYmplY3QoZiwgW2QxLCBkMiwgZDMsIGQ0XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDUoZiwgZDEsIGQyLCBkMywgZDQsIGQ1KVxue1xuXHRyZXR1cm4gZGVjb2RlT2JqZWN0KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDVdKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlT2JqZWN0NihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2KVxue1xuXHRyZXR1cm4gZGVjb2RlT2JqZWN0KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDcoZiwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDcpXG57XG5cdHJldHVybiBkZWNvZGVPYmplY3QoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9iamVjdDgoZiwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDcsIGQ4KVxue1xuXHRyZXR1cm4gZGVjb2RlT2JqZWN0KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDhdKTtcbn1cblxuXG4vLyBERUNPRElORyBUVVBMRVNcblxuZnVuY3Rpb24gZGVjb2RlVHVwbGUxKGYsIGQxKVxue1xuXHRyZXR1cm4gZGVjb2RlVHVwbGUoZiwgW2QxXSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVR1cGxlMihmLCBkMSwgZDIpXG57XG5cdHJldHVybiBkZWNvZGVUdXBsZShmLCBbZDEsIGQyXSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVR1cGxlMyhmLCBkMSwgZDIsIGQzKVxue1xuXHRyZXR1cm4gZGVjb2RlVHVwbGUoZiwgW2QxLCBkMiwgZDNdKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlVHVwbGU0KGYsIGQxLCBkMiwgZDMsIGQ0KVxue1xuXHRyZXR1cm4gZGVjb2RlVHVwbGUoZiwgW2QxLCBkMiwgZDMsIGQ0XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVR1cGxlNShmLCBkMSwgZDIsIGQzLCBkNCwgZDUpXG57XG5cdHJldHVybiBkZWNvZGVUdXBsZShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVR1cGxlNihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2KVxue1xuXHRyZXR1cm4gZGVjb2RlVHVwbGUoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDZdKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlVHVwbGU3KGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3KVxue1xuXHRyZXR1cm4gZGVjb2RlVHVwbGUoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3XSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVR1cGxlOChmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgpXG57XG5cdHJldHVybiBkZWNvZGVUdXBsZShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDcsIGQ4XSk7XG59XG5cblxuLy8gREVDT0RFIEhFTFBFUlNcblxuZnVuY3Rpb24gb2sodmFsdWUpXG57XG5cdHJldHVybiB7IHRhZzogJ29rJywgdmFsdWU6IHZhbHVlIH07XG59XG5cbmZ1bmN0aW9uIGJhZFByaW1pdGl2ZSh0eXBlLCB2YWx1ZSlcbntcblx0cmV0dXJuIHsgdGFnOiAncHJpbWl0aXZlJywgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlIH07XG59XG5cbmZ1bmN0aW9uIGJhZEluZGV4KGluZGV4LCBuZXN0ZWRQcm9ibGVtcylcbntcblx0cmV0dXJuIHsgdGFnOiAnaW5kZXgnLCBpbmRleDogaW5kZXgsIHJlc3Q6IG5lc3RlZFByb2JsZW1zIH07XG59XG5cbmZ1bmN0aW9uIGJhZEZpZWxkKGZpZWxkLCBuZXN0ZWRQcm9ibGVtcylcbntcblx0cmV0dXJuIHsgdGFnOiAnZmllbGQnLCBmaWVsZDogZmllbGQsIHJlc3Q6IG5lc3RlZFByb2JsZW1zIH07XG59XG5cbmZ1bmN0aW9uIGJhZE9uZU9mKHByb2JsZW1zKVxue1xuXHRyZXR1cm4geyB0YWc6ICdvbmVPZicsIHByb2JsZW1zOiBwcm9ibGVtcyB9O1xufVxuXG5mdW5jdGlvbiBiYWRDdXN0b20obXNnKVxue1xuXHRyZXR1cm4geyB0YWc6ICdjdXN0b20nLCBtc2c6IG1zZyB9O1xufVxuXG5mdW5jdGlvbiBiYWQobXNnKVxue1xuXHRyZXR1cm4geyB0YWc6ICdmYWlsJywgbXNnOiBtc2cgfTtcbn1cblxuZnVuY3Rpb24gYmFkVG9TdHJpbmcocHJvYmxlbSlcbntcblx0dmFyIGNvbnRleHQgPSAnXyc7XG5cdHdoaWxlIChwcm9ibGVtKVxuXHR7XG5cdFx0c3dpdGNoIChwcm9ibGVtLnRhZylcblx0XHR7XG5cdFx0XHRjYXNlICdwcmltaXRpdmUnOlxuXHRcdFx0XHRyZXR1cm4gJ0V4cGVjdGluZyAnICsgcHJvYmxlbS50eXBlXG5cdFx0XHRcdFx0KyAoY29udGV4dCA9PT0gJ18nID8gJycgOiAnIGF0ICcgKyBjb250ZXh0KVxuXHRcdFx0XHRcdCsgJyBidXQgaW5zdGVhZCBnb3Q6ICcgKyBqc1RvU3RyaW5nKHByb2JsZW0udmFsdWUpO1xuXG5cdFx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRcdGNvbnRleHQgKz0gJ1snICsgcHJvYmxlbS5pbmRleCArICddJztcblx0XHRcdFx0cHJvYmxlbSA9IHByb2JsZW0ucmVzdDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0Y29udGV4dCArPSAnLicgKyBwcm9ibGVtLmZpZWxkO1xuXHRcdFx0XHRwcm9ibGVtID0gcHJvYmxlbS5yZXN0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnb25lT2YnOlxuXHRcdFx0XHR2YXIgcHJvYmxlbXMgPSBwcm9ibGVtLnByb2JsZW1zO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvYmxlbXNbaV0gPSBiYWRUb1N0cmluZyhwcm9ibGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICdJIHJhbiBpbnRvIHRoZSBmb2xsb3dpbmcgcHJvYmxlbXMnXG5cdFx0XHRcdFx0KyAoY29udGV4dCA9PT0gJ18nID8gJycgOiAnIGF0ICcgKyBjb250ZXh0KVxuXHRcdFx0XHRcdCsgJzpcXG5cXG4nICsgcHJvYmxlbXMuam9pbignXFxuJyk7XG5cblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHJldHVybiAnQSBgY3VzdG9tRGVjb2RlcmAgZmFpbGVkJ1xuXHRcdFx0XHRcdCsgKGNvbnRleHQgPT09ICdfJyA/ICcnIDogJyBhdCAnICsgY29udGV4dClcblx0XHRcdFx0XHQrICcgd2l0aCB0aGUgbWVzc2FnZTogJyArIHByb2JsZW0ubXNnO1xuXG5cdFx0XHRjYXNlICdmYWlsJzpcblx0XHRcdFx0cmV0dXJuICdJIHJhbiBpbnRvIGEgYGZhaWxgIGRlY29kZXInXG5cdFx0XHRcdFx0KyAoY29udGV4dCA9PT0gJ18nID8gJycgOiAnIGF0ICcgKyBjb250ZXh0KVxuXHRcdFx0XHRcdCsgJzogJyArIHByb2JsZW0ubXNnO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBqc1RvU3RyaW5nKHZhbHVlKVxue1xuXHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZFxuXHRcdD8gJ3VuZGVmaW5lZCdcblx0XHQ6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn1cblxuXG4vLyBERUNPREVcblxuZnVuY3Rpb24gcnVuT25TdHJpbmcoZGVjb2Rlciwgc3RyaW5nKVxue1xuXHR2YXIganNvbjtcblx0dHJ5XG5cdHtcblx0XHRqc29uID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuXHR9XG5cdGNhdGNoIChlKVxuXHR7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoJ0dpdmVuIGFuIGludmFsaWQgSlNPTjogJyArIGUubWVzc2FnZSk7XG5cdH1cblx0cmV0dXJuIHJ1bihkZWNvZGVyLCBqc29uKTtcbn1cblxuZnVuY3Rpb24gcnVuKGRlY29kZXIsIHZhbHVlKVxue1xuXHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyLCB2YWx1ZSk7XG5cdHJldHVybiAocmVzdWx0LnRhZyA9PT0gJ29rJylcblx0XHQ/IF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhyZXN1bHQudmFsdWUpXG5cdFx0OiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKGJhZFRvU3RyaW5nKHJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBydW5IZWxwKGRlY29kZXIsIHZhbHVlKVxue1xuXHRzd2l0Y2ggKGRlY29kZXIudGFnKVxuXHR7XG5cdFx0Y2FzZSAnYm9vbCc6XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHQ/IG9rKHZhbHVlKVxuXHRcdFx0XHQ6IGJhZFByaW1pdGl2ZSgnYSBCb29sJywgdmFsdWUpO1xuXG5cdFx0Y2FzZSAnaW50Jzpcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHJldHVybiBiYWRQcmltaXRpdmUoJ2FuIEludCcsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKC0yMTQ3NDgzNjQ3IDwgdmFsdWUgJiYgdmFsdWUgPCAyMTQ3NDgzNjQ3ICYmICh2YWx1ZSB8IDApID09PSB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gb2sodmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNGaW5pdGUodmFsdWUpICYmICEodmFsdWUgJSAxKSkge1xuXHRcdFx0XHRyZXR1cm4gb2sodmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhbiBJbnQnLCB2YWx1ZSk7XG5cblx0XHRjYXNlICdmbG9hdCc6XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdFx0XHRcdD8gb2sodmFsdWUpXG5cdFx0XHRcdDogYmFkUHJpbWl0aXZlKCdhIEZsb2F0JywgdmFsdWUpO1xuXG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0XHRcdFx0PyBvayh2YWx1ZSlcblx0XHRcdFx0OiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdFx0XHRcdFx0PyBvayh2YWx1ZSArICcnKVxuXHRcdFx0XHRcdDogYmFkUHJpbWl0aXZlKCdhIFN0cmluZycsIHZhbHVlKTtcblxuXHRcdGNhc2UgJ251bGwnOlxuXHRcdFx0cmV0dXJuICh2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0PyBvayhkZWNvZGVyLnZhbHVlKVxuXHRcdFx0XHQ6IGJhZFByaW1pdGl2ZSgnbnVsbCcsIHZhbHVlKTtcblxuXHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdHJldHVybiBvayh2YWx1ZSk7XG5cblx0XHRjYXNlICdsaXN0Jzpcblx0XHRcdGlmICghKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhIExpc3QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaXN0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuTmlsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aDsgaS0tOyApXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWVbaV0pO1xuXHRcdFx0XHRpZiAocmVzdWx0LnRhZyAhPT0gJ29rJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBiYWRJbmRleChpLCByZXN1bHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LkNvbnMocmVzdWx0LnZhbHVlLCBsaXN0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvayhsaXN0KTtcblxuXHRcdGNhc2UgJ2FycmF5Jzpcblx0XHRcdGlmICghKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhbiBBcnJheScsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcblx0XHRcdHZhciBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxlbjsgaS0tOyApXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWVbaV0pO1xuXHRcdFx0XHRpZiAocmVzdWx0LnRhZyAhPT0gJ29rJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBiYWRJbmRleChpLCByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFycmF5W2ldID0gcmVzdWx0LnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5mcm9tSlNBcnJheShhcnJheSkpO1xuXG5cdFx0Y2FzZSAnbWF5YmUnOlxuXHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2Rlci5kZWNvZGVyLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gKHJlc3VsdC50YWcgPT09ICdvaycpXG5cdFx0XHRcdD8gb2soX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChyZXN1bHQudmFsdWUpKVxuXHRcdFx0XHQ6IG9rKF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpO1xuXG5cdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0dmFyIGZpZWxkID0gZGVjb2Rlci5maWVsZDtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8ICEoZmllbGQgaW4gdmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhbiBvYmplY3Qgd2l0aCBhIGZpZWxkIG5hbWVkIGAnICsgZmllbGQgKyAnYCcsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2Rlci5kZWNvZGVyLCB2YWx1ZVtmaWVsZF0pO1xuXHRcdFx0cmV0dXJuIChyZXN1bHQudGFnID09PSAnb2snKVxuXHRcdFx0XHQ/IHJlc3VsdFxuXHRcdFx0XHQ6IGJhZEZpZWxkKGZpZWxkLCByZXN1bHQpO1xuXG5cdFx0Y2FzZSAna2V5LXZhbHVlJzpcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBiYWRQcmltaXRpdmUoJ2FuIG9iamVjdCcsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWw7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWVba2V5XSk7XG5cdFx0XHRcdGlmIChyZXN1bHQudGFnICE9PSAnb2snKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIGJhZEZpZWxkKGtleSwgcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcGFpciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTIoa2V5LCByZXN1bHQudmFsdWUpO1xuXHRcdFx0XHRrZXlWYWx1ZVBhaXJzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuQ29ucyhwYWlyLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvayhrZXlWYWx1ZVBhaXJzKTtcblxuXHRcdGNhc2UgJ21hcC1tYW55Jzpcblx0XHRcdHZhciBhbnN3ZXIgPSBkZWNvZGVyLmZ1bmM7XG5cdFx0XHR2YXIgZGVjb2RlcnMgPSBkZWNvZGVyLmRlY29kZXJzO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNvZGVycy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2RlcnNbaV0sIHZhbHVlKTtcblx0XHRcdFx0aWYgKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuc3dlciA9IGFuc3dlcihyZXN1bHQudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rKGFuc3dlcik7XG5cblx0XHRjYXNlICd0dXBsZSc6XG5cdFx0XHR2YXIgZGVjb2RlcnMgPSBkZWNvZGVyLmRlY29kZXJzO1xuXHRcdFx0dmFyIGxlbiA9IGRlY29kZXJzLmxlbmd0aDtcblxuXHRcdFx0aWYgKCAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHx8IHZhbHVlLmxlbmd0aCAhPT0gbGVuIClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYSBUdXBsZSB3aXRoICcgKyBsZW4gKyAnIGVudHJpZXMnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhbnN3ZXIgPSBkZWNvZGVyLmZ1bmM7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyc1tpXSwgdmFsdWVbaV0pO1xuXHRcdFx0XHRpZiAocmVzdWx0LnRhZyAhPT0gJ29rJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBiYWRJbmRleChpLCByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuc3dlciA9IGFuc3dlcihyZXN1bHQudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rKGFuc3dlcik7XG5cblx0XHRjYXNlICdjdXN0b21BbmRUaGVuJzpcblx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWUpO1xuXHRcdFx0aWYgKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVhbFJlc3VsdCA9IGRlY29kZXIuY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcblx0XHRcdGlmIChyZWFsUmVzdWx0LmN0b3IgPT09ICdFcnInKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gYmFkQ3VzdG9tKHJlYWxSZXN1bHQuXzApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rKHJlYWxSZXN1bHQuXzApO1xuXG5cdFx0Y2FzZSAnYW5kVGhlbic6XG5cdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyLmRlY29kZXIsIHZhbHVlKTtcblx0XHRcdHJldHVybiAocmVzdWx0LnRhZyAhPT0gJ29rJylcblx0XHRcdFx0PyByZXN1bHRcblx0XHRcdFx0OiBydW5IZWxwKGRlY29kZXIuY2FsbGJhY2socmVzdWx0LnZhbHVlKSwgdmFsdWUpO1xuXG5cdFx0Y2FzZSAnb25lT2YnOlxuXHRcdFx0dmFyIGVycm9ycyA9IFtdO1xuXHRcdFx0dmFyIHRlbXAgPSBkZWNvZGVyLmRlY29kZXJzO1xuXHRcdFx0d2hpbGUgKHRlbXAuY3RvciAhPT0gJ1tdJylcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAodGVtcC5fMCwgdmFsdWUpO1xuXG5cdFx0XHRcdGlmIChyZXN1bHQudGFnID09PSAnb2snKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVycm9ycy5wdXNoKHJlc3VsdCk7XG5cblx0XHRcdFx0dGVtcCA9IHRlbXAuXzE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmFkT25lT2YoZXJyb3JzKTtcblxuXHRcdGNhc2UgJ2ZhaWwnOlxuXHRcdFx0cmV0dXJuIGJhZChkZWNvZGVyLm1zZyk7XG5cblx0XHRjYXNlICdzdWNjZWVkJzpcblx0XHRcdHJldHVybiBvayhkZWNvZGVyLm1zZyk7XG5cdH1cbn1cblxuXG4vLyBFUVVBTElUWVxuXG5mdW5jdGlvbiBlcXVhbGl0eShhLCBiKVxue1xuXHRpZiAoYSA9PT0gYilcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGEudGFnICE9PSBiLnRhZylcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHN3aXRjaCAoYS50YWcpXG5cdHtcblx0XHRjYXNlICdzdWNjZWVkJzpcblx0XHRjYXNlICdmYWlsJzpcblx0XHRcdHJldHVybiBhLm1zZyA9PT0gYi5tc2c7XG5cblx0XHRjYXNlICdib29sJzpcblx0XHRjYXNlICdpbnQnOlxuXHRcdGNhc2UgJ2Zsb2F0Jzpcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0Y2FzZSAnbnVsbCc6XG5cdFx0XHRyZXR1cm4gYS52YWx1ZSA9PT0gYi52YWx1ZTtcblxuXHRcdGNhc2UgJ2xpc3QnOlxuXHRcdGNhc2UgJ2FycmF5Jzpcblx0XHRjYXNlICdtYXliZSc6XG5cdFx0Y2FzZSAna2V5LXZhbHVlJzpcblx0XHRcdHJldHVybiBlcXVhbGl0eShhLmRlY29kZXIsIGIuZGVjb2Rlcik7XG5cblx0XHRjYXNlICdmaWVsZCc6XG5cdFx0XHRyZXR1cm4gYS5maWVsZCA9PT0gYi5maWVsZCAmJiBlcXVhbGl0eShhLmRlY29kZXIsIGIuZGVjb2Rlcik7XG5cblx0XHRjYXNlICdtYXAtbWFueSc6XG5cdFx0Y2FzZSAndHVwbGUnOlxuXHRcdFx0aWYgKGEuZnVuYyAhPT0gYi5mdW5jKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGlzdEVxdWFsaXR5KGEuZGVjb2RlcnMsIGIuZGVjb2RlcnMpO1xuXG5cdFx0Y2FzZSAnYW5kVGhlbic6XG5cdFx0Y2FzZSAnY3VzdG9tQW5kVGhlbic6XG5cdFx0XHRyZXR1cm4gYS5jYWxsYmFjayA9PT0gYi5jYWxsYmFjayAmJiBlcXVhbGl0eShhLmRlY29kZXIsIGIuZGVjb2Rlcik7XG5cblx0XHRjYXNlICdvbmVPZic6XG5cdFx0XHRyZXR1cm4gbGlzdEVxdWFsaXR5KGEuZGVjb2RlcnMsIGIuZGVjb2RlcnMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RFcXVhbGl0eShhRGVjb2RlcnMsIGJEZWNvZGVycylcbntcblx0dmFyIGxlbiA9IGFEZWNvZGVycy5sZW5ndGg7XG5cdGlmIChsZW4gIT09IGJEZWNvZGVycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGlmICghZXF1YWxpdHkoYURlY29kZXJzW2ldLCBiRGVjb2RlcnNbaV0pKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gRU5DT0RFXG5cbmZ1bmN0aW9uIGVuY29kZShpbmRlbnRMZXZlbCwgdmFsdWUpXG57XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgaW5kZW50TGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVPYmplY3Qoa2V5VmFsdWVQYWlycylcbntcblx0dmFyIG9iaiA9IHt9O1xuXHR3aGlsZSAoa2V5VmFsdWVQYWlycy5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBrZXlWYWx1ZVBhaXJzLl8wO1xuXHRcdG9ialtwYWlyLl8wXSA9IHBhaXIuXzE7XG5cdFx0a2V5VmFsdWVQYWlycyA9IGtleVZhbHVlUGFpcnMuXzE7XG5cdH1cblx0cmV0dXJuIG9iajtcbn1cblxucmV0dXJuIHtcblx0ZW5jb2RlOiBGMihlbmNvZGUpLFxuXHRydW5PblN0cmluZzogRjIocnVuT25TdHJpbmcpLFxuXHRydW46IEYyKHJ1biksXG5cblx0ZGVjb2RlTnVsbDogZGVjb2RlTnVsbCxcblx0ZGVjb2RlUHJpbWl0aXZlOiBkZWNvZGVQcmltaXRpdmUsXG5cdGRlY29kZUNvbnRhaW5lcjogRjIoZGVjb2RlQ29udGFpbmVyKSxcblxuXHRkZWNvZGVGaWVsZDogRjIoZGVjb2RlRmllbGQpLFxuXG5cdGRlY29kZU9iamVjdDE6IEYyKGRlY29kZU9iamVjdDEpLFxuXHRkZWNvZGVPYmplY3QyOiBGMyhkZWNvZGVPYmplY3QyKSxcblx0ZGVjb2RlT2JqZWN0MzogRjQoZGVjb2RlT2JqZWN0MyksXG5cdGRlY29kZU9iamVjdDQ6IEY1KGRlY29kZU9iamVjdDQpLFxuXHRkZWNvZGVPYmplY3Q1OiBGNihkZWNvZGVPYmplY3Q1KSxcblx0ZGVjb2RlT2JqZWN0NjogRjcoZGVjb2RlT2JqZWN0NiksXG5cdGRlY29kZU9iamVjdDc6IEY4KGRlY29kZU9iamVjdDcpLFxuXHRkZWNvZGVPYmplY3Q4OiBGOShkZWNvZGVPYmplY3Q4KSxcblx0ZGVjb2RlS2V5VmFsdWVQYWlyczogZGVjb2RlS2V5VmFsdWVQYWlycyxcblxuXHRkZWNvZGVUdXBsZTE6IEYyKGRlY29kZVR1cGxlMSksXG5cdGRlY29kZVR1cGxlMjogRjMoZGVjb2RlVHVwbGUyKSxcblx0ZGVjb2RlVHVwbGUzOiBGNChkZWNvZGVUdXBsZTMpLFxuXHRkZWNvZGVUdXBsZTQ6IEY1KGRlY29kZVR1cGxlNCksXG5cdGRlY29kZVR1cGxlNTogRjYoZGVjb2RlVHVwbGU1KSxcblx0ZGVjb2RlVHVwbGU2OiBGNyhkZWNvZGVUdXBsZTYpLFxuXHRkZWNvZGVUdXBsZTc6IEY4KGRlY29kZVR1cGxlNyksXG5cdGRlY29kZVR1cGxlODogRjkoZGVjb2RlVHVwbGU4KSxcblxuXHRhbmRUaGVuOiBGMihhbmRUaGVuKSxcblx0Y3VzdG9tQW5kVGhlbjogRjIoY3VzdG9tQW5kVGhlbiksXG5cdGZhaWw6IGZhaWwsXG5cdHN1Y2NlZWQ6IHN1Y2NlZWQsXG5cdG9uZU9mOiBvbmVPZixcblxuXHRpZGVudGl0eTogaWRlbnRpdHksXG5cdGVuY29kZU51bGw6IG51bGwsXG5cdGVuY29kZUFycmF5OiBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkudG9KU0FycmF5LFxuXHRlbmNvZGVMaXN0OiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC50b0FycmF5LFxuXHRlbmNvZGVPYmplY3Q6IGVuY29kZU9iamVjdCxcblxuXHRlcXVhbGl0eTogZXF1YWxpdHlcbn07XG5cbn0oKTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGxpc3QgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5lbmNvZGVMaXN0O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGFycmF5ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZW5jb2RlQXJyYXk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkb2JqZWN0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZW5jb2RlT2JqZWN0O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJG51bGwgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5lbmNvZGVOdWxsO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGJvb2wgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5pZGVudGl0eTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0VuY29kZSRmbG9hdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmlkZW50aXR5O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGludCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmlkZW50aXR5O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJHN0cmluZyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmlkZW50aXR5O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGVuY29kZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmVuY29kZTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0VuY29kZSRWYWx1ZSA9IHtjdG9yOiAnVmFsdWUnfTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHR1cGxlOCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZVR1cGxlODtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSR0dXBsZTcgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVUdXBsZTc7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdHVwbGU2ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlVHVwbGU2O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHR1cGxlNSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZVR1cGxlNTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSR0dXBsZTQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVUdXBsZTQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdHVwbGUzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlVHVwbGUzO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHR1cGxlMiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZVR1cGxlMjtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSR0dXBsZTEgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVUdXBsZTE7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLnN1Y2NlZWQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZmFpbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmZhaWw7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYW5kVGhlbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmFuZFRoZW47XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkY3VzdG9tRGVjb2RlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmN1c3RvbUFuZFRoZW47XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW47XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdmFsdWUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVQcmltaXRpdmUoJ3ZhbHVlJyk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWF5YmUgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlQ29udGFpbmVyLCAnbWF5YmUnLCBkZWNvZGVyKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbnVsbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZU51bGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYXJyYXkgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlQ29udGFpbmVyLCAnYXJyYXknLCBkZWNvZGVyKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbGlzdCA9IGZ1bmN0aW9uIChkZWNvZGVyKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVDb250YWluZXIsICdsaXN0JywgZGVjb2Rlcik7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGJvb2wgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVQcmltaXRpdmUoJ2Jvb2wnKTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRpbnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVQcmltaXRpdmUoJ2ludCcpO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGZsb2F0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlUHJpbWl0aXZlKCdmbG9hdCcpO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN0cmluZyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZVByaW1pdGl2ZSgnc3RyaW5nJyk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkb25lT2YgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5vbmVPZjtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRrZXlWYWx1ZVBhaXJzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlS2V5VmFsdWVQYWlycztcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3Q4ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0ODtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3Q3ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0NztcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3Q2ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0NjtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3Q1ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0NTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3Q0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0NDtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3QzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0MztcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3QyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0MjtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvYmplY3QxID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlT2JqZWN0MTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZV9vcHMgPSBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZV9vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRKc29uX0RlY29kZV9vcHNbJzo9J10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVGaWVsZDtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRhdCA9IEYyKFxuXHRmdW5jdGlvbiAoZmllbGRzLCBkZWNvZGVyKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0XHRcdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZV9vcHNbJzo9J10sIHgsIHkpO1xuXHRcdFx0XHR9KSxcblx0XHRcdGRlY29kZXIsXG5cdFx0XHRmaWVsZHMpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRkZWNvZGVTdHJpbmcgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW5PblN0cmluZztcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVPYmplY3QxO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGRpY3QgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwLFxuXHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZnJvbUxpc3QsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUka2V5VmFsdWVQYWlycyhkZWNvZGVyKSk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJERlY29kZXIgPSB7Y3RvcjogJ0RlY29kZXInfTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJFByb2Nlc3Mka2lsbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIua2lsbDtcbnZhciBfZWxtX2xhbmckY29yZSRQcm9jZXNzJHNsZWVwID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zbGVlcDtcbnZhciBfZWxtX2xhbmckY29yZSRQcm9jZXNzJHNwYXduID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zcGF3bjtcblxudmFyIF9lbG1fbGFuZyRkb20kTmF0aXZlX0RvbSA9IGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBvbihub2RlKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24oZXZlbnROYW1lLCBkZWNvZGVyLCB0b1Rhc2spXG5cdHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdGZ1bmN0aW9uIHBlcmZvcm1UYXNrKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gQTIoX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUsIGRlY29kZXIsIGV2ZW50KTtcblx0XHRcdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnT2snKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTcGF3bih0b1Rhc2socmVzdWx0Ll8wKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcGVyZm9ybVRhc2spO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwZXJmb3JtVGFzayk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9O1xufVxuXG52YXIgckFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0PyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblx0OiBmdW5jdGlvbihjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9O1xuXG5mdW5jdGlvbiB3aXRoTm9kZShpZCwgZG9TdHVmZilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJBRihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0XHRpZiAobm9kZSA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5mYWlsKHsgY3RvcjogJ05vdEZvdW5kJywgXzA6IGlkIH0pKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKGRvU3R1ZmYobm9kZSkpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuLy8gRk9DVVNcblxuZnVuY3Rpb24gZm9jdXMoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuZm9jdXMoKTtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGJsdXIoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuYmx1cigpO1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwO1xuXHR9KTtcbn1cblxuXG4vLyBTQ1JPTExJTkdcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5zY3JvbGxUb3A7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3AoaWQsIGRlc2lyZWRTY3JvbGxUb3ApXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuc2Nyb2xsVG9wID0gZGVzaXJlZFNjcm9sbFRvcDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvQm90dG9tKGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdChpZClcbntcblx0cmV0dXJuIHdpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGUuc2Nyb2xsTGVmdDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoaWQsIGRlc2lyZWRTY3JvbGxMZWZ0KVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRub2RlLnNjcm9sbExlZnQgPSBkZXNpcmVkU2Nyb2xsTGVmdDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvUmlnaHQoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuc2Nyb2xsTGVmdCA9IG5vZGUuc2Nyb2xsV2lkdGg7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTA7XG5cdH0pO1xufVxuXG5cbi8vIFNJWkVcblxuZnVuY3Rpb24gd2lkdGgob3B0aW9ucywgaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdHN3aXRjaCAob3B0aW9ucy5jdG9yKVxuXHRcdHtcblx0XHRcdGNhc2UgJ0NvbnRlbnQnOlxuXHRcdFx0XHRyZXR1cm4gbm9kZS5zY3JvbGxXaWR0aDtcblx0XHRcdGNhc2UgJ1Zpc2libGVDb250ZW50Jzpcblx0XHRcdFx0cmV0dXJuIG5vZGUuY2xpZW50V2lkdGg7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzJzpcblx0XHRcdFx0cmV0dXJuIG5vZGUub2Zmc2V0V2lkdGg7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzQW5kTWFyZ2lucyc6XG5cdFx0XHRcdHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KG9wdGlvbnMsIGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRzd2l0Y2ggKG9wdGlvbnMuY3Rvcilcblx0XHR7XG5cdFx0XHRjYXNlICdDb250ZW50Jzpcblx0XHRcdFx0cmV0dXJuIG5vZGUuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0Y2FzZSAnVmlzaWJsZUNvbnRlbnQnOlxuXHRcdFx0XHRyZXR1cm4gbm9kZS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzJzpcblx0XHRcdFx0cmV0dXJuIG5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0Y2FzZSAnVmlzaWJsZUNvbnRlbnRXaXRoQm9yZGVyc0FuZE1hcmdpbnMnOlxuXHRcdFx0XHR2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuXHRcdH1cblx0fSk7XG59XG5cbnJldHVybiB7XG5cdG9uRG9jdW1lbnQ6IEYzKG9uKGRvY3VtZW50KSksXG5cdG9uV2luZG93OiBGMyhvbih3aW5kb3cpKSxcblxuXHRmb2N1czogZm9jdXMsXG5cdGJsdXI6IGJsdXIsXG5cblx0Z2V0U2Nyb2xsVG9wOiBnZXRTY3JvbGxUb3AsXG5cdHNldFNjcm9sbFRvcDogRjIoc2V0U2Nyb2xsVG9wKSxcblx0Z2V0U2Nyb2xsTGVmdDogZ2V0U2Nyb2xsTGVmdCxcblx0c2V0U2Nyb2xsTGVmdDogRjIoc2V0U2Nyb2xsTGVmdCksXG5cdHRvQm90dG9tOiB0b0JvdHRvbSxcblx0dG9SaWdodDogdG9SaWdodCxcblxuXHRoZWlnaHQ6IEYyKGhlaWdodCksXG5cdHdpZHRoOiBGMih3aWR0aClcbn07XG5cbn0oKTtcblxudmFyIF9lbG1fbGFuZyRkb20kRG9tX0xvd0xldmVsJG9uV2luZG93ID0gX2VsbV9sYW5nJGRvbSROYXRpdmVfRG9tLm9uV2luZG93O1xudmFyIF9lbG1fbGFuZyRkb20kRG9tX0xvd0xldmVsJG9uRG9jdW1lbnQgPSBfZWxtX2xhbmckZG9tJE5hdGl2ZV9Eb20ub25Eb2N1bWVudDtcblxuLy9pbXBvcnQgTmF0aXZlLkpzb24gLy9cblxudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSROYXRpdmVfVmlydHVhbERvbSA9IGZ1bmN0aW9uKCkge1xuXG52YXIgU1RZTEVfS0VZID0gJ1NUWUxFJztcbnZhciBFVkVOVF9LRVkgPSAnRVZFTlQnO1xudmFyIEFUVFJfS0VZID0gJ0FUVFInO1xudmFyIEFUVFJfTlNfS0VZID0gJ0FUVFJfTlMnO1xuXG5cblxuLy8vLy8vLy8vLy8vICBWSVJUVUFMIERPTSBOT0RFUyAgLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gdGV4dChzdHJpbmcpXG57XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6IHN0cmluZ1xuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIG5vZGUodGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpIHtcblx0XHRyZXR1cm4gbm9kZUhlbHAodGFnLCBmYWN0TGlzdCwga2lkTGlzdCk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIG5vZGVIZWxwKHRhZywgZmFjdExpc3QsIGtpZExpc3QpXG57XG5cdHZhciBvcmdhbml6ZWQgPSBvcmdhbml6ZUZhY3RzKGZhY3RMaXN0KTtcblx0dmFyIG5hbWVzcGFjZSA9IG9yZ2FuaXplZC5uYW1lc3BhY2U7XG5cdHZhciBmYWN0cyA9IG9yZ2FuaXplZC5mYWN0cztcblxuXHR2YXIgY2hpbGRyZW4gPSBbXTtcblx0dmFyIGRlc2NlbmRhbnRzQ291bnQgPSAwO1xuXHR3aGlsZSAoa2lkTGlzdC5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dmFyIGtpZCA9IGtpZExpc3QuXzA7XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmRlc2NlbmRhbnRzQ291bnQgfHwgMCk7XG5cdFx0Y2hpbGRyZW4ucHVzaChraWQpO1xuXHRcdGtpZExpc3QgPSBraWRMaXN0Ll8xO1xuXHR9XG5cdGRlc2NlbmRhbnRzQ291bnQgKz0gY2hpbGRyZW4ubGVuZ3RoO1xuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ25vZGUnLFxuXHRcdHRhZzogdGFnLFxuXHRcdGZhY3RzOiBmYWN0cyxcblx0XHRjaGlsZHJlbjogY2hpbGRyZW4sXG5cdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UsXG5cdFx0ZGVzY2VuZGFudHNDb3VudDogZGVzY2VuZGFudHNDb3VudFxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIGtleWVkTm9kZSh0YWcsIGZhY3RMaXN0LCBraWRMaXN0KVxue1xuXHR2YXIgb3JnYW5pemVkID0gb3JnYW5pemVGYWN0cyhmYWN0TGlzdCk7XG5cdHZhciBuYW1lc3BhY2UgPSBvcmdhbml6ZWQubmFtZXNwYWNlO1xuXHR2YXIgZmFjdHMgPSBvcmdhbml6ZWQuZmFjdHM7XG5cblx0dmFyIGNoaWxkcmVuID0gW107XG5cdHZhciBkZXNjZW5kYW50c0NvdW50ID0gMDtcblx0d2hpbGUgKGtpZExpc3QuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdHZhciBraWQgPSBraWRMaXN0Ll8wO1xuXHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5fMS5kZXNjZW5kYW50c0NvdW50IHx8IDApO1xuXHRcdGNoaWxkcmVuLnB1c2goa2lkKTtcblx0XHRraWRMaXN0ID0ga2lkTGlzdC5fMTtcblx0fVxuXHRkZXNjZW5kYW50c0NvdW50ICs9IGNoaWxkcmVuLmxlbmd0aDtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdrZXllZC1ub2RlJyxcblx0XHR0YWc6IHRhZyxcblx0XHRmYWN0czogZmFjdHMsXG5cdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuXHRcdGRlc2NlbmRhbnRzQ291bnQ6IGRlc2NlbmRhbnRzQ291bnRcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBjdXN0b20oZmFjdExpc3QsIG1vZGVsLCBpbXBsKVxue1xuXHR2YXIgZmFjdHMgPSBvcmdhbml6ZUZhY3RzKGZhY3RMaXN0KS5mYWN0cztcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjdXN0b20nLFxuXHRcdGZhY3RzOiBmYWN0cyxcblx0XHRtb2RlbDogbW9kZWwsXG5cdFx0aW1wbDogaW1wbFxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIG1hcCh0YWdnZXIsIG5vZGUpXG57XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RhZ2dlcicsXG5cdFx0dGFnZ2VyOiB0YWdnZXIsXG5cdFx0bm9kZTogbm9kZSxcblx0XHRkZXNjZW5kYW50c0NvdW50OiAxICsgKG5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwKVxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIHRodW5rKGZ1bmMsIGFyZ3MsIHRodW5rKVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0aHVuaycsXG5cdFx0ZnVuYzogZnVuYyxcblx0XHRhcmdzOiBhcmdzLFxuXHRcdHRodW5rOiB0aHVuayxcblx0XHRub2RlOiB1bmRlZmluZWRcblx0fTtcbn1cblxuZnVuY3Rpb24gbGF6eShmbiwgYSlcbntcblx0cmV0dXJuIHRodW5rKGZuLCBbYV0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbihhKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxhenkyKGZuLCBhLCBiKVxue1xuXHRyZXR1cm4gdGh1bmsoZm4sIFthLGJdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTIoZm4sIGEsIGIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbGF6eTMoZm4sIGEsIGIsIGMpXG57XG5cdHJldHVybiB0aHVuayhmbiwgW2EsYixjXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEzKGZuLCBhLCBiLCBjKTtcblx0fSk7XG59XG5cblxuXG4vLyBGQUNUU1xuXG5cbmZ1bmN0aW9uIG9yZ2FuaXplRmFjdHMoZmFjdExpc3QpXG57XG5cdHZhciBuYW1lc3BhY2UsIGZhY3RzID0ge307XG5cblx0d2hpbGUgKGZhY3RMaXN0LmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHR2YXIgZW50cnkgPSBmYWN0TGlzdC5fMDtcblx0XHR2YXIga2V5ID0gZW50cnkua2V5O1xuXG5cdFx0aWYgKGtleSA9PT0gQVRUUl9LRVkgfHwga2V5ID09PSBBVFRSX05TX0tFWSB8fCBrZXkgPT09IEVWRU5UX0tFWSlcblx0XHR7XG5cdFx0XHR2YXIgc3ViRmFjdHMgPSBmYWN0c1trZXldIHx8IHt9O1xuXHRcdFx0c3ViRmFjdHNbZW50cnkucmVhbEtleV0gPSBlbnRyeS52YWx1ZTtcblx0XHRcdGZhY3RzW2tleV0gPSBzdWJGYWN0cztcblx0XHR9XG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBTVFlMRV9LRVkpXG5cdFx0e1xuXHRcdFx0dmFyIHN0eWxlcyA9IGZhY3RzW2tleV0gfHwge307XG5cdFx0XHR2YXIgc3R5bGVMaXN0ID0gZW50cnkudmFsdWU7XG5cdFx0XHR3aGlsZSAoc3R5bGVMaXN0LmN0b3IgIT09ICdbXScpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBzdHlsZSA9IHN0eWxlTGlzdC5fMDtcblx0XHRcdFx0c3R5bGVzW3N0eWxlLl8wXSA9IHN0eWxlLl8xO1xuXHRcdFx0XHRzdHlsZUxpc3QgPSBzdHlsZUxpc3QuXzE7XG5cdFx0XHR9XG5cdFx0XHRmYWN0c1trZXldID0gc3R5bGVzO1xuXHRcdH1cblx0XHRlbHNlIGlmIChrZXkgPT09ICduYW1lc3BhY2UnKVxuXHRcdHtcblx0XHRcdG5hbWVzcGFjZSA9IGVudHJ5LnZhbHVlO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0ZmFjdHNba2V5XSA9IGVudHJ5LnZhbHVlO1xuXHRcdH1cblx0XHRmYWN0TGlzdCA9IGZhY3RMaXN0Ll8xO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRmYWN0czogZmFjdHMsXG5cdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0fTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgUFJPUEVSVElFUyBBTkQgQVRUUklCVVRFUyAgLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gc3R5bGUodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBTVFlMRV9LRVksXG5cdFx0dmFsdWU6IHZhbHVlXG5cdH07XG59XG5cblxuZnVuY3Rpb24gcHJvcGVydHkoa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHRrZXk6IGtleSxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBhdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHRrZXk6IEFUVFJfS0VZLFxuXHRcdHJlYWxLZXk6IGtleSxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBBVFRSX05TX0tFWSxcblx0XHRyZWFsS2V5OiBrZXksXG5cdFx0dmFsdWU6IHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlXG5cdFx0fVxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIG9uKG5hbWUsIG9wdGlvbnMsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBFVkVOVF9LRVksXG5cdFx0cmVhbEtleTogbmFtZSxcblx0XHR2YWx1ZToge1xuXHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdGRlY29kZXI6IGRlY29kZXJcblx0XHR9XG5cdH07XG59XG5cblxuZnVuY3Rpb24gZXF1YWxFdmVudHMoYSwgYilcbntcblx0aWYgKCFhLm9wdGlvbnMgPT09IGIub3B0aW9ucylcblx0e1xuXHRcdGlmIChhLnN0b3BQcm9wYWdhdGlvbiAhPT0gYi5zdG9wUHJvcGFnYXRpb24gfHwgYS5wcmV2ZW50RGVmYXVsdCAhPT0gYi5wcmV2ZW50RGVmYXVsdClcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5lcXVhbGl0eShhLmRlY29kZXIsIGIuZGVjb2Rlcik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIFJFTkRFUkVSICAvLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiByZW5kZXJlcihwYXJlbnQsIHRhZ2dlciwgaW5pdGlhbFZpcnR1YWxOb2RlKVxue1xuXHR2YXIgZXZlbnROb2RlID0geyB0YWdnZXI6IHRhZ2dlciwgcGFyZW50OiB1bmRlZmluZWQgfTtcblxuXHR2YXIgZG9tTm9kZSA9IHJlbmRlcihpbml0aWFsVmlydHVhbE5vZGUsIGV2ZW50Tm9kZSk7XG5cdHBhcmVudC5hcHBlbmRDaGlsZChkb21Ob2RlKTtcblxuXHR2YXIgc3RhdGUgPSAnTk9fUkVRVUVTVCc7XG5cdHZhciBjdXJyZW50VmlydHVhbE5vZGUgPSBpbml0aWFsVmlydHVhbE5vZGU7XG5cdHZhciBuZXh0VmlydHVhbE5vZGUgPSBpbml0aWFsVmlydHVhbE5vZGU7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJWaXJ0dWFsTm9kZSh2Tm9kZSlcblx0e1xuXHRcdGlmIChzdGF0ZSA9PT0gJ05PX1JFUVVFU1QnKVxuXHRcdHtcblx0XHRcdHJBRih1cGRhdGVJZk5lZWRlZCk7XG5cdFx0fVxuXHRcdHN0YXRlID0gJ1BFTkRJTkdfUkVRVUVTVCc7XG5cdFx0bmV4dFZpcnR1YWxOb2RlID0gdk5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVJZk5lZWRlZCgpXG5cdHtcblx0XHRzd2l0Y2ggKHN0YXRlKVxuXHRcdHtcblx0XHRcdGNhc2UgJ05PX1JFUVVFU1QnOlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1VuZXhwZWN0ZWQgZHJhdyBjYWxsYmFjay5cXG4nICtcblx0XHRcdFx0XHQnUGxlYXNlIHJlcG9ydCB0aGlzIHRvIDxodHRwczovL2dpdGh1Yi5jb20vZWxtLWxhbmcvY29yZS9pc3N1ZXM+Lidcblx0XHRcdFx0KTtcblxuXHRcdFx0Y2FzZSAnUEVORElOR19SRVFVRVNUJzpcblx0XHRcdFx0ckFGKHVwZGF0ZUlmTmVlZGVkKTtcblx0XHRcdFx0c3RhdGUgPSAnRVhUUkFfUkVRVUVTVCc7XG5cblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBkaWZmKGN1cnJlbnRWaXJ0dWFsTm9kZSwgbmV4dFZpcnR1YWxOb2RlKTtcblx0XHRcdFx0ZG9tTm9kZSA9IGFwcGx5UGF0Y2hlcyhkb21Ob2RlLCBjdXJyZW50VmlydHVhbE5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdGN1cnJlbnRWaXJ0dWFsTm9kZSA9IG5leHRWaXJ0dWFsTm9kZTtcblxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGNhc2UgJ0VYVFJBX1JFUVVFU1QnOlxuXHRcdFx0XHRzdGF0ZSA9ICdOT19SRVFVRVNUJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHVwZGF0ZTogcmVnaXN0ZXJWaXJ0dWFsTm9kZSB9O1xufVxuXG5cbnZhciByQUYgPVxuXHR0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdFx0OiBmdW5jdGlvbihjYikgeyBzZXRUaW1lb3V0KGNiLCAxMDAwIC8gNjApOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vICBSRU5ERVIgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIHJlbmRlcih2Tm9kZSwgZXZlbnROb2RlKVxue1xuXHRzd2l0Y2ggKHZOb2RlLnR5cGUpXG5cdHtcblx0XHRjYXNlICd0aHVuayc6XG5cdFx0XHRpZiAoIXZOb2RlLm5vZGUpXG5cdFx0XHR7XG5cdFx0XHRcdHZOb2RlLm5vZGUgPSB2Tm9kZS50aHVuaygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlbmRlcih2Tm9kZS5ub2RlLCBldmVudE5vZGUpO1xuXG5cdFx0Y2FzZSAndGFnZ2VyJzpcblx0XHRcdHZhciBzdWJOb2RlID0gdk5vZGUubm9kZTtcblx0XHRcdHZhciB0YWdnZXIgPSB2Tm9kZS50YWdnZXI7XG5cblx0XHRcdHdoaWxlIChzdWJOb2RlLnR5cGUgPT09ICd0YWdnZXInKVxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlb2YgdGFnZ2VyICE9PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8gdGFnZ2VyID0gW3RhZ2dlciwgc3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiB0YWdnZXIucHVzaChzdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0c3ViTm9kZSA9IHN1Yk5vZGUubm9kZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN1YkV2ZW50Um9vdCA9IHtcblx0XHRcdFx0dGFnZ2VyOiB0YWdnZXIsXG5cdFx0XHRcdHBhcmVudDogZXZlbnROb2RlXG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgZG9tTm9kZSA9IHJlbmRlcihzdWJOb2RlLCBzdWJFdmVudFJvb3QpO1xuXHRcdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSBzdWJFdmVudFJvb3Q7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZOb2RlLnRleHQpO1xuXG5cdFx0Y2FzZSAnbm9kZSc6XG5cdFx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLm5hbWVzcGFjZVxuXHRcdFx0XHQ/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5uYW1lc3BhY2UsIHZOb2RlLnRhZylcblx0XHRcdFx0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZyk7XG5cblx0XHRcdGFwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5mYWN0cyk7XG5cblx0XHRcdHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKHJlbmRlcihjaGlsZHJlbltpXSwgZXZlbnROb2RlKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLm5hbWVzcGFjZVxuXHRcdFx0XHQ/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5uYW1lc3BhY2UsIHZOb2RlLnRhZylcblx0XHRcdFx0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZyk7XG5cblx0XHRcdGFwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5mYWN0cyk7XG5cblx0XHRcdHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKHJlbmRlcihjaGlsZHJlbltpXS5fMSwgZXZlbnROb2RlKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdHZhciBkb21Ob2RlID0gdk5vZGUuaW1wbC5yZW5kZXIodk5vZGUubW9kZWwpO1xuXHRcdFx0YXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmZhY3RzKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIEFQUExZIEZBQ1RTICAvLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBhcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZmFjdHMpXG57XG5cdGZvciAodmFyIGtleSBpbiBmYWN0cylcblx0e1xuXHRcdHZhciB2YWx1ZSA9IGZhY3RzW2tleV07XG5cblx0XHRzd2l0Y2ggKGtleSlcblx0XHR7XG5cdFx0XHRjYXNlIFNUWUxFX0tFWTpcblx0XHRcdFx0YXBwbHlTdHlsZXMoZG9tTm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBFVkVOVF9LRVk6XG5cdFx0XHRcdGFwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBVFRSX0tFWTpcblx0XHRcdFx0YXBwbHlBdHRycyhkb21Ob2RlLCB2YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFUVFJfTlNfS0VZOlxuXHRcdFx0XHRhcHBseUF0dHJzTlMoZG9tTm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmFsdWUnOlxuXHRcdFx0XHRpZiAoZG9tTm9kZVtrZXldICE9PSB2YWx1ZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRvbU5vZGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkb21Ob2RlW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKGRvbU5vZGUsIHN0eWxlcylcbntcblx0dmFyIGRvbU5vZGVTdHlsZSA9IGRvbU5vZGUuc3R5bGU7XG5cblx0Zm9yICh2YXIga2V5IGluIHN0eWxlcylcblx0e1xuXHRcdGRvbU5vZGVTdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlFdmVudHMoZG9tTm9kZSwgZXZlbnROb2RlLCBldmVudHMpXG57XG5cdHZhciBhbGxIYW5kbGVycyA9IGRvbU5vZGUuZWxtX2hhbmRsZXJzIHx8IHt9O1xuXG5cdGZvciAodmFyIGtleSBpbiBldmVudHMpXG5cdHtcblx0XHR2YXIgaGFuZGxlciA9IGFsbEhhbmRsZXJzW2tleV07XG5cdFx0dmFyIHZhbHVlID0gZXZlbnRzW2tleV07XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBoYW5kbGVyKTtcblx0XHRcdGFsbEhhbmRsZXJzW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHR2YXIgaGFuZGxlciA9IG1ha2VFdmVudEhhbmRsZXIoZXZlbnROb2RlLCB2YWx1ZSk7XG5cdFx0XHRkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBoYW5kbGVyKTtcblx0XHRcdGFsbEhhbmRsZXJzW2tleV0gPSBoYW5kbGVyO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0aGFuZGxlci5pbmZvID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0ZG9tTm9kZS5lbG1faGFuZGxlcnMgPSBhbGxIYW5kbGVycztcbn1cblxuZnVuY3Rpb24gbWFrZUV2ZW50SGFuZGxlcihldmVudE5vZGUsIGluZm8pXG57XG5cdGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihldmVudClcblx0e1xuXHRcdHZhciBpbmZvID0gZXZlbnRIYW5kbGVyLmluZm87XG5cblx0XHR2YXIgdmFsdWUgPSBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW4sIGluZm8uZGVjb2RlciwgZXZlbnQpO1xuXG5cdFx0aWYgKHZhbHVlLmN0b3IgPT09ICdPaycpXG5cdFx0e1xuXHRcdFx0dmFyIG9wdGlvbnMgPSBpbmZvLm9wdGlvbnM7XG5cdFx0XHRpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHR7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpXG5cdFx0XHR7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtZXNzYWdlID0gdmFsdWUuXzA7XG5cblx0XHRcdHZhciBjdXJyZW50RXZlbnROb2RlID0gZXZlbnROb2RlO1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRFdmVudE5vZGUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciB0YWdnZXIgPSBjdXJyZW50RXZlbnROb2RlLnRhZ2dlcjtcblx0XHRcdFx0aWYgKHR5cGVvZiB0YWdnZXIgPT09ICdmdW5jdGlvbicpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyKG1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSB0YWdnZXIubGVuZ3RoOyBpLS07IClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyW2ldKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50RXZlbnROb2RlID0gY3VycmVudEV2ZW50Tm9kZS5wYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGV2ZW50SGFuZGxlci5pbmZvID0gaW5mbztcblxuXHRyZXR1cm4gZXZlbnRIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBhcHBseUF0dHJzKGRvbU5vZGUsIGF0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyc05TKGRvbU5vZGUsIG5zQXR0cnMpXG57XG5cdGZvciAodmFyIGtleSBpbiBuc0F0dHJzKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBuc0F0dHJzW2tleV07XG5cdFx0dmFyIG5hbWVzcGFjZSA9IHBhaXIubmFtZXNwYWNlO1xuXHRcdHZhciB2YWx1ZSA9IHBhaXIudmFsdWU7XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5KTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGRvbU5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXksIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgRElGRiAgLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gZGlmZihhLCBiKVxue1xuXHR2YXIgcGF0Y2hlcyA9IFtdO1xuXHRkaWZmSGVscChhLCBiLCBwYXRjaGVzLCAwKTtcblx0cmV0dXJuIHBhdGNoZXM7XG59XG5cblxuZnVuY3Rpb24gbWFrZVBhdGNoKHR5cGUsIGluZGV4LCBkYXRhKVxue1xuXHRyZXR1cm4ge1xuXHRcdGluZGV4OiBpbmRleCxcblx0XHR0eXBlOiB0eXBlLFxuXHRcdGRhdGE6IGRhdGEsXG5cdFx0ZG9tTm9kZTogdW5kZWZpbmVkLFxuXHRcdGV2ZW50Tm9kZTogdW5kZWZpbmVkXG5cdH07XG59XG5cblxuZnVuY3Rpb24gZGlmZkhlbHAoYSwgYiwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdGlmIChhID09PSBiKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGFUeXBlID0gYS50eXBlO1xuXHR2YXIgYlR5cGUgPSBiLnR5cGU7XG5cblx0Ly8gQmFpbCBpZiB5b3UgcnVuIGludG8gZGlmZmVyZW50IHR5cGVzIG9mIG5vZGVzLiBJbXBsaWVzIHRoYXQgdGhlXG5cdC8vIHN0cnVjdHVyZSBoYXMgY2hhbmdlZCBzaWduaWZpY2FudGx5IGFuZCBpdCdzIG5vdCB3b3J0aCBhIGRpZmYuXG5cdGlmIChhVHlwZSAhPT0gYlR5cGUpXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTm93IHdlIGtub3cgdGhhdCBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSB0eXBlLlxuXHRzd2l0Y2ggKGJUeXBlKVxuXHR7XG5cdFx0Y2FzZSAndGh1bmsnOlxuXHRcdFx0dmFyIGFBcmdzID0gYS5hcmdzO1xuXHRcdFx0dmFyIGJBcmdzID0gYi5hcmdzO1xuXHRcdFx0dmFyIGkgPSBhQXJncy5sZW5ndGg7XG5cdFx0XHR2YXIgc2FtZSA9IGEuZnVuYyA9PT0gYi5mdW5jICYmIGkgPT09IGJBcmdzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChzYW1lICYmIGktLSlcblx0XHRcdHtcblx0XHRcdFx0c2FtZSA9IGFBcmdzW2ldID09PSBiQXJnc1tpXTtcblx0XHRcdH1cblx0XHRcdGlmIChzYW1lKVxuXHRcdFx0e1xuXHRcdFx0XHRiLm5vZGUgPSBhLm5vZGU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGIubm9kZSA9IGIudGh1bmsoKTtcblx0XHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0XHRkaWZmSGVscChhLm5vZGUsIGIubm9kZSwgc3ViUGF0Y2hlcywgMCk7XG5cdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXRodW5rJywgaW5kZXgsIHN1YlBhdGNoZXMpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgJ3RhZ2dlcic6XG5cdFx0XHQvLyBnYXRoZXIgbmVzdGVkIHRhZ2dlcnNcblx0XHRcdHZhciBhVGFnZ2VycyA9IGEudGFnZ2VyO1xuXHRcdFx0dmFyIGJUYWdnZXJzID0gYi50YWdnZXI7XG5cdFx0XHR2YXIgbmVzdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR2YXIgYVN1Yk5vZGUgPSBhLm5vZGU7XG5cdFx0XHR3aGlsZSAoYVN1Yk5vZGUudHlwZSA9PT0gJ3RhZ2dlcicpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiBhVGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IGFUYWdnZXJzID0gW2FUYWdnZXJzLCBhU3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiBhVGFnZ2Vycy5wdXNoKGFTdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0YVN1Yk5vZGUgPSBhU3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYlN1Yk5vZGUgPSBiLm5vZGU7XG5cdFx0XHR3aGlsZSAoYlN1Yk5vZGUudHlwZSA9PT0gJ3RhZ2dlcicpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiBiVGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IGJUYWdnZXJzID0gW2JUYWdnZXJzLCBiU3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiBiVGFnZ2Vycy5wdXNoKGJTdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0YlN1Yk5vZGUgPSBiU3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKdXN0IGJhaWwgaWYgZGlmZmVyZW50IG51bWJlcnMgb2YgdGFnZ2Vycy4gVGhpcyBpbXBsaWVzIHRoZVxuXHRcdFx0Ly8gc3RydWN0dXJlIG9mIHRoZSB2aXJ0dWFsIERPTSBoYXMgY2hhbmdlZC5cblx0XHRcdGlmIChuZXN0aW5nICYmIGFUYWdnZXJzLmxlbmd0aCAhPT0gYlRhZ2dlcnMubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgaWYgdGFnZ2VycyBhcmUgXCJ0aGUgc2FtZVwiXG5cdFx0XHRpZiAobmVzdGluZyA/ICFwYWlyd2lzZVJlZkVxdWFsKGFUYWdnZXJzLCBiVGFnZ2VycykgOiBhVGFnZ2VycyAhPT0gYlRhZ2dlcnMpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtdGFnZ2VyJywgaW5kZXgsIGJUYWdnZXJzKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRpZmYgZXZlcnl0aGluZyBiZWxvdyB0aGUgdGFnZ2Vyc1xuXHRcdFx0ZGlmZkhlbHAoYVN1Yk5vZGUsIGJTdWJOb2RlLCBwYXRjaGVzLCBpbmRleCArIDEpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRpZiAoYS50ZXh0ICE9PSBiLnRleHQpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtdGV4dCcsIGluZGV4LCBiLnRleHQpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlICdub2RlJzpcblx0XHRcdC8vIEJhaWwgaWYgb2J2aW91cyBpbmRpY2F0b3JzIGhhdmUgY2hhbmdlZC4gSW1wbGllcyBtb3JlIHNlcmlvdXNcblx0XHRcdC8vIHN0cnVjdHVyYWwgY2hhbmdlcyBzdWNoIHRoYXQgaXQncyBub3Qgd29ydGggaXQgdG8gZGlmZi5cblx0XHRcdGlmIChhLnRhZyAhPT0gYi50YWcgfHwgYS5uYW1lc3BhY2UgIT09IGIubmFtZXNwYWNlKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGZhY3RzRGlmZiA9IGRpZmZGYWN0cyhhLmZhY3RzLCBiLmZhY3RzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBmYWN0c0RpZmYgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLWZhY3RzJywgaW5kZXgsIGZhY3RzRGlmZikpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oYSwgYiwgcGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHQvLyBCYWlsIGlmIG9idmlvdXMgaW5kaWNhdG9ycyBoYXZlIGNoYW5nZWQuIEltcGxpZXMgbW9yZSBzZXJpb3VzXG5cdFx0XHQvLyBzdHJ1Y3R1cmFsIGNoYW5nZXMgc3VjaCB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0IHRvIGRpZmYuXG5cdFx0XHRpZiAoYS50YWcgIT09IGIudGFnIHx8IGEubmFtZXNwYWNlICE9PSBiLm5hbWVzcGFjZSlcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1yZWRyYXcnLCBpbmRleCwgYikpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmYWN0c0RpZmYgPSBkaWZmRmFjdHMoYS5mYWN0cywgYi5mYWN0cyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZmFjdHNEaWZmICE9PSAndW5kZWZpbmVkJylcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1mYWN0cycsIGluZGV4LCBmYWN0c0RpZmYpKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlmZktleWVkQ2hpbGRyZW4oYSwgYiwgcGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdGlmIChhLmltcGwgIT09IGIuaW1wbClcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1yZWRyYXcnLCBpbmRleCwgYikpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmYWN0c0RpZmYgPSBkaWZmRmFjdHMoYS5mYWN0cywgYi5mYWN0cyk7XG5cdFx0XHRpZiAodHlwZW9mIGZhY3RzRGlmZiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtZmFjdHMnLCBpbmRleCwgZmFjdHNEaWZmKSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXRjaCA9IGIuaW1wbC5kaWZmKGEsYik7XG5cdFx0XHRpZiAocGF0Y2gpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtY3VzdG9tJywgaW5kZXgsIHBhdGNoKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuLy8gYXNzdW1lcyB0aGUgaW5jb21pbmcgYXJyYXlzIGFyZSB0aGUgc2FtZSBsZW5ndGhcbmZ1bmN0aW9uIHBhaXJ3aXNlUmVmRXF1YWwoYXMsIGJzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0aWYgKGFzW2ldICE9PSBic1tpXSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gVE9ETyBJbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IGRpZmYgb2JqZWN0LCBpdCdzIHBvc3NpYmxlIHRvIGp1c3QgdGVzdCBpZlxuLy8gdGhlcmUgKmlzKiBhIGRpZmYuIER1cmluZyB0aGUgYWN0dWFsIHBhdGNoLCBkbyB0aGUgZGlmZiBhZ2FpbiBhbmQgbWFrZSB0aGVcbi8vIG1vZGlmaWNhdGlvbnMgZGlyZWN0bHkuIFRoaXMgd2F5LCB0aGVyZSdzIG5vIG5ldyBhbGxvY2F0aW9ucy4gV29ydGggaXQ/XG5mdW5jdGlvbiBkaWZmRmFjdHMoYSwgYiwgY2F0ZWdvcnkpXG57XG5cdHZhciBkaWZmO1xuXG5cdC8vIGxvb2sgZm9yIGNoYW5nZXMgYW5kIHJlbW92YWxzXG5cdGZvciAodmFyIGFLZXkgaW4gYSlcblx0e1xuXHRcdGlmIChhS2V5ID09PSBTVFlMRV9LRVkgfHwgYUtleSA9PT0gRVZFTlRfS0VZIHx8IGFLZXkgPT09IEFUVFJfS0VZIHx8IGFLZXkgPT09IEFUVFJfTlNfS0VZKVxuXHRcdHtcblx0XHRcdHZhciBzdWJEaWZmID0gZGlmZkZhY3RzKGFbYUtleV0sIGJbYUtleV0gfHwge30sIGFLZXkpO1xuXHRcdFx0aWYgKHN1YkRpZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0XHRkaWZmW2FLZXldID0gc3ViRGlmZjtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBpZiBub3QgaW4gdGhlIG5ldyBmYWN0c1xuXHRcdGlmICghKGFLZXkgaW4gYikpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW2FLZXldID1cblx0XHRcdFx0KHR5cGVvZiBjYXRlZ29yeSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0PyAodHlwZW9mIGFbYUtleV0gPT09ICdzdHJpbmcnID8gJycgOiBudWxsKVxuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSBTVFlMRV9LRVkpXG5cdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSBFVkVOVF9LRVkgfHwgY2F0ZWdvcnkgPT09IEFUVFJfS0VZKVxuXHRcdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHR7IG5hbWVzcGFjZTogYVthS2V5XS5uYW1lc3BhY2UsIHZhbHVlOiB1bmRlZmluZWQgfTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIGFWYWx1ZSA9IGFbYUtleV07XG5cdFx0dmFyIGJWYWx1ZSA9IGJbYUtleV07XG5cblx0XHQvLyByZWZlcmVuY2UgZXF1YWwsIHNvIGRvbid0IHdvcnJ5IGFib3V0IGl0XG5cdFx0aWYgKGFWYWx1ZSA9PT0gYlZhbHVlICYmIGFLZXkgIT09ICd2YWx1ZSdcblx0XHRcdHx8IGNhdGVnb3J5ID09PSBFVkVOVF9LRVkgJiYgZXF1YWxFdmVudHMoYVZhbHVlLCBiVmFsdWUpKVxuXHRcdHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdGRpZmZbYUtleV0gPSBiVmFsdWU7XG5cdH1cblxuXHQvLyBhZGQgbmV3IHN0dWZmXG5cdGZvciAodmFyIGJLZXkgaW4gYilcblx0e1xuXHRcdGlmICghKGJLZXkgaW4gYSkpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW2JLZXldID0gYltiS2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGlmZjtcbn1cblxuXG5mdW5jdGlvbiBkaWZmQ2hpbGRyZW4oYVBhcmVudCwgYlBhcmVudCwgcGF0Y2hlcywgcm9vdEluZGV4KVxue1xuXHR2YXIgYUNoaWxkcmVuID0gYVBhcmVudC5jaGlsZHJlbjtcblx0dmFyIGJDaGlsZHJlbiA9IGJQYXJlbnQuY2hpbGRyZW47XG5cblx0dmFyIGFMZW4gPSBhQ2hpbGRyZW4ubGVuZ3RoO1xuXHR2YXIgYkxlbiA9IGJDaGlsZHJlbi5sZW5ndGg7XG5cblx0Ly8gRklHVVJFIE9VVCBJRiBUSEVSRSBBUkUgSU5TRVJUUyBPUiBSRU1PVkFMU1xuXG5cdGlmIChhTGVuID4gYkxlbilcblx0e1xuXHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtcmVtb3ZlLWxhc3QnLCByb290SW5kZXgsIGFMZW4gLSBiTGVuKSk7XG5cdH1cblx0ZWxzZSBpZiAoYUxlbiA8IGJMZW4pXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLWFwcGVuZCcsIHJvb3RJbmRleCwgYkNoaWxkcmVuLnNsaWNlKGFMZW4pKSk7XG5cdH1cblxuXHQvLyBQQUlSV0lTRSBESUZGIEVWRVJZVEhJTkcgRUxTRVxuXG5cdHZhciBpbmRleCA9IHJvb3RJbmRleDtcblx0dmFyIG1pbkxlbiA9IGFMZW4gPCBiTGVuID8gYUxlbiA6IGJMZW47XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWluTGVuOyBpKyspXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciBhQ2hpbGQgPSBhQ2hpbGRyZW5baV07XG5cdFx0ZGlmZkhlbHAoYUNoaWxkLCBiQ2hpbGRyZW5baV0sIHBhdGNoZXMsIGluZGV4KTtcblx0XHRpbmRleCArPSBhQ2hpbGQuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIEtFWUVEIERJRkYgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpZmZLZXllZENoaWxkcmVuKGFQYXJlbnQsIGJQYXJlbnQsIHBhdGNoZXMsIHJvb3RJbmRleClcbntcblx0dmFyIGxvY2FsUGF0Y2hlcyA9IFtdO1xuXG5cdHZhciBjaGFuZ2VzID0ge307IC8vIERpY3QgU3RyaW5nIEVudHJ5XG5cdHZhciBpbnNlcnRzID0gW107IC8vIEFycmF5IHsgaW5kZXggOiBJbnQsIGVudHJ5IDogRW50cnkgfVxuXHQvLyB0eXBlIEVudHJ5ID0geyB0YWcgOiBTdHJpbmcsIHZub2RlIDogVk5vZGUsIGluZGV4IDogSW50LCBkYXRhIDogXyB9XG5cblx0dmFyIGFDaGlsZHJlbiA9IGFQYXJlbnQuY2hpbGRyZW47XG5cdHZhciBiQ2hpbGRyZW4gPSBiUGFyZW50LmNoaWxkcmVuO1xuXHR2YXIgYUxlbiA9IGFDaGlsZHJlbi5sZW5ndGg7XG5cdHZhciBiTGVuID0gYkNoaWxkcmVuLmxlbmd0aDtcblx0dmFyIGFJbmRleCA9IDA7XG5cdHZhciBiSW5kZXggPSAwO1xuXG5cdHZhciBpbmRleCA9IHJvb3RJbmRleDtcblxuXHR3aGlsZSAoYUluZGV4IDwgYUxlbiAmJiBiSW5kZXggPCBiTGVuKVxuXHR7XG5cdFx0dmFyIGEgPSBhQ2hpbGRyZW5bYUluZGV4XTtcblx0XHR2YXIgYiA9IGJDaGlsZHJlbltiSW5kZXhdO1xuXG5cdFx0dmFyIGFLZXkgPSBhLl8wO1xuXHRcdHZhciBiS2V5ID0gYi5fMDtcblx0XHR2YXIgYU5vZGUgPSBhLl8xO1xuXHRcdHZhciBiTm9kZSA9IGIuXzE7XG5cblx0XHQvLyBjaGVjayBpZiBrZXlzIG1hdGNoXG5cblx0XHRpZiAoYUtleSA9PT0gYktleSlcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5vZGUsIGJOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4Kys7XG5cdFx0XHRiSW5kZXgrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGxvb2sgYWhlYWQgMSB0byBkZXRlY3QgaW5zZXJ0aW9ucyBhbmQgcmVtb3ZhbHMuXG5cblx0XHR2YXIgYUxvb2tBaGVhZCA9IGFJbmRleCArIDEgPCBhTGVuO1xuXHRcdHZhciBiTG9va0FoZWFkID0gYkluZGV4ICsgMSA8IGJMZW47XG5cblx0XHRpZiAoYUxvb2tBaGVhZClcblx0XHR7XG5cdFx0XHR2YXIgYU5leHQgPSBhQ2hpbGRyZW5bYUluZGV4ICsgMV07XG5cdFx0XHR2YXIgYU5leHRLZXkgPSBhTmV4dC5fMDtcblx0XHRcdHZhciBhTmV4dE5vZGUgPSBhTmV4dC5fMTtcblx0XHRcdHZhciBvbGRNYXRjaCA9IGJLZXkgPT09IGFOZXh0S2V5O1xuXHRcdH1cblxuXHRcdGlmIChiTG9va0FoZWFkKVxuXHRcdHtcblx0XHRcdHZhciBiTmV4dCA9IGJDaGlsZHJlbltiSW5kZXggKyAxXTtcblx0XHRcdHZhciBiTmV4dEtleSA9IGJOZXh0Ll8wO1xuXHRcdFx0dmFyIGJOZXh0Tm9kZSA9IGJOZXh0Ll8xO1xuXHRcdFx0dmFyIG5ld01hdGNoID0gYUtleSA9PT0gYk5leHRLZXk7XG5cdFx0fVxuXG5cblx0XHQvLyBzd2FwIGEgYW5kIGJcblx0XHRpZiAoYUxvb2tBaGVhZCAmJiBiTG9va0FoZWFkICYmIG5ld01hdGNoICYmIG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRkaWZmSGVscChhTm9kZSwgYk5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBiTm9kZSwgYkluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTmV4dE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOZXh0Tm9kZS5kZXNjZW5kYW50c0NvdW50IHx8IDA7XG5cblx0XHRcdGFJbmRleCArPSAyO1xuXHRcdFx0YkluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpbnNlcnQgYlxuXHRcdGlmIChiTG9va0FoZWFkICYmIG5ld01hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRpbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgYktleSwgYk5vZGUsIGJJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRkaWZmSGVscChhTm9kZSwgYk5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4ICs9IDE7XG5cdFx0XHRiSW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBhXG5cdFx0aWYgKGFMb29rQWhlYWQgJiYgb2xkTWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gYU5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5leHROb2RlLCBiTm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSBhTmV4dE5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRhSW5kZXggKz0gMjtcblx0XHRcdGJJbmRleCArPSAxO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIGEsIGluc2VydCBiXG5cdFx0aWYgKGFMb29rQWhlYWQgJiYgYkxvb2tBaGVhZCAmJiBhTmV4dEtleSA9PT0gYk5leHRLZXkpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGJLZXksIGJOb2RlLCBiSW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0gYU5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5leHROb2RlLCBiTmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gYU5leHROb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4ICs9IDI7XG5cdFx0XHRiSW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0Ly8gZWF0IHVwIGFueSByZW1haW5pbmcgbm9kZXMgd2l0aCByZW1vdmVOb2RlIGFuZCBpbnNlcnROb2RlXG5cblx0d2hpbGUgKGFJbmRleCA8IGFMZW4pXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciBhID0gYUNoaWxkcmVuW2FJbmRleF07XG5cdFx0dmFyIGFOb2RlID0gYS5fMTtcblx0XHRyZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgYS5fMCwgYU5vZGUsIGluZGV4KTtcblx0XHRpbmRleCArPSBhTm9kZS5kZXNjZW5kYW50c0NvdW50IHx8IDA7XG5cdFx0YUluZGV4Kys7XG5cdH1cblxuXHR2YXIgZW5kSW5zZXJ0cztcblx0d2hpbGUgKGJJbmRleCA8IGJMZW4pXG5cdHtcblx0XHRlbmRJbnNlcnRzID0gZW5kSW5zZXJ0cyB8fCBbXTtcblx0XHR2YXIgYiA9IGJDaGlsZHJlbltiSW5kZXhdO1xuXHRcdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBiLl8wLCBiLl8xLCB1bmRlZmluZWQsIGVuZEluc2VydHMpO1xuXHRcdGJJbmRleCsrO1xuXHR9XG5cblx0aWYgKGxvY2FsUGF0Y2hlcy5sZW5ndGggPiAwIHx8IGluc2VydHMubGVuZ3RoID4gMCB8fCB0eXBlb2YgZW5kSW5zZXJ0cyAhPT0gJ3VuZGVmaW5lZCcpXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlb3JkZXInLCByb290SW5kZXgsIHtcblx0XHRcdHBhdGNoZXM6IGxvY2FsUGF0Y2hlcyxcblx0XHRcdGluc2VydHM6IGluc2VydHMsXG5cdFx0XHRlbmRJbnNlcnRzOiBlbmRJbnNlcnRzXG5cdFx0fSkpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIENIQU5HRVMgRlJPTSBLRVlFRCBESUZGICAvLy8vLy8vLy8vLy9cblxuXG52YXIgUE9TVEZJWCA9ICdfZWxtVzZCTCc7XG5cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIGJJbmRleCwgaW5zZXJ0cylcbntcblx0dmFyIGVudHJ5ID0gY2hhbmdlc1trZXldO1xuXG5cdC8vIG5ldmVyIHNlZW4gdGhpcyBrZXkgYmVmb3JlXG5cdGlmICh0eXBlb2YgZW50cnkgPT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0ZW50cnkgPSB7XG5cdFx0XHR0YWc6ICdpbnNlcnQnLFxuXHRcdFx0dm5vZGU6IHZub2RlLFxuXHRcdFx0aW5kZXg6IGJJbmRleCxcblx0XHRcdGRhdGE6IHVuZGVmaW5lZFxuXHRcdH07XG5cblx0XHRpbnNlcnRzLnB1c2goeyBpbmRleDogYkluZGV4LCBlbnRyeTogZW50cnkgfSk7XG5cdFx0Y2hhbmdlc1trZXldID0gZW50cnk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSB3YXMgcmVtb3ZlZCBlYXJsaWVyLCBhIG1hdGNoIVxuXHRpZiAoZW50cnkudGFnID09PSAncmVtb3ZlJylcblx0e1xuXHRcdGluc2VydHMucHVzaCh7IGluZGV4OiBiSW5kZXgsIGVudHJ5OiBlbnRyeSB9KTtcblxuXHRcdGVudHJ5LnRhZyA9ICdtb3ZlJztcblx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdGRpZmZIZWxwKGVudHJ5LnZub2RlLCB2bm9kZSwgc3ViUGF0Y2hlcywgZW50cnkuaW5kZXgpO1xuXHRcdGVudHJ5LmluZGV4ID0gYkluZGV4O1xuXHRcdGVudHJ5LmRhdGEuZGF0YSA9IHtcblx0XHRcdHBhdGNoZXM6IHN1YlBhdGNoZXMsXG5cdFx0XHRlbnRyeTogZW50cnlcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgaGFzIGFscmVhZHkgYmVlbiBpbnNlcnRlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBQT1NURklYLCB2bm9kZSwgYkluZGV4LCBpbnNlcnRzKTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5LCB2bm9kZSwgaW5kZXgpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAodHlwZW9mIGVudHJ5ID09PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdHZhciBwYXRjaCA9IG1ha2VQYXRjaCgncC1yZW1vdmUnLCBpbmRleCwgdW5kZWZpbmVkKTtcblx0XHRsb2NhbFBhdGNoZXMucHVzaChwYXRjaCk7XG5cblx0XHRjaGFuZ2VzW2tleV0gPSB7XG5cdFx0XHR0YWc6ICdyZW1vdmUnLFxuXHRcdFx0dm5vZGU6IHZub2RlLFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdFx0ZGF0YTogcGF0Y2hcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgd2FzIGluc2VydGVkIGVhcmxpZXIsIGEgbWF0Y2ghXG5cdGlmIChlbnRyeS50YWcgPT09ICdpbnNlcnQnKVxuXHR7XG5cdFx0ZW50cnkudGFnID0gJ21vdmUnO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0ZGlmZkhlbHAodm5vZGUsIGVudHJ5LnZub2RlLCBzdWJQYXRjaGVzLCBpbmRleCk7XG5cblx0XHR2YXIgcGF0Y2ggPSBtYWtlUGF0Y2goJ3AtcmVtb3ZlJywgaW5kZXgsIHtcblx0XHRcdHBhdGNoZXM6IHN1YlBhdGNoZXMsXG5cdFx0XHRlbnRyeTogZW50cnlcblx0XHR9KTtcblx0XHRsb2NhbFBhdGNoZXMucHVzaChwYXRjaCk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRyZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgUE9TVEZJWCwgdm5vZGUsIGluZGV4KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgQUREIERPTSBOT0RFUyAgLy8vLy8vLy8vLy8vXG4vL1xuLy8gRWFjaCBET00gbm9kZSBoYXMgYW4gXCJpbmRleFwiIGFzc2lnbmVkIGluIG9yZGVyIG9mIHRyYXZlcnNhbC4gSXQgaXMgaW1wb3J0YW50XG4vLyB0byBtaW5pbWl6ZSBvdXIgY3Jhd2wgb3ZlciB0aGUgYWN0dWFsIERPTSwgc28gdGhlc2UgaW5kZXhlcyAoYWxvbmcgd2l0aCB0aGVcbi8vIGRlc2NlbmRhbnRzQ291bnQgb2YgdmlydHVhbCBub2RlcykgbGV0IHVzIHNraXAgdG91Y2hpbmcgZW50aXJlIHN1YnRyZWVzIG9mXG4vLyB0aGUgRE9NIGlmIHdlIGtub3cgdGhlcmUgYXJlIG5vIHBhdGNoZXMgdGhlcmUuXG5cblxuZnVuY3Rpb24gYWRkRG9tTm9kZXMoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSlcbntcblx0YWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCAwLCAwLCB2Tm9kZS5kZXNjZW5kYW50c0NvdW50LCBldmVudE5vZGUpO1xufVxuXG5cbi8vIGFzc3VtZXMgYHBhdGNoZXNgIGlzIG5vbi1lbXB0eSBhbmQgaW5kZXhlcyBpbmNyZWFzZSBtb25vdG9uaWNhbGx5LlxuZnVuY3Rpb24gYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCBpLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblx0dmFyIGluZGV4ID0gcGF0Y2guaW5kZXg7XG5cblx0d2hpbGUgKGluZGV4ID09PSBsb3cpXG5cdHtcblx0XHR2YXIgcGF0Y2hUeXBlID0gcGF0Y2gudHlwZTtcblxuXHRcdGlmIChwYXRjaFR5cGUgPT09ICdwLXRodW5rJylcblx0XHR7XG5cdFx0XHRhZGREb21Ob2Rlcyhkb21Ob2RlLCB2Tm9kZS5ub2RlLCBwYXRjaC5kYXRhLCBldmVudE5vZGUpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09ICdwLXJlb3JkZXInKVxuXHRcdHtcblx0XHRcdHBhdGNoLmRvbU5vZGUgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2guZXZlbnROb2RlID0gZXZlbnROb2RlO1xuXG5cdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IHBhdGNoLmRhdGEucGF0Y2hlcztcblx0XHRcdGlmIChzdWJQYXRjaGVzLmxlbmd0aCA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGFkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgc3ViUGF0Y2hlcywgMCwgbG93LCBoaWdoLCBldmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09ICdwLXJlbW92ZScpXG5cdFx0e1xuXHRcdFx0cGF0Y2guZG9tTm9kZSA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC5ldmVudE5vZGUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBkYXRhID0gcGF0Y2guZGF0YTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuZW50cnkuZGF0YSA9IGRvbU5vZGU7XG5cdFx0XHRcdHZhciBzdWJQYXRjaGVzID0gZGF0YS5wYXRjaGVzO1xuXHRcdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHBhdGNoLmRvbU5vZGUgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2guZXZlbnROb2RlID0gZXZlbnROb2RlO1xuXHRcdH1cblxuXHRcdGkrKztcblxuXHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2guaW5kZXgpID4gaGlnaClcblx0XHR7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHRzd2l0Y2ggKHZOb2RlLnR5cGUpXG5cdHtcblx0XHRjYXNlICd0YWdnZXInOlxuXHRcdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5ub2RlO1xuXG5cdFx0XHR3aGlsZSAoc3ViTm9kZS50eXBlID09PSBcInRhZ2dlclwiKVxuXHRcdFx0e1xuXHRcdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHN1Yk5vZGUsIHBhdGNoZXMsIGksIGxvdyArIDEsIGhpZ2gsIGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmKTtcblxuXHRcdGNhc2UgJ25vZGUnOlxuXHRcdFx0dmFyIHZDaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHZDaGlsZHJlbi5sZW5ndGg7IGorKylcblx0XHRcdHtcblx0XHRcdFx0bG93Kys7XG5cdFx0XHRcdHZhciB2Q2hpbGQgPSB2Q2hpbGRyZW5bal07XG5cdFx0XHRcdHZhciBuZXh0TG93ID0gbG93ICsgKHZDaGlsZC5kZXNjZW5kYW50c0NvdW50IHx8IDApO1xuXHRcdFx0XHRpZiAobG93IDw9IGluZGV4ICYmIGluZGV4IDw9IG5leHRMb3cpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpID0gYWRkRG9tTm9kZXNIZWxwKGNoaWxkTm9kZXNbal0sIHZDaGlsZCwgcGF0Y2hlcywgaSwgbG93LCBuZXh0TG93LCBldmVudE5vZGUpO1xuXHRcdFx0XHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2guaW5kZXgpID4gaGlnaClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bG93ID0gbmV4dExvdztcblx0XHRcdH1cblx0XHRcdHJldHVybiBpO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHR2YXIgdkNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlcztcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdkNoaWxkcmVuLmxlbmd0aDsgaisrKVxuXHRcdFx0e1xuXHRcdFx0XHRsb3crKztcblx0XHRcdFx0dmFyIHZDaGlsZCA9IHZDaGlsZHJlbltqXS5fMTtcblx0XHRcdFx0dmFyIG5leHRMb3cgPSBsb3cgKyAodkNoaWxkLmRlc2NlbmRhbnRzQ291bnQgfHwgMCk7XG5cdFx0XHRcdGlmIChsb3cgPD0gaW5kZXggJiYgaW5kZXggPD0gbmV4dExvdylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGkgPSBhZGREb21Ob2Rlc0hlbHAoY2hpbGROb2Rlc1tqXSwgdkNoaWxkLCBwYXRjaGVzLCBpLCBsb3csIG5leHRMb3csIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdFx0aWYgKCEocGF0Y2ggPSBwYXRjaGVzW2ldKSB8fCAoaW5kZXggPSBwYXRjaC5pbmRleCkgPiBoaWdoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsb3cgPSBuZXh0TG93O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGk7XG5cblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRjYXNlICd0aHVuayc6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Nob3VsZCBuZXZlciB0cmF2ZXJzZSBgdGV4dGAgb3IgYHRodW5rYCBub2RlcyBsaWtlIHRoaXMnKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vICBBUFBMWSBQQVRDSEVTICAvLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoZXMocm9vdERvbU5vZGUsIG9sZFZpcnR1YWxOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdGlmIChwYXRjaGVzLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiByb290RG9tTm9kZTtcblx0fVxuXG5cdGFkZERvbU5vZGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKTtcblx0cmV0dXJuIGFwcGx5UGF0Y2hlc0hlbHAocm9vdERvbU5vZGUsIHBhdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoZXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHRcdHZhciBsb2NhbERvbU5vZGUgPSBwYXRjaC5kb21Ob2RlXG5cdFx0dmFyIG5ld05vZGUgPSBhcHBseVBhdGNoKGxvY2FsRG9tTm9kZSwgcGF0Y2gpO1xuXHRcdGlmIChsb2NhbERvbU5vZGUgPT09IHJvb3REb21Ob2RlKVxuXHRcdHtcblx0XHRcdHJvb3REb21Ob2RlID0gbmV3Tm9kZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJvb3REb21Ob2RlO1xufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKGRvbU5vZGUsIHBhdGNoKVxue1xuXHRzd2l0Y2ggKHBhdGNoLnR5cGUpXG5cdHtcblx0XHRjYXNlICdwLXJlZHJhdyc6XG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCBwYXRjaC5kYXRhLCBwYXRjaC5ldmVudE5vZGUpO1xuXG5cdFx0Y2FzZSAncC1mYWN0cyc6XG5cdFx0XHRhcHBseUZhY3RzKGRvbU5vZGUsIHBhdGNoLmV2ZW50Tm9kZSwgcGF0Y2guZGF0YSk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtdGV4dCc6XG5cdFx0XHRkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCBwYXRjaC5kYXRhKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAncC10aHVuayc6XG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBwYXRjaC5kYXRhKTtcblxuXHRcdGNhc2UgJ3AtdGFnZ2VyJzpcblx0XHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmLnRhZ2dlciA9IHBhdGNoLmRhdGE7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtcmVtb3ZlLWxhc3QnOlxuXHRcdFx0dmFyIGkgPSBwYXRjaC5kYXRhO1xuXHRcdFx0d2hpbGUgKGktLSlcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlLmxhc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtYXBwZW5kJzpcblx0XHRcdHZhciBuZXdOb2RlcyA9IHBhdGNoLmRhdGE7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld05vZGVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKHJlbmRlcihuZXdOb2Rlc1tpXSwgcGF0Y2guZXZlbnROb2RlKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtcmVtb3ZlJzpcblx0XHRcdHZhciBkYXRhID0gcGF0Y2guZGF0YTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKTtcblx0XHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZW50cnkgPSBkYXRhLmVudHJ5O1xuXHRcdFx0aWYgKHR5cGVvZiBlbnRyeS5pbmRleCAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKTtcblx0XHRcdH1cblx0XHRcdGVudHJ5LmRhdGEgPSBhcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIGRhdGEucGF0Y2hlcyk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtcmVvcmRlcic6XG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpO1xuXG5cdFx0Y2FzZSAncC1jdXN0b20nOlxuXHRcdFx0dmFyIGltcGwgPSBwYXRjaC5kYXRhO1xuXHRcdFx0cmV0dXJuIGltcGwuYXBwbHlQYXRjaChkb21Ob2RlLCBpbXBsLmRhdGEpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignUmFuIGludG8gYW4gdW5rbm93biBwYXRjaCEnKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2hSZWRyYXcoZG9tTm9kZSwgdk5vZGUsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGU7XG5cdHZhciBuZXdOb2RlID0gcmVuZGVyKHZOb2RlLCBldmVudE5vZGUpO1xuXG5cdGlmICh0eXBlb2YgbmV3Tm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0bmV3Tm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSBkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZjtcblx0fVxuXG5cdGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpXG5cdHtcblx0XHRwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKTtcblx0fVxuXHRyZXR1cm4gbmV3Tm9kZTtcbn1cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoUmVvcmRlcihkb21Ob2RlLCBwYXRjaClcbntcblx0dmFyIGRhdGEgPSBwYXRjaC5kYXRhO1xuXG5cdC8vIHJlbW92ZSBlbmQgaW5zZXJ0c1xuXHR2YXIgZnJhZyA9IGFwcGx5UGF0Y2hSZW9yZGVyRW5kSW5zZXJ0c0hlbHAoZGF0YS5lbmRJbnNlcnRzLCBwYXRjaCk7XG5cblx0Ly8gcmVtb3ZhbHNcblx0ZG9tTm9kZSA9IGFwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgZGF0YS5wYXRjaGVzKTtcblxuXHQvLyBpbnNlcnRzXG5cdHZhciBpbnNlcnRzID0gZGF0YS5pbnNlcnRzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGluc2VydHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgaW5zZXJ0ID0gaW5zZXJ0c1tpXTtcblx0XHR2YXIgZW50cnkgPSBpbnNlcnQuZW50cnk7XG5cdFx0dmFyIG5vZGUgPSBlbnRyeS50YWcgPT09ICdtb3ZlJ1xuXHRcdFx0PyBlbnRyeS5kYXRhXG5cdFx0XHQ6IHJlbmRlcihlbnRyeS52bm9kZSwgcGF0Y2guZXZlbnROb2RlKTtcblx0XHRkb21Ob2RlLmluc2VydEJlZm9yZShub2RlLCBkb21Ob2RlLmNoaWxkTm9kZXNbaW5zZXJ0LmluZGV4XSk7XG5cdH1cblxuXHQvLyBhZGQgZW5kIGluc2VydHNcblx0aWYgKHR5cGVvZiBmcmFnICE9PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdGRvbU5vZGUuYXBwZW5kQ2hpbGQoZnJhZyk7XG5cdH1cblxuXHRyZXR1cm4gZG9tTm9kZTtcbn1cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGVuZEluc2VydHMsIHBhdGNoKVxue1xuXHRpZiAodHlwZW9mIGVuZEluc2VydHMgPT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW5kSW5zZXJ0cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBpbnNlcnQgPSBlbmRJbnNlcnRzW2ldO1xuXHRcdHZhciBlbnRyeSA9IGluc2VydC5lbnRyeTtcblx0XHRmcmFnLmFwcGVuZENoaWxkKGVudHJ5LnRhZyA9PT0gJ21vdmUnXG5cdFx0XHQ/IGVudHJ5LmRhdGFcblx0XHRcdDogcmVuZGVyKGVudHJ5LnZub2RlLCBwYXRjaC5ldmVudE5vZGUpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gZnJhZztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgUFJPR1JBTVMgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIHByb2dyYW1XaXRoRmxhZ3MoZGV0YWlscylcbntcblx0cmV0dXJuIHtcblx0XHRpbml0OiBkZXRhaWxzLmluaXQsXG5cdFx0dXBkYXRlOiBkZXRhaWxzLnVwZGF0ZSxcblx0XHRzdWJzY3JpcHRpb25zOiBkZXRhaWxzLnN1YnNjcmlwdGlvbnMsXG5cdFx0dmlldzogZGV0YWlscy52aWV3LFxuXHRcdHJlbmRlcmVyOiByZW5kZXJlclxuXHR9O1xufVxuXG5cbnJldHVybiB7XG5cdG5vZGU6IG5vZGUsXG5cdHRleHQ6IHRleHQsXG5cblx0Y3VzdG9tOiBjdXN0b20sXG5cblx0bWFwOiBGMihtYXApLFxuXG5cdG9uOiBGMyhvbiksXG5cdHN0eWxlOiBzdHlsZSxcblx0cHJvcGVydHk6IEYyKHByb3BlcnR5KSxcblx0YXR0cmlidXRlOiBGMihhdHRyaWJ1dGUpLFxuXHRhdHRyaWJ1dGVOUzogRjMoYXR0cmlidXRlTlMpLFxuXG5cdGxhenk6IEYyKGxhenkpLFxuXHRsYXp5MjogRjMobGF6eTIpLFxuXHRsYXp5MzogRjQobGF6eTMpLFxuXHRrZXllZE5vZGU6IEYzKGtleWVkTm9kZSksXG5cblx0cHJvZ3JhbVdpdGhGbGFnczogcHJvZ3JhbVdpdGhGbGFnc1xufTtcblxufSgpO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb2dyYW1XaXRoRmxhZ3MgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ucHJvZ3JhbVdpdGhGbGFncztcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRrZXllZE5vZGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ua2V5ZWROb2RlO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkzID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmxhenkzO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkyID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmxhenkyO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ubGF6eTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRkZWZhdWx0T3B0aW9ucyA9IHtzdG9wUHJvcGFnYXRpb246IGZhbHNlLCBwcmV2ZW50RGVmYXVsdDogZmFsc2V9O1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uV2l0aE9wdGlvbnMgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ub247XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb24gPSBGMihcblx0ZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGVjb2Rlcikge1xuXHRcdHJldHVybiBBMyhfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRvbldpdGhPcHRpb25zLCBldmVudE5hbWUsIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGRlZmF1bHRPcHRpb25zLCBkZWNvZGVyKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kc3R5bGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20uc3R5bGU7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlTlMgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20uYXR0cmlidXRlTlM7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmF0dHJpYnV0ZTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9wZXJ0eSA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSROYXRpdmVfVmlydHVhbERvbS5wcm9wZXJ0eTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRtYXAgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ubWFwO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20udGV4dDtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLm5vZGU7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kT3B0aW9ucyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7c3RvcFByb3BhZ2F0aW9uOiBhLCBwcmV2ZW50RGVmYXVsdDogYn07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJE5vZGUgPSB7Y3RvcjogJ05vZGUnfTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRQcm9wZXJ0eSA9IHtjdG9yOiAnUHJvcGVydHknfTtcblxudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQ7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJvZHkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2JvZHknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHNlY3Rpb24gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NlY3Rpb24nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG5hdiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbmF2Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRhcnRpY2xlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdhcnRpY2xlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRhc2lkZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYXNpZGUnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGgxID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdoMScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkaDIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2gyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRoMyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaDMnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGg0ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdoNCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkaDUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2g1Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRoNiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaDYnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGhlYWRlciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaGVhZGVyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRmb290ZXIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2Zvb3RlcicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYWRkcmVzcyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYWRkcmVzcycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbWFpbiQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ21haW4nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHAgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3AnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGhyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdocicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdwcmUnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJsb2NrcXVvdGUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2Jsb2NrcXVvdGUnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG9sID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdvbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdWwgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3VsJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRsaSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbGknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGRsID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdkbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZHQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2R0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRkZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZGQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGZpZ3VyZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZmlndXJlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRmaWdjYXB0aW9uID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdmaWdjYXB0aW9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RpdicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZW0gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2VtJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzdHJvbmcgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3N0cm9uZycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc21hbGwgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NtYWxsJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRjaXRlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdjaXRlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRxID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdxJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRkZm4gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RmbicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYWJiciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYWJicicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdGltZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGltZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY29kZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnY29kZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdmFyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd2YXInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHNhbXAgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NhbXAnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGtiZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgna2JkJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzdWIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3N1YicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc3VwID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzdXAnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2knKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2InKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3UnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1hcmsgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ21hcmsnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHJ1YnkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3J1YnknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHJ0ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdydCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcnAgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3JwJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRiZGkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2JkaScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYmRvID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdiZG8nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHNwYW4gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NwYW4nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdicicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkd2JyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd3YnInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGlucyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaW5zJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRkZWwgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RlbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkaW1nID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdpbWcnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGlmcmFtZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaWZyYW1lJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRlbWJlZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZW1iZWQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG9iamVjdCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb2JqZWN0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRwYXJhbSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgncGFyYW0nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHZpZGVvID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd2aWRlbycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYXVkaW8gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2F1ZGlvJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzb3VyY2UgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NvdXJjZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdHJhY2sgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3RyYWNrJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRjYW52YXMgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NhbnZhcycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc3ZnID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzdmcnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1hdGggPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ21hdGgnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRhYmxlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0YWJsZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY2FwdGlvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnY2FwdGlvbicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY29sZ3JvdXAgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NvbGdyb3VwJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRjb2wgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NvbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdGJvZHkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3Rib2R5Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0aGVhZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGhlYWQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRmb290ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0Zm9vdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdHIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3RyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0ZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRoID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0aCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZm9ybSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZm9ybScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZmllbGRzZXQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2ZpZWxkc2V0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRsZWdlbmQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2xlZ2VuZCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbGFiZWwgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2xhYmVsJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRpbnB1dCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaW5wdXQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJ1dHRvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYnV0dG9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzZWxlY3QgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NlbGVjdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGF0YWxpc3QgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RhdGFsaXN0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvcHRncm91cCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb3B0Z3JvdXAnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG9wdGlvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb3B0aW9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0YXJlYSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGV4dGFyZWEnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGtleWdlbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgna2V5Z2VuJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvdXRwdXQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ291dHB1dCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJvZ3Jlc3MgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3Byb2dyZXNzJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRtZXRlciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbWV0ZXInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGRldGFpbHMgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RldGFpbHMnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHN1bW1hcnkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3N1bW1hcnknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1lbnVpdGVtID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdtZW51aXRlbScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbWVudSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbWVudScpO1xuXG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BcHAkcHJvZ3JhbVdpdGhGbGFncyA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb2dyYW1XaXRoRmxhZ3M7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BcHAkcHJvZ3JhbSA9IGZ1bmN0aW9uIChhcHApIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRodG1sJEh0bWxfQXBwJHByb2dyYW1XaXRoRmxhZ3MoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdGFwcCxcblx0XHRcdHtcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKF9wMCkge1xuXHRcdFx0XHRcdHJldHVybiBhcHAuaW5pdDtcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0FwcCRiZWdpbm5lclByb2dyYW0gPSBmdW5jdGlvbiAoX3AxKSB7XG5cdHZhciBfcDIgPSBfcDE7XG5cdHJldHVybiBfZWxtX2xhbmckaHRtbCRIdG1sX0FwcCRwcm9ncmFtV2l0aEZsYWdzKFxuXHRcdHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uIChfcDMpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZF9vcHNbJyEnXSxcblx0XHRcdFx0XHRfcDIubW9kZWwsXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W10pKTtcblx0XHRcdH0sXG5cdFx0XHR1cGRhdGU6IEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAobXNnLCBtb2RlbCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZF9vcHNbJyEnXSxcblx0XHRcdFx0XHRcdEEyKF9wMi51cGRhdGUsIG1zZywgbW9kZWwpLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXSkpO1xuXHRcdFx0XHR9KSxcblx0XHRcdHZpZXc6IF9wMi52aWV3LFxuXHRcdFx0c3Vic2NyaXB0aW9uczogZnVuY3Rpb24gKF9wNCkge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJG5vbmU7XG5cdFx0XHR9XG5cdFx0fSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXBwJG1hcCA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG1hcDtcblxudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGU7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNvbnRleHRtZW51ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnY29udGV4dG1lbnUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRkcmFnZ2FibGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsICdkcmFnZ2FibGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRsaXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnbGlzdCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1heGxlbmd0aCA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLFxuXHRcdCdtYXhsZW5ndGgnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRkYXRldGltZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ2RhdGV0aW1lJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHViZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ3B1YmRhdGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb2xzcGFuID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J2NvbHNwYW4nLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyb3dzcGFuID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J3Jvd3NwYW4nLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwcm9wZXJ0eSA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb3BlcnR5O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSA9IEYyKFxuXHRmdW5jdGlvbiAobmFtZSwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHByb3BlcnR5LFxuXHRcdFx0bmFtZSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJHN0cmluZyhzdHJpbmcpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2NsYXNzTmFtZScsIG5hbWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaWQgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnaWQnLCBuYW1lKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHRpdGxlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3RpdGxlJywgbmFtZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhY2Nlc3NrZXkgPSBmdW5jdGlvbiAoJGNoYXIpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQnYWNjZXNzS2V5Jyxcblx0XHRfZWxtX2xhbmckY29yZSRTdHJpbmckZnJvbUNoYXIoJGNoYXIpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRpciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZGlyJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZHJvcHpvbmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2Ryb3B6b25lJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaXRlbXByb3AgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2l0ZW1wcm9wJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbGFuZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbGFuZycsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHRhYmluZGV4ID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQndGFiSW5kZXgnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjaGFyc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdjaGFyc2V0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY29udGVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnY29udGVudCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGh0dHBFcXVpdiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnaHR0cEVxdWl2JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbGFuZ3VhZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2xhbmd1YWdlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3JjID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzcmMnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRoZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQnaGVpZ2h0Jyxcblx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcodmFsdWUpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHdpZHRoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J3dpZHRoJyxcblx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcodmFsdWUpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGFsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnYWx0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHJlbG9hZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncHJlbG9hZCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHBvc3RlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncG9zdGVyJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMka2luZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAna2luZCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNyY2xhbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3NyY2xhbmcnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzYW5kYm94ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzYW5kYm94JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3JjZG9jID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzcmNkb2MnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR0eXBlJCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAndHlwZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICd2YWx1ZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZGVmYXVsdFZhbHVlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3BsYWNlaG9sZGVyJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWNjZXB0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY2NlcHQnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhY2NlcHRDaGFyc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY2NlcHRDaGFyc2V0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY3Rpb24nLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdXRvY29tcGxldGUgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LFxuXHRcdCdhdXRvY29tcGxldGUnLFxuXHRcdGJvb2wgPyAnb24nIDogJ29mZicpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXV0b3NhdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2F1dG9zYXZlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZW5jdHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZW5jdHlwZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGZvcm1hY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2Zvcm1BY3Rpb24nLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtaW5sZW5ndGggPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LFxuXHRcdCdtaW5MZW5ndGgnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtZXRob2QgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ21ldGhvZCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG5hbWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ25hbWUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwYXR0ZXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdwYXR0ZXJuJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc2l6ZSA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J3NpemUnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRmb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2h0bWxGb3InLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdmb3JtJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbWF4ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdtYXgnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtaW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ21pbicsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0ZXAgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnc3RlcCcsIG4pO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY29scyA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J2NvbHMnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyb3dzID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQncm93cycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHdyYXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3dyYXAnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR1c2VtYXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3VzZU1hcCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNoYXBlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzaGFwZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNvb3JkcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnY29vcmRzJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2hhbGxlbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdjaGFsbGVuZ2UnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRrZXl0eXBlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdrZXl0eXBlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWxpZ24gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2FsaWduJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2l0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnY2l0ZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhyZWYgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2hyZWYnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR0YXJnZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3RhcmdldCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRvd25sb2FkQXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2Rvd25sb2FkJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaHJlZmxhbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2hyZWZsYW5nJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbWVkaWEgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ21lZGlhJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncGluZycsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHJlbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncmVsJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RhcnQgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LFxuXHRcdCdzdGFydCcsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhlYWRlcnMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2hlYWRlcnMnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzY29wZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnc2NvcGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtYW5pZmVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbWFuaWZlc3QnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHkgPSBGMihcblx0ZnVuY3Rpb24gKG5hbWUsIGJvb2wpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHJvcGVydHksXG5cdFx0XHRuYW1lLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkYm9vbChib29sKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRoaWRkZW4gPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2hpZGRlbicsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY29udGVudGVkaXRhYmxlID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdjb250ZW50RWRpdGFibGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNwZWxsY2hlY2sgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3NwZWxsY2hlY2snLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGFzeW5jID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdhc3luYycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZGVmZXIgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2RlZmVyJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzY29wZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3Njb3BlZCcsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXV0b3BsYXkgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2F1dG9wbGF5JywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb250cm9scyA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnY29udHJvbHMnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGxvb3AgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2xvb3AnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRlZmF1bHQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2RlZmF1bHQnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNlYW1sZXNzID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdzZWFtbGVzcycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2hlY2tlZCA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnY2hlY2tlZCcsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc2VsZWN0ZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3NlbGVjdGVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdXRvZm9jdXMgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2F1dG9mb2N1cycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZGlzYWJsZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2Rpc2FibGVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtdWx0aXBsZSA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnbXVsdGlwbGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG5vdmFsaWRhdGUgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ25vVmFsaWRhdGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHJlYWRvbmx5ID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdyZWFkT25seScsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcmVxdWlyZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3JlcXVpcmVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRpc21hcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2lzTWFwJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZG93bmxvYWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2Rvd25sb2FkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyZXZlcnNlZCA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAncmV2ZXJzZWQnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHJldHVybiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0QTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRTdHJpbmckam9pbixcblx0XHRcdCcgJyxcblx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJGZzdCxcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRmaWx0ZXIsIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRzbmQsIGxpc3QpKSkpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3R5bGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRzdHlsZTtcblxudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJGtleUNvZGUgPSBBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZV9vcHNbJzo9J10sICdrZXlDb2RlJywgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkaW50KTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyR0YXJnZXRDaGVja2VkID0gQTIoXG5cdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGF0LFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0Wyd0YXJnZXQnLCAnY2hlY2tlZCddKSxcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYm9vbCk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkdGFyZ2V0VmFsdWUgPSBBMihcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYXQsXG5cdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRbJ3RhcmdldCcsICd2YWx1ZSddKSxcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3RyaW5nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRkZWZhdWx0T3B0aW9ucyA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGRlZmF1bHRPcHRpb25zO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uV2l0aE9wdGlvbnMgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRvbldpdGhPcHRpb25zO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb247XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Gb2N1cyA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdmb2N1cycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25CbHVyID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J2JsdXInLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uU3VibWl0T3B0aW9ucyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJGRlZmF1bHRPcHRpb25zLFxuXHR7cHJldmVudERlZmF1bHQ6IHRydWV9KTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvblN1Ym1pdCA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uV2l0aE9wdGlvbnMsXG5cdFx0J3N1Ym1pdCcsXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25TdWJtaXRPcHRpb25zLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uQ2hlY2sgPSBmdW5jdGlvbiAodGFnZ2VyKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnY2hhbmdlJyxcblx0XHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRtYXAsIHRhZ2dlciwgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkdGFyZ2V0Q2hlY2tlZCkpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbklucHV0ID0gZnVuY3Rpb24gKHRhZ2dlcikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J2lucHV0Jyxcblx0XHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRtYXAsIHRhZ2dlciwgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkdGFyZ2V0VmFsdWUpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Nb3VzZU91dCA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdtb3VzZW91dCcsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Nb3VzZU92ZXIgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnbW91c2VvdmVyJyxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnbW91c2VsZWF2ZScsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J21vdXNlZW50ZXInLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uTW91c2VVcCA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdtb3VzZXVwJyxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbk1vdXNlRG93biA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdtb3VzZWRvd24nLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uRG91YmxlQ2xpY2sgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnZGJsY2xpY2snLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uQ2xpY2sgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnY2xpY2snLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJE9wdGlvbnMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4ge3N0b3BQcm9wYWdhdGlvbjogYSwgcHJldmVudERlZmF1bHQ6IGJ9O1xuXHR9KTtcblxudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdGl2ZV9OYXZpZ2F0aW9uID0gZnVuY3Rpb24oKSB7XG5cbmZ1bmN0aW9uIGdvKG4pXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRpZiAobiAhPT0gMClcblx0XHR7XG5cdFx0XHRoaXN0b3J5LmdvKG4pO1xuXHRcdH1cblx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN0YXRlKHVybClcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcblx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQoZ2V0TG9jYXRpb24oKSkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHVybClcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgdXJsKTtcblx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQoZ2V0TG9jYXRpb24oKSkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKVxue1xuXHR2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5sb2NhdGlvbjtcblxuXHRyZXR1cm4ge1xuXHRcdGhyZWY6IGxvY2F0aW9uLmhyZWYsXG5cdFx0aG9zdDogbG9jYXRpb24uaG9zdCxcblx0XHRob3N0bmFtZTogbG9jYXRpb24uaG9zdG5hbWUsXG5cdFx0cHJvdG9jb2w6IGxvY2F0aW9uLnByb3RvY29sLFxuXHRcdG9yaWdpbjogbG9jYXRpb24ub3JpZ2luLFxuXHRcdHBvcnRfOiBsb2NhdGlvbi5wb3J0LFxuXHRcdHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcblx0XHRzZWFyY2g6IGxvY2F0aW9uLnNlYXJjaCxcblx0XHRoYXNoOiBsb2NhdGlvbi5oYXNoLFxuXHRcdHVzZXJuYW1lOiBsb2NhdGlvbi51c2VybmFtZSxcblx0XHRwYXNzd29yZDogbG9jYXRpb24ucGFzc3dvcmRcblx0fTtcbn1cblxuXG5yZXR1cm4ge1xuXHRnbzogZ28sXG5cdHB1c2hTdGF0ZTogcHVzaFN0YXRlLFxuXHRyZXBsYWNlU3RhdGU6IHJlcGxhY2VTdGF0ZSxcblx0Z2V0TG9jYXRpb246IGdldExvY2F0aW9uXG59O1xuXG59KCk7XG5cbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHJlcGxhY2VTdGF0ZSA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdGl2ZV9OYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHB1c2hTdGF0ZSA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdGl2ZV9OYXZpZ2F0aW9uLnB1c2hTdGF0ZTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGdvID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ287XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRzcGF3blBvcFN0YXRlID0gZnVuY3Rpb24gKHJvdXRlcikge1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRzcGF3bihcblx0XHRBMyhcblx0XHRcdF9lbG1fbGFuZyRkb20kRG9tX0xvd0xldmVsJG9uV2luZG93LFxuXHRcdFx0J3BvcHN0YXRlJyxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHZhbHVlLFxuXHRcdFx0ZnVuY3Rpb24gKF9wMCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kc2VuZFRvU2VsZixcblx0XHRcdFx0XHRyb3V0ZXIsXG5cdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ2V0TG9jYXRpb24oXG5cdFx0XHRcdFx0XHR7Y3RvcjogJ19UdXBsZTAnfSkpO1xuXHRcdFx0fSkpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wcyA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb25fb3BzIHx8IHt9O1xuX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbl9vcHNbJyY+J10gPSBGMihcblx0ZnVuY3Rpb24gKHRhc2sxLCB0YXNrMikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdHRhc2sxLFxuXHRcdFx0ZnVuY3Rpb24gKF9wMSkge1xuXHRcdFx0XHRyZXR1cm4gdGFzazI7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRub3RpZnkgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgc3VicywgbG9jYXRpb24pIHtcblx0XHR2YXIgc2VuZCA9IGZ1bmN0aW9uIChfcDIpIHtcblx0XHRcdHZhciBfcDMgPSBfcDI7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJHNlbmRUb0FwcCxcblx0XHRcdFx0cm91dGVyLFxuXHRcdFx0XHRfcDMuXzAobG9jYXRpb24pKTtcblx0XHR9O1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb25fb3BzWycmPiddLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRzZXF1ZW5jZShcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsIHNlbmQsIHN1YnMpKSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgbG9jYXRpb24sIHN0YXRlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbl9vcHNbJyY+J10sXG5cdFx0XHRBMyhfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG5vdGlmeSwgcm91dGVyLCBzdGF0ZS5zdWJzLCBsb2NhdGlvbiksXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoc3RhdGUpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjbWRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIHN1YnMsIGNtZCkge1xuXHRcdHZhciBfcDQgPSBjbWQ7XG5cdFx0c3dpdGNoIChfcDQuY3Rvcikge1xuXHRcdFx0Y2FzZSAnSnVtcCc6XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGdvKF9wNC5fMCk7XG5cdFx0XHRjYXNlICdOZXcnOlxuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kcHVzaFN0YXRlKF9wNC5fMCksXG5cdFx0XHRcdFx0QTIoX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRub3RpZnksIHJvdXRlciwgc3VicykpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHJlcGxhY2VTdGF0ZShfcDQuXzApLFxuXHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbm90aWZ5LCByb3V0ZXIsIHN1YnMpKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kdXBkYXRlSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgX3A1KSB7XG5cdFx0dmFyIF9wNiA9IF9wNTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XzA6IF9wNi5fMCxcblx0XHRcdF8xOiBBMihfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbWFwLCBmdW5jLCBfcDYuXzEpXG5cdFx0fTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRzdWJzY3JpcHRpb24gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubGVhZignTmF2aWdhdGlvbicpO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5sZWFmKCdOYXZpZ2F0aW9uJyk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRMb2NhdGlvbiA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYikge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoYykge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoZikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoaCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChqKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7aHJlZjogYSwgaG9zdDogYiwgaG9zdG5hbWU6IGMsIHByb3RvY29sOiBkLCBvcmlnaW46IGUsIHBvcnRfOiBmLCBwYXRobmFtZTogZywgc2VhcmNoOiBoLCBoYXNoOiBpLCB1c2VybmFtZTogaiwgcGFzc3dvcmQ6IGt9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFN0YXRlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtzdWJzOiBhLCBwcm9jZXNzOiBifTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRpbml0ID0gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRBMihcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFN0YXRlLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtdKSxcblx0XHRfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nKSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRvbkVmZmVjdHMgPSBGNChcblx0ZnVuY3Rpb24gKHJvdXRlciwgY21kcywgc3VicywgX3A3KSB7XG5cdFx0dmFyIF9wOCA9IF9wNztcblx0XHR2YXIgX3AxMCA9IF9wOC5wcm9jZXNzO1xuXHRcdHZhciBzdGVwU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3A5ID0ge2N0b3I6ICdfVHVwbGUyJywgXzA6IHN1YnMsIF8xOiBfcDEwfTtcblx0XHRcdF92NF8yOlxuXHRcdFx0ZG8ge1xuXHRcdFx0XHRpZiAoX3A5Ll8wLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0XHRpZiAoX3A5Ll8xLmN0b3IgPT09ICdKdXN0Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wc1snJj4nXSxcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRraWxsKF9wOS5fMS5fMCksXG5cdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0XHRBMihfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFN0YXRlLCBzdWJzLCBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nKSkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfdjRfMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKF9wOS5fMS5jdG9yID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHNwYXduUG9wU3RhdGUocm91dGVyKSxcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKHBpZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3Vicyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChwaWQpKSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfdjRfMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0QTIoX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRTdGF0ZSwgc3VicywgX3AxMCkpO1xuXHRcdH0oKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wc1snJj4nXSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc2VxdWVuY2UoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY21kSGVscCwgcm91dGVyLCBzdWJzKSxcblx0XHRcdFx0XHRjbWRzKSksXG5cdFx0XHRzdGVwU3RhdGUpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFVzZXJNc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdVc2VyTXNnJywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJENoYW5nZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ0NoYW5nZScsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRQYXJzZXIgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdQYXJzZXInLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbWFrZVBhcnNlciA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kUGFyc2VyO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTW9kaWZ5ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnTW9kaWZ5JywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG1vZGlmeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZChcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJE1vZGlmeSh1cmwpKTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiROZXcgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdOZXcnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbmV3VXJsID0gZnVuY3Rpb24gKHVybCkge1xuXHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjb21tYW5kKFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTmV3KHVybCkpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJEp1bXAgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdKdW1wJywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGJhY2sgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjb21tYW5kKFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kSnVtcCgwIC0gbikpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGZvcndhcmQgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjb21tYW5kKFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kSnVtcChuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY21kTWFwID0gRjIoXG5cdGZ1bmN0aW9uIChfcDExLCBteUNtZCkge1xuXHRcdHZhciBfcDEyID0gbXlDbWQ7XG5cdFx0c3dpdGNoIChfcDEyLmN0b3IpIHtcblx0XHRcdGNhc2UgJ0p1bXAnOlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRKdW1wKF9wMTIuXzApO1xuXHRcdFx0Y2FzZSAnTmV3Jzpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTmV3KF9wMTIuXzApO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTW9kaWZ5KF9wMTIuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnTW9uaXRvcicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRwcm9ncmFtV2l0aEZsYWdzID0gRjIoXG5cdGZ1bmN0aW9uIChfcDEzLCBzdHVmZikge1xuXHRcdHZhciBfcDE0ID0gX3AxMztcblx0XHR2YXIgX3AxNiA9IF9wMTQuXzA7XG5cdFx0dmFyIGxvY2F0aW9uID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ2V0TG9jYXRpb24oXG5cdFx0XHR7Y3RvcjogJ19UdXBsZTAnfSk7XG5cdFx0dmFyIGluaXQgPSBmdW5jdGlvbiAoZmxhZ3MpIHtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiR1cGRhdGVIZWxwLFxuXHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFVzZXJNc2csXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdHN0dWZmLmluaXQsXG5cdFx0XHRcdFx0ZmxhZ3MsXG5cdFx0XHRcdFx0X3AxNihsb2NhdGlvbikpKTtcblx0XHR9O1xuXHRcdHZhciB2aWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXBwJG1hcCxcblx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRVc2VyTXNnLFxuXHRcdFx0XHRzdHVmZi52aWV3KG1vZGVsKSk7XG5cdFx0fTtcblx0XHR2YXIgc3VicyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRiYXRjaChcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kc3Vic2NyaXB0aW9uKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yKF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kQ2hhbmdlKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRtYXAsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFVzZXJNc2csXG5cdFx0XHRcdFx0XHRzdHVmZi5zdWJzY3JpcHRpb25zKG1vZGVsKSlcblx0XHRcdFx0XHRdKSk7XG5cdFx0fTtcblx0XHR2YXIgdXBkYXRlID0gRjIoXG5cdFx0XHRmdW5jdGlvbiAobXNnLCBtb2RlbCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiR1cGRhdGVIZWxwLFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kVXNlck1zZyxcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3AxNSA9IG1zZztcblx0XHRcdFx0XHRcdGlmIChfcDE1LmN0b3IgPT09ICdDaGFuZ2UnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRzdHVmZi51cmxVcGRhdGUsXG5cdFx0XHRcdFx0XHRcdFx0X3AxNihfcDE1Ll8wKSxcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoc3R1ZmYudXBkYXRlLCBfcDE1Ll8wLCBtb2RlbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpKTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBfZWxtX2xhbmckaHRtbCRIdG1sX0FwcCRwcm9ncmFtV2l0aEZsYWdzKFxuXHRcdFx0e2luaXQ6IGluaXQsIHZpZXc6IHZpZXcsIHVwZGF0ZTogdXBkYXRlLCBzdWJzY3JpcHRpb25zOiBzdWJzfSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kcHJvZ3JhbSA9IEYyKFxuXHRmdW5jdGlvbiAocGFyc2VyLCBzdHVmZikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kcHJvZ3JhbVdpdGhGbGFncyxcblx0XHRcdHBhcnNlcixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdHN0dWZmLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKF9wMTcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzdHVmZi5pbml0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHN1Yk1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgX3AxOCkge1xuXHRcdHZhciBfcDE5ID0gX3AxODtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yKFxuXHRcdFx0ZnVuY3Rpb24gKF9wMjApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmMoXG5cdFx0XHRcdFx0X3AxOS5fMChfcDIwKSk7XG5cdFx0XHR9KTtcblx0fSk7XG5fZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0uZWZmZWN0TWFuYWdlcnNbJ05hdmlnYXRpb24nXSA9IHtwa2c6ICdlbG0tbGFuZy9uYXZpZ2F0aW9uJywgaW5pdDogX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRpbml0LCBvbkVmZmVjdHM6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kb25FZmZlY3RzLCBvblNlbGZNc2c6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kb25TZWxmTXNnLCB0YWc6ICdmeCcsIGNtZE1hcDogX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjbWRNYXAsIHN1Yk1hcDogX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRzdWJNYXB9O1xuXG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRvbmVPZkhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGNob2ljZXMsIGNodW5rcywgZm9ybWF0dGVyKSB7XG5cdFx0b25lT2ZIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AwID0gY2hvaWNlcztcblx0XHRcdGlmIChfcDAuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycignVHJpZWQgbWFueSBwYXJzZXJzLCBidXQgbm9uZSBvZiB0aGVtIHdvcmtlZCEnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDEgPSBBMihfcDAuXzAuXzAsIGNodW5rcywgZm9ybWF0dGVyKTtcblx0XHRcdFx0aWYgKF9wMS5jdG9yID09PSAnRXJyJykge1xuXHRcdFx0XHRcdHZhciBfdjIgPSBfcDAuXzEsXG5cdFx0XHRcdFx0XHRfdjMgPSBjaHVua3MsXG5cdFx0XHRcdFx0XHRfdjQgPSBmb3JtYXR0ZXI7XG5cdFx0XHRcdFx0Y2hvaWNlcyA9IF92Mjtcblx0XHRcdFx0XHRjaHVua3MgPSBfdjM7XG5cdFx0XHRcdFx0Zm9ybWF0dGVyID0gX3Y0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIG9uZU9mSGVscDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKF9wMS5fMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkQ2h1bmtzID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtzZWVuOiBhLCByZXN0OiBifTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRwYXJzZSA9IEYzKFxuXHRmdW5jdGlvbiAoaW5wdXQsIF9wMiwgdXJsKSB7XG5cdFx0dmFyIF9wMyA9IF9wMjtcblx0XHR2YXIgX3A0ID0gQTIoXG5cdFx0XHRfcDMuXzAsXG5cdFx0XHRBMihcblx0XHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRDaHVua3MsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXSksXG5cdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFN0cmluZyRzcGxpdCwgJy8nLCB1cmwpKSxcblx0XHRcdGlucHV0KTtcblx0XHRpZiAoX3A0LmN0b3IgPT09ICdFcnInKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDQuXzApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3A3ID0gX3A0Ll8wLl8xO1xuXHRcdFx0dmFyIF9wNiA9IF9wNC5fMC5fMC5yZXN0O1xuXHRcdFx0dmFyIF9wNSA9IF9wNjtcblx0XHRcdGlmIChfcDUuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKF9wNyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoKF9wNS5fMCA9PT0gJycpICYmIChfcDUuXzEuY3RvciA9PT0gJ1tdJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKF9wNyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSxcblx0XHRcdFx0XHRcdFx0J1RoZSBwYXJzZXIgd29ya2VkLCBidXQgLycsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGpvaW4sICcvJywgX3A2KSxcblx0XHRcdFx0XHRcdFx0XHQnIHdhcyBsZWZ0IG92ZXIuJykpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRQYXJzZXIgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdQYXJzZXInLCBfMDogYX07XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKF9wOCwgcmVzdWx0KSB7XG5cdFx0XHRcdHZhciBfcDkgPSBfcDg7XG5cdFx0XHRcdHZhciBfcDEyID0gX3A5LnJlc3Q7XG5cdFx0XHRcdHZhciBfcDEwID0gX3AxMjtcblx0XHRcdFx0aWYgKF9wMTAuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSwgJ0dvdCB0byB0aGUgZW5kIG9mIHRoZSBVUkwgYnV0IHdhbnRlZCAvJywgc3RyKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIF9wMTEgPSBfcDEwLl8wO1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuZXEoX3AxMSwgc3RyKSA/IF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRfMDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRDaHVua3MsXG5cdFx0XHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sIF9wMTEsIF9wOS5zZWVuKSxcblx0XHRcdFx0XHRcdFx0XHRfcDEwLl8xKSxcblx0XHRcdFx0XHRcdFx0XzE6IHJlc3VsdFxuXHRcdFx0XHRcdFx0fSkgOiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdFx0XHRcdCdXYW50ZWQgLycsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdFx0XHRcdFx0c3RyLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSxcblx0XHRcdFx0XHRcdFx0XHRcdCcgYnV0IGdvdCAvJyxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFN0cmluZyRqb2luLCAnLycsIF9wMTIpKSkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xufTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJGN1c3RvbSA9IEYyKFxuXHRmdW5jdGlvbiAodGlwZSwgc3RyaW5nVG9Tb21ldGhpbmcpIHtcblx0XHRyZXR1cm4gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRQYXJzZXIoXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKF9wMTMsIGZ1bmMpIHtcblx0XHRcdFx0XHR2YXIgX3AxNCA9IF9wMTM7XG5cdFx0XHRcdFx0dmFyIF9wMTUgPSBfcDE0LnJlc3Q7XG5cdFx0XHRcdFx0aWYgKF9wMTUuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoXG5cdFx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sICdHb3QgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGJ1dCB3YW50ZWQgLycsIHRpcGUpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIF9wMTcgPSBfcDE1Ll8wO1xuXHRcdFx0XHRcdFx0dmFyIF9wMTYgPSBzdHJpbmdUb1NvbWV0aGluZyhfcDE3KTtcblx0XHRcdFx0XHRcdGlmIChfcDE2LmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkQ2h1bmtzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihfZWxtX2xhbmckY29yZSRMaXN0X29wc1snOjonXSwgX3AxNywgX3AxNC5zZWVuKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X3AxNS5fMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogZnVuYyhfcDE2Ll8wKVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0XHRcdFx0XHRcdFx0J1BhcnNpbmcgYCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X3AxNyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSwgJ2Agd2VudCB3cm9uZzogJywgX3AxNi5fMCkpKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdH0pO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkc3RyaW5nID0gQTIoX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRjdXN0b20sICdTVFJJTkcnLCBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2spO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkaW50ID0gQTIoX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRjdXN0b20sICdOVU1CRVInLCBfZWxtX2xhbmckY29yZSRTdHJpbmckdG9JbnQpO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXJfb3BzID0gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlcl9vcHMgfHwge307XG5fZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyX29wc1snPC8+J10gPSBGMihcblx0ZnVuY3Rpb24gKF9wMTksIF9wMTgpIHtcblx0XHR2YXIgX3AyMCA9IF9wMTk7XG5cdFx0dmFyIF9wMjEgPSBfcDE4O1xuXHRcdHJldHVybiBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJFBhcnNlcihcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoY2h1bmtzLCBmdW5jKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkUmVzdWx0JGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRBMihfcDIwLl8wLCBjaHVua3MsIGZ1bmMpLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9wMjIpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF9wMjMgPSBfcDIyO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoX3AyMS5fMCwgX3AyMy5fMCwgX3AyMy5fMSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkpO1xuXHR9KTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJG9uZU9mID0gZnVuY3Rpb24gKGNob2ljZXMpIHtcblx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkb25lT2ZIZWxwKGNob2ljZXMpKTtcbn07XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRmb3JtYXQgPSBGMihcblx0ZnVuY3Rpb24gKGlucHV0LCBfcDI0KSB7XG5cdFx0dmFyIF9wMjUgPSBfcDI0O1xuXHRcdHJldHVybiBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJFBhcnNlcihcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoY2h1bmtzLCBmdW5jKSB7XG5cdFx0XHRcdFx0dmFyIF9wMjYgPSBBMihfcDI1Ll8wLCBjaHVua3MsIGlucHV0KTtcblx0XHRcdFx0XHRpZiAoX3AyNi5jdG9yID09PSAnRXJyJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3AyNi5fMCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2soXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRcdFx0XzA6IF9wMjYuXzAuXzAsXG5cdFx0XHRcdFx0XHRcdFx0XzE6IGZ1bmMoX3AyNi5fMC5fMSlcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdH0pO1xuXG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyROb3RGb3VuZFJvdXRlID0ge2N0b3I6ICdOb3RGb3VuZFJvdXRlJ307XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyRyb3V0ZUZyb21SZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdHZhciBfcDAgPSByZXN1bHQ7XG5cdGlmIChfcDAuY3RvciA9PT0gJ09rJykge1xuXHRcdHJldHVybiBfcDAuXzA7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFJvdXRpbmckTm90Rm91bmRSb3V0ZTtcblx0fVxufTtcbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJEtvbnRha3RSb3V0ZSA9IHtjdG9yOiAnS29udGFrdFJvdXRlJ307XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyRJbmZvcm1hc2pvblJvdXRlID0ge2N0b3I6ICdJbmZvcm1hc2pvblJvdXRlJ307XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyRIb3ZlZHNpZGVSb3V0ZSA9IHtjdG9yOiAnSG92ZWRzaWRlUm91dGUnfTtcbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJG1hdGNoZXJzID0gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRvbmVPZihcblx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRmb3JtYXQsXG5cdFx0XHRfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJEhvdmVkc2lkZVJvdXRlLFxuXHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRzKCcnKSksXG5cdFx0XHRBMihcblx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkZm9ybWF0LFxuXHRcdFx0X21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyRJbmZvcm1hc2pvblJvdXRlLFxuXHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRzKCdpbmZvcm1hc2pvbicpKSxcblx0XHRcdEEyKFxuXHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRmb3JtYXQsXG5cdFx0XHRfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJEtvbnRha3RSb3V0ZSxcblx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcygna29udGFrdCcpKVxuXHRcdF0pKTtcbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJGhhc2hQYXJzZXIgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcGFyc2UsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJGlkZW50aXR5LFxuXHRcdF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFJvdXRpbmckbWF0Y2hlcnMsXG5cdFx0QTIoX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCAxLCBsb2NhdGlvbi5oYXNoKSk7XG59O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFJvdXRpbmckcGFyc2VyID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRtYWtlUGFyc2VyKF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFJvdXRpbmckaGFzaFBhcnNlcik7XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRNb2RlbHMkaW5pdGlhbE1vZGVsID0gZnVuY3Rpb24gKHJvdXRlKSB7XG5cdHJldHVybiB7XG5cdFx0cGFtZWxkdGU6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtdKSxcblx0XHRyb3V0ZTogcm91dGUsXG5cdFx0bmF2bjogJycsXG5cdFx0ZXBvc3Q6ICcnXG5cdH07XG59O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1vZGVscyRNb2RlbCA9IEY0KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuXHRcdHJldHVybiB7cGFtZWxkdGU6IGEsIHJvdXRlOiBiLCBuYXZuOiBjLCBlcG9zdDogZH07XG5cdH0pO1xuXG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkRXBvc3QgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdFcG9zdCcsIF8wOiBhfTtcbn07XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkTmF2biA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ05hdm4nLCBfMDogYX07XG59O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1lc3NhZ2VzJEdhVGlsS29udGFrdCA9IHtjdG9yOiAnR2FUaWxLb250YWt0J307XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkR2FUaWxIb3ZlZHNpZGUgPSB7Y3RvcjogJ0dhVGlsSG92ZWRzaWRlJ307XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkR2FUaWxJbmZvcm1hc2pvbiA9IHtjdG9yOiAnR2FUaWxJbmZvcm1hc2pvbid9O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1lc3NhZ2VzJE1lbGRQYSA9IHtjdG9yOiAnTWVsZFBhJ307XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRNZW55JG1lbnlWaWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygncHVyZS1tZW51IHB1cmUtbWVudS1ob3Jpem9udGFsJylcblx0XHRcdF0pLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3B1cmUtbWVudS1saXN0Jylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygncHVyZS1tZW51LWl0ZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygncHVyZS1tZW51LWxpbmsnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhyZWYoJy8jJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uQ2xpY2soX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkR2FUaWxIb3ZlZHNpZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnMTE5w6Vyc2xhZycpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGxpLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdwdXJlLW1lbnUtaXRlbScpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdwdXJlLW1lbnUtbGluaycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaHJlZignLyNpbmZvcm1hc2pvbicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbkNsaWNrKF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1lc3NhZ2VzJEdhVGlsSW5mb3JtYXNqb24pXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnSW5mb3JtYXNqb24nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygncHVyZS1tZW51LWl0ZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygncHVyZS1tZW51LWxpbmsnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhyZWYoJy8ja29udGFrdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbkNsaWNrKF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1lc3NhZ2VzJEdhVGlsS29udGFrdClcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0KCdLb250YWt0Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKTtcbn07XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRDb21wb25lbnRzX0luZm9ybWFzam9uJGluZm9ybWFzam9uVmlldyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2NvbnRhaW50ZXInKVxuXHRcdFx0XSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2luZm9ybWF0aW9uIHB1cmUtZycpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdwdXJlLXUtMS0zJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnbC1ib3gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnaW5mb3JtYXRpb24taGVhZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ1DDpW1lbGRpbmcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVbGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UuJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdwdXJlLXUtMS0zJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnbC1ib3gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnaW5mb3JtYXRpb24taGVhZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ0Zlc3RlbicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W10pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0KCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kb1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UuJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdwdXJlLXUtMS0zJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnbC1ib3gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnaW5mb3JtYXRpb24taGVhZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ092ZXJuYXR0aW5nJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UuJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKTtcbn07XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRDb21wb25lbnRzX0ludml0YXNqb24kaW52aXRhc2pvblZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdpbmZvcm1hdGlvbiBwdXJlLWcnKVxuXHRcdFx0XSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3B1cmUtdS0xJylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2wtYm94Jylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGgzLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdpbmZvcm1hdGlvbi1oZWFkJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0KCdIZWkgYWxsZSBrasOmcmUgdmVubmVyIG9nIGZhbWlsaWUgYXYgbWFtbWEgb2cgcGFwcGEvVG9ydW5uIG9nIFRyb25kIScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtdKSxcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnTMO4cmRhZyAzLiBqdW5pIDIwMTcgdmlsIHZpIGdqZXJuZSBmw6UgaW52aXRlcmUgZGVyZSB0aWwgw6UgYmxpIG1lZCDDpSBmZWlyZSBhdCBtYW1tYSBvZyBwYXBwYSBmeWxsZXIgNjAgw6VyLiBIb2xkIGF2IGRhdG9lbiwgc8OlIGjDpXBlciB2aSBkZXJlIGhhciB0aWQsIGx5c3Qgb2cgbXVsaWdoZXQgdGlsIMOlIHbDpnJlIG1lZCDDpSBnaSBkaXNzZSBmYW50YXN0aXNrZSBtZW5uZXNrZW5lIGVuIGJ1cnNkYWcgZGUgc2VudCB2aWwgZ2xlbW1lIVxcbiAgICAgICAgICAgICAgICAgICAgICBBbGxlIGVyIGludml0ZXJ0IG1lZCBrasOmcmVzdGUvZWt0ZWZlbGxlL3NhbWJvZXIsIHPDpSBzcHJlIGdqZXJuZSBvcmRldCB2aWRlcmUhJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKTtcbn07XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRDb21wb25lbnRzX1BhbWVsZGluZ19QYW1lbGRpbmckcGFtZWxkdGUgPSBmdW5jdGlvbiAocGFtZWxkdCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRsaSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnbWVzc2FnZScpXG5cdFx0XHRdKSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ21lc3NhZ2UtdGV4dCcpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQocGFtZWxkdClcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKTtcbn07XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19QYW1lbGRpbmdfUGFtZWxkaW5nJHBhbWVsZGluZ1ZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdpbmZvcm1hdGlvbiBwdXJlLWcnKVxuXHRcdFx0XSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3B1cmUtdS0xJylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2wtYm94Jylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGZvcm0sXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W10pLFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkaW5wdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkdHlwZSQoJ3RleHQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwbGFjZWhvbGRlcignTmF2bicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25JbnB1dChfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRNZXNzYWdlcyROYXZuKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR2YWx1ZShtb2RlbC5uYXZuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W10pKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkaW5wdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkdHlwZSQoJ21haWwnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwbGFjZWhvbGRlcignRS1wb3N0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbklucHV0KF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1lc3NhZ2VzJEVwb3N0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR2YWx1ZShtb2RlbC5lcG9zdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uQ2xpY2soX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVzc2FnZXMkTWVsZFBhKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0KCdCbGkgbWVkJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ21lc3NhZ2UtbGlzdCcpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJENvbXBvbmVudHNfUGFtZWxkaW5nX1BhbWVsZGluZyRwYW1lbGR0ZSwgbW9kZWwucGFtZWxkdGUpKVxuXHRcdFx0XHRcdF0pKVxuXHRcdFx0XSkpO1xufTtcblxudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJENvbXBvbmVudHNfSG92ZWRzaWRlJHZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCdjb250YWluZXInKVxuXHRcdFx0XSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2Jhbm5lcicpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkaDEsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ2Jhbm5lci1oZWFkJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ0JsaSBtZWQgw6UgZmVpcmUuJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ1RvcnVubiBvZyBUcm9uZCBmeWxsZXIgMTE5IMOlci4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0X21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19JbnZpdGFzam9uJGludml0YXNqb25WaWV3KG1vZGVsKSxcblx0XHRcdFx0X21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19QYW1lbGRpbmdfUGFtZWxkaW5nJHBhbWVsZGluZ1ZpZXcobW9kZWwpXG5cdFx0XHRdKSk7XG59O1xuXG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19Lb250YWt0JGtvbnRha3RWaWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnY29udGFpbnRlcicpXG5cdFx0XHRdKSxcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnaW5mb3JtYXRpb24gcHVyZS1nJylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3B1cmUtdS0xJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnbC1ib3gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygnaW5mb3JtYXRpb24taGVhZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ0tvbnRha3QnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnSGFyIGR1IG5vZW4gc3DDuHJzbcOlbD8gVGEga29udGFrdCBww6UgdGxmIDAwMCAwMCAwMDAgZWxsZXIgbWFpbCBtYWlsQG1haWwubm8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKVxuXHRcdFx0XSkpO1xufTtcblxudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFZpZXckbm90Rm91bmRWaWV3ID0gQTIoXG5cdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0W10pLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0KCdGaW5uZXIgaWtrZScpXG5cdFx0XSkpO1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFZpZXckcGFnZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHR2YXIgX3AwID0gbW9kZWwucm91dGU7XG5cdHN3aXRjaCAoX3AwLmN0b3IpIHtcblx0XHRjYXNlICdIb3ZlZHNpZGVSb3V0ZSc6XG5cdFx0XHRyZXR1cm4gX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19Ib3ZlZHNpZGUkdmlldyhtb2RlbCk7XG5cdFx0Y2FzZSAnSW5mb3JtYXNqb25Sb3V0ZSc6XG5cdFx0XHRyZXR1cm4gX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19JbmZvcm1hc2pvbiRpbmZvcm1hc2pvblZpZXcobW9kZWwpO1xuXHRcdGNhc2UgJ0tvbnRha3RSb3V0ZSc6XG5cdFx0XHRyZXR1cm4gX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQ29tcG9uZW50c19Lb250YWt0JGtvbnRha3RWaWV3KG1vZGVsKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFZpZXckbm90Rm91bmRWaWV3O1xuXHR9XG59O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFZpZXckdmlldyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuZnJvbUFycmF5KFxuXHRcdFx0W10pLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkTWVueSRtZW55Vmlldyhtb2RlbCksXG5cdFx0XHRcdF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJFZpZXckcGFnZShtb2RlbClcblx0XHRcdF0pKTtcbn07XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkVmlldyROb09wID0ge2N0b3I6ICdOb09wJ307XG5cbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRBcHAkdXBkYXRlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIG1vZGVsKSB7XG5cdFx0dmFyIF9wMCA9IG1zZztcblx0XHRzd2l0Y2ggKF9wMC5jdG9yKSB7XG5cdFx0XHRjYXNlICdNZWxkUGEnOlxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYW1lbGR0ZTogQTIoXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10sXG5cdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkU3RyaW5nJGNvbmNhdChcblx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W21vZGVsLm5hdm4sICcgJywgbW9kZWwuZXBvc3RdKSksXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwucGFtZWxkdGUpLFxuXHRcdFx0XHRcdFx0XHRuYXZuOiAnJyxcblx0XHRcdFx0XHRcdFx0ZXBvc3Q6ICcnXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmVcblx0XHRcdFx0fTtcblx0XHRcdGNhc2UgJ05hdm4nOlxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e25hdm46IF9wMC5fMH0pLFxuXHRcdFx0XHRcdF8xOiBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZVxuXHRcdFx0XHR9O1xuXHRcdFx0Y2FzZSAnRXBvc3QnOlxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e2Vwb3N0OiBfcDAuXzB9KSxcblx0XHRcdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmVcblx0XHRcdFx0fTtcblx0XHRcdGNhc2UgJ0dhVGlsSG92ZWRzaWRlJzpcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IG1vZGVsLFxuXHRcdFx0XHRcdF8xOiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG5ld1VybCgnJylcblx0XHRcdFx0fTtcblx0XHRcdGNhc2UgJ0dhVGlsSW5mb3JtYXNqb24nOlxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogbW9kZWwsXG5cdFx0XHRcdFx0XzE6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbmV3VXJsKCcjaW5mb3JtYXNqb24nKVxuXHRcdFx0XHR9O1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IG1vZGVsLFxuXHRcdFx0XHRcdF8xOiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG5ld1VybCgnI2tvbnRha3QnKVxuXHRcdFx0XHR9O1xuXHRcdH1cblx0fSk7XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQXBwJHVybFVwZGF0ZSA9IEYyKFxuXHRmdW5jdGlvbiAocmVzdWx0LCBtb2RlbCkge1xuXHRcdHZhciBjdXJyZW50Um91dGUgPSBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJHJvdXRlRnJvbVJlc3VsdChyZXN1bHQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdHtyb3V0ZTogY3VycmVudFJvdXRlfSksXG5cdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmVcblx0XHR9O1xuXHR9KTtcbnZhciBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRBcHAkc3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJG5vbmU7XG59O1xudmFyIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJEFwcCRpbml0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuXHR2YXIgY3VycmVudFJvdXRlID0gX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkUm91dGluZyRyb3V0ZUZyb21SZXN1bHQocmVzdWx0KTtcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XzA6IF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJE1vZGVscyRpbml0aWFsTW9kZWwoY3VycmVudFJvdXRlKSxcblx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmVcblx0fTtcbn07XG52YXIgX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQXBwJG1haW4gPSB7XG5cdG1haW46IEEyKFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kcHJvZ3JhbSxcblx0XHRfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRSb3V0aW5nJHBhcnNlcixcblx0XHR7aW5pdDogX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQXBwJGluaXQsIHN1YnNjcmlwdGlvbnM6IF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJEFwcCRzdWJzY3JpcHRpb25zLCB1cGRhdGU6IF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJEFwcCR1cGRhdGUsIHVybFVwZGF0ZTogX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkQXBwJHVybFVwZGF0ZSwgdmlldzogX21vYXJ3aWNrJGVsbV93ZWJwYWNrX3N0YXJ0ZXIkVmlldyR2aWV3fSlcbn07XG5cbnZhciBFbG0gPSB7fTtcbkVsbVsnQXBwJ10gPSBFbG1bJ0FwcCddIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmFkZFB1YmxpY01vZHVsZShFbG1bJ0FwcCddLCAnQXBwJywgdHlwZW9mIF9tb2Fyd2ljayRlbG1fd2VicGFja19zdGFydGVyJEFwcCRtYWluID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBfbW9hcndpY2skZWxtX3dlYnBhY2tfc3RhcnRlciRBcHAkbWFpbik7XG5cblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8gSE1SIEJFR0lOIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgKGZ1bmN0aW9uKEVsbSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBcclxuICAgIC8vcG9seWZpbGwgZm9yIElFOiBodHRwczovL2dpdGh1Yi5jb20vZmx1eHh1L2VsbS1ob3QtbG9hZGVyL2lzc3Vlcy8xNlxyXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpO1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb2dyYW1XaXRoRmxhZ3M7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2dyYW1XaXRoRmxhZ3MgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9ncmFtV2l0aEZsYWdzO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1tlbG0taG90XSBIb3Qtc3dhcHBpbmcgZGlzYWJsZWQgYmVjYXVzZSBWaXJ0dWFsRG9tIG1vZHVsZSB3YXMgbm90IGZvdW5kLicpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5zdGFuY2VzID0gbW9kdWxlLmhvdC5kYXRhXHJcbiAgICAgID8gbW9kdWxlLmhvdC5kYXRhLmluc3RhbmNlcyB8fCB7fVxyXG4gICAgICA6IHt9O1xyXG4gICAgdmFyIHVpZCA9IG1vZHVsZS5ob3QuZGF0YVxyXG4gICAgICA/IG1vZHVsZS5ob3QudWlkIHx8IDBcclxuICAgICAgOiAwO1xyXG5cclxuICAgIHZhciBjYW5jZWxsZXJzID0gW107XHJcblxyXG4gICAgdmFyIGluaXRpYWxpemluZ0luc3RhbmNlID0gbnVsbCwgc3dhcHBpbmdJbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGRhdGEuaW5zdGFuY2VzID0gaW5zdGFuY2VzO1xyXG4gICAgICBkYXRhLnVpZCA9IHVpZDtcclxuXHJcbiAgICAgIC8vIGRpc2FibGUgY3VycmVudCBpbnN0YW5jZVxyXG4gICAgICBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5mYWlsKG5ldyBFcnJvcignW2VsbS1ob3RdIEluYWN0aXZlIEVsbSBpbnN0YW5jZS4nKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhbmNlbGxlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tlbG0taG90XSBLaWxsaW5nICcgKyBjYW5jZWxsZXJzLmxlbmd0aCArICcgcnVubmluZyBwcm9jZXNzZXMuLi4nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2FuY2VsbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5jZWwpIHtcclxuICAgICAgICAgICAgY2FuY2VsKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1tlbG0taG90XSBLaWxsIHByb2Nlc3MgZXJyb3I6ICcgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SWQoKSB7XHJcbiAgICAgIHJldHVybiArK3VpZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUHVibGljTW9kdWxlcyhwYXJlbnQsIHBhdGgpIHtcclxuICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmVudCkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHBhcmVudFtrZXldO1xyXG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xyXG4gICAgICAgIGlmICgnZnVsbHNjcmVlbicgaW4gY2hpbGQpIHtcclxuICAgICAgICAgIG1vZHVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGg6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBtb2R1bGU6IGNoaWxkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9kdWxlcyA9IG1vZHVsZXMuY29uY2F0KGZpbmRQdWJsaWNNb2R1bGVzKGNoaWxkLCBjdXJyZW50UGF0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbW9kdWxlcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQdWJsaWNNb2R1bGUocGF0aCkge1xyXG4gICAgICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICAgIHZhciBwYXJlbnQgPSBFbG07XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGlmIChwYXJ0IGluIHBhcmVudCkge1xyXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50W3BhcnRdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFuY2UoZG9tTm9kZSwgZmxhZ3MsIHBhdGgsIHBvcnRTdWJzY3JpYmVzKSB7XHJcbiAgICAgIHZhciBpZCA9IGdldElkKCk7XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZXNbaWRdID0ge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGRvbU5vZGU6IGRvbU5vZGUsXHJcbiAgICAgICAgZmxhZ3M6IGZsYWdzLFxyXG4gICAgICAgIHBvcnRTdWJzY3JpYmVzOiBwb3J0U3Vic2NyaWJlcyxcclxuICAgICAgICBlbG1Qcm94eTogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBQdWJsaWNNb2R1bGUocGF0aCwgbW9kdWxlKSB7XHJcbiAgICAgIHZhciBlbWJlZCA9IG1vZHVsZS5lbWJlZDtcclxuICAgICAgdmFyIGZ1bGxzY3JlZW4gPSBtb2R1bGUuZnVsbHNjcmVlbjtcclxuICAgICAgbW9kdWxlLmVtYmVkID0gZnVuY3Rpb24oZG9tTm9kZSwgZmxhZ3MpIHtcclxuICAgICAgICB2YXIgZWxtO1xyXG4gICAgICAgIHZhciBwb3J0U3Vic2NyaWJlcyA9IHt9O1xyXG4gICAgICAgIGluaXRpYWxpemluZ0luc3RhbmNlID0gcmVnaXN0ZXJJbnN0YW5jZShkb21Ob2RlLCBmbGFncywgcGF0aCwgcG9ydFN1YnNjcmliZXMpXHJcbiAgICAgICAgZWxtID0gZW1iZWQoZG9tTm9kZSwgZmxhZ3MpO1xyXG4gICAgICAgIHdyYXBQb3J0cyhlbG0sIHBvcnRTdWJzY3JpYmVzKVxyXG4gICAgICAgIGVsbSA9IGluaXRpYWxpemluZ0luc3RhbmNlLmVsbVByb3h5ID0ge1xyXG4gICAgICAgICAgcG9ydHM6IGVsbS5wb3J0c1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5pdGlhbGl6aW5nSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlbG07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBtb2R1bGUuZnVsbHNjcmVlbiA9IGZ1bmN0aW9uIChmbGFncykge1xyXG4gICAgICAgIHZhciBlbG1cclxuICAgICAgICB2YXIgcG9ydFN1YnNjcmliZXMgPSB7fTtcclxuICAgICAgICBpbml0aWFsaXppbmdJbnN0YW5jZSA9IHJlZ2lzdGVySW5zdGFuY2UoZG9jdW1lbnQuYm9keSwgZmxhZ3MsIHBhdGgsIHBvcnRTdWJzY3JpYmVzKVxyXG4gICAgICAgIGVsbSA9IGZ1bGxzY3JlZW4oZmxhZ3MpO1xyXG4gICAgICAgIHdyYXBQb3J0cyhlbG0sIHBvcnRTdWJzY3JpYmVzKVxyXG4gICAgICAgIGVsbSA9IGluaXRpYWxpemluZ0luc3RhbmNlLmVsbVByb3h5ID0ge1xyXG4gICAgICAgICAgcG9ydHM6IGVsbS5wb3J0c1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5pdGlhbGl6aW5nSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlbG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwKGluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZWxtLWhvdF0gSG90LXN3YXBwaW5nIG1vZHVsZTogJyArIGluc3RhbmNlLnBhdGgpXHJcblxyXG4gICAgICBzd2FwcGluZ0luc3RhbmNlID0gaW5zdGFuY2U7XHJcblxyXG4gICAgICB2YXIgZG9tTm9kZSA9IGluc3RhbmNlLmRvbU5vZGU7XHJcblxyXG4gICAgICB3aGlsZSAoZG9tTm9kZS5sYXN0Q2hpbGQpIHtcclxuICAgICAgICBkb21Ob2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUubGFzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG0gPSBnZXRQdWJsaWNNb2R1bGUoaW5zdGFuY2UucGF0aClcclxuICAgICAgdmFyIGVsbTtcclxuICAgICAgaWYgKG0pIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuaXNGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICBlbG0gPSBtLmZ1bGxzY3JlZW4oaW5zdGFuY2UuZmxhZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbG0gPSBtLmVtYmVkKGRvbU5vZGUsIGluc3RhbmNlLmZsYWdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluc3RhbmNlLmVsbVByb3h5LnBvcnRzID0gZWxtLnBvcnRzO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5wb3J0U3Vic2NyaWJlcykuZm9yRWFjaChmdW5jdGlvbihwb3J0TmFtZSkge1xyXG4gICAgICAgICAgaWYgKHBvcnROYW1lIGluIGVsbS5wb3J0cyAmJiAnc3Vic2NyaWJlJyBpbiBlbG0ucG9ydHNbcG9ydE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVycyA9IGluc3RhbmNlLnBvcnRTdWJzY3JpYmVzW3BvcnROYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFoYW5kbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tlbG0taG90XSBSZWNvbm5lY3QgJyArIGhhbmRsZXJzLmxlbmd0aCArICcgaGFuZGxlcihzKSB0byBwb3J0IFxcJycgKyBwb3J0TmFtZSArICdcXCcgKCcgKyBpbnN0YW5jZS5wYXRoICsgJykuJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgIGVsbS5wb3J0c1twb3J0TmFtZV0uc3Vic2NyaWJlKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBpbnN0YW5jZS5wb3J0U3Vic2NyaWJlc1twb3J0TmFtZV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbZWxtLWhvdF0gUG9ydCB3YXMgcmVtb3ZlZDogJyArIHBvcnROYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW2VsbS1ob3RdIE1vZHVsZSB3YXMgcmVtb3ZlZDogJyArIGluc3RhbmNlLnBhdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2FwcGluZ0luc3RhbmNlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwUG9ydHMoZWxtLCBwb3J0U3Vic2NyaWJlcykge1xyXG4gICAgICB2YXIgcG9ydE5hbWVzID0gT2JqZWN0LmtleXMoZWxtLnBvcnRzIHx8IHt9KTtcclxuICAgICAgLy9ob29rIHBvcnRzXHJcbiAgICAgIGlmIChwb3J0TmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcG9ydE5hbWVzXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmUnIGluIGVsbS5wb3J0c1tuYW1lXTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihwb3J0TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9ydCA9IGVsbS5wb3J0c1twb3J0TmFtZV07XHJcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmUgPSBwb3J0LnN1YnNjcmliZTtcclxuICAgICAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gcG9ydC51bnN1YnNjcmliZTtcclxuICAgICAgICAgICAgZWxtLnBvcnRzW3BvcnROYW1lXSA9IE9iamVjdC5hc3NpZ24ocG9ydCwge1xyXG4gICAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24oaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tlbG0taG90XSBwb3J0cy4nICsgcG9ydE5hbWUgKyAnLnN1YnNjcmliZSBjYWxsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBvcnRTdWJzY3JpYmVzW3BvcnROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICBwb3J0U3Vic2NyaWJlc1twb3J0TmFtZV0gPSBbIGhhbmRsZXIgXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vVE9ETyBoYW5kbGUgc3Vic2NyaWJpbmcgdG8gc2luZ2xlIGhhbmRsZXIgbW9yZSB0aGFuIG9uY2U/XHJcbiAgICAgICAgICAgICAgICAgIHBvcnRTdWJzY3JpYmVzW3BvcnROYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZS5jYWxsKHBvcnQsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbZWxtLWhvdF0gcG9ydHMuJyArIHBvcnROYW1lICsgJy51bnN1YnNjcmliZSBjYWxsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHBvcnRTdWJzY3JpYmVzW3BvcnROYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ICYmIGxpc3QuaW5kZXhPZihoYW5kbGVyKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5sYXN0SW5kZXhPZihoYW5kbGVyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tlbG0taG90XSBwb3J0cy4nICsgcG9ydE5hbWUgKyAnLnVuc3Vic2NyaWJlOiBoYW5kbGVyIG5vdCBzdWJzY3JpYmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmUuY2FsbChwb3J0LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvcnRTdWJzY3JpYmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhvb2sgcHJvZ3JhbSBjcmVhdGlvblxyXG4gICAgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kcHJvZ3JhbVdpdGhGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGluc3RhbmNlID0gaW5pdGlhbGl6aW5nSW5zdGFuY2U7XHJcbiAgICAgIHZhciBzd2FwcGluZyA9IHN3YXBwaW5nSW5zdGFuY2U7XHJcbiAgICAgIHZhciB0cnlGaXJzdFJlbmRlciA9ICEhc3dhcHBpbmdJbnN0YW5jZTtcclxuICAgICAgdmFyIGlzSW5pdGlhbFJlbmRlciA9IHRydWU7XHJcbiAgICAgIHZhciBwcm9ncmFtID0gcHJvZ3JhbVdpdGhGbGFncy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgLy92YXIgbWFrZVJlbmRlcmVyID0gcHJvZ3JhbS5yZW5kZXJlcjtcclxuICAgICAgdmFyIGluaXQgPSBwcm9ncmFtLmluaXQ7XHJcbiAgICAgIHZhciB2aWV3ID0gcHJvZ3JhbS52aWV3O1xyXG4gICAgICBwcm9ncmFtLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICBpZiAoc3dhcHBpbmcpIHtcclxuICAgICAgICAgIHJlc3VsdC5fMCA9IHN3YXBwaW5nLmxhc3RTdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfTtcclxuICAgICAgcHJvZ3JhbS52aWV3ID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIC8vIGZpcnN0IHJlbmRlciBtYXkgZmFpbCBpZiBzaGFwZSBvZiBtb2RlbCBjaGFuZ2VkIHRvbyBtdWNoXHJcbiAgICAgICAgaWYgKHRyeUZpcnN0UmVuZGVyKSB7XHJcbiAgICAgICAgICB0cnlGaXJzdFJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmlldyhtb2RlbCk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW2VsbS1ob3RdIEhvdC1zd2FwcGluZyBpcyBub3QgcG9zc2libGUsIHBsZWFzZSByZWxvYWQgcGFnZS4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdmlldyhtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgaW5zdGFuY2UubGFzdFN0YXRlID0gbW9kZWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGluc3RhbmNlID0gc3dhcHBpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzSW5pdGlhbFJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhvb2sgcHJvY2VzcyBjcmVhdGlvblxyXG4gICAgdmFyIG5hdGl2ZUJpbmRpbmcgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmdcclxuICAgIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZGVmID0gbmF0aXZlQmluZGluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB2YXIgY2FsbGJhY2sgPSBkZWYuY2FsbGJhY2tcclxuICAgICAgZGVmLmNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBjYW5jZWxsZXJzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2FuY2VsbGVycy5zcGxpY2UoY2FuY2VsbGVycy5pbmRleE9mKHJlc3VsdCksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gZGVmO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzd2FwIGluc3RhbmNlc1xyXG4gICAgdmFyIHJlbW92ZWRJbnN0YW5jZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGlkIGluIGluc3RhbmNlcykge1xyXG4gICAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZXNbaWRdXHJcbiAgICAgIGlmIChpbnN0YW5jZS5kb21Ob2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBzd2FwKGluc3RhbmNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW1vdmVkSW5zdGFuY2VzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlZEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICBkZWxldGUgaW5zdGFuY2VbaWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gd3JhcCBhbGwgcHVibGljIG1vZHVsZXNcclxuICAgIHZhciBwdWJsaWNNb2R1bGVzID0gZmluZFB1YmxpY01vZHVsZXMoRWxtKTtcclxuICAgIHB1YmxpY01vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xyXG4gICAgICB3cmFwUHVibGljTW9kdWxlKG0ucGF0aCwgbS5tb2R1bGUpO1xyXG4gICAgfSk7XHJcbiAgfSkoRWxtKTtcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLyBITVIgRU5EIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmVbJ2FtZCddKVxue1xuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gRWxtOyB9KTtcbiAgcmV0dXJuO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIilcbntcbiAgbW9kdWxlWydleHBvcnRzJ10gPSBFbG07XG4gIHJldHVybjtcbn1cblxudmFyIGdsb2JhbEVsbSA9IHRoaXNbJ0VsbSddO1xuaWYgKHR5cGVvZiBnbG9iYWxFbG0gPT09IFwidW5kZWZpbmVkXCIpXG57XG4gIHRoaXNbJ0VsbSddID0gRWxtO1xuICByZXR1cm47XG59XG5cbmZvciAodmFyIHB1YmxpY01vZHVsZSBpbiBFbG0pXG57XG4gIGlmIChwdWJsaWNNb2R1bGUgaW4gZ2xvYmFsRWxtKVxuICB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgdHdvIEVsbSBtb2R1bGVzIGNhbGxlZCBgJyArIHB1YmxpY01vZHVsZSArICdgIG9uIHRoaXMgcGFnZSEgUmVuYW1lIG9uZSBvZiB0aGVtLicpO1xuICB9XG4gIGdsb2JhbEVsbVtwdWJsaWNNb2R1bGVdID0gRWxtW3B1YmxpY01vZHVsZV07XG59XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZWxtL0FwcC5lbG1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==