$ ->
  window.ce = new CanvasElement 'canvas'
  ie = ce.addElement ImageElement
  ie.set('url', 'img/keanu.jpg')
  window.te = ce.addElement TextElement
  te.set('font', 'bold 15px Arial')
  te.set('style', 'white')
  te.set('strokeWidth', 3)
  te.set('x', 361/2)
  te.set('y', 220)
  te.set('strokeStyle', '2px black')
  te.set('stroke', true)
  ce.draw()
  $('input').on 'input', ->
    te.set 'text', $(@).val()