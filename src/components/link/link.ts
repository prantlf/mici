import { comp, prop, event } from 'bacom'
import { ensureActivity, disable } from '../../utilities/helpers'
import shared from '../../utilities/shared.css'
import local from './link.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-link', styles: [shared, local], template })
export default class MiciLinkElement extends HTMLElement {
  @prop({ type: 'string' })
  href: string

  @prop({ type: 'string' })
  target: string

  @prop({ type: 'string' })
  type: 'logo' | 'button'

  @event()
  onClick(e) {
    if (!e.defaultPrevented) {
      const { href, target } = this
      if (target) open(href, target)
      else location.href = href
    }
  }

  connectedCallback() {
    ensureActivity(this, 'link')
  }
}
