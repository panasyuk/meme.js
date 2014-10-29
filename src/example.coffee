$ ->
  ce = new CanvasElement 'canvas'
  ie = ce.addElement ImageElement
  ie.set('url', null)
  te = ce.addElement TextElement
  te.set('font', '30px Verdana')
  te.set('x', 100)
  te.set('y', 150)
  te.set('strokeStyle', '2px black')
  te.set('stroke', true)
  ce.draw()
  $('input').on 'input', ->
    console.log 'typed'
    te.set 'text', $(@).val()