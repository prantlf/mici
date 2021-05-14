import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH4Element from '../../../dist/h4'
import '../../../dist/h4'

const test = suite('h4')
let el: MiciH4Element

function createH4(): MiciH4Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h4>Test</mici-h4>'
  return el.firstChild as MiciH4Element;
}

test.beforeEach((): void => { el = createH4() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h4 role="heading" aria-level="4">Test</mici-h4>')
})
