#include <stdbool.h>

const char *bool_to_word (bool value)
{
  static const char* result[2] = { "No", "Yes" };

  return result[value];
}
