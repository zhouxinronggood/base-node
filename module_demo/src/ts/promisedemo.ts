// 会 resolve 一个字符串，所以它的返回类型是 Promise<string> （假如没有 resolve 数据，那么就是 Promise<void> ）
function queryData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello World')
      }, 3000)
    })
  }
  
  queryData().then((data) => console.log(data))