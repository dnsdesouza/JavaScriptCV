let valores = [8,1, 7, 4, 2, 9]

 console.log(valores)

// for (let pos=0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} do vetor tem o valor ${valores[pos]} `)
// }
// console.log(`Ordenado: `)
// for (let pos=0; pos < valores.sort().length; pos++){
//     console.log(`A posição ${pos} do vetor tem o valor ${valores[pos]} `)
// }        

for(let pos in valores.sort()){
    console.log(`A posição ${pos} do vetor tem o valor ${valores[pos]} `)
}