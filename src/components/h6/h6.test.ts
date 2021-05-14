import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH6Element from '../../../dist/h6'
import '../../../dist/h6'

const test = suite('h6')
let el: MiciH6Element

function createH6(): MiciH6Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h6>Test</mici-h6>'
  return el.firstChild as MiciH6Element;
}

test.beforeEach((): void => { el = createH6() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h6 role="heading" aria-level="6">Test</mici-h6>')
})
