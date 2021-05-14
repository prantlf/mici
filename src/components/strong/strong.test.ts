import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciStrongElement from '../../../dist/strong'
import '../../../dist/strong'

const test = suite('strong')
let el: MiciStrongElement

function createStrong(): MiciStrongElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-strong>Test</mici-strong>'
  return el.firstChild as MiciStrongElement;
}

test.beforeEach((): void => { el = createStrong() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-strong>Test</mici-strong>')
})
