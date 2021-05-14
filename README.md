# Mini Web Components

[![NPM version](https://badge.fury.io/js/mici.png)](http://badge.fury.io/js/mici)
[![Build Status](https://github.com/prantlf/mici/workflows/Test/badge.svg)](https://github.com/prantlf/mici/actions)
[![Dependency Status](https://david-dm.org/prantlf/mici.svg)](https://david-dm.org/prantlf/mici)
[![devDependency Status](https://david-dm.org/prantlf/mici/dev-status.svg)](https://david-dm.org/prantlf/mici#info=devDependencies)

Lightweight web components using the [mini.css] styles. The same look & feel for your embedded widgets on any page for almost no price. Workhorse for functional web applications, not for fancy web pages. See the [on-line documentation].

* Small size - 20 kB minified, 4.96 kB gzipped.
* Written in TypeScript using [bacom].
* Fast build and tests powered by [esburu] and [tehanu].
* SSR and tests in Node.js supported by [@prantlf/dom-lite].

## Synopsis

```html
<mici-button>Test</mici-button>

<script type=module src=https://unpkg.com/mici@0.0.1/dist/index.min.js></script>
```

## Installation

You can install this package using your favourite Node.js package manager:

```sh
npm i -D mici
yarn add -D mici
pnpm i -D mici
```

If you do not want to bundle this package in your build output, you can load it separately on your web page before your script bundle:

```html
<script type=module src=https://unpkg.com/mici@0.0.1/dist/index.min.js></script>
<script type=module src=yours/index.js></script>
```

```html
<script type=module>
  import 'https://unpkg.com/mici@0.0.1/dist/index.min.js'
  import 'yours/index.js'
</script>
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code using `npm test`.

## License

Copyright (c) 2021 Ferdinand Prantl

Licensed under the MIT license.

Logo made by [Flat Icons] from [Flaticon].

[mini.css]: https://minicss.org/
[on-line documentation]: https://prantlf.github.io/mici/
[bacom]: https://github.com/prantlf/bacom#readme
[esburu]: https://github.com/prantlf/esburu#readme
[tehanu]: https://github.com/prantlf/tehanu#readme
[@prantlf/dom-lite]: https://github.com/prantlf/dom-lite#readme
[Flat Icons]: https://www.flaticon.com/authors/flat-icons
[Flaticon]: https://www.flaticon.com/
