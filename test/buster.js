var config = module.exports;

config["Test Browser"] = {
  rootPath: "../",
    environment: "browser",
    sources: ["lib/sut.js"],
    tests: ["test/*-test.js"]
};

// config["Test Node"] = {
//     rootPath: "../",
//     environment: "node",
//     sources: ["lib/sut.js"],
//     tests: ["test/*-test.js"]
// }
