import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciCardElement from '../../../dist/card'
import '../../../dist/card'

const test = suite('card')
let el: MiciCardElement

function createCard(): MiciCardElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-card>Test</mici-card>'
  return el.firstChild as MiciCardElement;
}

test.beforeEach((): void => { el = createCard() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-card>Test</mici-card>')
})

test('reflects properties to attributes', (): void => {
  el.size = 'small'
  el.variant = 'warning'
  assert.strictEqual(el.outerHTML,
    '<mici-card size="small" variant="warning">Test</mici-card>')
})
