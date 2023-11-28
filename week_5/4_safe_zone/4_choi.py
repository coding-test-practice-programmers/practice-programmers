def solution(board):
    direct = ((1,0),(0,1),(-1,0),(0,-1),(1,1),(-1,-1),(1,-1),(-1,1))
    count = 0
    
    for i in range (len(board)):
        for j in range(len(board[0])):
            if board[i][j] == 1:
                count += 1
            else:
                for x, y in direct:
                    b1, b2 = i+x, j+y
                    if len(board)>b1 >= 0 and len(board)>b2 >= 0 and board[b1][b2] == 1:
                        count += 1
                        break
    
    answer = len(board)**2 - count
    
    return answer