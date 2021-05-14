import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciSupElement from '../../../dist/sup'
import '../../../dist/sup'

const test = suite('sup')
let el: MiciSupElement

function createSup(): MiciSupElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-sup>Test</mici-sup>'
  return el.firstChild as MiciSupElement;
}

test.beforeEach((): void => { el = createSup() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-sup>Test</mici-sup>')
})
