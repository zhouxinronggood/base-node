// 这是一个类
class UserBaseI {
    name: string
    constructor(userName: string) {
      this.name = userName
    }
  }
  
  // 这是一个接口，可以继承自类
  interface UserI extends UserBaseI {
    age: number
  }
  
  // 这样这个变量就必须同时存在两个属性
  const petterI: UserI = {
    name: 'Petter',
    age: 18,
  }

  console.log(petterI)  // { name: 'Petter', age: 18 }
  console.log(petterI.name) // Petter
  console.log(petterI.age)  //18