const char *pofi(unsigned n)
{
    int mod = n % 4;

    switch (mod)
    {
        case 0:
            return "1";
        case 1:
            return "i";
        case 2:
            return "-1";
        case 3:
            return "-i";
    }
}
