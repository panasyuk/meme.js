class @ImageElement extends DrawableElement
  attributes:
    x: 0
    y: 0
    url: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
  afterInit: ->
    @url = @attributes.url
    @image = new Image()
    @image.onload = @imageLoaded.bind @
  seturl: (newUrl=null)->
    if @url != newUrl && newUrl!=null
      @url = newUrl
    @image.src = @url
  imageLoaded: ->
    @canvasElement.canvas.width = @image.width
    @canvasElement.canvas.height = @image.height
    @canvasElement.draw()
  drawing: ->
    @context.drawImage @image, @attributes.x, @attributes.y