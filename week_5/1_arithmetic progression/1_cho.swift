import Foundation

// MARK: - 등차 수열의 특정한 항만 더하기
func solution(_ a:Int, _ d:Int, _ included:[Bool]) -> Int {
    var sum = 0
    
    for i in 0..<included.count {
        if included[i] == true {
            sum += (a + i * d)
        }
    }
    
    return sum
}
