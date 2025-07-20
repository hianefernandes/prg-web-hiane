// Função para trocar o ícone de favoritar
function favoritar(button) {
    if (button.innerText.includes('🤍')) {
        button.innerText = 'Favoritado ❤️';
    } else {
        button.innerText = 'Favoritar 🤍';
    }
}