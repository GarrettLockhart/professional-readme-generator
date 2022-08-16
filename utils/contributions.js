function getContributions(contributions) {
  if (contributions === 'Detailed') {
    return `
    Any contributions you make are **greatly appreciated**.

    If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
    Don't forget to give the project a star! Thanks again!
    
    1. Fork the Project
    2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
    3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
    4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
    5. Open a Pull Request`;
  } else if (contributions === 'Simple') {
    return `
    You may contribute in several ways like creating new features, fixing bugs, improving documentation and examples
    or translating any document here to your language.`;
  }
}

module.exports = {
  getContributions: getContributions,
};
