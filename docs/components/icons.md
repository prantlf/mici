# Icons

Mici comes with a set of 20 commonly-used icons (courtesy of [Feather]) that you can use anywhere in your web apps, utilizing the appropriate class for each icon.

## Example

```html preview
<mici-icon name=alert></mici-icon> alert
<mici-icon name=bookmark></mici-icon> bookmark
<mici-icon name=calendar></mici-icon> calendar
<mici-icon name=cart></mici-icon> cart
<mici-icon name=credit></mici-icon> credit
<mici-icon name=edit></mici-icon> edit
<mici-icon name=help></mici-icon> help
<mici-icon name=home></mici-icon> home
<mici-icon name=info></mici-icon> info
<mici-icon name=link></mici-icon> link
<mici-icon name=location></mici-icon> location
<mici-icon name=lock></mici-icon> lock
<mici-icon name=mail></mici-icon> mail
<mici-icon name=phone></mici-icon> phone
<mici-icon name=rss></mici-icon> rss
<mici-icon name=search></mici-icon> search
<mici-icon name=settings></mici-icon> settings
<mici-icon name=share></mici-icon> share
<mici-icon name=upload></mici-icon> upload
<mici-icon name=user></mici-icon> user
```

## Modifiers

### Color variants

You can create secondary or inverse (`secondary`, `inverse`) icons, simply by adding the appropriate color modifier.

#### Example

```html preview
<mici-para>This is a <mici-icon kind=secondary name=home></mici-icon>
  secondary icon, which has a lighter color.</mici-para>
<mici-para inverse>This is an <mici-icon kind=inverse name=home></mici-icon>
  inverse icon.</mici-para>
```

[Feather]: https://feathericons.com/
