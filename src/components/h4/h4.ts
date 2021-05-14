import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h4.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h4', styles: [shared, local], template })
export default class MiciH4Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '4')
  }
}
