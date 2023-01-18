const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let num of numeros) {
    
    if(num === 5 || num === 3) {
        console.log('Pulei')
        continue
    }
    console.log(num)

    if(num === 7) {
        console.log('7 dentro')
        break

    }
    console.log('7 fora')

}