import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './sub.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-sub', styles: [shared, local], template })
export default class MiciSubElement extends HTMLElement {}
