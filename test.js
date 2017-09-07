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

const assert = require( "should/as-function" );

//: @server:
const lqual = require( "./lqual.js" );
//: @end-server






//: @server:
describe( "lqual", ( ) => {

	describe( "`lqual( 0, 0 )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( 0, 0 ), true );
		} );
	} );

	describe( "`lqual( null, null )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( null, null ), true );
		} );
	} );

	describe( "`lqual( undefined, undefined )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( undefined, undefined ), true );
		} );
	} );

	describe( "`lqual( { }, { } )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( { }, { } ), true );
		} );
	} );

	describe( "`lqual( global, global )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( global, global ), true );
		} );
	} );

	describe( "`lqual( true, true )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( true, true ), true );
		} );
	} );

	describe( "`lqual( [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] )`", ( ) => {
		it( "should be first level equal", ( ) => {
			assert.equal( lqual( [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ), true );
		} );
	} );

	describe( "`lqual( true, false )`", ( ) => {
		it( "should not be first level equal", ( ) => {
			assert.equal( lqual( true, false ), false );
		} );
	} );

} );
//: @end-server






