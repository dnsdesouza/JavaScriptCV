function contar(){

    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    //    alert('Algum dado não foi informado')
       res.innerHTML = 'IMPOSSÍVEL CONTAR:'
    }else{   
        res.innerHTML = 'Contando:<br>'     
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p==0){
            res.innerHTML = 'IMPOSSÍVEL CONTAR: PASSO  = 0  \u{1F595}'
        }else if(i < f){
                for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F595}  `
               }
              }else{
                res.innerHTML += `O FIM TEM QUE SER MAIOR QUE O FIM PRA PODER CONTAR \u{1F595}\u{1F595}  `
              }
        }

       
    }
   
