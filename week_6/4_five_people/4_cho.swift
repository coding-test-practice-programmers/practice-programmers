import Foundation

// MARK: - 5명씩
func solution(_ names:[String]) -> [String] {
    var answer = [String]()
    
    for i in 0..<names.count {
        if i % 5 == 0 {
            answer.append(names[i])
        }
    }
    
    return answer
}
