import math
num = float(input('digite um valor'))
seno = math.sin(math.radians(num))
tang = math.tan(math.radians(num))
cos = math.cos(math.radians(num))
print('o seno de num {} é {:.2f}'.format(num, seno))
print('a tangente de num {} é {:.2f}'.format(num, tang))
print('o cosseno de {} é {:.2f}'.format(num, cos))
