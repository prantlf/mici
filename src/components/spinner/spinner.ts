import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './spinner.css'

@comp({ tag: 'mici-spinner', styles: [shared, local] })
export default class MiciSpinnerElement extends HTMLElement {
  @prop({ type: 'string' })
  kind: 'primary' | 'secondary' | 'tertiary'
}
