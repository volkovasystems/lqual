"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "lqual",
              			"path": "lqual/lqual.js",
              			"file": "lqual.js",
              			"module": "lqual",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/lqual.git",
              			"test": "lqual-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		First level equal.
              	@end-module-documentation
              
              	@include:
              		{
              			"calcify": "calcify",
              			"doubt": "doubt",
              			"eqe": "eqe",
              			"kount": "kount",
              			"raze": "raze"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var calcify = require("calcify");
var doubt = require("doubt");
var eqe = require("eqe");
var kount = require("kount");
var raze = require("raze");

var lqual = function lqual(source, target) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"source:required": "*",
                                            			"target:required": "*"
                                            		}
                                            	@end-meta-configuration
                                            */

	if (eqe(source, target)) {
		return true;
	}

	try {
		if (calcify(source) == calcify(target)) {
			return true;
		}
	} catch (error) {}

	if ((typeof source === "undefined" ? "undefined" : (0, _typeof3.default)(source)) != "object" || (typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) != "object") {
		return false;
	}

	if (doubt(source, AS_ARRAY) && doubt(target, AS_ARRAY)) {
		source = raze(source);
		target = raze(target);

		return source.every(function (element, index) {return eqe(element, target[index]);}) && source.length == target.length;
	}

	if (kount(source) != kount(target)) {
		return false;
	}

	if (!(0, _keys2.default)(source).every(function (property) {return eqe(source[property], target[property]);})) {
		return false;
	}

	if (!(0, _keys2.default)(target).every(function (property) {return eqe(source[property], target[property]);})) {
		return false;
	}

	return true;
};

module.exports = lqual;

//# sourceMappingURL=lqual.support.js.map