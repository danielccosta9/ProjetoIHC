function entrar(){
    var nick = window.prompt('Nickname: ')
    
    let data = new Date()
    let hora = data.getHours()
    let minu = data.getMinutes()
    let dia  = data.getDate()

    window.alert(`Login feito às: ${hora} : ${minu} do dia: ${dia}`)
    window.alert(`Bem-vindo: ${nick}!`)
}