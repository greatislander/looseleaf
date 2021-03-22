# Radio Buttons

Radio buttons are visually hidden and replaced with custom style via pseudo
content attached to the adjacent label:

```css
input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

input[type="radio"] + label::before {
    /* Custom radio button style. */
}
```

Labels and the corresponding radio button element are intended to be wrapped in a
containing element of some sort, ideally a paragraph.

A group of radio buttons is wrapped in a `fieldset` with a `legend` which names
the input group. This technique is derived from WebAIM's article,
[_Accessible Form Controls_](https://webaim.org/techniques/forms/controls#radio).
