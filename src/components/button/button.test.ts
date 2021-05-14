import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciButtonElement from '../../../dist/button'
import '../../../dist/button'

const test = suite('button')
let el: MiciButtonElement

function createButton(): MiciButtonElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-button>Test</mici-button>'
  return el.firstChild as MiciButtonElement;
}

test.beforeEach((): void => { el = createButton() })

test('sets attributes to support accessibility', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-button role="button" tabindex="0">Test</mici-button>')
})

test('disabling includes accessibility', (): void => {
  el.disabled = true
  assert.strictEqual(el.outerHTML,
    '<mici-button role="button" disabled="" aria-disabled="">Test</mici-button>')
})

test('reflects properties to attributes', (): void => {
  el.hidden = true
  el.kind = 'primary'
  el.size = 'large'
  assert.strictEqual(el.outerHTML,
    '<mici-button role="button" tabindex="0" hidden="" kind="primary" size="large">Test</mici-button>')
})
