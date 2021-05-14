# Button

Buttons and button-like input elements have been styled by default to be consistent across browsers.

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

Use the `hidden` attribute to hide a button. The button will not be visible and accessible until the hidden flag is removed.

## Example

```html preview
<mici-button>Button</mici-button>
<mici-button disabled>Disabled</mici-button>
<mici-button hidden>Hidden</mici-button>
```

## Modifiers

### Color variants

To make your buttons stand out, you can give them a primary (`primary`), secondary (`secondary`), tertiary (`tertiary`) or inversed (`inverse`) color palette.

#### Example

```html preview
<mici-button kind="primary">Primary</mici-button>
<mici-button kind="secondary">Secondary</mici-button>
<mici-button kind="tertiary">Tertiary</mici-button>
<mici-button kind="inverse">Inverse</mici-button>
```

### Size variants

You can make buttons smaller (`small`) or larger (`large`), by applying the appropriate modifier.

```html preview
<mici-button size="small">Small</mici-button>
<mici-button size="large">Large</mici-button>
```
