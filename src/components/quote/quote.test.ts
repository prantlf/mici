import suite from 'tehanu'
import assert from 'assert'
import '@prantlf/dom-lite/global'
import MiciQuoteElement from '../../../dist/quote'
import '../../../dist/quote'

const test = suite('quote')
let el: MiciQuoteElement

function createQuote(): MiciQuoteElement {
  const el = document.createElement('div')
  el.innerHTML = '<mici-quote>Test</mici-quote>'
  return el.firstChild as MiciQuoteElement;
}

test.beforeEach((): void => { el = createQuote() })

test('renders text', (): void => {
  assert.strictEqual(el.outerHTML, '<mici-quote>Test</mici-quote>')
})

test('reflects properties to attributes', (): void => {
  el.cite = 'source'
  assert.strictEqual(el.outerHTML,
    '<mici-quote cite="source">Test</mici-quote>')
})
