/*global buster, assert*/
(function () {

  "use strict";

  if ( typeof require !== "undefined" ) {
    var buster = require( "buster" );
    var SUT = require( "../lib/sut" );
  }

  buster.testCase( "SUT Basic", {
    "SUT.sum() is testable": function () {
      console.log(SUT);
      var SUT = {};
      assert( SUT.sum(1, 2), 3 );
    }
  });

}());
