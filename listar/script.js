document.addEventListener("DOMContentLoaded", function() {
    if (!document.cookie.includes("sessionCache")) {
        document.cookie = `sessionCache=${new Date().getTime()}; path=/`;
        window.location.reload();
    }
});


// URL da API de pedidos
const apiUrl = 'https://acropoluz-2-2e754a37c36d.herokuapp.com/pedido/';



// Função para buscar os pedidos da API e preencher a tabela
async function carregarPedidos() {
    try {
        // Obter o token do localStorage
        const token = localStorage.getItem('authToken');

        // Obter o tipo e nome do usuário do localStorage (ou de outra fonte)
        const tipo = localStorage.getItem('tipoDeAutorizacao');
        const nome = localStorage.getItem('vendedorSelecionado');

        // Fazer a requisição POST para a API com o token
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tipo, nome })
        });

        if (!response.ok) {
            if (response.status === 401 || response.status === 404) {
                alert('Erro de autenticação ou recurso não encontrado. Redirecionando para a página de login.');
                window.location.href = 'index.html'; // Redirecionar para a página de login
                return; // Interromper a execução da função
            }
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Resposta da API:', data); // Log para verificar a estrutura da resposta

        // Selecionar o corpo da tabela
        const tabelaBody = document.getElementById('tabelaPedidosBody');
        tabelaBody.innerHTML = ''; // Limpa qualquer dado existente

        // Verificar se 'data' contém a chave 'pedidos' e se é um array
        if (data.success && Array.isArray(data.pedidos)) {
            const pedidos = data.pedidos.reverse(); // Inverter a ordem dos pedidos

            // Iterar sobre os pedidos e exibi-los na tabela
            pedidos.forEach(pedido => {
                const cliente = pedido.cliente || {};
                const informacoesOrcamento = pedido.informacoesOrcamento || {};

                const valorProposta = `R$ ${pedido.produtos.reduce((acc, produto) => acc + (produto.valorUnitario * produto.quantidade), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                const nomeCliente = cliente.nome || 'Não informado';
                const cpfCnpj = cliente.cpfCnpj || 'Não informado';
                const numeroPedido = informacoesOrcamento.vendedor || 'Não informado';

                const dataCriacao = new Date(pedido.createdAt).toLocaleDateString('pt-BR');
                const dataEntrega = informacoesOrcamento.dataEntrega ? new Date(informacoesOrcamento.dataEntrega).toLocaleDateString('pt-BR') : 'N/A';
                const status = pedido.status || 'Aberto';

                // Criar uma nova linha
                const linha = document.createElement('tr');

                // Preencher a linha com os dados do pedido
                linha.innerHTML = `
                    <td>${nomeCliente}</td>
                    <td>${cpfCnpj}</td>
                    <td>${numeroPedido}</td>
                    <td>${valorProposta}</td>
                    <td>${dataCriacao}</td>
                    <td>${dataEntrega}</td>
                    <td><span class="badge ${getBadgeClass(status)}">${status}</span></td>
                    <td>
                        <button class="btn btn-info btn-sm" onclick="editarPedido('${pedido._id}')"><i class="fas fa-edit"></i> Editar</button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirPedido('${pedido._id}')"><i class="fas fa-trash"></i> Excluir</button>
                    </td>
                `;

                // Adicionar a nova linha à tabela
                tabelaBody.appendChild(linha);
            });
        } else {
            throw new TypeError('Resposta da API não é uma lista de pedidos.');
        }
    } catch (error) {
        console.error('Erro ao carregar os pedidos:', error);
    }
}





// Função para definir a classe CSS com base no status do pedido
function getBadgeClass(status) {
    switch (status) {
        case 'Aberto':
            return 'bg-warning';
        case 'Perdido':
            return 'bg-danger';
        case 'Efetivado':
            return 'bg-primary';  // Status "Efetivado" agora em azul
        default:
            return 'bg-secondary';
    }
}

// Função para excluir um pedido
async function excluirPedido(id) {
    if (!confirm('Tem certeza que deseja excluir este pedido?')) {
        return;
    }

    try {
        // Obter o token do localStorage
        const token = localStorage.getItem('authToken');

        const response = await fetch(`${apiUrl}${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Pedido excluído com sucesso!');
            carregarPedidos(); // Atualiza a lista de pedidos
        } else {
            const error = await response.json();
            console.error('Erro ao excluir o pedido:', error);
            alert(`Erro ao excluir o pedido: ${error.message}`);
        }
    } catch (error) {
        console.error('Erro ao excluir o pedido:', error);
    }
}

// Função para redirecionar para a página de edição do pedido
function editarPedido(id) {
    window.location.href = `../editar/editarOrcamentos.html?id=${id}`;
}

// Função de pesquisa na tabela
// Função de pesquisa na tabela
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();

    // Verificar se foram digitadas pelo menos 3 letras
    if (filter.length < 3) {
        // Mostrar todas as linhas se houver menos de 3 letras digitadas
        document.querySelectorAll("#tabelaPedidosBody tr").forEach(row => {
            row.style.display = "";
        });
        return;
    }

    const rows = document.querySelectorAll("#tabelaPedidosBody tr");

    rows.forEach(row => {
        const cells = row.getElementsByTagName("td");
        let match = false;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent.toLowerCase().indexOf(filter) > -1) {
                match = true;
                break;
            }
        }
        row.style.display = match ? "" : "none";
    });
}


// Função de filtro por status
function filterByTag() {
    const filter = document.getElementById("filterStatus").value;
    const rows = document.querySelectorAll("#tabelaPedidosBody tr");

    rows.forEach(row => {
        const status = row.getElementsByTagName("td")[6].textContent.trim(); // Ajustado para a nova posição da coluna Status
        row.style.display = (filter === "" || status === filter) ? "" : "none";
    });
}

// Carregar os pedidos ao carregar a página
document.addEventListener("DOMContentLoaded", carregarPedidos);

// Atualizar os pedidos ao voltar para a página usando o botão de "voltar"
window.addEventListener('pageshow', function(event) {
    if (event.persisted || window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        carregarPedidos(); // Recarregar os pedidos da API
    }
});

function atualizarCards() {
    let totalValorAberto = 0;
    let totalValorEfetivado = 0;
    let totalPedidos = 0;
    let pedidosEfetivados = 0;

    // Iterar sobre todas as linhas da tabela
    document.querySelectorAll('#tabelaPedidosBody tr').forEach(row => {
        const valorPropostaCell = row.querySelector('td:nth-child(4)');
        const statusCell = row.querySelector('td:nth-child(7)');

        if (valorPropostaCell && statusCell) {
            // Obter o valor da proposta e remover símbolos para converter em número
            const valorProposta = parseFloat(valorPropostaCell.textContent.replace(/[R$ ,.]/g, '').replace(',', '.'));

            if (!isNaN(valorProposta)) {
                totalPedidos++;

                // Verificar o status do pedido
                if (statusCell.textContent.trim() === 'Aberto') {
                    totalValorAberto += valorProposta;
                } else if (statusCell.textContent.trim() === 'Efetivado') {
                    totalValorEfetivado += valorProposta;
                    pedidosEfetivados++;
                }
            }
        }
    });

    // Atualizar o card de Valor em Aberto
    document.querySelector('.card-value-aberto').textContent = `R$ ${totalValorAberto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    // Calcular a porcentagem de fechamentos e atualizar o card de Valor Efetivado
    const porcentagemEfetivada = totalPedidos > 0 ? (pedidosEfetivados / totalPedidos) * 100 : 0;
    document.querySelector('.card-value-efetivado').textContent = `R$ ${totalValorEfetivado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (${porcentagemEfetivada.toFixed(2)}%)`;
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCards);

