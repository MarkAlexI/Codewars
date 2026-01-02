#include <string.h>

static int expand(const char* s, int left, int right, int n)
{
    while (left >= 0 && right < n && s[left] == s[right])
    {
        left--;
        right++;
    }

    return right - left - 1;
}

int longest_palindrome(const char *s)
{
    if (!s || *s == '\0')
    {
        return 0;
    }

    int n = strlen(s);
    int max_len = 1;

    for (int i = 0; i < n; i++)
    {
        int len1 = expand(s, i, i, n);
        int len2 = expand(s, i, i + 1, n);

        int curr = len1 > len2 ? len1 : len2;

        if (curr > max_len)
        {
            max_len = curr;
        }
    }

    return max_len;
}
