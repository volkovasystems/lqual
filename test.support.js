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

var assert = require("should");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibHF1YWwiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ1bmRlZmluZWQiLCJnbG9iYWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFFBQVFELFFBQVMsb0JBQVQsQ0FBZDtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFkLEVBQTZCLElBQTdCO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBUCxFQUFhLElBQWIsQ0FBZCxFQUFtQyxJQUFuQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPSSxTQUFQLEVBQWtCQSxTQUFsQixDQUFkLEVBQTZDLElBQTdDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPO0FBQ3pDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sRUFBUCxFQUFZLEVBQVosQ0FBZCxFQUFpQyxJQUFqQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPSyxNQUFQLEVBQWVBLE1BQWYsQ0FBZCxFQUF1QyxJQUF2QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSixVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLElBQVAsRUFBYSxJQUFiLENBQWQsRUFBbUMsSUFBbkM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpREFBVixFQUE2RCxZQUFPO0FBQ25FQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVAsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUExQixDQUFkLEVBQTZELElBQTdEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSxpQ0FBSixFQUF1QyxZQUFPO0FBQzdDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBUCxFQUFhLEtBQWIsQ0FBZCxFQUFvQyxLQUFwQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBbEREO0FBbURBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibHF1YWxcIixcblx0XHRcdFwicGF0aFwiOiBcImxxdWFsL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9scXVhbC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibHF1YWxcIjogXCJscXVhbFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbHF1YWwgPSByZXF1aXJlKCBcIi4vbHF1YWwuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJscXVhbFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggMCwgMCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggMCwgMCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCBudWxsLCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCBudWxsLCBudWxsICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIHVuZGVmaW5lZCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCB1bmRlZmluZWQsIHVuZGVmaW5lZCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxxdWFsKCB7IH0sIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBmaXJzdCBsZXZlbCBlcXVhbFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBscXVhbCggeyB9LCB7IH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggd2luZG93LCB3aW5kb3cgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggbHF1YWwoIGdsb2JhbCwgZ2xvYmFsICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbHF1YWwoIHRydWUsIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZmlyc3QgbGV2ZWwgZXF1YWxcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggbHF1YWwoIHRydWUsIHRydWUgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggWyAxLCAyLCAzLCA0LCA1IF0sIFsgMSwgMiwgMywgNCwgNSBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCBbIDEsIDIsIDMsIDQsIDUgXSwgWyAxLCAyLCAzLCA0LCA1IF0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBscXVhbCggdHJ1ZSwgZmFsc2UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgbm90IGJlIGZpcnN0IGxldmVsIGVxdWFsXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxxdWFsKCB0cnVlLCBmYWxzZSApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
