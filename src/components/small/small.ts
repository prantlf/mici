import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './small.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-small', styles: [shared, local], template })
export default class MiciSmallElement extends HTMLElement {}
