let visor = document.getElementById('display');
let historico = document.getElementById('historico');
let entradaAtual = '';
let historicoAtual = [];

// Função para adicionar números e operadores no visor
function adicionarValor(valor) {
    entradaAtual += valor;
    visor.textContent = entradaAtual;
}

// Função para limpar o visor
function limparVisor() {
    entradaAtual = '';
    visor.textContent = '';
}

// Função para calcular o resultado
function calcularResultado() {
    try {
        let resultado = eval(entradaAtual);
        
        // Armazenar a operação e o resultado no histórico
        historicoAtual.push({ operacao: entradaAtual, resultado: resultado });

        // Atualizar a tabela do histórico
        atualizarHistorico();

        // Atualizar o visor com o resultado
        entradaAtual = resultado.toString();
        visor.textContent = entradaAtual;
    } catch (error) {
        visor.textContent = 'Erro';
    }
}

// Função para atualizar o histórico
function atualizarHistorico() {
    historico.innerHTML = ''; // Limpar o conteúdo do histórico

    historicoAtual.forEach(item => {
        let row = document.createElement('tr');
        let cellOperacao = document.createElement('td');
        cellOperacao.textContent = item.operacao;
        let cellResultado = document.createElement('td');
        cellResultado.textContent = item.resultado;

        // Adicionar a funcionalidade de click para substituição no visor
        cellOperacao.onclick = function() {
            entradaAtual = item.operacao;
            visor.textContent = entradaAtual;
        };

        row.appendChild(cellOperacao);
        row.appendChild(cellResultado);
        historico.appendChild(row);
    });
}

// Função para limpar o histórico
function limparHistorico() {
    historicoAtual = [];
    atualizarHistorico();
}
