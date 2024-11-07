// URL da API de pedidos
const apiUrl = 'https://acropoluz-a7ff621dca79.herokuapp.com/pedido/';



// Função para buscar os pedidos da API e preencher a tabela
async function carregarPedidos() {
    try {
        // Fazer a requisição GET para a API
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Resposta da API:', data); // Log para verificar a estrutura da resposta

        let pedidos = [];

        // Verificar se 'data' contém a chave 'pedidos' e se é um array
        if (data.success && Array.isArray(data.pedidos)) {
            pedidos = data.pedidos;
        } else {
            throw new TypeError('Resposta da API não é uma lista de pedidos.');
        }

        // Ordenar os pedidos pela data de criação (createdAt) mais recente primeiro
        pedidos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Obter o vendedor selecionado do localStorage e normalizá-lo
        const vendedorSelecionado = localStorage.getItem("vendedorSelecionado")?.trim().toLowerCase();
        console.log('Vendedor Selecionado:', vendedorSelecionado);

        // Selecionar o corpo da tabela
        const tabelaBody = document.getElementById('tabelaPedidosBody');
        tabelaBody.innerHTML = ''; // Limpa qualquer dado existente

        // Filtrar e iterar sobre os pedidos que pertencem ao vendedor selecionado
        pedidos
            .filter(pedido => {
                // Verificar se o campo informacoesOrcamento e vendedor existem
                if (pedido.informacoesOrcamento && pedido.informacoesOrcamento.vendedor) {
                    const vendedorPedido = pedido.informacoesOrcamento.vendedor.trim().toLowerCase();
                    console.log('Vendedor do Pedido:', vendedorPedido);
                    return vendedorPedido === vendedorSelecionado;
                }
                return false;
            })
            .forEach(pedido => {
                // Verificar se as propriedades necessárias existem antes de tentar acessá-las
                const cliente = pedido.cliente || {};
                const informacoesOrcamento = pedido.informacoesOrcamento || {};

                // Calcular o valor total das propostas
                let valorTotalProposta = pedido.produtos.reduce((acc, produto) => acc + (produto.valorUnitario * produto.quantidade), 0);

                // Aplicar o desconto, se existir
                const desconto = informacoesOrcamento.desconto || 0;
                valorTotalProposta -= desconto;
                const valorProposta = `R$ ${valorTotalProposta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

                const nomeCliente = cliente.nome || 'Não informado';
                const cpfCnpj = cliente.cpfCnpj || 'Não informado';
                const numeroPedido = informacoesOrcamento.vendedor || 'Não informado';

                // Data de criação (createdAt) e data de entrega (dataEntrega)
                const dataCriacao = new Date(pedido.createdAt).toLocaleDateString('pt-BR'); // Convertendo a data de criação
                const dataEntrega = informacoesOrcamento.dataEntrega
                    ? new Date(informacoesOrcamento.dataEntrega).toLocaleDateString('pt-BR') // Convertendo a data de entrega
                    : 'N/A'; // Se não houver data de entrega, mostrar 'N/A'

                const status = pedido.status || 'Aberto';

                // Criar uma nova linha
                const linha = document.createElement('tr');

                // Preencher a linha com os dados do pedido e adicionar as ações duplicar e excluir
                linha.innerHTML = `
                    <td>${nomeCliente}</td>
                    <td>${cpfCnpj}</td>
                    <td>${numeroPedido}</td>
                    <td>${valorProposta}</td>
                    <td>${dataCriacao}</td> <!-- Data de criação do pedido -->
                    <td>${dataEntrega}</td> <!-- Data de entrega do pedido -->
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
        const response = await fetch(`${apiUrl}${id}`, {
            method: 'DELETE'
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
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
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
