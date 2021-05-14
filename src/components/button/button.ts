import { comp, prop } from 'bacom'
import { ensureActivity, disable } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './button.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-button', styles: [shared, local], template })
export default class MiciButtonElement extends HTMLElement {
  @prop({ type: 'boolean' })
  disabled: boolean

  @prop({ type: 'boolean' })
  hidden: boolean

  @prop({ type: 'string' })
  kind: 'primary' | 'secondary' | 'tertiary' | 'inverse'

  @prop({ type: 'string' })
  size: 'small' | 'large'

  connectedCallback() {
    ensureActivity(this, 'button')
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'disabled') disable(this, newValue !== null)
  }
}
