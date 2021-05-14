import { comp } from 'bacom'
import { ensureHeading } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './h1.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-h1', styles: [shared, local], template })
export default class MiciH1Element extends HTMLElement {
  connectedCallback() {
    ensureHeading(this, '1')
  }
}
