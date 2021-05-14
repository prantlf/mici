import { comp, prop } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './icon.css'

@comp({ tag: 'mici-icon', styles: [shared, local] })
export default class MiciIconElement extends HTMLElement {
  @prop({ type: 'string' })
  kind: 'secondary' | 'inverse'

  @prop({ type: 'string' })
  name: 'alert' | 'bookmark' | 'calendar' | 'cart' | 'credit' | 'edit' |
        'help' | 'home' | 'info' | 'link' | 'location' | 'lock' | 'mail' |
        'phone' | 'rss' | 'search' | 'settings' | 'share' | 'upload' | 'user'
}
