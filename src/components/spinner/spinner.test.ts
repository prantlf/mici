import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSpinnerElement from '../../../dist/spinner'
import '../../../dist/spinner'

const test = suite('spinner')
let el: MiciSpinnerElement

function createSpinner(): MiciSpinnerElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-spinner></mici-spinner>'
  return el.firstChild as MiciSpinnerElement;
}

test.beforeEach((): void => { el = createSpinner() })

test('renders icon', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-spinner></mici-spinner>')
})

test('reflects properties to attributes', (): void => {
  el.kind = 'primary'
  assert.strictEqual(el.outerHTML,
    '<mici-spinner kind="primary"></mici-spinner>')
})
