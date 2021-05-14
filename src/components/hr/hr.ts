import { comp } from 'bacom'
import shared from '../../utilities/shared.css'
import local from './hr.css'

@comp({ tag: 'mici-hr', styles: [shared, local] })
export default class MiciHrElement extends HTMLElement {}
