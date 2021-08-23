Looseleaf makes heavy use of CSS custom properties. This allows the framework
to be customized in various ways. The properties and their default values are
documented here.

All of Looseleaf's custom properties are namespaced using the `--ll-` prefix.

## Core Properties

{% for item in docs.patterns %}

### {{ item.label }}

#### Default

```css
:root {
    {{ item.css | safe }}
}
```

#### Description

{{ item.description }}

{% endfor %}
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

### theme-text-color-translucent

Overrides the default [translucent text color](#text-color-translucent).

### theme-text-color-transparent

Overrides the default [transparent text color](#text-color-transparent).

### theme-text-color-error

Overrides the default [error text color](#text-color-error).

### theme-link-color

Overrides the default [link color](#link-color).

### theme-link-visited-color

Overrides the default [visited link color](#link-visited-color).

### theme-accent-color

Overrides the default [accent color](#accent-color).

### theme-background-color

Overrides the default [background color](#background-color).

### theme-background-color-transparent

Overrides the default [transparent background color](#background-color-transparent).

### theme-accent-background-color

Overrides the default [accent background color](#accent-background-color).

### theme-input-focus-box-shadow

Overrides the default [input focus box shadow](#input-focus-box-shadow).

### theme-input-focus-box-shadow-error

Overrides the default [input focus box shadow (error)](#input-focus-box-shadow-error).

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
