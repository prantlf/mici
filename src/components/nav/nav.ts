import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './nav.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-nav', styles: [shared, local], template })
export default class MiciNavElement extends HTMLElement {
  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'navigation')
  }
}
