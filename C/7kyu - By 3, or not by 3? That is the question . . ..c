#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* sum_digits(const char *str)
{
  int sum = 0;

  for (const char *p = str; *p != '\0'; p++)
  {
    if (*p >= '0' && *p <= '9')
    {
      sum += *p - '0';
    }
  }

  int length = snprintf(NULL, 0, "%d", sum);
  char *result = (char*)malloc(length + 1);
  if (result != NULL)
  {
    snprintf(result, length + 1, "%d", sum);
  }

  return result;
}

bool is_3_6_9(const char *str)
{
  return str[0] == '3' || str[0] == '6' || str[0] == '9';
}

bool process_string(const char *str)
{
  char *result = sum_digits(str);
  if (!result) return false;
  while (strlen(result) > 1)
  {
    char *temp = sum_digits(result);
    free(result);
    result = temp;

    if (!result) return false;
  }

  bool final_result = is_3_6_9(result);
  free(result);

  return final_result;
}

bool divisible_by_three(const char* strin) {
  return process_string(strin);
}
