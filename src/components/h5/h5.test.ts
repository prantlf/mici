import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH5Element from '../../../dist/h5'
import '../../../dist/h5'

const test = suite('h5')
let el: MiciH5Element

function createH5(): MiciH5Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h5>Test</mici-h5>'
  return el.firstChild as MiciH5Element;
}

test.beforeEach((): void => { el = createH5() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h5 role="heading" aria-level="5">Test</mici-h5>')
})
