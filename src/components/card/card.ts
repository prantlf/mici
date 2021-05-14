import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './card.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-card', styles: [shared, local], template })
export default class MiciCardElement extends HTMLElement {
  @prop({ type: 'string' })
  size: 'small' | 'large' | 'fluid'

  @prop({ type: 'string' })
  variant: 'warning' | 'error'
}
