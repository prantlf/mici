import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciCodeElement from '../../../dist/code'
import '../../../dist/code'

const test = suite('code')
let el: MiciCodeElement

function createCode(): MiciCodeElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-code>Test</mici-code>'
  return el.firstChild as MiciCodeElement;
}

test.beforeEach((): void => { el = createCode() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-code>Test</mici-code>')
})
