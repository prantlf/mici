# Card sections

Card content is usually organized in smaller sections (`section`) to be more easily digestible. A card section can be any valid HTML5 element with the appropriate class applied to it.

## Example

```html preview
<mici-card>
  <mici-section>
    <mici-h3 nomargin>Title section</mici-h3>
  </mici-section>
  <mici-section>
    <mici-para nomargin>This is a section with some textual content.</mici-para>
  </mici-section>
</mici-card>
```

## Modifiers

### Media sections

You can create sections for media (`media`), such as images or videos (using an `<img>` or a `<iframe>` element respectively). These sections are styled appropriately for presentation of media content, meaning that the content will scale appropriately to fill up the available space.

```html preview
<mici-card>
  <mici-section>
    <mici-h3>Card with image</mici-h3>
  </mici-section>
  <mici-section media>
    <img src=../assets/media/mici-180.png style="margin: auto">
  </mici-section>
</mici-card>
```

### Color variants

You can create sections with a darker (`dark`) background, by applying the appropriate modifier.

```html preview
<mici-card>
  <mici-section>
    <mici-h3>Normal section</mici-h3>
  </mici-section>
  <mici-section dark>
    <mici-h3>Dark section</mici-h3>
  </mici-section>
</mici-card>
```

### Additional spacing

You can create sections with additional spacing (`double-padded`), by applying the appropriate modifier.

```html preview
<mici-card>
  <mici-section>
    <mici-h3>Normal spacing</mici-h3>
  </mici-section>
  <mici-section double-padded>
    <mici-h3>Additional spacing</mici-h3>
  </mici-section>
</mici-card>
```

[grid system]: /components/grid
