// 这是一个基础类
class UserBase {
    name: string
    constructor(userName: string) {
      this.name = userName
    }
  }
  
  // 这是另外一个类，继承自基础类
  class UserE extends UserBase {
    getName() {
      console.log(this.name)
    }
  }
  
  // 这个变量拥有上面两个类的所有属性和方法
  const petterE: UserE = new UserE('Petter')
  console.log(petterE)  // UserE { name: 'Petter' }
  console.log(petterE.name) // Petter
  console.log(petterE.getName()) //   Petter  undefined