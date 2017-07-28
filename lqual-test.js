
const assert = require( "assert" );
const lqual = require( "./lqual.js" );

assert.equal( lqual( 0, 0 ), true, "should be equal to true" );

assert.equal( lqual( null, null ), true, "should be equal to true" );

assert.equal( lqual( undefined, undefined ), true, "should be equal to true" );

assert.equal( lqual( { }, { } ), true, "should be equal to true" );

assert.equal( lqual( global, global ), true, "should be equal to true" );

assert.equal( lqual( true, true ), true, "should be equal to true" );

assert.equal( lqual( true, false ), false, "should be equal to false" );

assert.equal( lqual( [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ), true, "should be equal to true" );

console.log( "ok" );
