import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH3Element from '../../../dist/h3'
import '../../../dist/h3'

const test = suite('h3')
let el: MiciH3Element

function createH3(): MiciH3Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h3>Test</mici-h3>'
  return el.firstChild as MiciH3Element;
}

test.beforeEach((): void => { el = createH3() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h3 role="heading" aria-level="3">Test</mici-h3>')
})
