# Line 10 by Nikola Bojic

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### API Limits

Endpoints at https://my.api.mockaroo.com/rotas?key=727fabe0 and https://my.api.mockaroo.com/users?key=727fabe0 show an error when the API limit is reached.

```
{"error":"Free accounts are limited to 200 requests per day.  You can generate up to 1000000 records per day by upgrading to a Silver plan. See http://www.mockaroo.com/api/docs for more information about usage limits."}
```

For this reason, the API response has been mocked in the corresponding stores.

### Duplicated User and Rotas IDs

API has been returning some inconsistent data where the IDs of objects that should be unique, were not (i.e. Users).