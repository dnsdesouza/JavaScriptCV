
var hora =  new Date().getHours()  
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 4){
    console.log('Boa madrugada!')
}else if (hora < 12){
    console.log('Boa dia!')
}else if(hora < 18 ){
    console.log(`Boa tarde`) 
}else{ 
    console.log(`Boa noite`)
}
