import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './section.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-section', styles: [shared, local], template })
export default class MiciSectionElement extends HTMLElement {
  @prop({ type: 'boolean' })
  media: boolean

  @prop({ type: 'boolean' })
  dark: boolean

  @prop({ type: 'boolean' })
  doublePadded: boolean
}
