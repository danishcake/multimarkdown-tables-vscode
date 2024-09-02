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
