import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './sup.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-sup', styles: [shared, local], template })
export default class MiciSupElement extends HTMLElement {}
