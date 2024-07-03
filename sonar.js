const scanner = require('sonarqube-scanner').default;

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: '<TOKEN HERE',
    options: {
      'sonar.projectKey': '<PROJECT KEY HERE>',
      'sonar.sources': '.',
    },
  },
  (error) => {
    if (error) {
      console.error(error);
    }
    process.exit();
  }
);
