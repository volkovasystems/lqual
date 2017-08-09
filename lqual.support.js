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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxxdWFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2FsY2lmeSIsInJlcXVpcmUiLCJkb3VidCIsImVxZSIsImtvdW50IiwicmF6ZSIsImxxdWFsIiwic291cmNlIiwidGFyZ2V0IiwiZXJyb3IiLCJBU19BUlJBWSIsImV2ZXJ5IiwiZWxlbWVudCIsImluZGV4IiwibGVuZ3RoIiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1LLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzdDOzs7Ozs7Ozs7QUFTQSxLQUFJTCxJQUFLSSxNQUFMLEVBQWFDLE1BQWIsQ0FBSixFQUEyQjtBQUMxQixTQUFPLElBQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSVIsUUFBU08sTUFBVCxLQUFxQlAsUUFBU1EsTUFBVCxDQUF6QixFQUE0QztBQUMzQyxVQUFPLElBQVA7QUFDQTtBQUNELEVBSkQsQ0FJQyxPQUFPQyxLQUFQLEVBQWMsQ0FBRzs7QUFFbEIsS0FBSSxRQUFPRixNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBbEQsRUFBNEQ7QUFDM0QsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSU4sTUFBT0ssTUFBUCxFQUFlRyxRQUFmLEtBQTZCUixNQUFPTSxNQUFQLEVBQWVFLFFBQWYsQ0FBakMsRUFBNEQ7QUFDM0RILFdBQVNGLEtBQU1FLE1BQU4sQ0FBVDtBQUNBQyxXQUFTSCxLQUFNRyxNQUFOLENBQVQ7O0FBRUEsU0FBT0QsT0FBT0ksS0FBUCxDQUFjLFVBQUVDLE9BQUYsRUFBV0MsS0FBWCxVQUFzQlYsSUFBS1MsT0FBTCxFQUFjSixPQUFRSyxLQUFSLENBQWQsQ0FBdEIsRUFBZCxLQUF5RU4sT0FBT08sTUFBUCxJQUFpQk4sT0FBT00sTUFBeEc7QUFDQTs7QUFFRCxLQUFJVixNQUFPRyxNQUFQLEtBQW1CSCxNQUFPSSxNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUksQ0FBQyxvQkFBYUQsTUFBYixFQUFzQkksS0FBdEIsQ0FBNkIsVUFBRUksUUFBRixVQUFnQlosSUFBS0ksT0FBUVEsUUFBUixDQUFMLEVBQXlCUCxPQUFRTyxRQUFSLENBQXpCLENBQWhCLEVBQTdCLENBQUwsRUFBbUc7QUFDbEcsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDLG9CQUFhUCxNQUFiLEVBQXNCRyxLQUF0QixDQUE2QixVQUFFSSxRQUFGLFVBQWdCWixJQUFLSSxPQUFRUSxRQUFSLENBQUwsRUFBeUJQLE9BQVFPLFFBQVIsQ0FBekIsQ0FBaEIsRUFBN0IsQ0FBTCxFQUFtRztBQUNsRyxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQTVDRDs7QUE4Q0FDLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImxxdWFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibHF1YWxcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibHF1YWwvbHF1YWwuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibHF1YWwuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJscXVhbFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9scXVhbC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwibHF1YWwtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRGaXJzdCBsZXZlbCBlcXVhbC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNhbGNpZnlcIjogXCJjYWxjaWZ5XCIsXHJcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxyXG5cdFx0XHRcImVxZVwiOiBcImVxZVwiLFxyXG5cdFx0XHRcImtvdW50XCI6IFwia291bnRcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBjYWxjaWZ5ID0gcmVxdWlyZSggXCJjYWxjaWZ5XCIgKTtcclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xyXG5jb25zdCBrb3VudCA9IHJlcXVpcmUoIFwia291bnRcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuXHJcbmNvbnN0IGxxdWFsID0gZnVuY3Rpb24gbHF1YWwoIHNvdXJjZSwgdGFyZ2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZXFlKCBzb3VyY2UsIHRhcmdldCApICl7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdGlmKCBjYWxjaWZ5KCBzb3VyY2UgKSA9PSBjYWxjaWZ5KCB0YXJnZXQgKSApe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9Y2F0Y2goIGVycm9yICl7IH1cclxuXHJcblx0aWYoIHR5cGVvZiBzb3VyY2UgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ICE9IFwib2JqZWN0XCIgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmKCBkb3VidCggc291cmNlLCBBU19BUlJBWSApICYmIGRvdWJ0KCB0YXJnZXQsIEFTX0FSUkFZICkgKXtcclxuXHRcdHNvdXJjZSA9IHJhemUoIHNvdXJjZSApO1xyXG5cdFx0dGFyZ2V0ID0gcmF6ZSggdGFyZ2V0ICk7XHJcblxyXG5cdFx0cmV0dXJuIHNvdXJjZS5ldmVyeSggKCBlbGVtZW50LCBpbmRleCApID0+IGVxZSggZWxlbWVudCwgdGFyZ2V0WyBpbmRleCBdICkgKSAmJiBzb3VyY2UubGVuZ3RoID09IHRhcmdldC5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRpZigga291bnQoIHNvdXJjZSApICE9IGtvdW50KCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYoICFPYmplY3Qua2V5cyggc291cmNlICkuZXZlcnkoICggcHJvcGVydHkgKSA9PiBlcWUoIHNvdXJjZVsgcHJvcGVydHkgXSwgdGFyZ2V0WyBwcm9wZXJ0eSBdICkgKSApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYoICFPYmplY3Qua2V5cyggdGFyZ2V0ICkuZXZlcnkoICggcHJvcGVydHkgKSA9PiBlcWUoIHNvdXJjZVsgcHJvcGVydHkgXSwgdGFyZ2V0WyBwcm9wZXJ0eSBdICkgKSApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxxdWFsO1xyXG4iXX0=
//# sourceMappingURL=lqual.support.js.map
