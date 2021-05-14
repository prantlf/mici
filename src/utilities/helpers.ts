import { attr } from 'bacom'

export function ensureActivity(el: HTMLElement, role: string) {
  if (!el.hasAttribute('role')) el.setAttribute('role', role)
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0')
}

export function ensureHeading(el: HTMLElement, level: string) {
  if (!el.hasAttribute('role')) el.setAttribute('role', 'heading')
  if (!el.hasAttribute('aria-level')) el.setAttribute('aria-level', level)
}

export function disable(el: HTMLElement, disabled: boolean) {
  attr(el, 'aria-disabled', disabled)
  if (disabled) {
    el.removeAttribute('tabindex')
    el.blur()
  } else {
    el.setAttribute('tabindex', '0')
  }
}
