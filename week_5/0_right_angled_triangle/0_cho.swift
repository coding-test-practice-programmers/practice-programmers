import Foundation

// MARK: - 직각삼각형 출력하기
let n = readLine()!.components(separatedBy: [" "]).map { Int($0)! }

for i in 1...n[0] {
    print(String(repeating: "*", count: i))
}