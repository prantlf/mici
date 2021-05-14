import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './mark.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-mark', styles: [shared, local], template })
export default class MiciMarkElement extends HTMLElement {
  @prop({ type: 'string' })
  kind: 'secondary' | 'tertiary'

  @prop({ type: 'boolean' })
  block: boolean

  @prop({ type: 'boolean' })
  tag: boolean

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'mark')
  }
}
