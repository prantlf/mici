import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciLinkElement from '../../../dist/link'
import '../../../dist/link'

const test = suite('link')
let el: MiciLinkElement

function createLink(): MiciLinkElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-link>Test</mici-link>'
  return el.firstChild as MiciLinkElement;
}

test.beforeEach((): void => { el = createLink() })

test('sets attributes to support accessibility', (): void => {
  assert.strictEqual(el.outerHTML,
    '<mici-link role="link" tabindex="0">Test</mici-link>')
})

test('reflects properties to attributes', (): void => {
  el.href = '#'
  el.target = '_blank'
  el.type = 'button'
  assert.strictEqual(el.outerHTML,
    '<mici-link role="link" tabindex="0" href="#" target="_blank" type="button">Test</mici-link>')
})
