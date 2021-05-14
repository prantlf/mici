import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './quote.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-quote', styles: [shared, local], template })
export default class MiciQuoteElement extends HTMLElement {
  @prop({ type: 'string' })
  cite: string
}
