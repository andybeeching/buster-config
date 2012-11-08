/*global buster, assert, describe, it*/

(function (global) {

  "use strict";

  var buster = global.buster || require( "buster" );
  var SUT = global.SUT || require( "../lib/sut" );

  buster.testCase( "SUT", {
    // Example Test
    "foo": function () {
      assert( SUT.sum(1, 2), 3 );
    },

    // Second Example Test
    "nest": {
      "bar": function () {
        assert( SUT.sum(3,4), 7);
      }
    }
  });

  buster.spec.expose();

  var spec = describe( "SUT", function () {
    // Example Feature
    it("should foo", function () {
      assert( SUT.sum(1, 2), 3 );
    });

    // Example Nested Feature
    describe("nest", function () {
      it("should bar", function () {
        assert( SUT.sum(3,4), 7);
      });
    });
  });

}(this));
