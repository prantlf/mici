import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciFooterElement from '../../../dist/footer'
import '../../../dist/footer'

const test = suite('footer')
let el: MiciFooterElement

function createFooter(): MiciFooterElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-footer>Test</mici-footer>'
  return el.firstChild as MiciFooterElement;
}

test.beforeEach((): void => { el = createFooter() })

test('renders element', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-footer role="contentinfo">Test</mici-footer>')
})

test('reflects properties to attributes', (): void => {
  el.sticky = true
  assert.strictEqual(el.outerHTML,
    '<mici-footer role="contentinfo" sticky="">Test</mici-footer>')
})
