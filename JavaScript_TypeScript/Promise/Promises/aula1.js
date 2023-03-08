function contar(n) {
    let cont = 0
    for (let i = 0; i < n; i++) {
        cont++
    }
    return cont
}

function contarT(n) {
    let cont = 0
    let t = setTimeout(() => {
        for (let i = 0; i < n; i++) {
            cont++
        }
    }, 2000)
    return cont
}

function contarP(n) {
    let cont = 0
    let prom = new Promise((res, rej) => {
        for (i = 0; i < n; i++) {
            cont++
        }
        if (cont === n) {
            res(cont)
        } else {
            rej("ERRO")
        }
    })
    return prom
}

async function contarPA(n) {
    const retorno = await contarP(n)
    console.log(retorno)
}

function somaPositivos(n1, n2) {
    let p = new Promise((res, rej) => {
        if (n1 >= 0 && n2 >= 0) {
            res(n1 + n2)
        } else {
            rej('ERRO')
        }
    })
    return p
}

function contarPT(n) {
    let cont = 0
    let p = new Promise((res, rej) => {
        let t = setTimeout(() => {
            for (let i = 0; i < n; i++) {
                cont++
            }
            if (cont === n) {
                res(cont)
            } else {
                rej('ERRO')
            }
        }, 2000)
    })
    return p
}

async function contarPTA(n) {
    const retorno = await contarPT(n)
    console.log(retorno)
}



console.log(contar(10000))

contarPTA(10)
contarPA(10)

// console.log(contarT(10))


// contarP(10)
//     .then(sucesso => console.log(`Sucesso = ${sucesso}`))
//     .catch(ERRO => console.log(`ERRO ${ERRO}`))


// contarPT(10)
//     .then(sucesso => console.log(`Sucessooooo = ${sucesso}`))
//     .catch(ERRO => console.log(`ERRO ${ERRO}`))