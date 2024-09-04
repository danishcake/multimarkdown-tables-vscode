module.exports = {
  branches: "main",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          {
            type: "chore",
            scope: "deps",
            subject: "*marked-annotated-hexdump*",
            release: "minor",
          },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      // Skip token verification
      // This is because we just use this package to update the package.json version
      { verifyConditions: false },
    ],
    "@semantic-release/git",
    [
      "semantic-release-vsce",
      {
        packageVsix: true,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "*.vsix",
          },
        ],
      },
    ],
  ],
};
