def solution(answers):
    answer = []
    s1 = [1,2,3,4,5]
    s2 = [2,1,2,3,2,4,2,5]
    s3 = [3,3,1,1,2,2,4,4,5,5]
    
    ns1 = s1*(len(answers)//len(s1)) + s1[:len(answers)%len(s1):]
    ns2 = s2*(len(answers)//len(s2)) + s2[:len(answers)%len(s2):]
    ns3 = s3*(len(answers)//len(s3)) + s3[:len(answers)%len(s3):]
        
    c1, c2, c3 = 0,0,0
    
    for i in range(len(answers)):
        if answers[i] == ns1[i]:
            c1 += 1
        if answers[i] == ns2[i]:
            c2 += 1
        if answers[i] == ns3[i]:
            c3 += 1
    
    if c1 >= c2 and c1 >= c3:
        answer.append(1)
    if c2 >= c1 and c2 >= c3:
        answer.append(2)
    if c3 >= c2 and c3 >= c1:
        answer.append(3)
    
    return answer