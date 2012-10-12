/*global buster, assert*/

(function (global) {

  "use strict";

  var buster = global.buster || require( "buster" );
  var SUT = global.SUT || require( "../lib/sut" );

  buster.testCase( "SUT Basic", {
    "SUT.sum() is testable": function () {
      assert( SUT.sum(1, 2), 3 );
    }
  });

}(this));
