import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './kbd.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-kbd', styles: [shared, local], template })
export default class MiciKbdElement extends HTMLElement {}
