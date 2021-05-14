import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h3.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h3', styles: [shared, local], template })
export default class MiciH3Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '3')
  }
}
