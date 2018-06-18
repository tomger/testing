---
permalink: color/
---

# Color

## Example
<div class="themecard">
  <div style="grid-row: 1 / span 2">
  <div>Text</div>
  <div>Text light</div>
  </div>
  <div class="themecard-light">
  <div>Text</div>
  <div>Text light</div>
  </div>
  <div class="themecard-dark">
  <div>Text</div>
  <div>Text light</div>
  </div>
</div>

## Colors

{% assign colors = "Gray,Brand,Yellow,Green,Red,Orange" | split: "," %}
{% for color in colors %}
### {{color}}
{% include color.html color=color %}
{% endfor %}

## Illustration
