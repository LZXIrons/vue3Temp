'''
@Author: your name
@Date: 2020-07-25 20:24:15
@LastEditTime: 2020-07-26 09:58:09
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: \study\study-practice-python\50ClassicalProgrammingProblems\FibonacciSeriesRabbits.py
'''
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