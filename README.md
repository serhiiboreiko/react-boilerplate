## React project boilerplate

### TODO
- [x] favicon
- [x] fix HMR
- [x] Search for some tools to decrease build size
  - [x] css minification
- [x] svg loader (inline all svg icons)
- [x] bundle analyzer
- [x] Check React lazy and suspense (instead of react-loadable)
  - [x] use `react-loadable` for now
  - [ ] ~~Create loadable component with ability to preload (just like react-loadable)~~
  - [ ] ~~Show some Loading~~
  - [ ] ~~code splitting should work as well~~
- [ ] thunk / saga
- [ ] jest

#### Stack:
- react
- styled-components
- redux
- react-router
- react-loadable

#### Additional tools:
- react-intl
- [dayjs](https://github.com/iamkun/dayjs)
- lodash
- axios

#### Features:
- HMR
- code splitting

> For webpack, eslint, babel, editorconfig and browserlist configs check rc files in the root of the project.

### Usage:

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

To **start** project in development mode just run next command:

```bash
npm start
```

or

```bash
yarn start
```

You also can change environment same as above. (`yarn start --hotfixes`)
