def solution(a, d, included):
    answer = 0
    list = []
    
    for i in range(len(included)):
        list.append(a+(d*i))
        
    for j, k in enumerate(included):
        if k:
            answer += list[j]
    
    return answer