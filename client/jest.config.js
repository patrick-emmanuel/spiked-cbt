import 'jest-dom/extend-expect';

module.exports = {
  setupFilesAfterEnv: [
    "react-testing-library/cleanup-after-each"
  ],
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
