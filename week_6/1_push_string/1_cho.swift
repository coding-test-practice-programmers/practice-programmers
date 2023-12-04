import Foundation

// MARK: - 문자열 밀기
func solution13(_ A:String, _ B:String) -> Int {
    var cha = Array(A)
    
    for i in 0..<cha.count {
        
        if String(cha) == B {
            return i
        }
        
        cha.insert(cha.last!, at: 0)
        
        cha.removeLast()
    }
    
    return 0
}

func solution13_1(_ A:String, _ B:String) -> Int {
    let arr = (A+A).components(separatedBy: B)
//    print(arr)
//    print(arr.count)
    return arr.count == 1 ? -1 : arr[1].count
}

solution13_1("hello", "lohel")