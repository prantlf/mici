import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h2.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h2', styles: [shared, local], template })
export default class MiciH2Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '2')
  }
}
