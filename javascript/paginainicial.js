function irParaPedido() {
    const quantidadeInput = document.getElementById('quantidadeFrangos').value;
    if (quantidadeInput && !isNaN(quantidadeInput) && quantidadeInput > 0) {
        localStorage.setItem('quantidadeFrangos', quantidadeInput);
        window.location.href = 'order.html';
    } else {
        alert('Por favor, insira uma quantidade de frangos válida.');
    }
}