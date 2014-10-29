class @TextElement extends DrawableElement
  attributes:
    x: 0
    y: 0
    font: '10pt Verdana'
    style: 'white'
    text: ''
    align: 'center'
    strokeStyle: 'none'
    stroke: false
  drawing: ->
    @context.font = @attributes.font
    @context.textAlign = @attributes.align
    if @attributes.stroke
      @context.strokeStyle = @attributes.strokeStyle
      @context.strokeText @attributes.text, @attributes.x, @attributes.y
    @context.fillStyle = @attributes.style
    @context.fillText @attributes.text, @attributes.x, @attributes.y