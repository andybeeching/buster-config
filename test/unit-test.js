// Node tests
if ( typeof require != "undefined" ) {
  var buster = require("buster");
  var SUT = require("../lib/sut");
  console.log(SUT);
}

buster.testCase("SUT Basic", {
  "SUT.sum() is testable": function () {
    assert(SUT.sum(1,2), 3);
  }
});
