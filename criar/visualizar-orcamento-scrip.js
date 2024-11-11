
buscarClientes()


//PopUps
function cadastrarNovoCliente() {
    // Cria o overlay do popup
    const overlay = document.createElement('div');
    overlay.classList.add('modal', 'fade');
    overlay.id = 'cadastrarClienteModal';
    overlay.setAttribute('tabindex', '-1');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-labelledby', 'cadastrarClienteModalLabel');
    overlay.setAttribute('aria-hidden', 'true');

    // Cria o modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');
    modalDialog.setAttribute('role', 'document');

    // Cria o modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Cria o modal header com as cores ajustadas
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header', 'bg-dark', 'text-white');
    
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'cadastrarClienteModalLabel';
    modalTitle.innerText = 'Cadastrar Novo Cliente';
    
    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.type = 'button';
    modalCloseBtn.classList.add('close', 'text-white');
    modalCloseBtn.setAttribute('data-dismiss', 'modal');
    modalCloseBtn.setAttribute('aria-label', 'Close');
    modalCloseBtn.innerHTML = '<span aria-hidden="true">&times;</span>';

    // Modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Cria os campos do formulário com Bootstrap e cores ajustadas
    const form = document.createElement('form');

    // Campo Nome Fantasia
    const nomeFantasiaGroup = document.createElement('div');
    nomeFantasiaGroup.classList.add('form-group');
    const nomeFantasiaLabel = document.createElement('label');
    nomeFantasiaLabel.innerText = 'Nome Fantasia';
    nomeFantasiaLabel.style.color = '#fff'; // cor branca para o texto
    const inputNomeFantasia = document.createElement('input');
    inputNomeFantasia.type = 'text';
    inputNomeFantasia.classList.add('form-control');
    inputNomeFantasia.id = 'clienteNomeFantasia'; // ID único
    inputNomeFantasia.placeholder = 'Digite o nome fantasia';

    nomeFantasiaGroup.appendChild(nomeFantasiaLabel);
    nomeFantasiaGroup.appendChild(inputNomeFantasia);

    // Campo Razão Social
    const razaoSocialGroup = document.createElement('div');
    razaoSocialGroup.classList.add('form-group');
    const razaoSocialLabel = document.createElement('label');
    razaoSocialLabel.innerText = 'Razão Social';
    razaoSocialLabel.style.color = '#fff'; // cor branca para o texto
    const inputRazaoSocial = document.createElement('input');
    inputRazaoSocial.type = 'text';
    inputRazaoSocial.classList.add('form-control');
    inputRazaoSocial.id = 'clienteRazaoSocial'; // ID único
    inputRazaoSocial.placeholder = 'Digite a razão social';

    razaoSocialGroup.appendChild(razaoSocialLabel);
    razaoSocialGroup.appendChild(inputRazaoSocial);

    // Campo Email
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email';
    emailLabel.style.color = '#fff'; // cor branca para o texto
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.classList.add('form-control');
    inputEmail.id = 'clienteEmail'; // ID único
    inputEmail.placeholder = 'Digite o email';

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(inputEmail);

    // Campo Código de Integração
    const codigoIntegracaoGroup = document.createElement('div');
    codigoIntegracaoGroup.classList.add('form-group');
    const codigoIntegracaoLabel = document.createElement('label');
    codigoIntegracaoLabel.innerText = 'Código de Integração';
    codigoIntegracaoLabel.style.color = '#fff'; // cor branca para o texto
    const inputCodigoIntegracao = document.createElement('input');
    inputCodigoIntegracao.type = 'text';
    inputCodigoIntegracao.classList.add('form-control');
    inputCodigoIntegracao.id = 'clienteCodigoIntegracao'; // ID único
    inputCodigoIntegracao.placeholder = 'Digite o código de integração';

    codigoIntegracaoGroup.appendChild(codigoIntegracaoLabel);
    codigoIntegracaoGroup.appendChild(inputCodigoIntegracao);

    // Adiciona todos os campos ao formulário
    form.appendChild(nomeFantasiaGroup);
    form.appendChild(razaoSocialGroup);
    form.appendChild(emailGroup);
    form.appendChild(codigoIntegracaoGroup);

    // Adiciona o formulário ao modal body
    modalBody.appendChild(form);

    // Modal footer com cores ajustadas
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer', 'bg-secondary', 'text-white');
    
    const btnSalvar = document.createElement('button');
    btnSalvar.type = 'button';
    btnSalvar.classList.add('btn', 'btn-primary');
    btnSalvar.innerText = 'Salvar';
    
    const btnFechar = document.createElement('button');
    btnFechar.type = 'button';
    btnFechar.classList.add('btn', 'btn-secondary');
    btnFechar.setAttribute('data-dismiss', 'modal');
    btnFechar.innerText = 'Fechar';

    // Adiciona os botões ao modal footer
    modalFooter.appendChild(btnSalvar);
    modalFooter.appendChild(btnFechar);

    // Adiciona header, body e footer ao modal content
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalCloseBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Adiciona modal content ao modal dialog
    modalDialog.appendChild(modalContent);

    // Adiciona modal dialog ao overlay (modal)
    overlay.appendChild(modalDialog);

    // Adiciona o modal ao body do documento
    document.body.appendChild(overlay);

    // Ativa o modal com Bootstrap
    $('#cadastrarClienteModal').modal('show');

    // Evento de salvar cliente
    btnSalvar.onclick = function () {
        const nomeFantasia = inputNomeFantasia.value.trim();  // Garante que os espaços em branco sejam removidos
        const razaoSocial = inputRazaoSocial.value.trim();
        const email = inputEmail.value.trim();
        const codigoIntegracao = inputCodigoIntegracao.value.trim();
        
        console.log(nomeFantasia, razaoSocial, email, codigoIntegracao); // Verificação no console

        // Verifica os campos apenas dentro do modal
        if (!nomeFantasia || !razaoSocial || !email || !codigoIntegracao) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Chama a função salvarCliente com os parâmetros corretos
        salvarCliente(nomeFantasia, razaoSocial, email, codigoIntegracao);

        $('#cadastrarClienteModal').modal('hide'); // Fechar o modal após salvar
    };

    // Remove o modal da DOM após ele ser fechado
    $('#cadastrarClienteModal').on('hidden.bs.modal', function () {
        overlay.remove();
    });
}
// Função para salvar cliente
async function salvarCliente(nomeFantasia, razaoSocial, email, codigoIntegracao) {
    const clienteData = {
        codigo_cliente_integracao: codigoIntegracao,
        email: email,
        razao_social: razaoSocial,
        nome_fantasia: nomeFantasia
    };

    try {
        // Fazer a requisição POST para incluir o cliente
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/clientes/incluirCliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteData)
        });

        if (!response.ok) {
            throw new Error('Erro ao incluir o cliente');
        }

        const responseData = await response.json();

        if (responseData && responseData.codigo_cliente_omie) {
            alert(`Cliente salvo com sucesso! Código Omie: ${responseData.codigo_cliente_omie}`);
            document.getElementById('idClienteOmie').value = responseData.codigo_cliente_omie;
        } else {
            alert('Cliente salvo, mas não foi possível obter o código Omie.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Houve um problema ao salvar o cliente.');
    }
}
// Função para preencher os campos do formulário com os dados do cliente
function preencherCamposCliente(cliente) {
    document.getElementById('cpfCnpj').value = cliente.cnpj_cpf || '';
    document.getElementById('endereco').value = cliente.endereco || '';
    document.getElementById('telefone').value = cliente.telefone || '';
    document.getElementById('idClienteOmie').value = cliente.value || '';
}
//modal produtos genericos
// Função para abrir o modal
function abrirModal() {
    document.getElementById('adicionarProdutoModal').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('adicionarProdutoModal').style.display = 'none';
}

// Evento para abrir o modal ao clicar no botão "Abrir Modal"
document.getElementById('abrirModalBtn').addEventListener('click', abrirModal);

// Função que será chamada ao clicar no botão de "Adicionar Produto"
document.getElementById('incluirProdutoBtn').addEventListener('click', function () {
    // Validação básica do formulário antes de continuar
    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorUnitario = document.getElementById('valorUnitario').value;
    const quantidade = document.getElementById('quantidade').value;

    if (!nomeProduto || !valorUnitario || !quantidade) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Chamar a função adicionarOuIncluirProdutoGenerico (ajuste conforme a lógica da sua função)
    adicionarOuIncluirProdutoGenerico();

    // Fechar o modal após a inclusão
    fecharModal();
});


//Barras de pesquisa e ambientes

// Função para adicionar o produto  generico com os dados preenchidos no modal
function adicionarProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const imagemUrl = document.getElementById('imagemUrl').value;
    const ambienteSelecionado = document.getElementById('ambienteSelecionado').value;

    // Verifica se o ambiente foi selecionado
    if (!ambienteSelecionado) {
        alert('Por favor, selecione um ambiente antes de adicionar o produto.');
        return;
    }

    // Validação dos campos obrigatórios
    if (!nomeProduto || isNaN(valorUnitario) || isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    let tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    if (!tabelaAmbiente) {
        criarTabelaAmbiente(ambienteSelecionado);
        tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    }

    const valorTotal = valorUnitario * quantidade;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="checkbox" class="checkbox-selecionar-produto"></td>
        <td>${imagemUrl ? `<img src="${imagemUrl}" alt="Imagem do Produto Selecionado" style="max-width: 50px;">` : 'Sem imagem'}</td>
        <td>${nomeProduto}</td>
        <td>101020</td> <!-- Código do Produto (Substituir por valor correto, se necessário) -->
        <td>101020</td> <!-- Código Interno (Substituir por valor correto, se necessário) -->
        <td><span class="valorUnitario">${valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></td>
        <td><input type="number" class="form-control quantidadeProduto" min="1" value="${quantidade}" onchange="atualizarTodosOsCalculos('${ambienteSelecionado}')"></td>
        <td><input type="text" class="form-control valorTotal" value="${(valorUnitario * quantidade).toFixed(2).replace('.', ',')}" onchange="atualizarValorUnitario(this, '${ambienteSelecionado}')"></td>
        <td>
            <i class="fa fa-times" style="cursor: pointer; color: red;" onclick="removerProduto(this, '${ambienteSelecionado}')" title="Remover Produto"></i>
            <i class="fa fa-question-circle" style="cursor: pointer; color: blue; margin-right: 10px;" onclick="adicionarObservacao(this)" title="Adicionar Observação"></i>
        </td>
    `;

    tabelaAmbiente.querySelector('tbody').appendChild(row);

    // Atualizar todos os cálculos
    atualizarTodosOsCalculos(ambienteSelecionado);

    // Exibir alerta de confirmação
    alert('Produto adicionado com sucesso!');

    // Fechar o modal após adicionar o produto
    fecharModal();
}

// Função para filtrar e exibir os produtos na tabela de pesquisa
async function filtrarProdutos() {
    const pesquisa = document.getElementById('pesquisaProduto').value.toLowerCase();
    const tabelaProdutos = document.getElementById('tabelaProdutos');
    const divTabelaProdutos = document.getElementById('divTabelaProdutos');

    tabelaProdutos.innerHTML = '';

    // Iniciar a pesquisa apenas se houver pelo menos 3 caracteres
    if (pesquisa.length < 2) {
        divTabelaProdutos.style.display = 'none';
        return;
    } else {
        divTabelaProdutos.style.display = 'block';
    }

    // Separar a pesquisa em termos usando a barra como delimitador
    const termosPesquisa = pesquisa.split('/').map(termo => termo.trim());

    try {
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/produtos/visualizar');
        if (!response.ok) {
            throw new Error('Erro ao buscar os produtos');
        }

        const produtos = await response.json();
        const produtosFiltrados = produtos.filter(produto => {
            const descricao = produto.descricao ? produto.descricao.toLowerCase() : '';
            const codigo = produto.codigo ? produto.codigo.toLowerCase() : '';
            const codigoProduto = produto.codigo_produto ? produto.codigo_produto.toString().toLowerCase() : '';

            // Verifica se todos os termos estão presentes na descrição, código ou código do produto
            return termosPesquisa.every(termo => 
                descricao.includes(termo) || codigo.includes(termo) || codigoProduto.includes(termo)
            );
        });

        produtosFiltrados.forEach(produto => {
            const imagemUrl = produto.imagens && produto.imagens.length > 0 ? produto.imagens[0].url_imagem : '';
            const imagemHtml = imagemUrl ? `<img src="${imagemUrl}" alt="Imagem do Produto" class="produto-imagem" style="cursor: pointer; max-width: 50px;" onclick="abrirImagem('${imagemUrl}')">` : '<span>Sem imagem</span>';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" class="checkbox-selecionar-produto" value="${produto.codigo_produto}"></td>
                <td>${imagemHtml}</td>
                <td class="produto-nome">${produto.descricao}</td>
                <td>${produto.codigo}</td>
                <td>${produto.codigo_produto}</td>
                <td style="white-space: nowrap;">${produto.valor_unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td><i class="fa fa-eye" style="cursor: pointer;" onclick="verDetalhes('${produto.descr_detalhada}')"></i></td>
            `;
            tabelaProdutos.appendChild(row);
        });

    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Função para pesquisar ambientes
async function pesquisarAmbiente() {
    const pesquisa = document.getElementById('ambienteSelecionado').value.toLowerCase();
    const ambienteSuggestions = document.getElementById('ambienteSuggestions');

    ambienteSuggestions.innerHTML = '';

    if (pesquisa === '') {
        ambienteSuggestions.style.display = 'none';
        return;
    } else {
        ambienteSuggestions.style.display = 'block';
    }

    try {
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/ambientes');
        if (!response.ok) {
            throw new Error('Erro ao buscar os ambientes');
        }

        const ambientes = await response.json();
        const ambientesFiltrados = ambientes.filter(ambiente =>
            ambiente.nome.toLowerCase().includes(pesquisa)
        );

        ambientesFiltrados.forEach(ambiente => {
            const div = document.createElement('div');
            div.classList.add('item-autocomplete');
            div.textContent = ambiente.nome;
            div.onclick = function () {
                document.getElementById('ambienteSelecionado').value = ambiente.nome;
                ambienteSuggestions.style.display = 'none';
            };
            ambienteSuggestions.appendChild(div);
        });

        if (ambientesFiltrados.length === 0) {
            const div = document.createElement('div');
            div.classList.add('item-autocomplete');
            div.innerHTML = `<strong>Cadastrar novo ambiente: "${pesquisa}"</strong>`;
            div.onclick = function () {
                cadastrarAmbiente(pesquisa);
                ambienteSuggestions.style.display = 'none';
            };
            ambienteSuggestions.appendChild(div);
        }
    } catch (error) {
        console.error('Erro ao buscar ambientes:', error);
    }
}
// Função para remover um produto da tabela
function removerProduto(element, ambiente) {
    // Confirmação de remoção
    const confirmacao = confirm("Tem certeza que deseja remover este produto?");
    if (confirmacao) {
        // Seleciona a linha do produto que será removida
        const row = element.closest('tr');
        
        // Verificar se a linha de observação (comentário) existe logo. após a linha do produto
        const nextRow = row.nextElementSibling;
        if (nextRow && nextRow.classList.contains('observacao-row')) {
            // Remover também a linha de observação, caso exista
            nextRow.remove();
        }

        // Remover a linha do produto da tabela
        row.remove();
        
        // Após remover o produto, recalcular o total do ambiente
        atualizarTodosOsCalculos(ambiente);
        
        // Exibir mensagem de sucesso
        alert("Produto removido com sucesso!");
    }
}
//Incluir Produto Selecionado
function incluirProdutosSelecionados() {
    const ambienteSelecionado = document.getElementById('ambienteSelecionado').value;
    
    // Alerta que mostra o ambiente selecionado
    alert(`Produtos incluídos no ambiente: ${ambienteSelecionado}`);

    if (ambienteSelecionado === '') {
        alert('Por favor, selecione um ambiente para adicionar produtos.');
        return;
    }

    let tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    if (!tabelaAmbiente) {
        criarTabelaAmbiente(ambienteSelecionado);
        tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    }

    const checkboxes = document.querySelectorAll('.checkbox-selecionar-produto:checked');
    if (checkboxes.length === 0) {
        alert('Nenhum produto selecionado.');
        return;
    }

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const nomeProduto = row.querySelector('.produto-nome').textContent;
        const codigoProduto = row.querySelector('td:nth-child(4)').textContent;
        const codigoInterno = row.querySelector('td:nth-child(5)').textContent;

        // Corrigindo a leitura do valor unitário e formatando corretamente
        let valorUnitarioText = row.querySelector('td:nth-child(6)').textContent.replace(/[^\d,]/g, '').replace('.', '').replace(',', '.');
        const valorUnitario = parseFloat(valorUnitarioText) || 0;
        const imagemUrl = row.querySelector('img') ? row.querySelector('img').src : '';

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="checkbox" class="checkbox-selecionar-produto"></td>
            <td>${imagemUrl ? `<img src="${imagemUrl}" alt="Imagem do Produto Selecionado" style="max-width: 50px;">` : 'Sem imagem'}</td>
            <td>${nomeProduto}</td>
            <td>${codigoProduto}</td>
            <td>${codigoInterno}</td>
            <td><span class="valorUnitario">${valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></td>
            <td><input type="number" class="form-control quantidadeProduto" min="1" value="1" onchange="atualizarTodosOsCalculos('${ambienteSelecionado}')"></td>
            <td><input type="text" class="form-control valorTotal" value="${(valorUnitario).toFixed(2).replace('.', ',')}" onchange="atualizarValorUnitario(this, '${ambienteSelecionado}')"></td>
            <td>
                <i class="fa fa-times" style="cursor: pointer; color: red;" onclick="removerProduto(this, '${ambienteSelecionado}')" title="Remover Produto"></i>
                <i class="fa fa-question-circle" style="cursor: pointer; color: blue; margin-right: 10px;" onclick="adicionarObservacao(this)" title="Adicionar Observação"></i>
            </td>
        `;

        tabelaAmbiente.querySelector('tbody').appendChild(newRow);
    });

    // Tornar a tabela ordenável
    $(`#tabela-${ambienteSelecionado} tbody`).sortable({
        placeholder: "ui-state-highlight",  // Estilo do espaço reservado ao arrastar
        axis: "y",  // Limitar o arraste ao eixo vertical
        cursor: "move",  // Mudar o cursor enquanto arrasta
        update: function(event, ui) {
            // Atualizar o cálculo do ambiente após a ordenação
            atualizarTodosOsCalculos(ambienteSelecionado);
        }
    }).disableSelection();  // Evitar a seleção de texto ao arrastar

    atualizarTodosOsCalculos(ambienteSelecionado);
}





// Função para criar uma nova tabela para um ambiente específico
function criarTabelaAmbiente(ambiente) {
    // Verifica se o ambiente é válido
    if (!ambiente || ambiente.trim() === '') {
        console.error('Erro: Ambiente não fornecido ou inválido.');
        return;
    }

    // Verifica se a tabela já existe para evitar duplicação
    if (document.getElementById(`div-${ambiente}`)) {
        console.warn(`A tabela para o ambiente "${ambiente}" já existe. Não será criada uma nova.`);
        return;
    }

    const tabelasAmbientesDiv = document.getElementById('tabelasAmbientes');

    // Criando o container para a tabela do ambiente
    const tabelaDiv = document.createElement('div');
    tabelaDiv.classList.add('mt-4', 'ambiente-container');
    tabelaDiv.id = `div-${ambiente}`;

    // Preenchendo a estrutura HTML da tabela
    tabelaDiv.innerHTML = `
        <h4 class="text-center text-uppercase font-weight-bold">
            ${ambiente}
            <button class="btn btn-sm btn-danger" onclick="removerAmbiente('${ambiente}')">Excluir Ambiente</button>
        </h4>
        <table class="table table-bordered" id="tabela-${ambiente}">
            <thead>
                <tr>
                    <th><input type="checkbox" onclick="selecionarTodosProdutos(this, 'tabela-${ambiente}')"></th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Código</th>
                    <th>Código Interno</th>
                    <th>Valor Unitário</th>
                    <th>Quantidade</th>
                    <th>Valor Total</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <!-- Produtos serão adicionados aqui dinamicamente -->
            </tbody>
        </table>
        <div class="total-ambiente-bar" id="total-${ambiente}">Total do Ambiente: R$ 0,00</div>
    `;

    // Adicionando a nova tabela ao container principal de tabelas
    tabelasAmbientesDiv.appendChild(tabelaDiv);
}
//Remover produto selecionado
function removerProdutosSelecionados(ambiente) {
    const tabelaAmbiente = document.getElementById(`tabela-${ambiente}`);
    if (!tabelaAmbiente) {
        console.error(`Erro: Tabela do ambiente "${ambiente}" não encontrada.`);
        return;
    }

    const checkboxesSelecionados = tabelaAmbiente.querySelectorAll('.checkbox-selecionar-produto:checked');

    if (checkboxesSelecionados.length === 0) {
        alert('Nenhum produto selecionado para exclusão.');
        return;
    }

    const confirmarRemocao = confirm(`Você tem certeza que deseja remover ${checkboxesSelecionados.length} produto(s)?`);
    if (!confirmarRemocao) return;

    checkboxesSelecionados.forEach(checkbox => {
        const row = checkbox.closest('tr');
        let obsRow = row.nextElementSibling;

        // Remover a linha de observação associada, se existir
        if (obsRow && obsRow.classList.contains('observacao-row')) {
            obsRow.remove();
        }

        row.remove();
    });

    // Atualizar os cálculos do ambiente e o total geral
    atualizarTodosOsCalculos(ambiente);
    atualizarTotalGeral();
}
// Remover produtos selecionados de todas as tabelas de ambientes
function removerProdutosSelecionados() {
    // Selecionar todas as tabelas de ambientes
    const tabelasAmbientes = document.querySelectorAll('.ambiente-container');

    let produtosRemovidos = false; // Para verificar se algum produto foi removido

    // Iterar sobre cada tabela de ambiente
    tabelasAmbientes.forEach(tabelaAmbiente => {
        const ambiente = tabelaAmbiente.getAttribute('id').replace('div-', ''); // Obter o nome do ambiente
        const tabela = document.getElementById(`tabela-${ambiente}`);

        if (!tabela) {
            console.error(`Erro: Tabela do ambiente "${ambiente}" não encontrada.`);
            return;
        }

        // Selecionar todos os produtos marcados (checkboxes selecionados) na tabela
        const checkboxesSelecionados = tabela.querySelectorAll('.checkbox-selecionar-produto:checked');

        // Iterar sobre cada checkbox marcado e remover o produto correspondente
        checkboxesSelecionados.forEach(checkbox => {
            const row = checkbox.closest('tr');
            let icon = row.querySelector('.fa-times'); // Selecionar o ícone de remoção correspondente
            if (icon) {
                removerProduto(icon, ambiente); // Remover o produto utilizando a função existente
                produtosRemovidos = true; // Marcar que ao menos um produto foi removido
            }
        });

        // Atualizar os cálculos do ambiente após a remoção
        atualizarTodosOsCalculos(ambiente);
    });

    // Atualizar o total geral após remover os produtos de todos os ambientes
    atualizarTotalGeral();

    // Exibir mensagem se nenhum produto foi selecionado para remoção
    if (!produtosRemovidos) {
        alert('Nenhum produto selecionado para exclusão.');
    }
}
// Associar o clique do botão de remoção à função removerProdutosSelecionados
document.getElementById('btnRemoverSelecionados').addEventListener('click', removerProdutosSelecionados);

// Função para adicionar uma observação a um produto
function adicionarObservacao(element) {
    // Linha do produto onde a observação será adicionada
    const row = element.closest('tr');
    
    // Verificar se a linha de observação já existe logo. após a linha do produto
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.classList.contains('observacao-row')) {
        // Se a linha de observação já existe, alterna a visibilidade (mostrar/ocultar)
        nextRow.style.display = nextRow.style.display === 'none' ? 'table-row' : 'none';
    } else {
        // Se não existe, cria uma nova linha de observação logo. abaixo do produto
        const observacaoRow = document.createElement('tr');
        observacaoRow.classList.add('observacao-row'); // Classe para identificar a linha de observação
        
        // HTML da nova linha com uma célula contendo um textarea para a observação
        observacaoRow.innerHTML = `
            <td colspan="10">
                <textarea class="form-control" rows="3" placeholder="Adicione sua observação aqui"></textarea>
            </td>
        `;
        
        // Insere a nova linha de observação logo. após a linha do produto
        row.parentNode.insertBefore(observacaoRow, row.nextSibling);
    }
}
// Função para remover um ambiente inteiro (tabela e produtos)
function removerAmbiente(ambiente) {
    // Exibir uma caixa de confirmação
    const confirmacao = confirm(`Você tem certeza que deseja remover o ambiente "${ambiente}"?`);

    // Verificar se o usuário confirmou a remoção
    if (confirmacao) {
        const divAmbiente = document.getElementById(`div-${ambiente}`);
        if (divAmbiente) {
            divAmbiente.remove();
            atualizarTotalGeral(); // Atualizar o total geral após remover o ambiente
        }
    } else {
        // Caso o usuário clique em "Cancelar", a remoção será interrompida
        alert('A remoção foi cancelada.');
    }
}

//produtos genericos 
function adicionarOuIncluirProdutoGenerico() {
    const ambienteSelecionado = document.getElementById('ambienteSelecionado').value;

    if (ambienteSelecionado === '') {
        alert('Por favor, selecione um ambiente para adicionar produtos.');
        return;
    }

    let tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    if (!tabelaAmbiente) {
        criarTabelaAmbiente(ambienteSelecionado);
        tabelaAmbiente = document.getElementById(`tabela-${ambienteSelecionado}`);
    }

    // Verifica se algum produto foi selecionado
    const checkboxes = document.querySelectorAll('.checkbox-selecionar-produto:checked');
    if (checkboxes.length === 0) {
        alert('Nenhum produto selecionado.');
        return;
    }

    // Adiciona cada produto selecionado à tabela do ambiente
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const nomeProduto = row.querySelector('.produto-nome').textContent;
        const codigoProduto = row.querySelector('td:nth-child(4)').textContent;
        const codigoInterno = row.querySelector('td:nth-child(5)').textContent;

        // Corrige a leitura e formatação do valor unitário
        let valorUnitarioText = row.querySelector('td:nth-child(6)').textContent.replace(/[^\d,]/g, '').replace('.', '').replace(',', '.');
        const valorUnitario = parseFloat(valorUnitarioText) || 0;
        const imagemUrl = row.querySelector('img') ? row.querySelector('img').src : '';

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="checkbox" class="checkbox-selecionar-produto"></td>
            <td>${imagemUrl ? `<img src="${imagemUrl}" alt="Imagem do Produto Selecionado" style="max-width: 50px;">` : 'Sem imagem'}</td>
            <td>${nomeProduto}</td>
            <td>${codigoProduto}</td>
            <td>${codigoInterno}</td>
            <td><span class="valorUnitario">${valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></td>
            <td><input type="number" class="form-control quantidadeProduto" min="1" value="1" onchange="atualizarTodosOsCalculos('${ambienteSelecionado}')"></td>
            <td><input type="text" class="form-control valorTotal" value="${(valorUnitario).toFixed(2).replace('.', ',')}" onchange="atualizarValorUnitario(this, '${ambienteSelecionado}')"></td>
            <td>
                <i class="fa fa-times" style="cursor: pointer; color: red;" onclick="removerProduto(this, '${ambienteSelecionado}')" title="Remover Produto"></i>
                <i class="fa fa-question-circle" style="cursor: pointer; color: blue; margin-right: 10px;" onclick="adicionarObservacao(this)" title="Adicionar Observação"></i>
            </td>
        `;

        tabelaAmbiente.querySelector('tbody').appendChild(newRow);
    });

    // Tornar a tabela ordenável e atualizável
    $(`#tabela-${ambienteSelecionado} tbody`).sortable({
        placeholder: "ui-state-highlight",
        axis: "y",
        cursor: "move",
        update: function(event, ui) {
            atualizarTodosOsCalculos(ambienteSelecionado);
        }
    }).disableSelection();

    // Atualiza os cálculos totais para o ambiente selecionado
    atualizarTodosOsCalculos(ambienteSelecionado);

    // Fechar o modal de produtos
    const produtoGenericoModal = bootstrap.Modal.getInstance(document.getElementById('produtoGenericoModal'));
    produtoGenericoModal.hide();
}

// Função para visualizar os detalhes do produto em um alert
function verDetalhes(descricaoDetalhada) {
    alert(descricaoDetalhada);
}
// Função para abrir a imagem em um popup centralizado
function abrirImagem(urlImagem) {
    const popup = document.createElement('div');
    popup.className = 'image-popup';
    popup.innerHTML = `
        <span class="close-popup" onclick="fecharPopup()">&times;</span>
        <img src="${urlImagem}" alt="Imagem do Produto">
    `;
    document.body.appendChild(popup);
}
// Função para fechar o popup da imagem
function fecharPopup() {
    const popup = document.querySelector('.image-popup');
    if (popup) {
        popup.remove();
    }
}


//Calculos 
//atualzar Valores unitarios
function atualizarValorUnitario(element, ambiente) {
    const row = element.closest('tr');
    
    // Pega o valor total da célula editada, removendo os pontos de milhar e tratando o decimal corretamente
    let valorTotal = row.querySelector('.valorTotal').value.replace('.', '').replace(',', '.');
    valorTotal = parseFloat(valorTotal);

    // Pega a quantidade do produto
    const quantidade = parseFloat(row.querySelector('.quantidadeProduto').value);

    // Verifica se o valor total e a quantidade são válidos
    if (!isNaN(valorTotal) && quantidade > 0) {
        // Calcula o novo valor unitário (valor total / quantidade)
        const valorUnitario = (valorTotal / quantidade).toFixed(2);

        // Atualiza o valor unitário na célula correspondente com formatação BRL
        row.querySelector('.valorUnitario').innerText = parseFloat(valorUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
        alert("Por favor, insira valores válidos para o total e a quantidade.");
    }

    atualizarTodosOsCalculos(ambiente);
}
//atualzar Valores Gerais
function atualizarTodosOsCalculos(ambiente) {
    const tabelaAmbiente = document.querySelector(`#tabela-${ambiente}`);
    
    if (!tabelaAmbiente) {
        console.error(`Tabela do ambiente ${ambiente} não encontrada.`);
        return;
    }

    let totalAmbiente = 0;

    // Percorre todas as linhas da tabela para calcular os valores totais
    tabelaAmbiente.querySelectorAll('tbody tr').forEach(row => {
        const valorUnitarioElement = row.querySelector('.valorUnitario');
        const quantidadeElement = row.querySelector('.quantidadeProduto');
        const valorTotalElement = row.querySelector('.valorTotal');

        if (!valorUnitarioElement || !quantidadeElement || !valorTotalElement) {
            console.error("Elementos necessários para o cálculo não encontrados.");
            return;
        }

        // Pega o valor unitário corretamente e substitui a vírgula por ponto para o cálculo
        const valorUnitario = parseFloat(valorUnitarioElement.innerText.replace(/[^\d,.-]/g, '').replace('.', '').replace(',', '.')) || 0;
        const quantidade = parseFloat(quantidadeElement.value) || 1;
        const valorTotal = (valorUnitario * quantidade).toFixed(2);

        // Atualiza o valor total na tabela com vírgula no lugar do ponto
        valorTotalElement.value = valorTotal.replace('.', ',');

        // Soma o total do ambiente
        totalAmbiente += parseFloat(valorTotal);
    });

    // Atualiza o total do ambiente
    const totalAmbienteField = document.querySelector(`#total-${ambiente}`);
    if (totalAmbienteField) {
        totalAmbienteField.innerText = `Total do Ambiente: R$ ${totalAmbiente.toFixed(2).replace('.', ',')}`;
    }

    atualizarTotalGeral();
}
// Função para atualizar o total geral e o total com desconto
function atualizarTotalGeral() {
    const totalGeralElement = document.querySelector('.total-geral-bar');
    const desconto = parseFloat(document.getElementById('desconto').value) || 0;

    // Soma os totais de todos os ambientes (ajuste conforme sua lógica)
    let totalGeral = 0;
    document.querySelectorAll('.total-ambiente-bar').forEach(totalField => {
        const totalAmbiente = parseFloat(totalField.innerText.replace(/[^\d,.-]/g, '').replace(',', '.') || 0);
        totalGeral += totalAmbiente;
    });

    // Atualiza o total geral
    totalGeralElement.innerText = `Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;

    // Se houver desconto, aplica e exibe a barra com o valor com desconto aplicado
    const totalComDesconto = totalGeral * ((100 - desconto) / 100);
    
    // Verificar se já existe o elemento de total com desconto e atualizar ou adicionar
    let descontoBar = document.querySelector('.total-com-desconto-bar');
    
    if (desconto > 0) {
        if (!descontoBar) {
            // Se o elemento ainda não existir, cria a barra para o total com desconto
            descontoBar = document.createElement('div');
            descontoBar.classList.add('total-com-desconto-bar', 'mt-4', 'total-geral-bar');
            document.querySelector('.total-geral-bar').insertAdjacentElement('afterend', descontoBar);
        }
        // Atualiza o texto da barra de desconto
        descontoBar.innerText = `Total com Desconto Aplicado: R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`;
    } else if (descontoBar) {
        // Se o desconto for 0 e a barra de desconto existir, remove ela
        descontoBar.remove();
    }
}
//atualizar Calculos de divisão de valores
function atualizarTodosOsCalculos1(tabelaId) {
    const tabela = document.getElementById(`tabela-${tabelaId}`);
    
    if (!tabela) {
        console.error(`Tabela com ID tabela-${tabelaId} não encontrada.`);
        return;
    }

    let totalAmbiente = 0;

    // Percorre todas as linhas da tabela para calcular os valores totais
    tabela.querySelectorAll('tbody tr').forEach(row => {
        const valorUnitarioElement = row.querySelector('.valorUnitario');
        const quantidadeElement = row.querySelector('.quantidadeProduto');
        const valorTotalElement = row.querySelector('.valorTotal');

        if (!valorUnitarioElement || !quantidadeElement || !valorTotalElement) {
            console.error("Elementos necessários para o cálculo não encontrados.");
            return;
        }

        // Pega o valor unitário, removendo pontos e substituindo a vírgula por ponto
        const valorUnitario = parseFloat(valorUnitarioElement.innerText.replace(/[R$]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
        const quantidade = parseFloat(quantidadeElement.value) || 1;
        const valorTotal = valorUnitario * quantidade;

        // Atualiza o valor total na tabela
        valorTotalElement.value = valorTotal.toFixed(2).replace('.', ',');

        // Soma o total do ambiente
        totalAmbiente += valorTotal;
    });

    // Atualiza o total do ambiente
    const totalAmbienteField = document.querySelector(`#total-${tabelaId}`);
    if (totalAmbienteField) {
        totalAmbienteField.innerText = `Total do Ambiente: R$ ${totalAmbiente.toFixed(2).replace('.', ',')}`;
    }

    // Atualiza o total geral
    atualizarTotalGeral();
}
// Função para atualizar o total geral
function validarDesconto() {
    const descontoInput = document.getElementById('desconto');
    const desconto = parseFloat(descontoInput.value) || 0; // Garante que o valor seja um número

    // Verifica se o desconto é maior que 4%
    if (desconto >= 4) {
        const senha = prompt("Desconto superior a 4%. Insira a senha de segurança do gestor:");

        // Verifica se a senha está correta
        if (senha !== "validado%pelo%gestor&%da%pasta") {
            alert("Senha incorreta. Não é possível aplicar um desconto superior a 4% sem autorização.");
            // Redefine o desconto para 0 e não permite continuar
            descontoInput.value = 0;
            return; // Sai da função se a senha for incorreta
        }
    }

    // Atualizar o total geral após a verificação do desconto
    atualizarTotalGeral();
}



//Interações com servidor 
// Atualiza pedidos
async function atualizarProposta() {
    // Obter o ID do pedido da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idPedido = urlParams.get('id');

    if (!idPedido) {
        console.error("ID do pedido não encontrado na URL.");
        return;
    }

    try {
        // Remover a parte "Excluir Ambiente" dos títulos
        document.querySelectorAll("#tabelasAmbientes .ambiente-container h4").forEach(header => {
            header.innerText = header.innerText.replace("Excluir Ambiente", "").trim();
        });

        // Coletar dados do cliente
        const nome = document.getElementById('nome').value.trim();
        const cpfCnpj = document.getElementById('cpfCnpj').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const numeroComplemento = document.getElementById('numeroComplemento').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        // Coletar informações do orçamento
        const vendedor = document.getElementById('selectVendedor').value.trim();
        const agenteArquiteto = document.getElementById('agenteArquiteto').value.trim();
        const tipoEntrega = document.getElementById('tipoEntrega').value.trim();
        const valorFrete = parseFloat(document.getElementById('valorFrete').value.trim()) || 0;
        const tipoPagamento = document.getElementById('tipoPagamento').value.trim();
        const desconto = parseFloat(document.getElementById('desconto').value.trim()) || 0;
        const dataEntrega = document.getElementById('dataEntrega').value;

        // Obter todos os produtos e ambientes
        const produtos = [];
        document.querySelectorAll("#tabelasAmbientes .ambiente-container").forEach(container => {
            const ambiente = container.querySelector("h4").innerText.trim();
            container.querySelectorAll("tbody tr").forEach((row) => {
                const nomeProduto = row.querySelector("td:nth-child(3)")?.innerText.trim() || '';
                const codigoProduto = row.querySelector("td:nth-child(4)")?.innerText.trim() || '';
                const codigoInterno = row.querySelector("td:nth-child(5)")?.innerText.trim() || '';
                const valorUnitario = row.querySelector(".valorUnitario")?.innerText.replace(/[R$]/g, '').replace(/\./g, '').replace(',', '.') || 0;
                console.log(valorUnitario);

                

                const quantidade = parseFloat(row.querySelector(".quantidadeProduto")?.value || 0);
                const valorTotal = parseFloat(row.querySelector(".valorTotal")?.innerText.replace(/[^\d,.-]/g, '').replace(',', '.') || 0);
                let observacao = '';

                // Verificar observação
                const nextRow = row.nextElementSibling;
                if (nextRow && nextRow.classList.contains('observacao-row')) {
                    observacao = nextRow.querySelector('textarea')?.value.trim() || '';
                }

                if (nomeProduto && !isNaN(valorUnitario) && !isNaN(quantidade) && !isNaN(valorTotal)) {
                    produtos.push({
                        nomeProduto,
                        codigoProduto,
                        codigoInterno,
                        valorUnitario,
                        quantidade,
                        valorTotal,
                        observacao,
                        ambiente,
                        statusSeparacao: 'Aberto'
                    });
                }
            });
        });

        // Construir o objeto do pedido
        const pedido = {
            cliente: {
                nome,
                cpfCnpj,
                endereco,
                numeroComplemento,
                telefone,
            },
            informacoesOrcamento: {
                vendedor,
                agenteArquiteto,
                transportadora: tipoEntrega === 'acropoluz' ? 'Acropoluz' : 'Cliente',
                tipoEntrega,
                valorFrete,
                tipoPagamento,
                desconto,
                dataEntrega,
            },
            produtos,
            codigoClienteOmie: document.getElementById('idClienteOmie').value.trim(),
            status: 'Aberto',
        };

        console.log('Enviando pedido para salvar:', JSON.stringify(pedido, null, 2)); // Log detalhado para ver o pedido sendo enviado

        // Fazer a requisição de atualização do pedido
        const response = await fetch(`https://acropoluz-a7ff621dca79.herokuapp.com/pedido/${idPedido}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        });

        // Analisar a resposta
        if (response.ok) {
            alert('Proposta atualizada com sucesso!');
            window.location.reload();
        } else {
            const errorData = await response.json();
            console.error('Erro ao atualizar a proposta:', errorData);
            alert(`Erro ao atualizar a proposta: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
        alert('Erro ao se conectar ao servidor. Tente novamente mais tarde.');
    }
}
// Função para gerar e enviar a proposta para a API
async function gerarEEnviarProposta() {
    const temValorZero = [...document.querySelectorAll('.valorTotal')].some(cell => {
        // Tentar pegar o valor diretamente do campo de input caso ele exista, senão pegar o valor do texto
        const valor = parseFloat(cell.value ? cell.value.replace(/[^\d,.-]/g, '').replace(',', '.') : cell.innerText.replace(/[^\d,.-]/g, '').replace(',', '.'));
    
        // Verificar se o valor é 0 ou NaN (valor não numérico)
        return valor === 0 || isNaN(valor);
    });
    
    if (temValorZero) {
        alert('Existem produtos com valor 0,00 na tabela. Verifique antes de enviar.');
        return;
    }
    

    const codigoCliente = document.getElementById('idClienteOmie').value.trim();
    const dataPrevisao = new Date().toLocaleDateString('pt-BR');
    const numeroPedido = '93168'; // Número do pedido fixo, modificar conforme necessário

    // Função para gerar um código aleatório único
    function gerarCodigoAleatorio() {
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numeros = Date.now().toString();
        let resultado = '';
        for (let i = 0; i < 3; i++) {
            resultado += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        return numeros + resultado;
    }

    const produtos = [];
    document.querySelectorAll("#tabelasAmbientes .ambiente-container tbody tr").forEach((row) => {
        const nomeProduto = row.querySelector("td:nth-child(3)").innerText.trim();
        const codigoProduto = row.querySelector("td:nth-child(5)").innerText.trim();
        const valorUnitario = parseFloat(row.querySelector("td:nth-child(6) .valorUnitario").innerText.replace(/\./g, '').replace(',', '.'));
        const desconto = parseFloat(document.getElementById('desconto').value.trim()) || 0;
        const quantidade = parseInt(row.querySelector("td:nth-child(7) .quantidadeProduto").value);
        const valorTotal = row.querySelector("td:nth-child(8) .valorTotal").value.replace(',', '.');
        console.log(row.querySelector("td:nth-child(8) .valorTotal").value.replace(',', '.'))
        const observacao = row.querySelector("td:nth-child(9) textarea") ? row.querySelector("td:nth-child(9) textarea").value.trim() : '';

        if (!isNaN(valorUnitario) && !isNaN(quantidade) && !isNaN(valorTotal)) {
            produtos.push({
                ide: {
                    codigo_item_integracao: gerarCodigoAleatorio()
                },
                inf_adic: {
                    peso_bruto: 1,
                    peso_liquido: 1
                },
                produto: {
                    cfop: "5.102",
                    codigo_produto: codigoProduto,
                    descricao: nomeProduto,
                    ncm: "9403.30.00",
                    quantidade: quantidade,
                    tipo_desconto: "V",
                    unidade: "UN",
                    valor_desconto: 0,
                    valor_unitario: valorUnitario
                }
            });
        }
    });

    const proposta = {
        cabecalho: {
            codigo_cliente: codigoCliente,
            codigo_pedido_integracao: gerarCodigoAleatorio(),
            data_previsao: dataPrevisao,
            etapa: "10",
            numero_pedido: numeroPedido,
            codigo_parcela: "999",
            quantidade_itens: produtos.length
        },
        det: produtos,
        frete: {
            modalidade: "9"
        },
        informacoes_adicionais: {
            codigo_categoria: "1.05.98",
            codigo_conta_corrente: 3498195819,
            consumidor_final: "S",
            enviar_email: "N"
        },
        lista_parcelas: {
            parcela: [
                {
                    data_vencimento: "04/10/2024",
                    numero_parcela: 1,
                    percentual: 100,
                    valor: 100
                }
            ]
        }
    };

    try {
        console.log(proposta)
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/omie/incluir-pedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(proposta)
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar a proposta. Status: ${response.status}`);
        }

        const responseData = await response.json();
        alert('Pedido enviado para o financeiro com sucesso!');
      //  await atualizarProposta();  Chamar a função de atualização
    } catch (error) {
        console.error('Erro ao enviar a proposta:', error);
        alert('Ocorreu um erro ao enviar o pedido.');
    }
}

// Função para salvar cliente
async function salvarCliente() {
    const clienteData = {
        codigo_cliente_integracao: gerarCodigoClienteIntegracao(),
        email: document.getElementById('clienteEmail').value,
        razao_social:document.getElementById('clienteRazaoSocial').value,
        nome_fantasia: document.getElementById('clienteRazaoSocial').value,
        estado:"MG"
    };

    try {
        console.log(clienteData)
        // Fazer a requisição POST para incluir o cliente
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/clientes/incluirCliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteData)
        });

        if (!response.ok) {
            throw new Error('Erro ao incluir o cliente');
        }

        const responseData = await response.json();

        if (responseData && responseData.codigo_cliente_omie) {
            alert(`Cliente salvo com sucesso! Código Omie: ${responseData.codigo_cliente_omie}`);
            
            // Preencher o campo idClienteOmie
            document.getElementById('idClienteOmie').value = responseData.codigo_cliente_omie;
            
            // Preencher o campo nome com o valor de clienteNomeFantasia
            document.getElementById('nome').value = document.getElementById('clienteNomeFantasia').value;
            
            // Preencher o campo telefone com o valor de clienteTelefone
            document.getElementById('telefone').value = document.getElementById('clienteTelefone').value;
        }
        else {
            alert('Cliente salvo, mas não foi possível obter o código Omie.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Houve um problema ao salvar o cliente.');
    }
}
//Baixa no pedido
function gerarCodigoClienteIntegracao() {
    const now = new Date();
    const horas = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const segundos = now.getSeconds().toString().padStart(2, '0');
    
    // Gera duas letras aleatórias
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letra1 = letras.charAt(Math.floor(Math.random() * letras.length));
    const letra2 = letras.charAt(Math.floor(Math.random() * letras.length));

    return `Codigo${letra1}${letra2}${horas}${minutos}${segundos}`;
}

// Função para buscar clientes
async function buscarClientes() {
    try {
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/clientes/visualizar');
        if (!response.ok) {
            throw new Error('Erro ao buscar os clientes');
        }

        const data = await response.json();
        const clientes = data.map(cliente => ({
            label: cliente.nome_fantasia,
            value: cliente.codigo_cliente_omie,
            cnpj_cpf: cliente.cnpj_cpf,
            endereco: cliente.endereco,
            telefone: cliente.telefone1_numero
        }));

        // Configuração do autocomplete com verificação de caracteres
        $("#nome").autocomplete({
            source: function (request, response) {
                if (request.term.length >= 3) {
                    response($.ui.autocomplete.filter(clientes, request.term));
                } else {
                    response([]);
                }
            },
            select: function (event, ui) {
                $("#nome").val(ui.item.label);
                preencherCamposCliente(ui.item);
                return false;
            }
        });

    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
}

//atualizar clientes
async function atualizarClientes() {
    try {
        alert('Sua lista de clientes esta sendo atualizada');
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/clientes/atualizar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Corpo vazio
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Resposta do servidor:', data);
            alert('POST enviado com sucesso!');
        } else {
            alert('Sua atualização esta sendo processada, siga com a criação dos ambiente!');
        }
    } catch (error) {
        alert('Sua lista de clientes é longa segue sendo atualizada!');
    }
}
//atualizar produtos
async function atualizacaoDeProdutos() {
    try {
        alert("Atualização de produtos Iniciada!")
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/produtos/atualizar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Corpo vazio
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Resposta do servidor:', data);
            alert('POST enviado com sucesso!');
        } else {
            console.error('Erro na requisição:', response.statusText);
         
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao se conectar ao servidor.');
    }
}
// Função para salvar a proposta
async function criarProposta() {
    // Obter os dados dos campos
    const nome = document.getElementById('nome').value.trim();
    const idClienteOmie = document.getElementById('idClienteOmie').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const tipoEntrega = document.getElementById('tipoEntrega').value.trim() || null;
    const tipoPagamento = document.getElementById('tipoPagamento').value.trim() || null;
    const vendedor = document.getElementById('selectVendedor').value.trim();

    // Validações dos campos obrigatórios
    if (!nome || !idClienteOmie || !telefone || !vendedor) {
        let missingFields = [];

        if (!nome) missingFields.push("Nome");
        if (!idClienteOmie) missingFields.push("Selecione um cliente válido");
        if (!telefone) missingFields.push("Telefone");
        if (!vendedor) missingFields.push("Vendedor");

        alert(`Por favor, preencha os seguintes campos obrigatórios: ${missingFields.join(', ')}`);
        return;
    }

    // Coletar as demais informações do orçamento
    const cpfCnpj = document.getElementById('cpfCnpj').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const numeroComplemento = document.getElementById('numeroComplemento').value.trim();
    const agenteArquiteto = document.getElementById('agenteArquiteto').value.trim();
    const valorFrete = parseFloat(document.getElementById('valorFrete').value.trim()) || 0;
    const desconto = parseFloat(document.getElementById('desconto').value.trim()) || 0;
    const dataEntrega = document.getElementById('dataEntrega').value;

    // Obter todos os produtos e ambientes
    const produtos = [];
    document.querySelectorAll("#tabelasAmbientes .ambiente-container").forEach(container => {
        // Capturar e limpar o nome do ambiente antes de salvar
        const ambiente = container.querySelector("h4").innerText.trim().replace("Excluir Ambiente", "").trim();

        container.querySelectorAll("tbody tr").forEach((row) => {
            const nomeProduto = row.querySelector("td:nth-child(3)")?.innerText.trim() || '';
            const codigoProduto = row.querySelector("td:nth-child(4)")?.innerText.trim() || '';
            const codigoInterno = row.querySelector("td:nth-child(5)")?.innerText.trim() || '';
            const valorUnitario = parseFloat(row.querySelector(".valorUnitario")?.innerText.replace(/[R$]/g, '').replace(/\./g, '').replace(',', '.') || 0);
            const quantidade = parseFloat(row.querySelector(".quantidadeProduto")?.value || 0);
            const valorTotal = parseFloat(row.querySelector(".valorTotal")?.innerText.replace(/[^\d,.-]/g, '').replace(',', '.') || 0);
            let observacao = '';

            // Verificar observação
            const nextRow = row.nextElementSibling;
            if (nextRow && nextRow.classList.contains('observacao-row')) {
                observacao = nextRow.querySelector('textarea')?.value.trim() || '';
            }

            if (nomeProduto && !isNaN(valorUnitario) && !isNaN(quantidade) && !isNaN(valorTotal)) {
                produtos.push({
                    nomeProduto,
                    codigoProduto,
                    codigoInterno,
                    valorUnitario,
                    quantidade,
                    valorTotal,
                    observacao,
                    ambiente,
                    statusSeparacao: 'Pendente' // Valor padrão para o campo enum
                });
            }
        });
    });

    // Construir o objeto do pedido
    const pedido = {
        cliente: {
            nome,
            cpfCnpj,
            endereco,
            numeroComplemento,
            telefone,
        },
        informacoesOrcamento: {
            vendedor,
            agenteArquiteto,
            transportadora: tipoEntrega === 'acropoluz' ? 'Acropoluz' : 'Cliente',
            tipoEntrega, // Pode ser null se estiver vazio
            valorFrete,
            tipoPagamento, // Pode ser null se estiver vazio
            desconto,
            dataEntrega,
        },
        produtos,
        codigoClienteOmie: idClienteOmie,
        status: 'Aberto',
    };

    console.log('Enviando pedido para salvar:', JSON.stringify(pedido, null, 2)); // Log detalhado para ver o pedido sendo enviado

    // Fazer a requisição POST para criar o pedido
    try {
        const response = await fetch('https://acropoluz-a7ff621dca79.herokuapp.com/pedido/criar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
        });

        // Analisar a resposta
        if (response.ok) {
            alert('Proposta criada com sucesso!');
            window.location.reload();
        } else {
            const errorData = await response.json();
            console.error('Erro ao criar a proposta:', errorData);
            alert(`Erro ao criar a proposta: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao se conectar ao servidor:', error);
        alert('Erro ao se conectar ao servidor. Tente novamente mais tarde.');
    }
}



//Impressoes e propostas
// Função para gerar o PDF do orçamento
function gerarPaginaOrcamento() {
    // Verificar se existe algum valor igual a 0,00 na tabela
    const temValorZero = [...document.querySelectorAll('.valorTotal')].some(cell => {
        // Tentar pegar o valor diretamente do campo de input caso ele exista, senão pegar o valor do texto
        const valor = parseFloat(cell.value ? cell.value.replace(/[^\d,.-]/g, '').replace(',', '.') : cell.innerText.replace(/[^\d,.-]/g, '').replace(',', '.'));
    
        // Verificar se o valor é 0 ou NaN (valor não numérico)
        return valor === 0 || isNaN(valor);
    });
    
    if (temValorZero) {
        alert('Existem produtos com valor 0,00 na tabela. Verifique antes de enviar.');
        return;
    }
    // Obter as informações do cliente e do pedido
    const nomeCliente = document.getElementById('nome').value;
    const cpfCnpj = document.getElementById('cpfCnpj').value;
    const endereco = document.getElementById('endereco').value;
    const numeroComplemento = document.getElementById('numeroComplemento').value;
    const telefone = document.getElementById('telefone').value;
    const tipoEntrega = document.getElementById('tipoEntrega').value;
    const valorFrete = document.getElementById('valorFrete').value;
    const vendedor = document.getElementById('selectVendedor').value;
    const agenteArquiteto = document.getElementById('agenteArquiteto').value;
    const dataEntrega = document.getElementById('dataEntrega').value;
    const tipoPagamento = document.getElementById('tipoPagamento').value;
    const desconto = parseFloat(document.getElementById('desconto').value);

    // Obter as tabelas de produtos separados por ambiente e os totalizadores
    const ambientes = document.querySelectorAll('.ambiente-container');
    let tabelasAmbientesHtml = '';

    ambientes.forEach(ambiente => {
        const ambienteNome = ambiente.querySelector('h4').innerText.replace('Excluir Ambiente', '').trim();
        const linhasTabela = ambiente.querySelectorAll('tbody tr');
        let linhasTabelaHtml = '';

        linhasTabela.forEach(row => {
            let nomeProduto = row.querySelector('td:nth-child(3)').innerText.trim();
            const codigoInterno = row.querySelector('td:nth-child(5)').innerText.trim();
            const valorUnitario = row.querySelector('.valorUnitario').innerText.replace(/[^\d,.-]/g, '').replace(',', '.');  
            const quantidade = row.querySelector('.quantidadeProduto').value;
            const valorTotal = row.querySelector('.valorTotal').value;
            const observacao = row.querySelector('textarea') ? row.querySelector('textarea').value.trim() : '';

            // Filtrar o nome do produto: remover "**" e limitar aos 10 primeiros caracteres
            nomeProduto = nomeProduto.replace(/\*\*/g, '').substring(0, 10);

            linhasTabelaHtml += `
                <tr>
                    <td>${nomeProduto}</td>
                    <td>${codigoInterno}</td>
                    <td>R$ ${valorUnitario}</td>
                    <td>${quantidade}</td>
                    <td>${parseFloat(valorTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>${observacao}</td>
                </tr>
            `;
        });

        tabelasAmbientesHtml += `
            <div class="ambiente-container">
                <h4 class="text-center text-uppercase" style="font-weight: bold;">${ambienteNome}</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Código Interno</th>
                            <th>Valor Unitário</th>
                            <th>QT</th>
                            <th>Valor Total</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linhasTabelaHtml}
                    </tbody>
                </table>
                ${ambiente.querySelector('.total-ambiente-bar').outerHTML}
                <br>
            </div>
        `;
    });

    // Calcular total geral e aplicar desconto
    const totalGeral = parseFloat(document.getElementById('total-geral').innerText.replace(/[^\d,.-]/g, '').replace(',', '.'));
    const totalComDesconto = desconto > 0 ? totalGeral * (1 - desconto / 100) : totalGeral;

    // Criar a estrutura HTML da nova página de orçamento
    const novaPaginaHtml = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Proposta Comercial: ${nomeCliente} - Visualização</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 10px;
                }
                .logo.-container {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .logo.-container img {
                    max-width: 100%;
                    height: auto;
                }
                .ambiente-container h4 {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                .total-ambiente-bar, .total-geral-bar {
                    width: 100%;
                    font-size: 1.2rem;
                    font-weight: bold;
                    background-color: #878c91;
                    color: #ffffff;
                    padding: 15px;
                    margin-top: 10px;
                    text-align: center;
                }
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        margin: 0;
                    }
                    .table-bordered th, .table-bordered td {
                        border: 1px solid #000 !important;
                    }
                    .total-ambiente-bar, .total-geral-bar {
                        background-color: #000 !important;
                        color: white !important;
                    }
                }
                table {
                    width: 100%;
                    margin-bottom: 20px;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <!-- logo. -->
            <div class="logo.-container">
                <img src="logo.jpeg" alt="logo.">
            </div>

            <div class="container my-5">
                <!-- Informações do Cliente -->
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h3>Informações do Cliente</h3>
                        <p><strong>Nome:</strong> ${nomeCliente}</p>
                        <p><strong>CPF/CNPJ:</strong> ${cpfCnpj}</p>
                        <p><strong>Endereço:</strong> ${endereco}, ${numeroComplemento}</p>
                        <p><strong>Telefone:</strong> ${telefone}</p>
                        <p><strong>Tipo de Entrega:</strong> ${tipoEntrega}</p>
                        <p><strong>Valor do Frete:</strong> ${valorFrete ? parseFloat(valorFrete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Não definido'}</p>
                    </div>
                    <div class="col-md-6">
                        <h3>Informações do Pedido</h3>
                        <p><strong>Vendedor:</strong> ${vendedor}</p>
                        <p><strong>Agente/Arquiteto:</strong> ${agenteArquiteto}</p>
                        <p><strong>Data de Previsão de Entrega:</strong> ${new Date(dataEntrega).toLocaleDateString('pt-BR')}</p>
                        <p><strong>Tipo de Pagamento:</strong> ${tipoPagamento}</p>
                    </div>
                </div>
                <center>
               <h1> Proposta Comercial </h1> 
                </center>
                <hr>
                <!-- Tabelas dos Ambientes -->
                ${tabelasAmbientesHtml}
                <div class="total-geral-bar mt-4">Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}</div>
                ${desconto > 0 ? `<div class="total-geral-bar mt-4">Total com Desconto Aplicado: R$ ${totalComDesconto.toFixed(2).replace('.', ',')}</div>` : ''}
            </div>
        </body>
        </html>
    `;

    // Abrir a nova página em uma aba para visualização
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(novaPaginaHtml);
    novaJanela.document.close();

    // Configurar para impressão com margens mínimas e bordas ajustadas
    novaJanela.onload = function () {
        novaJanela.print();
    };
}
function gerarPaginaOrcamentoSemValores() {
    // Verificar se existe algum valor igual a 0,00 na tabela
    const temValorZero = [...document.querySelectorAll('.valorTotal')].some(cell => {
        const valor = parseFloat(cell.value ? cell.value.replace(/[^\d,.-]/g, '').replace(',', '.') : cell.innerText.replace(/[^\d,.-]/g, '').replace(',', '.'));
        return valor === 0 || isNaN(valor);
    });
    
    if (temValorZero) {
        alert('Existem produtos com valor 0,00 na tabela. Verifique antes de enviar.');
        return;
    }
    
    // Obter as informações do cliente e do pedido
    const nomeCliente = document.getElementById('nome').value;
    const cpfCnpj = document.getElementById('cpfCnpj').value;
    const endereco = document.getElementById('endereco').value;
    const numeroComplemento = document.getElementById('numeroComplemento').value;
    const telefone = document.getElementById('telefone').value;
    const tipoEntrega = document.getElementById('tipoEntrega').value;
    const vendedor = document.getElementById('selectVendedor').value;
    const agenteArquiteto = document.getElementById('agenteArquiteto').value;
    const dataEntrega = document.getElementById('dataEntrega').value;
    const tipoPagamento = document.getElementById('tipoPagamento').value;

    // Obter as tabelas de produtos separados por ambiente e os totalizadores
    const ambientes = document.querySelectorAll('.ambiente-container');
    let tabelasAmbientesHtml = '';

    ambientes.forEach(ambiente => {
        const ambienteNome = ambiente.querySelector('h4').innerText.replace('Excluir Ambiente', '').trim();
        const linhasTabela = ambiente.querySelectorAll('tbody tr');
        let linhasTabelaHtml = '';

        linhasTabela.forEach(row => {
            let nomeProduto = row.querySelector('td:nth-child(3)').innerText.trim();
            const codigoInterno = row.querySelector('td:nth-child(5)').innerText.trim();
            const quantidade = row.querySelector('.quantidadeProduto').value;
            const observacao = row.querySelector('textarea') ? row.querySelector('textarea').value.trim() : '';

            // Filtrar o nome do produto: remover "**" e limitar aos 10 primeiros caracteres
            nomeProduto = nomeProduto.replace(/\*\*/g, '').substring(0, 10);

            linhasTabelaHtml += `
                <tr>
                    <td>${nomeProduto}</td>
                    <td>${codigoInterno}</td>
                    <td>${quantidade}</td>
                    <td>${observacao}</td>
                </tr>
            `;
        });

        tabelasAmbientesHtml += `
            <div class="ambiente-container">
                <h4 class="text-center text-uppercase" style="font-weight: bold;">${ambienteNome}</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Código Interno</th>
                            <th>QT</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linhasTabelaHtml}
                    </tbody>
                </table>
                ${ambiente.querySelector('.total-ambiente-bar').outerHTML}
                <br>
            </div>
        `;
    });

    // Criar a estrutura HTML da nova página de orçamento
    const novaPaginaHtml = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Proposta Comercial: ${nomeCliente} - Visualização</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 10px;
                }
                .logo.-container {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .logo.-container img {
                    max-width: 100%;
                    height: auto;
                }
                .ambiente-container h4 {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                .total-ambiente-bar, .total-geral-bar {
                    width: 100%;
                    font-size: 1.2rem;
                    font-weight: bold;
                    background-color: #878c91;
                    color: #ffffff;
                    padding: 15px;
                    margin-top: 10px;
                    text-align: center;
                }
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        margin: 0;
                    }
                    .table-bordered th, .table-bordered td {
                        border: 1px solid #000 !important;
                    }
                    .total-ambiente-bar, .total-geral-bar {
                        background-color: #000 !important;
                        color: white !important;
                    }
                }
                table {
                    width: 100%;
                    margin-bottom: 20px;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <!-- logo. -->
            <div class="logo.-container">
                <img src="logo.jpeg" alt="logo.">
            </div>

            <div class="container my-5">
                <!-- Informações do Cliente -->
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h3>Informações do Cliente</h3>
                        <p><strong>Nome:</strong> ${nomeCliente}</p>
                        <p><strong>CPF/CNPJ:</strong> ${cpfCnpj}</p>
                        <p><strong>Endereço:</strong> ${endereco}, ${numeroComplemento}</p>
                        <p><strong>Telefone:</strong> ${telefone}</p>
                        <p><strong>Tipo de Entrega:</strong> ${tipoEntrega}</p>
                    </div>
                    <div class="col-md-6">
                        <h3>Informações do Pedido</h3>
                        <p><strong>Vendedor:</strong> ${vendedor}</p>
                        <p><strong>Agente/Arquiteto:</strong> ${agenteArquiteto}</p>
                        <p><strong>Data de Previsão de Entrega:</strong> ${new Date(dataEntrega).toLocaleDateString('pt-BR')}</p>
                        <p><strong>Tipo de Pagamento:</strong> ${tipoPagamento}</p>
                    </div>
                </div>
                <center>
               <h1> Proposta Comercial </h1> 
                </center>
                <hr>
                <!-- Tabelas dos Ambientes -->
                ${tabelasAmbientesHtml}
            </div>
        </body>
        </html>
    `;

    // Abrir a nova página em uma aba para visualização
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(novaPaginaHtml);
    novaJanela.document.close();

    // Configurar para impressão com margens mínimas e bordas ajustadas
    novaJanela.onload = function () {
        novaJanela.print();
    };
}
