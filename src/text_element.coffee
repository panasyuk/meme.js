class @TextElement extends DrawableElement
  attributes:
    x: 0
    y: 0
    font: '10pt Arial'
    style: 'white'
    text: ''
    align: 'center'
    strokeStyle: 'black'
    strokeWidth: 1
    stroke: false
  drawing: ->
    @context.font = @attributes.font
    @context.textAlign = @attributes.align
    if @attributes.stroke
      oldLineWidth = @context.lineWidth
      @context.lineWidth = @attributes.strokeWidth
      @context.strokeStyle = @attributes.strokeStyle
      @context.strokeText @attributes.text, @attributes.x, @attributes.y
      @context.lineWidth = oldLineWidth
    @context.fillStyle = @attributes.style
    @context.fillText @attributes.text, @attributes.x, @attributes.y