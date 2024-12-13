document.addEventListener('DOMContentLoaded', () => {
    const quantidadeFrangos = localStorage.getItem('quantidadeFrangos');
    if (quantidadeFrangos) {
        quantidadeFrangosDisponiveis = quantidadeFrangos;
    }
    document.getElementById('quantidadeInput').innerText = quantidadeFrangosDisponiveis;
    localStorage.setItem('quantidadeFrangos', quantidadeFrangosDisponiveis);
});

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

document.addEventListener("DOMContentLoaded", () => {
    exibirPedidos();
});

document.addEventListener('DOMContentLoaded', () => {
    const quantidadeFrangos = localStorage.getItem('quantidadeFrangos');
    document.getElementById('quantidadeInput').innerText = quantidadeFrangos;
});


function finalizarPedido() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const horario = document.getElementById("horario").value;
    const pagamento = document.getElementById("pagamento").checked;
    const retirada = document.querySelector('input[name="retirada"]:checked')?.value;
    const quantidadeFrango = parseInt(document.getElementById('quantidadeFrango').value) || 0;
    const quantidadeMaionese = parseInt(document.getElementById('quantidadeMaionese').value) || 0;
    const quantidadePolenta = parseInt(document.getElementById('quantidadePolenta').value) || 0;
    const precoFrango = 55;
    const precoMaionese = 15;
    const precoPolenta = 20;
    const total = (quantidadeFrango * precoFrango) +
                (quantidadeMaionese * precoMaionese) +
                (quantidadePolenta * precoPolenta);

    if (!nome || !retirada) {
        alert("Por favor, preencha o nome e selecione a forma de retirada.");
        return;
    }

    const pedido = {
        nome,
        endereco,
        horario,
        pagamento,
        retirada,
        quantidadeFrango,
        quantidadeMaionese,
        quantidadePolenta,
        total,
        confirmado: false // Inicialmente, o pedido não está confirmado
    };

      // Adiciona o pedido e salva no localStorage
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

      // Atualiza quantidade vendida
    let quantidadeVendida = parseInt(localStorage.getItem("quantidadeVendida")) || 0;
    quantidadeVendida += quantidadeFrango;
    localStorage.setItem("quantidadeVendida", quantidadeVendida);

    atualizarHeader();
    exibirPedidos();

      // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("horario").value = "";
    document.getElementById("pagamento").checked = false;
    if (document.querySelector('input[name="retirada"]:checked')) {
        document.querySelector('input[name="retirada"]:checked').checked = false;
    }
    document.getElementById("quantidadeFrango").value = "0";
    document.getElementById("quantidadeMaionese").value = "0";
    document.getElementById("quantidadePolenta").value = "0";
    document.getElementById("valorTotal").innerText = "Valor Total: R$ 0";

    exibirPedidos();
}

function atualizarValorTotal() {
    const precoFrango = 55;
    const precoMaionese = 15;
    const precoPolenta = 20;
    const quantidadeFrango = parseInt(document.getElementById('quantidadeFrango').value) || 0;
    const quantidadeMaionese = parseInt(document.getElementById('quantidadeMaionese').value) || 0;
    const quantidadePolenta = parseInt(document.getElementById('quantidadePolenta').value) || 0;
    const total = (quantidadeFrango * precoFrango) +
        (quantidadeMaionese * precoMaionese) +
        (quantidadePolenta * precoPolenta);

    document.getElementById('valorTotal').innerText = `Valor Total: R$ ${total}`;
}

function finalizarPedido() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const horario = document.getElementById("horario").value;
    const pagamento = document.getElementById("pagamento").checked;
    const retirada = document.querySelector('input[name="retirada"]:checked')?.value;
    const quantidadeFrango = parseInt(document.getElementById('quantidadeFrango').value) || 0;
    const quantidadeMaionese = parseInt(document.getElementById('quantidadeMaionese').value) || 0;
    const quantidadePolenta = parseInt(document.getElementById('quantidadePolenta').value) || 0;
    const precoFrango = 55;
    const precoMaionese = 15;
    const precoPolenta = 20;
    const total = (quantidadeFrango * precoFrango) +
        (quantidadeMaionese * precoMaionese) +
        (quantidadePolenta * precoPolenta);

    if (!nome || !retirada) {
        alert("Por favor, preencha o nome e selecione a forma de retirada.");
        return;
    }

    const pedido = {
    nome,
    endereco,
    horario,
    pagamento,
    retirada,
    quantidadeFrango,
    quantidadeMaionese,
    quantidadePolenta,
    total,
    confirmado: false // Inicialmente, o pedido não está confirmado
    };

      // Adiciona o pedido e salva no localStorage
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

      // Atualiza quantidade vendida
    let quantidadeVendida = parseInt(localStorage.getItem("quantidadeVendida")) || 0;
        quantidadeVendida += quantidadeFrango;
        localStorage.setItem("quantidadeVendida", quantidadeVendida);

    atualizarHeader();
    exibirPedidos();

      // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("horario").value = "";
    document.getElementById("pagamento").checked = false;

    if (document.querySelector('input[name="retirada"]:checked')) {
        document.querySelector('input[name="retirada"]:checked').checked = false;
    }

    document.getElementById("quantidadeFrango").value = "0";
    document.getElementById("quantidadeMaionese").value = "0";
    document.getElementById("quantidadePolenta").value = "0";
    document.getElementById("valorTotal").innerText = "Valor Total: R$ 0";

    exibirPedidos();
}

function exibirPedidos() {
    const listaPedidos = document.getElementById("listaPedidos");
    listaPedidos.innerHTML = ""; // Limpa a lista antes de exibir os pedidos

    pedidos.forEach((pedido, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="separar"> 
            <p>Nome: ${pedido.nome}</p>
            <p>Endereço: ${pedido.endereco}</p>
            <p>Pagamento: ${pedido.pagamento ? "Sim" : "Não"}</p> 
            <p>Retirada: ${pedido.retirada}</p> 
            <p>Horário: ${pedido.horario}</p>  
            <p>Frango: ${pedido.quantidadeFrango} unidade(s)</p> 
            <p>Maionese: ${pedido.quantidadeMaionese} unidade(s)</p> 
            <p>Polenta: ${pedido.quantidadePolenta} unidade(s)</p> 
            <p><strong>Total: R$ ${pedido.total}</strong></p>
        </div>`;

          // Verifica se o pedido foi confirmado
    if (pedido.confirmado) {
        li.style.backgroundColor = "#d4edda"; // Muda a cor de fundo do li para verde claro
        li.style.color = "#000"; // Muda a cor do texto para preto, se necessário
    }
          // Criação do botão "Confirma"
    const confirmarBtn = document.createElement("button");
    confirmarBtn.textContent = "Confirma";
    confirmarBtn.className = "confirmar";
    confirmarBtn.onclick = () => confirmarPedido(index); // Chama a função de confirmação
      // Adiciona o botão ao item da lista
    li.appendChild(confirmarBtn);
    listaPedidos.appendChild(li)

    const imprimirBtn = document.createElement("span");
    imprimirBtn.textContent = "imprimir";
    imprimirBtn.className = "imprimir";
    imprimirBtn.onclick = () =>imprimirPedido(index);
    
    li.appendChild(imprimirBtn);
    listaPedidos.appendChild(li);

    const cancelarBtn = document.createElement("span");
    cancelarBtn.textContent = "Cancelar";
    cancelarBtn.className = "cancelar";
    cancelarBtn.onclick = () => cancelarPedido(index);

    li.appendChild(cancelarBtn);
    listaPedidos.appendChild(li);
    });
}

function filtrarPedidosPorNome() {
    const pesquisaInput = document.getElementById("pesquisaNome").value.toLowerCase();
    const listaPedidos = document.getElementById("listaPedidos");
    listaPedidos.innerHTML = "";

    const pedidosFiltrados = pedidos.filter(pedido => {
        return pedido.nome.toLowerCase().includes(pesquisaInput);
    });

    pedidosFiltrados.forEach((pedido, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="separar"> 
                <p>Nome: ${pedido.nome}</p>
                <p>Endereço: ${pedido.endereco}</p>
                <p>Pagamento: ${pedido.pagamento ? "Sim" : "Não"}</p> 
                <p>Retirada: ${pedido.retirada}</p> 
                <p>Horário: ${pedido.horario}</p>  
                <p>Frango: ${pedido.quantidadeFrango} unidade(s)</p> 
                <p>Maionese: ${pedido.quantidadeMaionese} unidade(s)</p> 
                <p>Polenta: ${pedido.quantidadePolenta} unidade(s)</p> 
                <p><strong>Total: R$ ${pedido.total}</strong></p>
            </div>`;

        const confirmarBtn = document.createElement("span");
        confirmarBtn.textContent = "Confirma";
        confirmarBtn.className = "confirmar";
        confirmarBtn.onclick = () => confirmarPedido(index);
        li.appendChild(confirmarBtn);

        const imprimirBtn = document.createElement("span");
        imprimirBtn.textContent = "imprimir";
        imprimirBtn.className = "imprimir";
        imprimirBtn.onclick = () => imprimirPedido(index);
        li.appendChild(imprimirBtn);

        const cancelarBtn = document.createElement("span");
        cancelarBtn.textContent = "Cancelar";
        cancelarBtn.className = "cancelar";
        cancelarBtn.onclick = () => cancelarPedido(index);
        li.appendChild(cancelarBtn);
        listaPedidos.appendChild(li);
    });
}

function atualizarHeader() {
    const quantidadeVendida = parseInt(localStorage.getItem("quantidadeVendida")) || 0;
    document.getElementById("quantidadeVendida").innerText = quantidadeVendida;
    document.addEventListener('DOMContentLoaded', () => {
    const quantidadeFrangos = localStorage.getItem('quantidadeFrangos');
    if (quantidadeFrangos) {
        quantidadeFrangosDisponiveis = quantidadeFrangos;
    }
    document.getElementById('quantidadeInput').innerText = quantidadeFrangosDisponiveis;
});
}

function confirmarPedido(index) {
      // Atualiza a propriedade 'confirmado' do pedido
    pedidos[index].confirmado = true;
    localStorage.setItem("pedidos", JSON.stringify(pedidos)); // Salva a alteração no localStorage

    exibirPedidos(); // Atualiza a exibição dos pedidos
}

function cancelarPedido(index) {
    if (confirm("Tem certeza que deseja cancelar este pedido?")) {
        const pedido = pedidos[index];
          // Atualiza quantidade vendida
        let quantidadeVendida = parseInt(localStorage.getItem("quantidadeVendida")) || 0;
        quantidadeVendida -= pedido.quantidadeFrango;
        localStorage.setItem("quantidadeVendida", quantidadeVendida);
        // Remove o pedido da lista
        pedidos.splice(index, 1);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));

        atualizarHeader();
        exibirPedidos();
    }
}

function finalizarDia() {
    if (confirm("Tem certeza que deseja finalizar o dia? Isso apagará todos os pedidos.")) {
        pedidos = [];
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
        exibirPedidos();
        alert("Dia finalizado e pedidos apagados.");
    }
    if (confirm("Tem certeza que deseja finalizar o dia? Isso apagará todos os pedidos e resetará a contagem.")) {
        // Resetar a lista de pedidos
        pedidos = [];
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
          // Resetar a contagem de frangos vendidos
        localStorage.setItem("quantidadeVendida", 0);
        document.getElementById("quantidadeVendida").innerText = 0;
          // Atualizar a exibição dos pedidos
        exibirPedidos();
        alert("Dia finalizado, pedidos apagados e contagem de vendas resetada.");
    }
}
// Função de filtro para os pedidos
function filtrarPedidos(filtro) {
    const listaPedidos = document.getElementById("listaPedidos");
    listaPedidos.innerHTML = "";
    const pedidosFiltrados = pedidos.filter((pedido) => {
        if (filtro === "todos") return true;
        if (filtro === "pagos") return pedido.pagamento;
        if (filtro === "loja") return pedido.retirada === "loja"; // Aqui está a verificação para "loja"
        if (filtro === "entrega") return pedido.retirada === "entrega";
        return false;
    });

    pedidosFiltrados.forEach((pedido, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="separar"> 
                <p>Nome: ${pedido.nome}</p>
                <p>Endereço: ${pedido.endereco}</p>
                <p>Pagamento: ${pedido.pagamento ? "Sim" : "Não"}</p> 
                <p>Retirada: ${pedido.retirada}</p> 
                <p>Horário: ${pedido.horario}</p>  
                <p>Frango: ${pedido.quantidadeFrango} unidade(s)</p> 
                <p>Maionese: ${pedido.quantidadeMaionese} unidade(s)</p> 
                <p>Polenta: ${pedido.quantidadePolenta} unidade(s)</p> 
                <p><strong>Total: R$ ${pedido.total}</strong></p>
            </div>`;
          // Verifica se o pedido foi confirmado
        if (pedido.confirmado) {
        li.style.backgroundColor = "#d4edda"; // Muda a cor de fundo do li para verde claro
        li.style.color = "#000"; // Muda a cor do texto para preto, se necessário
        }
          // Criação do botão "Confirma"
        const confirmarBtn = document.createElement("button");
        confirmarBtn.textContent = "Confirma";
        confirmarBtn.className = "confirmar";
        confirmarBtn.onclick = () => confirmarPedido(index); // Chama a função de confirmação
          // Adiciona o botão ao item da lista
        li.appendChild(confirmarBtn);
        listaPedidos.appendChild(li); 

        const imprimirBtn = document.createElement("span");
        imprimirBtn.textContent = "imprimir";
        imprimirBtn.className = "imprimir";
        imprimirBtn.onclick = () => imprimirPedido(index)
        li.appendChild(imprimirBtn);
        listaPedidos.appendChild(li);

        const cancelarBtn = document.createElement("span");
        cancelarBtn.textContent = "Cancelar";
        cancelarBtn.className = "cancelar";
        cancelarBtn.onclick = () => cancelarPedido(index);
        li.appendChild(cancelarBtn);
        listaPedidos.appendChild(li);
    });
}

function imprimirPedido(index) {
    const pedido = pedidos[index];
    // Cria um contêiner invisível para impressão
    const divImpressao = document.createElement("div");
    divImpressao.style.display = "none"; // Mantém invisível na tela
    divImpressao.innerHTML = `
        <div style="width: 58mm; font-family: Arial, sans-serif; font-size: 12px; line-height: 1.2;">
            <h1 style="text-align: center;">Detalhes do Pedido</h1>
            <div style="border: 1px solid #000; padding: 10px; margin-top: 20px;">
                <p><strong>Nome:</strong> ${pedido.nome}</p>
                <p><strong>Endereço:</strong> ${pedido.endereco}</p>
                <p><strong>Pagamento:</strong> ${pedido.pagamento ? "Sim" : "Não"}</p>
                <p><strong>Retirada:</strong> ${pedido.retirada}</p>
                <p><strong>Horário:</strong> ${pedido.horario}</p>
                <p><strong>Frango:</strong> ${pedido.quantidadeFrango} unidade(s)</p>
                <p><strong>Maionese:</strong> ${pedido.quantidadeMaionese} unidade(s)</p>
                <p><strong>Polenta:</strong> ${pedido.quantidadePolenta} unidade(s)</p>
                <p><strong>Total:</strong> R$ ${pedido.total}</p>
            </div>
        </div>`;
    // Adiciona o contêiner ao body
    document.body.appendChild(divImpressao);
    // Realiza a impressão
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = divImpressao.innerHTML;
    window.print();
    // Restaura o conteúdo original
    document.body.innerHTML = originalContent;
    // Recarrega os eventos e a lista de pedidos
    exibirPedidos();
}