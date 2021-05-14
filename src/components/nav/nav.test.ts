import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciNavElement from '../../../dist/nav'
import '../../../dist/nav'

const test = suite('nav')
let el: MiciNavElement

function createNav(): MiciNavElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-nav>Test</mici-nav>'
  return el.firstChild as MiciNavElement;
}

test.beforeEach((): void => { el = createNav() })

test('renders element', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-nav role="navigation">Test</mici-nav>')
})
