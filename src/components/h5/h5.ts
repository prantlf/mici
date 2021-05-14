import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h5.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h5', styles: [shared, local], template })
export default class MiciH5Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '5')
  }
}
