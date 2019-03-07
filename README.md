## React project boilerplate

### TODO

- [ ] favicon
- [ ] fix HMR
- [ ] Check React lazy and suspense (instead of react-loadable)
- [ ] Search for some tools to decrease build size
- [ ] `svg-loader` (inline all svg icons)
- [ ] ...

#### Stack:

- react
- styled-components
- redux
- react-router
- react-loadable

#### Additional tools:
- react-intl
- moment
- lodash
- axios


#### Features:
  - HMR
  - Ignore moment locales
  - code splitting

> For webpack, eslint, babel, editorconfig and browserlist configs check rc files in the root of the project.

### Usage:

To **build** project just run:
```
npm run build
```

or

```
yarn build
```

This will build project with `production` environment.

To change the environment just specify it as a flag
```
yarn build --hotfixes
```

be **SURE** that you have `.env` file for this environment. (take a look at `.env.hotfixes` or `.env.production` for example)

To **start** project in development mode just run next command:

```
npm start
```

or

```
yarn start
```

You also can change environment same as above. (`yarn start --hotfixes`)
