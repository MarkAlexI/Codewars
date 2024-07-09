class Block
{
  private int Width { get; }
  private int Length { get; }
  private int Height { get; }
  private int Volume { get; }
  private int SurfaceArea { get; }
  
  public Block(int[] data)
  {
    Width = data[0];
    Length = data[1];
    Height = data[2];
    Volume = Width * Length * Height;
    SurfaceArea = 2 * (Width * Length + Width * Height + Length * Height);
  }
  
  public int GetWidth() => Width;
  public int GetLength() => Length;
  public int GetHeight() => Height;
  public int GetVolume() => Volume;
  public int GetSurfaceArea() => SurfaceArea;
}
