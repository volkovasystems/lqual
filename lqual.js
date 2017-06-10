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
			"eqe": "eqe",
			"kount": "kount",
			"protype": "protype"
		}
	@end-include
*/

const eqe = require( "eqe" );
const kount = require( "kount" );
const protype = require( "protype" );

const lqual = function lqual( source, target ){
	/*;
		@meta-configuration:
			{
				"source:required": "*",
				"target:required": "*"
			}
		@end-meta-configuration
	*/

	if( eqe( source, target ) ){
		return true;
	}

	if( !protype( source, FUNCTION + OBJECT ) || !protype( target, FUNCTION + OBJECT ) ){
		return false;
	}

	if( kount( source ) != kount( target ) ){
		return false;
	}

	if( !Object.keys( source ).every( ( property ) => eqe( source[ property ], target[ property ] ) ) ){
		return false;
	}

	if( !Object.keys( target ).every( ( property ) => eqe( source[ property ], target[ property ] ) ) ){
		return false;
	}

	return true;
};

module.exports = lqual;
