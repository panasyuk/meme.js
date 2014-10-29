(function() {
  $(function() {
    var ce, ie, te;
    ce = new CanvasElement('canvas');
    ie = ce.addElement(ImageElement);
    ie.set('url', null);
    te = ce.addElement(TextElement);
    te.set('font', '30px Verdana');
    te.set('x', 100);
    te.set('y', 150);
    te.set('strokeStyle', '2px black');
    te.set('stroke', true);
    ce.draw();
    return $('input').on('input', function() {
      console.log('typed');
      return te.set('text', $(this).val());
    });
  });

}).call(this);
