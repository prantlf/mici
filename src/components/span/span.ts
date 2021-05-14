import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './span.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-span', styles: [shared, local], template })
export default class MiciSpanElement extends HTMLElement {}
