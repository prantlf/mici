import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciHeaderElement from '../../../dist/header'
import '../../../dist/header'

const test = suite('header')
let el: MiciHeaderElement

function createHeader(): MiciHeaderElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-header>Test</mici-header>'
  return el.firstChild as MiciHeaderElement;
}

test.beforeEach((): void => { el = createHeader() })

test('renders element', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-header role="banner">Test</mici-header>')
})

test('reflects properties to attributes', (): void => {
  el.sticky = true
  assert.strictEqual(el.outerHTML,
    '<mici-header role="banner" sticky="">Test</mici-header>')
})
