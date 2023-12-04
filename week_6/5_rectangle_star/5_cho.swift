import Foundation

// MARK: - 직사각형 별 찍기
let n1 = readLine()!.components(separatedBy: [" "]).map { Int($0)! }
let (a, b) = (n1[0], n1[1])

for _ in 0..<b {
    print(Array(repeating: "*", count: a).joined())
}