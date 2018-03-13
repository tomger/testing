---
permalink: color/
---

# Color
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

## Base

## Extended

## Illustration
