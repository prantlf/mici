import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './header.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-header', styles: [shared, local], template })
export default class MiciHeaderElement extends HTMLElement {
  @prop({ type: 'boolean' })
  sticky: boolean

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'banner')
  }
}
