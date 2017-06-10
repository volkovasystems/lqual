
const assert = require( "assert" );
const lqual = require( "./lqual.js" );

assert.equal( lqual( 0, 0 ), true, "should return true" );

assert.equal( lqual( null, null ), true, "should return true" );

assert.equal( lqual( undefined, undefined ), true, "should return true" );

assert.equal( lqual( { }, { } ), true, "should return true" );

assert.equal( lqual( global, global ), true, "should return true" );

assert.equal( lqual( true, true ), true, "should return true" );

assert.equal( lqual( true, false ), false, "should return false" );

console.log( "ok" );
