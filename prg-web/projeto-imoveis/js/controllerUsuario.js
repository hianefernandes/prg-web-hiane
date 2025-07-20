// controllerUsuario.js
// Controla Cadastro e Login de forma organizada (simulado, sem banco de dados).

// Armazenamento fictício em memória
const usuarios = [];

// Função para cadastrar usuário
export function cadastrar(nome, email, senha) {
    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    usuarios.push({ nome, email, senha });
    console.log("Usuários cadastrados:", usuarios);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
}

// Função para login
export function login(usuario, senha) {
    const encontrado = usuarios.find(u =>
        (u.nome === usuario || u.email === usuario) && u.senha === senha
    );

    if (encontrado) {
        alert(Bem-vindo, ${encontrado.nome}!);
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}