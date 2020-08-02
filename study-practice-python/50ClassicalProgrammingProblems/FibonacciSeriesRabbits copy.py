from math import sqrt
'''
@Description: 判断一个自然数是否是质数
@params: 自然数
@retrun: boolean(true:是质数，false:不是质数)
'''
def isPrime(num):
    for i in range(2, int(sqrt(num))+1):
        if num % i == 0:
            return False
    return True

'''
@Description: 判断两个数字(包含n1，不包含n2)之间的质数有哪些，并返回这两个数字之间的所有质数组成的列表
@params: (n1,n2) 都是大于1的自然数，n1:查找大于等于n1的质数，n2：查找小于n2的质数
@retrun: 列表
'''
def rangeNumPrime(n1,n2):
    if n1<2:
        raise Exception("素数范围是大于1的自然数")
    if n1>=n2:
        raise Exception("第二个参数必须大于第一个参数")
    primeNums=[]
    for num in range(n1,n2):
        if isPrime(num):
            primeNums.append(num)
    return primeNums

'''
@Description: 以列表的形式打印出101(包含)到200(不包含)的质数
'''
print(rangeNumPrime(101,200))
