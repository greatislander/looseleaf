# Input

Input styles are suitable for any generic `<input>` (with `type` attributes of
`text`, `email`, `password`, et cetera).

Labels and the corresponding input are are intended to be wrapped in a
containing element with a class of `field`.

A hint can be added immediately after the `<label>` in a paragraph with
a class of `field__hint`.

A validation error message can be added immediately after the `<label>`
or hint in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the input using
unique IDs which can be referenced from the input's `aria-describedby`
attribute. For more information, see [WebAIM's form validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Inputs with an associated error should also be given an `aria-invalid`
attribute of `true`.
