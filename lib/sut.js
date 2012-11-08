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

  // Test max params
  // Test max depth
  // Test max statements
  function foo (a,b,c,d) {

    function bar () {
      function baz () {
        function inception () {}
      }
    }

    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;

  }

}( this ));
