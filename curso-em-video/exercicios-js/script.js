// Curso de JS - Curso em Video
/*
Primeiros comandos
*/ 

function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('picture')
    var greeting = window.document.getElementById('greeting')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora <12) {
        // Bom dia
        greeting.innerHTML = "Bom dia!" 
        img.src = "image/morning.jpg"
        document.body.style.background = "#f5e964"

    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        greeting.innerHTML = "Boa tarde!"
        img.src = "image/afternoon.jpg"
        document.body.style.background = "#e8ad5a"
        
    } else {
        // Boa noite
        greeting.innerHTML = "Boa noite!"
        img.src = "image/night.jpg"
        document.body.style.background = "#062775"
        
    }
}
