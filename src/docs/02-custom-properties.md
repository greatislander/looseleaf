Looseleaf makes heavy use of CSS custom properties. This allows the framework
to be customized in various ways. The properties and their default values are
documented here.

All of Looseleaf's custom properties are namespaced using the `--ll-` prefix.

## font-family

### Default

```css
:root {
    --ll-font-family:
        "Comic Neue",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Helvetica,
        Arial,
        sans-serif;
}
```

### Description

Looseleaf's default font stack uses [Comic Neue](http://comicneue.com/) for a
casual, handwritten appearance and falls back to a [system font stack](https://css-tricks.com/snippets/css/system-font-stack/).

## border-radius

### Default

```css
:root {
    --ll-border-radius: 16rem 1rem 14rem 1rem / 1rem 14rem 1rem 16rem;
}
```

### Description

TODO.

## border-color

### Default

```css
:root {
    --ll-border-color: var(--ll-theme-border-color, #000);
}
```

### Description

TODO.

## text-color

### Default

```css
:root {
    --ll-text-color: var(--ll-theme-text-color, #000);
}
```

### Description

TODO.

## link-color

### Default

```css
:root {
    --ll-link-color:
        var(
            --ll-theme-link-color,
            var(--ll-text-color)
        );
}
```

### Description

TODO.

## link-visited-color

### Default

```css
:root {
    --ll-link-visited-color:
        var(
            --ll-theme-link-visited-color,
            var(--ll-link-color)
        );
}
```

### Description

TODO.

## accent-color

### Default

```css
:root {
    --ll-accent-color: var(--ll-theme-accent-color, hsl(225, 73%, 57%));
}
```

### Description

TODO.

## background-color

### Default

```css
:root {
    --ll-background-color: var(--ll-theme-background-color, #fff);
}
```

### Description

TODO.

## input-focus-box-shadow

### Default

```css
:root {
    --ll-input-focus-box-shadow:
        0 0 0 0.125rem var(--ll-background-color),
        0 0 0 0.25rem var(--ll-accent-color);
}
```

### Description

TODO.

## link-focus-box-shadow

### Default

```css
:root {
    --ll-link-focus-box-shadow: 0 0 0 0.25rem var(--ll-accent-color);
}
```

### Description

TODO.

## border-thin

### Default

```css
:root {
    --ll-border-thin: 0.0625rem solid var(--ll-border-color);
}
```

### Description

TODO.

## border-medium

### Default

```css
:root {
    --ll-border-medium: 0.125rem solid var(--ll-border-color);
}
```

### Description

TODO.

## border-thick

### Default

```css
:root {
    --ll-border-thick: 0.1875rem solid var(--ll-border-color);
}
```

### Description

TODO.
