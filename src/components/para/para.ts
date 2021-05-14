import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './para.css'
import template from '../../utilities/slot.html'

@comp({ tag: 'mici-para', styles: [shared, local], template })
export default class MiciParaElement extends HTMLElement {}
