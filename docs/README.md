# Mini Web Components

* Small size - 20 kB minified, 4.96 kB gzipped.
* Written in TypeScript using [bacom].
* Fast build and tests powered by [esburu] and [tehanu].
* SSR and tests in Node.js supported by [@prantlf/dom-lite].

## Synopsis

```html preview
<mici-button><mici-icon name=settings></mici-icon> Settings</mici-button>

<link type=stylesheet src=https://unpkg.com/mici@0.0.1/dist/icons-base.min.css>
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

## License

Copyright (c) 2021 Ferdinand Prantl

Licensed under the MIT license.

Logo made by [Flat Icons] from [Flaticon].

[mini.css]: https://minicss.org/
[bacom]: https://github.com/prantlf/bacom#readme
[esburu]: https://github.com/prantlf/esburu#readme
[tehanu]: https://github.com/prantlf/tehanu#readme
[@prantlf/dom-lite]: https://github.com/prantlf/dom-lite#readme
[Flat Icons]: https://www.flaticon.com/authors/flat-icons
[Flaticon]: https://www.flaticon.com/
