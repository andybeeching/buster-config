var config = module.exports;

config["Test Node"] = {
    rootPath: "../",
    environment: "node", // or "node"
    sources: ["lib/sut.js"],
    tests: ["test/*-test.js"]
}

// config["Test Browser"] = {
//   rootPath: "../",
//     environment: "browser",
//     sources: ["lib/sut.js"],
//     tests: ["test/*-test.js"]
// };
