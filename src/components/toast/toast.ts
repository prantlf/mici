import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './toast.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-toast', styles: [shared, local], template })
export default class MiciToastElement extends HTMLElement {
  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'alert')
  }
}
