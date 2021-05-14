import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciParaElement from '../../../dist/para'
import '../../../dist/para'

const test = suite('para')
let el: MiciParaElement

function createPara(): MiciParaElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-para>Test</mici-para>'
  return el.firstChild as MiciParaElement;
}

test.beforeEach((): void => { el = createPara() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-para>Test</mici-para>')
})

test('reflects properties to attributes', (): void => {
  el.nomargin = true
  assert.strictEqual(el.outerHTML, '<mici-para>Test</mici-para>')
})
