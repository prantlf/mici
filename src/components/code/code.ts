import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './code.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-code', styles: [shared, local], template })
export default class MiciCodeElement extends HTMLElement {}
