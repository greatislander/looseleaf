# Select

Select elements are styled using `appearance: none` and a custom SVG icon added
via a background image. For further customization, see [custom properties](/docs/custom-properties/).

Labels and the corresponding select element are intended to be wrapped in a
containing element with a class of `field`.

A hint can be added immediately after the `<label>` in a paragraph with
a class of `field__hint`.

A validation error message can be added immediately after the `<label>`
or hint in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the select using
unique IDs which can be referenced from the select's `aria-describedby`
attribute. For more information, see [WebAIM's form validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Selects with an associated error should also be given an `aria-invalid`
attribute of `true`.
