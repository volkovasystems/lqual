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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxxdWFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2FsY2lmeSIsInJlcXVpcmUiLCJkb3VidCIsImVxZSIsImtvdW50IiwicmF6ZSIsImxxdWFsIiwic291cmNlIiwidGFyZ2V0IiwiZXJyb3IiLCJBU19BUlJBWSIsImV2ZXJ5IiwiZWxlbWVudCIsImluZGV4IiwibGVuZ3RoIiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1LLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzdDOzs7Ozs7Ozs7QUFTQSxLQUFJTCxJQUFLSSxNQUFMLEVBQWFDLE1BQWIsQ0FBSixFQUEyQjtBQUMxQixTQUFPLElBQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSVIsUUFBU08sTUFBVCxLQUFxQlAsUUFBU1EsTUFBVCxDQUF6QixFQUE0QztBQUMzQyxVQUFPLElBQVA7QUFDQTtBQUNELEVBSkQsQ0FJQyxPQUFPQyxLQUFQLEVBQWMsQ0FBRzs7QUFFbEIsS0FBSSxRQUFPRixNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBbEQsRUFBNEQ7QUFDM0QsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSU4sTUFBT0ssTUFBUCxFQUFlRyxRQUFmLEtBQTZCUixNQUFPTSxNQUFQLEVBQWVFLFFBQWYsQ0FBakMsRUFBNEQ7QUFDM0RILFdBQVNGLEtBQU1FLE1BQU4sQ0FBVDtBQUNBQyxXQUFTSCxLQUFNRyxNQUFOLENBQVQ7O0FBRUEsU0FBT0QsT0FBT0ksS0FBUCxDQUFjLFVBQUVDLE9BQUYsRUFBV0MsS0FBWCxVQUFzQlYsSUFBS1MsT0FBTCxFQUFjSixPQUFRSyxLQUFSLENBQWQsQ0FBdEIsRUFBZCxLQUF5RU4sT0FBT08sTUFBUCxJQUFpQk4sT0FBT00sTUFBeEc7QUFDQTs7QUFFRCxLQUFJVixNQUFPRyxNQUFQLEtBQW1CSCxNQUFPSSxNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUksQ0FBQyxvQkFBYUQsTUFBYixFQUFzQkksS0FBdEIsQ0FBNkIsVUFBRUksUUFBRixVQUFnQlosSUFBS0ksT0FBUVEsUUFBUixDQUFMLEVBQXlCUCxPQUFRTyxRQUFSLENBQXpCLENBQWhCLEVBQTdCLENBQUwsRUFBbUc7QUFDbEcsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDLG9CQUFhUCxNQUFiLEVBQXNCRyxLQUF0QixDQUE2QixVQUFFSSxRQUFGLFVBQWdCWixJQUFLSSxPQUFRUSxRQUFSLENBQUwsRUFBeUJQLE9BQVFPLFFBQVIsQ0FBekIsQ0FBaEIsRUFBN0IsQ0FBTCxFQUFtRztBQUNsRyxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQTVDRDs7QUE4Q0FDLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImxxdWFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxxdWFsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJscXVhbC9scXVhbC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibHF1YWwuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibHF1YWxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xxdWFsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibHF1YWwtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGaXJzdCBsZXZlbCBlcXVhbC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2FsY2lmeVwiOiBcImNhbGNpZnlcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwia291bnRcIjogXCJrb3VudFwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNhbGNpZnkgPSByZXF1aXJlKCBcImNhbGNpZnlcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcbmNvbnN0IGtvdW50ID0gcmVxdWlyZSggXCJrb3VudFwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcblxuY29uc3QgbHF1YWwgPSBmdW5jdGlvbiBscXVhbCggc291cmNlLCB0YXJnZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZXFlKCBzb3VyY2UsIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0cnl7XG5cdFx0aWYoIGNhbGNpZnkoIHNvdXJjZSApID09IGNhbGNpZnkoIHRhcmdldCApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1jYXRjaCggZXJyb3IgKXsgfVxuXG5cdGlmKCB0eXBlb2Ygc291cmNlICE9IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCAhPSBcIm9iamVjdFwiICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYoIGRvdWJ0KCBzb3VyY2UsIEFTX0FSUkFZICkgJiYgZG91YnQoIHRhcmdldCwgQVNfQVJSQVkgKSApe1xuXHRcdHNvdXJjZSA9IHJhemUoIHNvdXJjZSApO1xuXHRcdHRhcmdldCA9IHJhemUoIHRhcmdldCApO1xuXG5cdFx0cmV0dXJuIHNvdXJjZS5ldmVyeSggKCBlbGVtZW50LCBpbmRleCApID0+IGVxZSggZWxlbWVudCwgdGFyZ2V0WyBpbmRleCBdICkgKSAmJiBzb3VyY2UubGVuZ3RoID09IHRhcmdldC5sZW5ndGg7XG5cdH1cblxuXHRpZigga291bnQoIHNvdXJjZSApICE9IGtvdW50KCB0YXJnZXQgKSApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmKCAhT2JqZWN0LmtleXMoIHNvdXJjZSApLmV2ZXJ5KCAoIHByb3BlcnR5ICkgPT4gZXFlKCBzb3VyY2VbIHByb3BlcnR5IF0sIHRhcmdldFsgcHJvcGVydHkgXSApICkgKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiggIU9iamVjdC5rZXlzKCB0YXJnZXQgKS5ldmVyeSggKCBwcm9wZXJ0eSApID0+IGVxZSggc291cmNlWyBwcm9wZXJ0eSBdLCB0YXJnZXRbIHByb3BlcnR5IF0gKSApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxxdWFsO1xuIl19
//# sourceMappingURL=lqual.support.js.map
