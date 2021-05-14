import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSmallElement from '../../../dist/small'
import '../../../dist/small'

const test = suite('small')
let el: MiciSmallElement

function createSmall(): MiciSmallElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-small>Test</mici-small>'
  return el.firstChild as MiciSmallElement;
}

test.beforeEach((): void => { el = createSmall() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-small>Test</mici-small>')
})
