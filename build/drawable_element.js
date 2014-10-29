(function() {
  this.DrawableElement = (function() {
    DrawableElement.prototype.attributes = {};

    function DrawableElement(context, canvasElement) {
      this.context = context;
      this.canvasElement = canvasElement;
      if (this.afterInit != null) {
        this.afterInit();
      }
    }

    DrawableElement.prototype.set = function(attrName, attrValue) {
      if (this["set" + attrName] != null) {
        this["set" + attrName](attrValue);
      } else {
        this.attributes[attrName] = attrValue;
      }
      return this.canvasElement.draw();
    };

    DrawableElement.prototype.draw = function() {
      if (this.beforeDraw != null) {
        this.beforeDraw();
      }
      if (this.drawing != null) {
        this.drawing();
      }
      this.context.fill();
      if (this.afterDraw != null) {
        return this.afterDraw();
      }
    };

    return DrawableElement;

  })();

}).call(this);
