(function ( global ) {

  "use strict";

  var SUT = {
    sum: function (a, b) {
      return a + b;
    }
  };

  if ( typeof module !== "undefined" && module.exports ) {
    module.exports = SUT;
  } else {
    global.SUT = SUT;
  }

}( this ));
