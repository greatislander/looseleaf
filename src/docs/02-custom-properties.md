Looseleaf makes heavy use of CSS custom properties. This allows the framework
to be customized in various ways. The properties and their default values are
documented here.

All of Looseleaf's custom properties are namespaced using the `--ll-` prefix.

## Core Properties

### font-family

#### Default

```css
:root {
    --ll-font-family:
        "Comic Neue",
        -apple-system,
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        sans-serif;
}
```

#### Description

Looseleaf's default font stack uses [Comic Neue](http://comicneue.com/) for a
casual, handwritten appearance and falls back to a [system font stack](https://css-tricks.com/snippets/css/system-font-stack/).

### font-family-mono

#### Default

```css
:root {
    --ll-font-family-mono:
        ui-monospace,
        "SFMono-Regular",
        "SF Mono",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        monospace;
}
```

#### Description

Looseleaf's default monospace font stack uses the same cross-platform monospace system
font stack that is [used by GitHub](https://github.com/primer/css/blob/0298b69bda4c25ed252fbeb6ba2e3fcf4ff096d2/src/support/variables/typography.scss#L39).

### border-radius

#### Default

```css
:root {
    --ll-border-radius: 16rem 1rem 14rem 1rem / 1rem 14rem 1rem 16rem;
}
```

#### Description

Looseleaf's default [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
is based on [handdrawn.css](https://github.com/fxaeberhard/handdrawn.css/blob/master/scss/handdrawn.scss#L50-L57)
and is shorthand for the following:

```css
* {
    border-bottom-left-radius: 1rem 16rem;
    border-bottom-right-radius: 14rem 1rem;
    border-top-left-radius: 16rem 1rem;
    border-top-right-radius: 1rem 14rem;
}
```

### border-color

#### Default

```css
:root {
    --ll-border-color: var(--ll-theme-border-color, #000);
}
```

#### Description

The default border colour is black (`#000`). If a [theme border colour](#theme-border-color)
is provided, it will be used instead.

### text-color

#### Default

```css
:root {
    --ll-text-color: var(--ll-theme-text-color, #000);
}
```

#### Description

The default text colour is black (`#000`). If a [theme text colour](#theme-text-color)
is provided, it will be used instead.

### link-color

#### Default

```css
:root {
    --ll-link-color:
        var(
            --ll-theme-link-color,
            var(--ll-text-color)
        );
}
```

#### Description

Links use the default text colour. If a [theme link colour](#theme-link-color)
is provided, it will be used instead.

### link-visited-color

#### Default

```css
:root {
    --ll-link-visited-color:
        var(
            --ll-theme-link-visited-color,
            var(--ll-link-color)
        );
}
```

#### Description

Visited links use the default link colour. If a [theme link visited colour](#theme-link-visited-color)
is provided, it will be used instead.

### accent-color

#### Default

```css
:root {
    --ll-accent-color: var(--ll-theme-accent-color, hsl(225, 73%, 57%));
}
```

#### Description

The accent colour is used for focus and active states on interactive elements
such as buttons, links, and form controls. The default value is `hsl(225, 73%, 57%)`
which is the equivalent of the `#4169e1` hex code. If a [theme accent colour](#theme-accent-color)
is provided, it will be used instead.

### background-color

#### Default

```css
:root {
    --ll-background-color: var(--ll-theme-background-color, #fff);
}
```

#### Description

The default background colour is white (`#fff`). If a [theme background colour](#theme-background-color)
is provided, it will be used instead.

### accent-background-color

#### Default

```css
:root {
    --ll-accent-background-color: var(--ll-theme-accent-background-color, #ddd);
}
```

#### Description

The default accent background colour is `#ddd`. If a [theme accent background colour](#theme-acccent-background-color)
is provided, it will be used instead.

### input-focus-box-shadow

#### Default

```css
:root {
    --ll-input-focus-box-shadow:
        var(
            --ll-theme-input-focus-box-shadow,
            0 0 0 0.125rem var(--ll-background-color),
            0 0 0 0.25rem var(--ll-accent-color)
        );
}
```

#### Description

Focused inputs have their outline removed and instead use a focus ring created
with a [box shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
If a [theme input focus box shadow](#theme-input-focus-box-shadow) is provided,
it will be used instead.

### link-focus-box-shadow

#### Default

```css
:root {
    --ll-link-focus-box-shadow:
        var(
            --ll-theme-link-focus-box-shadow,
            0 0 0 0.25rem var(--ll-accent-color)
        );
}
```

#### Description

Focused links have their outline removed and instead use a focus ring created
with a [box shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
If a [theme link focus box shadow](#theme-link-focus-box-shadow) is provided,
it will be used instead.

### border-thin

#### Default

```css
:root {
    --ll-border-thin: 0.0625rem solid var(--ll-border-color);
}
```

#### Description

Looseleaf's thin border has a `border-width` equivalent to 1px.

### border-medium

#### Default

```css
:root {
    --ll-border-medium: 0.125rem solid var(--ll-border-color);
}
```

#### Description

Looseleaf's medium border has a `border-width` equivalent to 2px.

### border-thick

#### Default

```css
:root {
    --ll-border-thick: 0.1875rem solid var(--ll-border-color);
}
```

#### Description

Looseleaf's thick border has a `border-width` equivalent to 3px.

## Theming

Looseleaf is designed for colour customization. For example, it's very
straightforward to add support for dark mode using the [`@prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
media query with the following CSS:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --ll-theme-border-color: #fff;
        --ll-theme-text-color: #fff;
        --ll-theme-accent-color: hsl(405, 73%, 57%);
        --ll-theme-background-color: #000;
        --ll-theme-select-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 16 16"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
    }
}

```

Themes can also be applied via a class or data attribute on the `<html>` or
`<body>` element, for example:

```css
.black-on-yellow {
    --ll-theme-border-color: #000;
    --ll-theme-text-color: #000;
    --ll-theme-accent-color: #000;
    --ll-theme-background-color: #ff0;
    --ll-theme-select-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" viewBox="0 0 16 16"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
}

```

```css
[data-theme="black-on-yellow"] {
    --ll-theme-border-color: #000;
    --ll-theme-text-color: #000;
    --ll-theme-accent-color: #000;
    --ll-theme-background-color: #ff0;
    --ll-theme-select-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" viewBox="0 0 16 16"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
}
```

### theme-border-color

Overrides the default [border color](#border-color).

### theme-text-color

Overrides the default [text color](#text-color).

### theme-link-color

Overrides the default [link color](#link-color).

### theme-link-visited-color

Overrides the default [visited link color](#link-visited-color).

### theme-accent-color

Overrides the default [accent color](#accent-color).

### theme-background-color

Overrides the default [background color](#background-color).

### theme-accent-background-color

Overrides the default [accent background color](#accent-background-color).

### theme-input-focus-box-shadow

Overrides the default [input focus box shadow](#input-focus-box-shadow).

### theme-link-focus-box-shadow

Overrides the default [link focus box shadow](#input-focus-box-shadow).

### theme-select-icon

```css
:root {
    --ll-theme-select-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 16 16"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
}
```

The `--ll-theme-select-icon` variable replaces the [select element's custom icon](/components/detail/select)
with one in an appropriate colour for the current theme. This is achieved via
an SVG embedded in a CSS [data URI](https://css-tricks.com/lodge/svg/09-svg-data-uris/).
It's worth noting that the embedded SVG's `fill` attribute must be set to a
[named color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords)
or HSL value, as Firefox and Chrome/Edge do not support hex values for SVGs embedded
via a CSS data URI (here is a [reduced test case](https://codepen.io/greatislander/pen/MWJYPNM)).
