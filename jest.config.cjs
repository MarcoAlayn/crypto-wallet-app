// jest.config.js
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
