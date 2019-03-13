## React project boilerplate

### TODO
- [ ] story book

#### Stack:
- react
- redux
- react-router
- prop-types
- styled-components
- jest
- thunk

#### Additional tools:
- react-intl
- [dayjs](https://github.com/iamkun/dayjs)
- lodash
- axios

#### Features:
- HMR
- code splitting
- story book

> For webpack, eslint, babel, editorconfig and browserlist configs check rc files in the root of the project.

### Usage:

#### Building

To **build** project just run:
```bash
npm run build
```

or

```bash
yarn build
```

This will build project with `production` environment.

To change the environment just specify it as a flag
```bash
yarn build --hotfixes
```

be **SURE** that you have `.env` file for this environment. (take a look at `.env.hotfixes` or `.env.production` for example)

If you want to analyze your build, just run:
```bash
yarn build --analyze
```

#### Starting

To **start** project in development mode just run next command:

```bash
npm start
```

or

```bash
yarn start
```

You also can change environment same as above. (`yarn start --hotfixes`)

#### Testing

To run tests just run this:
```bash
yarn test
```

You can always run this with some options like `--watch`. (See jest [docs](https://jestjs.io/docs/en/cli))
