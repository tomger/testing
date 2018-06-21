// https://classpass.github.io/design-system/generated/tokens.json
import tokens from "./tokens.js";
import { TinyColor } from '@ctrl/tinycolor';


function lookup(value, hint) {
  for (let p in tokens) {
    if (tokens[p] == value && p.indexOf(hint) !== -1) {
      return p;
    }
  }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function layer(context, layer) {
  let style = layer.textStyles[0].textStyle;
  let color = new TinyColor(style.color);

  let object = [
    lookup(style.fontSize, 'fontSize'),
    lookup(style.lineHeight, 'lineHeight') || style.lineHeight,
    'fontWeight' + capitalizeFirstLetter(style.weightText),
    lookup(color.toHexString(), 'color'),
  ]

  const JSONString = JSON.stringify(object, null, 2);

  return {
     code: JSONString,
     language: "js"
  };
};

function styleguideColors(context, colors) {

}

function styleguideTextStyles(context, colors) {

}

function exportStyleguideColors(context, colors) {

}

function exportStyleguideTextStyles(context, colors) {

}

function comment(context, text) {

}

export default {
    layer,
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};

/*
{
  "layer": {
    "content": "Example item A",
    "name": "Label",
    "fills": [],
    "borderRadius": 0,
    "shadows": [],
    "opacity": 1,
    "textStyles": [
      {
        "range": {
          "start": 0,
          "end": 14
        },
        "textStyle": {
          "fontSize": 16,
          "lineHeight": 24,
          "fontFace": "TTNorms-Regular",
          "color": {
            "r": 51,
            "g": 51,
            "b": 51,
            "a": 1
          },
          "fontFamily": "TTNorms",
          "fontStyle": "normal",
          "weightText": "regular",
          "fontStretch": "normal"
        }
      }
    ],
    "rect": {
      "height": 24,
      "x": 1047,
      "y": 485,
      "width": 232
    },
    "exportable": false,
    "borders": [],
    "blendMode": "normal",
    "type": "text"
  }
}
*/
