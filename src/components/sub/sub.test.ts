import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSubElement from '../../../dist/sub'
import '../../../dist/sub'

const test = suite('sub')
let el: MiciSubElement

function createSub(): MiciSubElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-sub>Test</mici-sub>'
  return el.firstChild as MiciSubElement;
}

test.beforeEach((): void => { el = createSub() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-sub>Test</mici-sub>')
})
