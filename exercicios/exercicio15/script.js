function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0  || fano.value>ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')

       img.setAttribute('id','foto')

       if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menino.jpg')
            }else if( idade < 21) {
                img.setAttribute('src', 'homemJovem.jpg')
            }else if(idade < 60) {
                img.setAttribute('src', 'homemAdulto.jpg')
            }else{
                img.setAttribute('src', 'homemVelho.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menina.jpg')
            }else if( idade < 21) {
                img.setAttribute('src', 'mulherjovem.jpg')
            }else if(idade < 60) {
                img.setAttribute('src', 'mulheradulta.jpg')
            }else{
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} ${idade} anos.<br>`
        res.appendChild(img)
    }
}