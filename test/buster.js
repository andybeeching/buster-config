var config = module.exports;

config["Test Node"] = {
    rootPath: "../",
    environment: "node", // or "node"
    sources: ["lib/sut.js"],
    tests: ["test/*-test.js"]
}
