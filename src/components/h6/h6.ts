import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h6.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h6', styles: [shared, local], template })
export default class MiciH6Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '6')
  }
}
