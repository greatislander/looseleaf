
# Flow

The `.flow` class applies a `1em` margin to the block start (top) of direct child elements of the container which are
preceded by another element:

```css
.flow > * + * {
    margin-block-start: 1em;
}
```
