# Sonarqube environment

This repo is here for sharing knowledge on how to setup sonarqube and hookup a js/ts project.

1. Clone the repository
2. Go the clone repository on your machine
3. Run `docker compose up -d`
4. Copy the `sonar.mjs` file to the repository you would like to analyze.
5. In the project to be analyzed run `npm i -D sonarqube-scanner`
6. Setup the keys in the `sonar.mjs` file
7. Run the scanner by `node ./sonar.js` or `node ./sonar.mjs`

