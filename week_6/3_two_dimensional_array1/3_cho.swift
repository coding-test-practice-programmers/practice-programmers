import Foundation

// MARK: - 특별한 이차원 배열1
func solution(_ n:Int) -> [[Int]] {
    var answer: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)
    
    for i in 0..<n {
        for j in 0..<n {
            if i == j {
                answer[i][j] = 1
            }
        }
    }
    
    return answer
}