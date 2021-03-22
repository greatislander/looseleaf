# Checkbox

Checkboxes are visually hidden and replaced with custom style via pseudo
content attached to the adjacent label:

```css
input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

input[type="checkbox"] + label::before {
    /* Custom checkbox style. */
}
```

Labels and the corresponding checkbox element are intended to be wrapped in a
containing element of some sort, ideally a paragraph.
