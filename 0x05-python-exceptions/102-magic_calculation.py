#!/usr/bin/python3
def magic_calculation(a, b):
    magicResult = 0
    for i in range(1, 3):
        try:
            if i > a:
                raise Exception('Too far')
            magicResult += a ** b / i
        except Exception:
            magicResult = b + a
            break
    return magicResult
