function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 5
let rand = random(min, max)

while(rand !== 2) {
    rand = random(min, max)
    console.log(rand)
}

console.log('#######')

do {
    rand = random(min, max)
    console.log(rand)
} while(rand !== 2);