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

A hint for the group can be added immediately after the `<legend>` in a
paragraph with a class of `field__hint`.

A validation error message for the group can be added immediately after the last
checkbox in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the radio buttons
using unique IDs which can be referenced from the radio buttons'
`aria-describedby` attributes. For more information, see [WebAIM's form
validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Radio buttons with an associated error should also be given an `aria-invalid`
attribute of `true`.
