import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSectionElement from '../../../dist/section'
import '../../../dist/section'

const test = suite('section')
let el: MiciSectionElement

function createSection(): MiciSectionElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-section>Test</mici-section>'
  return el.firstChild as MiciSectionElement;
}

test.beforeEach((): void => { el = createSection() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-section>Test</mici-section>')
})

test('reflects properties to attributes', (): void => {
  el.media = true
  el.dark = true
  el.doublePadded = true
  assert.strictEqual(el.outerHTML,
    '<mici-section media="" dark="" double-padded="">Test</mici-section>')
})
