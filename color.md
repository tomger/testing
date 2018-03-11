---
permalink: color/
---

# Color
<ul>
{% for token in site.data.tokens.properties %}
{% if token.type == "color" %}
<li>
  {{ token.name }}
  <div style="width: 40px; height: 40px; box-shadow: inset 0 0 1px 0 rgba(0,0,0,.4) ;background: {{token.value}}"></div>
</li>
{% endif %}
{% endfor %}
</ul>

## Base

## Extended

## Illustration
