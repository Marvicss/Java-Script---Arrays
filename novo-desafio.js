
const usuarios = ["marconi", "marvic", "teste", "admin"];
const senhas = ["123", "456" , "789", "147"];

const login = [usuarios,senhas];

function verificarLogin (usuario, senha){

    const indice = usuarios.indexOf(usuario);

    if(login[0][indice] === usuario && login[1][indice] === senha){
        console.log("Login Autorizado");
    }else{
        console.log("Login não autorizado");
    }

}


function cadastrarUsuario(usuario,senha){

    if(usuario != null || usuario != undefined && senha != null || senha != undefined){

        usuarios.push(usuario);
        senhas.push(senha);
    }else{
        console.error("Dados invalidos");
    }


    
}

cadastrarUsuario("novoteste", "novasenha")
verificarLogin("nome","Senha")
console.log(usuarios)
console.log(senhas)



