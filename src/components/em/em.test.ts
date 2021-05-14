import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciEmElement from '../../../dist/em'
import '../../../dist/em'

const test = suite('em')
let el: MiciEmElement

function createEm(): MiciEmElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-em>Test</mici-em>'
  return el.firstChild as MiciEmElement;
}

test.beforeEach((): void => { el = createEm() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-em>Test</mici-em>')
})
