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
