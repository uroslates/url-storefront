module.exports = {
  // Add the conventional commits config to the commitlint config
  extends: [
    // Adding Conventional commit messages linting
    //  https://www.conventionalcommits.org/en/v1.0.0/#summary
      "@commitlint/config-conventional"
  ],
}