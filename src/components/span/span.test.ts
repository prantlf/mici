import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSpanElement from '../../../dist/span'
import '../../../dist/span'

const test = suite('span')
let el: MiciSpanElement

function createSpan(): MiciSpanElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-span>Test</mici-span>'
  return el.firstChild as MiciSpanElement;
}

test.beforeEach((): void => { el = createSpan() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-span>Test</mici-span>')
})
