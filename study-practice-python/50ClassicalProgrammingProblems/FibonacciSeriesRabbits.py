def rabbitsComputed(month):
    if month < 1 :
        return 0
    if month < 3 :
        return 1
    a,b=0,1
    for i in range(month-2):
        a,b=b,a+b
    return a+b

for j in range(1,12):
    print(rabbitsComputed(j))