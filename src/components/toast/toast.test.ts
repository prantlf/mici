import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciToastElement from '../../../dist/toast'
import '../../../dist/toast'

const test = suite('toast')
let el: MiciToastElement

function createToast(): MiciToastElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-toast>Test</mici-toast>'
  return el.firstChild as MiciToastElement;
}

test.beforeEach((): void => { el = createToast() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-toast role="alert">Test</mici-toast>')
})
