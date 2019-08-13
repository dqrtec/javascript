function dataValidation(user, pass){
    if(user === '') {
        alert('Digite o nome de usuario')
        return false
    }
    if(pass === '') {
        alert('Digite sua senha')
        return false
    }
    if(user === 'Teste' && pass == '123'){
        return true
    }
}