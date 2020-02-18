# Boilerplate React Hooks

Project stack:

- React
- Redux
- Styled Components
- Reactotron
- Fetch
- Lint (Eslint, Prettier e Stylelint)
- Precommit Lints
- Visual Studio Code config like Chrome Debugger and Lint Integration

## What do you need?

- Node.js
- NPM or Yarn

## Working on project

Here are the commands that are used in the project:

| Command     | Description                                    |
| ----------- | ---------------------------------------------- |
| yarn dev    | Run the project in development with hot loader |
| yarn build  | Build project                                  |
| yarn server | Run build project in a production server       |

## Setup of your IDE

To maintain code quality and always have a standard across all of the team's
project has rules defined for javascript and css / scss. We use the Eslint /
Prettier for Javascript and Stylelint for SCSS. It is necessary to
integration of these rules with your favorite IDE. We recommend using Visual
Studio Code with the following plugins:

| Plugin    | README                                                                                     |
| --------- | ------------------------------------------------------------------------------------------ |
| ESlint    | [check plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| Prettier  | [check plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
| stylelint | [check plugin](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)       |

## Pre-commit

Before running git commit, the rules of ESLint and Stylelint are executed. If
there is an error or some non-default code of the site will generate an error
and you will not be able to commit.


## Roadmap

- [ ] Redux Saga
- [ ] TypeScript
- [ ] Tests!
