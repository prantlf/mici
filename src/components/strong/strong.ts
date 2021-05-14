import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './strong.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-strong', styles: [shared, local], template })
export default class MiciStrongElement extends HTMLElement {}
