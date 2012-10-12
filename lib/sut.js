;(function ( exports ) {

  "use strict";

  var SUT = {
    sum: function (a, b) {
      return a + b;
    }
  };

  if ( typeof module !== "undefined" && module.exports ) {
    module.exports = SUT;
  } else {
    exports.SUT = SUT;
  }

})(this);

this.SUT = {}
