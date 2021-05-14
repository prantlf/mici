import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciMarkElement from '../../../dist/mark'
import '../../../dist/mark'

const test = suite('mark')
let el: MiciMarkElement

function createButton(): MiciMarkElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-mark>Test</mici-mark>'
  return el.firstChild as MiciMarkElement;
}

test.beforeEach((): void => { el = createButton() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-mark role="mark">Test</mici-mark>')
})

test('reflects properties to attributes', (): void => {
  el.kind = 'secondary'
  el.block = true
  el.tag = true
  assert.strictEqual(el.outerHTML,
    '<mici-mark role="mark" kind="secondary" block="" tag="">Test</mici-mark>')
})
