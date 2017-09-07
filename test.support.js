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



//: @client:
var lqual = require("./lqual.support.js");
//: @end-client







//: @client:
describe("lqual", function () {

	describe("`lqual( 0, 0 )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual(0, 0), true);
		});
	});

	describe("`lqual( null, null )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual(null, null), true);
		});
	});

	describe("`lqual( undefined, undefined )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual(undefined, undefined), true);
		});
	});

	describe("`lqual( { }, { } )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual({}, {}), true);
		});
	});

	describe("`lqual( window, window )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual(global, global), true);
		});
	});

	describe("`lqual( true, true )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual(true, true), true);
		});
	});

	describe("`lqual( [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] )`", function () {
		it("should be first level equal", function () {
			assert.equal(lqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true);
		});
	});

	describe("`lqual( true, false )`", function () {
		it("should not be first level equal", function () {
			assert.equal(lqual(true, false), false);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibHF1YWwiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ1bmRlZmluZWQiLCJnbG9iYWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekJBLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sQ0FBUCxFQUFVLENBQVYsQ0FBZCxFQUE2QixJQUE3QjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLElBQVAsRUFBYSxJQUFiLENBQWQsRUFBbUMsSUFBbkM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ksU0FBUCxFQUFrQkEsU0FBbEIsQ0FBZCxFQUE2QyxJQUE3QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLEVBQVAsRUFBWSxFQUFaLENBQWQsRUFBaUMsSUFBakM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ssTUFBUCxFQUFlQSxNQUFmLENBQWQsRUFBdUMsSUFBdkM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUosVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxJQUFQLEVBQWEsSUFBYixDQUFkLEVBQW1DLElBQW5DO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUMsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBMUIsQ0FBZCxFQUE2RCxJQUE3RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNDLEtBQUksaUNBQUosRUFBdUMsWUFBTztBQUM3Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLElBQVAsRUFBYSxLQUFiLENBQWQsRUFBb0MsS0FBcEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQWxERDtBQW1EQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxxdWFsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJscXVhbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbHF1YWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImxxdWFsXCI6IFwibHF1YWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGxxdWFsID0gcmVxdWlyZSggXCIuL2xxdWFsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwibHF1YWxcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIDAsIDAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggbHF1YWwoIDAsIDAgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggbnVsbCwgbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggbnVsbCwgbnVsbCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCB1bmRlZmluZWQsIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggdW5kZWZpbmVkLCB1bmRlZmluZWQgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggeyB9LCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggbHF1YWwoIHsgfSwgeyB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIHdpbmRvdywgd2luZG93IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCBnbG9iYWwsIGdsb2JhbCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCB0cnVlLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCB0cnVlLCB0cnVlICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIFsgMSwgMiwgMywgNCwgNSBdLCBbIDEsIDIsIDMsIDQsIDUgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggWyAxLCAyLCAzLCA0LCA1IF0sIFsgMSwgMiwgMywgNCwgNSBdICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIHRydWUsIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIG5vdCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggdHJ1ZSwgZmFsc2UgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
