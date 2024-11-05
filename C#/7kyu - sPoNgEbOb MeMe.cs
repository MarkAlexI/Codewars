using System.Text;
public class Kata
{
  public static string SpongeMeme(string sentence)
  {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < sentence.Length; i++)
    {
      if (i % 2 == 0)
      {
        sb.Append(char.ToUpper(sentence[i]));
      }
      else
      {
        sb.Append(char.ToLower(sentence[i]));
      }
    }
    return sb.ToString();
  }
}
