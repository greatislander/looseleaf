# Form

Forms apply vertical spacing between subsequent elements:

```css
form > * + * {
    margin-block-start: 2em;
}
```

To maintain proximity between form elements, it's important that form
labels and the corresponding elements be wrapped in a containing
element of some sort, ideally a paragraph.
