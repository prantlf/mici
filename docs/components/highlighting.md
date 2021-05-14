# Text highlighting

The native HTML5 mark element has been minimally styled to allow for easy text highlighting.

## Example

```html preview
<mici-para>This is some <mici-mark>highlighted text</mici-mark>.</mici-para>
```

## Modifiers

### Color variants

You can change the color of highlighted text, based on context by applying the appropriate class (secondary - `secondary` or tertiary - `tertiary`).

#### Example

```html preview
<mici-para>This is a
  <mici-mark kind="secondary">secondary highlight</mici-mark> and this is a
  <mici-mark kind="tertiary">tertiary highlight</mici-mark>.</mici-para>
```

### Style variants

You can make highlights look like tags (`tag`) or display as inline blocks (`inline-block`), by applying the appropriate class.

#### Example

```html preview
<mici-para>This is a highlight styled as a
  <mici-mark tag>tag</mici-mark>.</mici-para>
<mici-para>
  <mici-mark block>This is some highlighted text that is displayed as a block.</mici-mark>
</mici-para>
```
