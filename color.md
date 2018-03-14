---
permalink: color/
---

# Color


## Base
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

## Extended

<ul class="color-container">
{% assign tokens = site.data.tokens.properties | sort:"name" %}
{% for token in tokens %}
{% if token.type == "color" %}
<li class="color-swatch">
  <div class="color-swatch-preview" style="background: {{token.value}}">
    {{ token.value }}
  </div>
  {{ token.name | replace: 'color', '' }}
</li>
{% endif %}
{% endfor %}
</ul>

## Illustration
