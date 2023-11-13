from collections import Counter

def solution(a, b, c, d):
    answer = 0
    count = Counter([a, b, c ,d]).most_common(4)
    num = len(count)
    
    if num == 1:
        answer = 1111*int(count[0][0])
    elif num == 2:
        if count[0][1] == 2:
            answer = (count[0][0] + count[1][0]) * abs(count[0][0] - count[1][0])
        else:
            answer = (10 * count[0][0] + count[1][0])**2
    elif num == 3:
        answer = count[1][0]*count[2][0]
    else:
        answer = min(a, b, c, d)
    
    return answer