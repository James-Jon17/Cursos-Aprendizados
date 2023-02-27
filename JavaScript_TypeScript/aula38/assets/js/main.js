const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundImage
console.log(backgroundColorBody)

for(let p of ps) {
    p.style.backgroundImage = backgroundColorBody
    p.style.color = '#fff'
    p.style.borderRadius = '10px'
}