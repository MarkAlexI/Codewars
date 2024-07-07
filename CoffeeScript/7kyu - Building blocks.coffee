class Block
  constructor: (data) ->
    [@width, @length, @height] = data
    @volume = @width * @length * @height
    @surfaceArea = 2 * (@width * @length + @width * @height + @length * @height)
    
  getWidth: -> @width
  getLength: -> @length
  getHeight: -> @height
  getVolume: -> @volume
  getSurfaceArea: -> @surfaceArea
