class DrawableElement
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

class TextElement extends DrawableElement
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
        @wrap()
        @context.fillText @attributes.text, @attributes.x, @attributes.y
    wrap: ->
        words = @attributes.text.split(" ")
        countWords = words.length
        line = ""
        for n in [0..countWords]
            testLine = line + words[n] + " "
            testWidth = @context.measureText(testLine).width
            if (testWidth > @canvasElement.width)
                @context.fillText(line, @canvasElement.width, @canvasElement.height)
                line = words[n] + " "
                marginTop += lineHeight
            else
                line = testLine
        @context.fillText(line, marginLeft, marginTop)
        
class ImageElement extends DrawableElement
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
        @canvasElement.draw()
    drawing: ->
        @context.drawImage @image, @attributes.x, @attributes.y

class CanvasElement
    elements: []
    constructor: (@canvas)->
        @context = @canvas[0].getContext '2d'
        @context.globalCompositeOperation = 'source-over'
        @width = @canvas[0].width
        @height = @canvas[0].height
    draw: ->
        @context.clearRect(0, 0, @canvas[0].width, @canvas[0].height);
        for element in @elements
            element.draw()
    addElement: (elementClass)->
        newElement = new elementClass @context, @
        @elements.push newElement
        newElement
        
ce = new CanvasElement $ 'canvas'
ie = ce.addElement ImageElement
ie.set('url', null)
te = ce.addElement TextElement
te.set('font', '30px Verdana')
te.set('x', 100)
te.set('y', 150)
te.set('strokeStyle', '2px black')
te.set('stroke', true)
ce.draw()
$('textarea').on 'input', ->
    te.set 'text', $(@).val()
    

