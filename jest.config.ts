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
  modulePathIgnorePatterns: ["__tests__/unit/react", "node_modules"],
  testMatch: [
    "**/__tests__/unit/*.test.ts",
    "**/__tests__/unit/*.test.tsx"
  ]
};