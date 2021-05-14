import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciParareElement from '../../../dist/pre'
import '../../../dist/pre'

const test = suite('pre')
let el: MiciParareElement

function createPre(): MiciParareElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-pre>Test</mici-pre>'
  return el.firstChild as MiciParareElement;
}

test.beforeEach((): void => { el = createPre() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-pre>Test</mici-pre>')
})
