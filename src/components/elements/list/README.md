# List

[Unordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and
[ordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) lists
use default user agent styles. If a list's `role` attribute is set to `list`,
the `list-style` CSS property of the list will be set to `none`. This behaviour
is inherited from [modern-css-reset](https://piccalil.li/blog/a-modern-css-reset/)
and addresses an accessibility issue in Safari, [explained here by Scott O'Hara](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).
