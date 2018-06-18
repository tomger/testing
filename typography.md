---
---
<ul class="color-container">
{% assign tokens = site.data.tokens.font-size | sort:"value" %}
{% for token in tokens %}
{% unless token.name contains "Display" %}

{% for lineHeight in site.data.tokens.line-height %}
{% assign tokenName = lineHeight.name | replace: "lineHeight", "fontSize"%}
{% if token.name ==  tokenName %}
{% assign lineHeight = lineHeight.value %}
{% endif %}
{% endfor %}

<li style="font-size: {{ token.value}}px; line-height: {{lineHeight}}px">
  {{ token.name | replace: "fontSize"}}
  {{ token.value}}/{{lineHeight}}
</li>

{% endunless %}
{% endfor %}
</ul>
