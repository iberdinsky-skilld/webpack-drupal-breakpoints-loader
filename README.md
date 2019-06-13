# webpack-drupal-breakpoints-loader

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Webpack Drupal Breakpoints Loader</h1>
  <p>Parse THEMENAME.breakpoints.yaml and use them in js scripts</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install @skilld/webpack-drupal-breakpoints-loader
```

<h2 align="center">Usage</h2>

<p>In root of drupal theme create THEMENAME.breakpoints.yml</p>

```yml
THEMENAME.mobile:
  label: mobile
  mediaQuery: 'all and (max-width: 639px)'
  weight: 0
  group: THEMENAME
  multipliers:
    - 1x
    - 2x
THEMENAME.narrow:
  label: narrow
  mediaQuery: 'all and (min-width: 640px) and (max-width: 1023px)'
  weight: 1
  group: THEMENAME
  multipliers:
    - 1x
    - 2x
THEMENAME.wide:
  label: wide
  mediaQuery: 'all and (min-width: 1024px)'
  weight: 2
  group: THEMENAME
  multipliers:
    - 1x
    - 2x
```

<p>In webpack.config.js</p>

```js
    rules: [
      {
        test: /\.yml$/,
        use: [
          {
            loader: 'breakpoints-loader',
          },
        ],
      },
      ...
```

<p>In js file</p>

```js
const config = require('path-to-your-THEMENAME.breakpoints.yml');
```

<h2>Usage Example</h2>

https://github.com/skilld-labs/kaizen/blob/master/src/js/breakpoints.js#L14
