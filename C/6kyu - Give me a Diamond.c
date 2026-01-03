#include <stdlib.h>

char *diamond (int n)
{
    if (n <= 0 || n % 2 == 0) return NULL;

    int mid = n/2;
    int total = (n + 1) * n;

    char *res = malloc(total + 1);
    if (!res) return NULL;

    char *p = res;

    for (int i = 0; i < n; i++)
    {
        int spaces = abs(mid - i);
        int stars  = n - 2 * spaces;

        for (int j = 0; j < spaces; j++) *p++ = ' ';

        for (int j = 0; j < stars; j++) *p++ = '*';

        *p++ = '\n';
    }

    *p = '\0';
    return res;
}
