;(function ( exports ) {
  exports.SUT = {
    sum: function sum (a, b) {
      return a + b;
    }
  };
})( typeof exports == "undefined" ? this["SUT"] : exports );
