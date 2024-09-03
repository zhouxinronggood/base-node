// 定义一个类
class User {
    // constructor 上的数据需要先这样定好类型
    name: string

    // 入参也要定义类型
    constructor(userName: string) {
        this.name = userName
    }

    getName() {
        console.log(this.name)
    }
}

// 通过 new 这个类得到的变量，它的类型就是这个类
const petter1: User = new User('Petter')
console.log(petter1)    // User { name: 'Petter' }
console.log(petter1.name) // Petter