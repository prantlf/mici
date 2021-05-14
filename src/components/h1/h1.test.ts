import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciH1Element from '../../../dist/h1'
import '../../../dist/h1'

const test = suite('h1')
let el: MiciH1Element

function createH1(): MiciH1Element {
  const el = document.createElement('div')
  el.innerHTML = '<mici-h1>Test</mici-h1>'
  return el.firstChild as MiciH1Element;
}

test.beforeEach((): void => { el = createH1() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-h1 role="heading" aria-level="1">Test</mici-h1>')
})
