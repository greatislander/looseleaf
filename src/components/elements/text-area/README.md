# Text Area

Text areas have a flexible height and content scrolls vertically.

Labels and the corresponding text area are intended to be wrapped in a
containing element with a class of `field`.

A hint can be added immediately after the `<label>` in a paragraph with
a class of `field__hint`.

A validation error message can be added immediately after the `<label>`
or hint in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the text area using
unique IDs which can be referenced from the text area's `aria-describedby`
attribute. For more information, see [WebAIM's form validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Text areas with an associated error should also be given an `aria-invalid`
attribute of `true`.
