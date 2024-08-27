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
            scope: "marked-annotated-hexdump",
            release: "patch",
          },
          { type: "chore", scope: "*", release: false },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
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
