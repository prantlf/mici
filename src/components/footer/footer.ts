import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './footer.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-footer', styles: [shared, local], template })
export default class MiciFooterElement extends HTMLElement {
  @prop({ type: 'boolean' })
  sticky: boolean

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'contentinfo')
  }
}
