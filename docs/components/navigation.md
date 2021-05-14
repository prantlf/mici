# Navigation bar

The navigation bar element has been minimally styled, allowing you to create simple vertical navigation menus for your web apps. Apart from styling from links, custom modifiers (`sublink-1` and `sublink-2`) are provided for creating navigation trees.

## Example

```html preview
<mici-nav>
  <mici-link href="#">Category 1</mici-link>
  <mici-span>Category 2</mici-span>
  <mici-link href="#" sublink-1>Item 2.1</mici-link>
  <mici-span sublink-1>Category 2.2</mici-span>
  <mici-link href="#" sublink-2>Item 2.2.1</mici-link>
</mici-nav>
```
