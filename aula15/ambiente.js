let num = [5, 9, 8, 0, 7]    
console.log(`Nosso vetor é: ${num}`)

num [3]=6
console.log(`No índice 3 coloca o 6: ${num}`)

num.push(7)
console.log(`No final coloca o 7 com .push: ${num}`)

console.log(`O tamanho do vetor é com length:  ${num.length} `)

console.log(`Vetor ordenado com sort: ${num.sort()} `)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}, segundo o indexOf`)

