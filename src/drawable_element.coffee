class @DrawableElement
  attributes: {}
  constructor: (@context, @canvasElement)->
    @afterInit() if @afterInit?
  set: (attrName, attrValue)->
    if @["set#{attrName}"]?
      @["set#{attrName}"] attrValue
    else
      @attributes[attrName] = attrValue
    @canvasElement.draw()
  draw: ->
    @beforeDraw() if @beforeDraw?
    @drawing() if @drawing?
    @context.fill()
    @afterDraw() if @afterDraw?