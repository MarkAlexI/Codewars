class Block {
  constructor(data) {
    const [width, length, height] = data;
    this.width = width;
    this.length = length;
    this.height = height;
    this.volume = width * length * height;
    this.surfaceArea =
      2 * (width * length + width * height + length * height);
  }

  getWidth() { return this.width; }
  getLength() { return this.length; }
  getHeight() { return this.height; }
  getVolume() { return this.volume; }
  getSurfaceArea() { return this.surfaceArea; }
}
