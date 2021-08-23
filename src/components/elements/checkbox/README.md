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
containing element with a class of `field`.

A hint can be added immediately after the `<label>` in a paragraph with
a class of `field__hint`.

A validation error message can be added immediately after the `<label>`
or hint in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the checkbox using
unique IDs which can be referenced from the checkbox's `aria-describedby`
attribute. For more information, see [WebAIM's form validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Checkboxes with an associated error should also be given an `aria-invalid`
attribute of `true`.
