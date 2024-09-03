interface UserItem {
    name: string
    // 这个属性变成了可选
    age?: number
}

const petter: UserItem = {
    name: 'Petter',
}

console.log(petter)
console.log(petter.name)