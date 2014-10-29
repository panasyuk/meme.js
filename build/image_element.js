(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.ImageElement = (function(_super) {
    __extends(ImageElement, _super);

    function ImageElement() {
      return ImageElement.__super__.constructor.apply(this, arguments);
    }

    ImageElement.prototype.attributes = {
      x: 0,
      y: 0,
      url: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
    };

    ImageElement.prototype.afterInit = function() {
      this.url = this.attributes.url;
      this.image = new Image();
      return this.image.onload = this.imageLoaded.bind(this);
    };

    ImageElement.prototype.seturl = function(newUrl) {
      if (newUrl == null) {
        newUrl = null;
      }
      if (this.url !== newUrl && newUrl !== null) {
        this.url = newUrl;
      }
      return this.image.src = this.url;
    };

    ImageElement.prototype.imageLoaded = function() {
      this.canvasElement.canvas.width = this.image.width;
      this.canvasElement.canvas.height = this.image.height;
      return this.canvasElement.draw();
    };

    ImageElement.prototype.drawing = function() {
      return this.context.drawImage(this.image, this.attributes.x, this.attributes.y);
    };

    return ImageElement;

  })(DrawableElement);

}).call(this);
