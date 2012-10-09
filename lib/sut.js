;(function () {
  var SUT = {
    sum: function sum (a, b) {
      return a + b;
    }
  };

  if (typeof module != "undefined" && module.exports) {
    module.exports = SUT;
  } else {
    this.SUT = SUT;
  }
})();
