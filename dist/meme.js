(function() {
  this.CanvasElement = (function() {
    CanvasElement.prototype.elements = [];

    function CanvasElement(canvasSelector) {
      this.canvas = document.querySelector(canvasSelector);
      this.context = this.canvas.getContext('2d');
      this.context.globalCompositeOperation = 'source-over';
      this.width = this.canvas.width;
      this.height = this.canvas.height;
    }

    CanvasElement.prototype.draw = function() {
      var element, _i, _len, _ref, _results;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      _ref = this.elements;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        _results.push(element.draw());
      }
      return _results;
    };

    CanvasElement.prototype.addElement = function(elementClass) {
      var newElement;
      newElement = new elementClass(this.context, this);
      this.elements.push(newElement);
      return newElement;
    };

    return CanvasElement;

  })();

}).call(this);

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
      font: '10pt Arial',
      style: 'white',
      text: '',
      align: 'center',
      strokeStyle: 'black',
      strokeWidth: 1,
      stroke: false
    };

    TextElement.prototype.drawing = function() {
      var oldLineWidth;
      this.context.font = this.attributes.font;
      this.context.textAlign = this.attributes.align;
      if (this.attributes.stroke) {
        oldLineWidth = this.context.lineWidth;
        this.context.lineWidth = this.attributes.strokeWidth;
        this.context.strokeStyle = this.attributes.strokeStyle;
        this.context.strokeText(this.attributes.text, this.attributes.x, this.attributes.y);
        this.context.lineWidth = oldLineWidth;
      }
      this.context.fillStyle = this.attributes.style;
      return this.context.fillText(this.attributes.text, this.attributes.x, this.attributes.y);
    };

    return TextElement;

  })(DrawableElement);

}).call(this);
