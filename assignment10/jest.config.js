module.exports = {
    roots: [
        '<rootDir>/src/tests'
    ],
    testRegex: 'Test.tsx$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleDirectories: ["node_modules", "src", "test"],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        'src/components/App.tsx',
        '!src/**/index.tsx',
    ],
    testURL: 'http://localhost/',
    setupFilesAfterEnv: ["<rootDir>/setupTest.js"]
}