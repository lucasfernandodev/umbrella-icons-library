/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  displayName: "Export Figma & Icons",
  watchPathIgnorePatterns: [
    "node_modules",
  ],
  maxWorkers: "4",
  transformIgnorePatterns: [
    "node_modules"
  ],
  modulePathIgnorePatterns: ["__tests__/package/unit/react", "node_modules"],
  testMatch: [
    "**/__tests__/package/unit/*.test.ts",
    "**/__tests__/package/unit/*.test.tsx",
    "**/__tests__/server/unit/*.test.ts",
    "**/__tests__/server/unit/*.test.tsx",
  ],
  "transform": {
    "^.+\\.js?$": "babel-jest"
  }
};