import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './em.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-em', styles: [shared, local], template })
export default class MiciEmElement extends HTMLElement {}
