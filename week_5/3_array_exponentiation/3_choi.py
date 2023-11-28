def solution(arr):
    count = 0
    l = len(arr)
    
    while l > 1:
        l = l / 2
        count += 1
    
    answer = arr + [0]*(2**count - len(arr))
    
    return answer