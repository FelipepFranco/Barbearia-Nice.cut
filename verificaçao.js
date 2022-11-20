
function cadastrarUsuario(){
    event.preventDefault()
    // url = "https://127.0.0.1/users"

    let user = document.getElementById("user").value
    let password = document.getElementById("password").value


    if( user == "user" && password == "123"){
        window.location="painel-user"
    } else if( user == "admin" && password == "123"){
        window.location="painel-admin"
    } else{
        window.alert('Login inválido!');
    }

    console.log(user)
    console.log(password)
}