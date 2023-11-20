def solution(sizes):
    
    list1 = []
    list2 = []
    
    for i in sizes:
        list1.append(max(i))
        list2.append(min(i))
    
    answer = max(list1) * max(list2)
    
    return answer