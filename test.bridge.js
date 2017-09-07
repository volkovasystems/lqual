"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "lqual",
              			"path": "lqual/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/lqual.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"lqual": "lqual"
              		}
              	@end-include
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:
describe("lqual", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`lqual( 0, 0 )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(0, 0);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( null, null )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(null, null);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( undefined, undefined )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(undefined, undefined);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( { }, { } )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual({}, {});
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( window, window )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(window, window);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( true, true )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(true, true);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] )`", function () {
		it("should be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`lqual( true, false )`", function () {
		it("should not be first level equal", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return lqual(true, false);
			}).

			value;

			assert.equal(result, false);
		});
	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImxxdWFsIiwidmFsdWUiLCJlcXVhbCIsInVuZGVmaW5lZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLENBQVAsRUFBVSxDQUFWLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQVZEO0FBV0EsRUFaRDs7QUFjQUwsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxJQUFQLEVBQWEsSUFBYixDQUFQO0FBQ0EsSUFKVzs7QUFNWEMsUUFORjs7QUFRQWIsVUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLElBQXRCO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0FMLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREksS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU9HLFNBQVAsRUFBa0JBLFNBQWxCLENBQVA7QUFDQSxJQUpXOztBQU1YRixRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQVZEO0FBV0EsRUFaRDs7QUFjQUwsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDSSxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxFQUFQLEVBQVksRUFBWixDQUFQO0FBQ0EsSUFKVzs7QUFNWEMsUUFORjs7QUFRQWIsVUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLElBQXRCO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0FMLFVBQVUsMkJBQVYsRUFBdUMsWUFBTztBQUM3Q0ksS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU9JLE1BQVAsRUFBZUEsTUFBZixDQUFQO0FBQ0EsSUFKVzs7QUFNWEgsUUFORjs7QUFRQWIsVUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLElBQXRCO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0FMLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0ksS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE1BQU8sSUFBUCxFQUFhLElBQWIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFiLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBVkQ7QUFXQSxFQVpEOztBQWNBTCxVQUFVLGlEQUFWLEVBQTZELFlBQU87QUFDbkVJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxNQUFPLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUCxFQUEwQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQTFCLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQVZEO0FBV0EsRUFaRDs7QUFjQUwsVUFBVSx3QkFBVixFQUFvQyxZQUFPO0FBQzFDSSxLQUFJLGlDQUFKLEVBQXVDLFlBQU87QUFDN0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxJQUFQLEVBQWEsS0FBYixDQUFQO0FBQ0EsSUFKVzs7QUFNWEMsUUFORjs7QUFRQWIsVUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLEtBQXRCO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0EsQ0FwSEQ7QUFxSEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxxdWFsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJscXVhbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbHF1YWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImxxdWFsXCI6IFwibHF1YWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwibHF1YWxcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCAwLCAwIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGxxdWFsKCAwLCAwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIG51bGwsIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gbHF1YWwoIG51bGwsIG51bGwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggdW5kZWZpbmVkLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gbHF1YWwoIHVuZGVmaW5lZCwgdW5kZWZpbmVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIHsgfSwgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGxxdWFsKCB7IH0sIHsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCB3aW5kb3csIHdpbmRvdyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBscXVhbCggd2luZG93LCB3aW5kb3cgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggdHJ1ZSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBscXVhbCggdHJ1ZSwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCBbIDEsIDIsIDMsIDQsIDUgXSwgWyAxLCAyLCAzLCA0LCA1IF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gbHF1YWwoIFsgMSwgMiwgMywgNCwgNSBdLCBbIDEsIDIsIDMsIDQsIDUgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCB0cnVlLCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBub3QgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gbHF1YWwoIHRydWUsIGZhbHNlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
