import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciIconElement from '../../../dist/icon'
import '../../../dist/icon'

const test = suite('icon')
let el: MiciIconElement

function createIcon(): MiciIconElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-icon name=alert></mici-icon>'
  return el.firstChild as MiciIconElement;
}

test.beforeEach((): void => { el = createIcon() })

test('renders icon', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-icon name="alert"></mici-icon>')
})

test('reflects properties to attributes', (): void => {
  el.kind = 'secondary'
  el.name = 'bookmark'
  assert.strictEqual(el.outerHTML,
    '<mici-icon name="bookmark" kind="secondary"></mici-icon>')
})
