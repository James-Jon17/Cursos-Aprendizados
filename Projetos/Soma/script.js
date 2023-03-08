function soma(num1, num2, ...valores) {
    res = num1 + num2 
    for (i = 0; i < valores.length; i++) {
        res += valores[i]
    }
    return `${res} ${parImpar()}`
  }
  
  
  function parImpar(num) {
    if (num % 2 === 0) {
      return 'Par'
    }
      return 'impar'
  }
  
console.log(soma(2, 4, 7, 4))

document.addEventListener('click', (e) => {
    let ponto = document.createElement('div')

    ponto.style.position = 'absolute';
    ponto.style.width = '10px';
    ponto.style.height = '10px';
    ponto.style.backgroundColor = 'red';
    ponto.style.borderRadius = '50%';
    ponto.style.left = (e.clientX - 5) + 'px';
    ponto.style.top = (e.clientY - 5) + 'px';

    document.body.appendChild(ponto);

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.code === 'keyX') {
            document.body.removeChild(ponto)
        }
    })
})