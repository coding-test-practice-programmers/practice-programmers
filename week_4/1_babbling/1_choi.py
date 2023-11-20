def solution(babbling):
    answer = 0
    list = ["aya", "ye", "woo", "ma"]
    
    for i in babbling:
        word = ''
        count = 0
        
        for j in i:
            word += j
            if word in list:
                word = ''
                count += 1
        
        if len(word) == 0 and count > 0:
            answer += 1
        
    return answer