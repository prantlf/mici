# Cards

Mici provides you with cards (`card`), general-purpose containers that help you organize the content of your web apps. Cards should be used in combination with the [grid system], meaning that they need to be placed inside a grid's rows to work properly. Layouts created with cards are responsive, realigning according to the available size on the screen.

## Example

```html preview
<mici-card>
  <mici-section>
    <mici-h3>Card</mici-h3>
    <mici-para>This is a basic card with some sample content.</mici-para>
  </mici-section>
</mici-card>
```

## Modifiers

### Alternative sizes

You can create small (`small`, 240px wide) or large (`large`, 480px wide) cards by applying the appropriate modifiers to a card. Apart from that, you can also create fluid (`fluid`) cards, that take up as much space as is available, however you will have to place these cards inside a grid layout's columns, effectively adding one extra step for them to display properly.

#### Example

```html preview
<mici-card size=small>
  <mici-section>
    <mici-h3>Small Card</mici-h3>
    <mici-para>Small cards are <mici-code>240px</mici-code> wide.</mici-para>
  </mici-section>
</mici-card>
<mici-card size=large>
  <mici-section>
    <mici-h3>Large Card</mici-h3>
    <mici-para>Large cards are <mici-code>480px</mici-code> wide.</mici-para>
  </mici-section>
</mici-card>
<mici-card size=fluid>
  <mici-section>
    <mici-h3>Fluid Card</mici-h3>
    <mici-para>Fluid cards scale their width based on the column that contains them.</mici-para>
  </mici-section>
</mici-card>
```

### Color variants

You can display warning (`warning`) or error (`error`) messages using cards, simply by adding the appropriate color modifiers to a card.

#### Example

```html preview
<mici-card variant=warning>
  <mici-section>
    <mici-h3>Warning Card</mici-h3>
    <mici-para>Warning cards are used to display important information to users.</mici-para>
  </mici-section>
</mici-card>
<mici-card variant=error>
  <mici-section>
    <mici-h3>Error Card</mici-h3>
    <mici-para>Error cards are used to display error messages to users.</mici-para>
  </mici-section>
</mici-card>
```

[grid system]: /components/grid
