import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciKbdElement from '../../../dist/kbd'
import '../../../dist/kbd'

const test = suite('kbd')
let el: MiciKbdElement

function createButton(): MiciKbdElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-kbd>Test</mici-kbd>'
  return el.firstChild as MiciKbdElement;
}

test.beforeEach((): void => { el = createButton() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-kbd>Test</mici-kbd>')
})
