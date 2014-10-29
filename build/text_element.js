(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.TextElement = (function(_super) {
    __extends(TextElement, _super);

    function TextElement() {
      return TextElement.__super__.constructor.apply(this, arguments);
    }

    TextElement.prototype.attributes = {
      x: 0,
      y: 0,
      font: '10pt Verdana',
      style: 'white',
      text: '',
      align: 'center',
      strokeStyle: 'none',
      stroke: false
    };

    TextElement.prototype.drawing = function() {
      this.context.font = this.attributes.font;
      this.context.textAlign = this.attributes.align;
      if (this.attributes.stroke) {
        this.context.strokeStyle = this.attributes.strokeStyle;
        this.context.strokeText(this.attributes.text, this.attributes.x, this.attributes.y);
      }
      this.context.fillStyle = this.attributes.style;
      return this.context.fillText(this.attributes.text, this.attributes.x, this.attributes.y);
    };

    return TextElement;

  })(DrawableElement);

}).call(this);
