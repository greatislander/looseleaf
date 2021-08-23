# Checkboxes

A group of checkboxes is wrapped in a `fieldset` with a `legend` which names
the input group. This technique is derived from WebAIM's article,
[_Accessible Form Controls_](https://webaim.org/techniques/forms/controls#checkbox).

A hint for the group can be added immediately after the `<legend>` in a
paragraph with a class of `field__hint`.

A validation error message for the group can be added immediately after the last
checkbox in a paragraph with a class of `field__error`.

Hints and validation error messages must be associated with the checkbox using
unique IDs which can be referenced from the checkboxes' `aria-describedby`
attributes. For more information, see [WebAIM's form validation error documentation](https://webaim.org/techniques/formvalidation/#error).

Checkboxes with an associated error should also be given an `aria-invalid`
attribute of `true`.
