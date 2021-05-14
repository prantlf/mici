import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH2Element from '../../../dist/h2'
import '../../../dist/h2'

const test = suite('h2')
let el: MiciH2Element

function createH2(): MiciH2Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h2>Test</mici-h2>'
  return el.firstChild as MiciH2Element;
}

test.beforeEach((): void => { el = createH2() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h2 role="heading" aria-level="2">Test</mici-h2>')
})
