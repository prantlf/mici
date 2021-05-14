import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciHrElement from '../../../dist/hr'
import '../../../dist/hr'

const test = suite('hr')
let el: MiciHrElement

function createHr(): MiciHrElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-hr></mici-hr>'
  return el.firstChild as MiciHrElement;
}

test.beforeEach((): void => { el = createHr() })

test('renders horizontal rule', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-hr></mici-hr>')
})
