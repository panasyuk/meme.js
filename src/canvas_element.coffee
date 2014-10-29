class @CanvasElement
  elements: []
  constructor: (canvasSelector)->
    @canvas = document.querySelector canvasSelector
    @context = @canvas.getContext '2d'
    @context.globalCompositeOperation = 'source-over'
    @width = @canvas.width
    @height = @canvas.height
  draw: ->
    @context.clearRect(0, 0, @canvas.width, @canvas.height);
    for element in @elements
      element.draw()
  addElement: (elementClass)->
    newElement = new elementClass @context, @
    @elements.push newElement
    newElement