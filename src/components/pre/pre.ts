import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './pre.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-pre', styles: [shared, local], template })
export default class MiciParareElement extends HTMLElement {}
