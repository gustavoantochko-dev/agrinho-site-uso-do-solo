// Banco de dados simulado com as informações do solo
const dadosSolo = {
    urbano: {
        titulo: "Uso Urbano",
        descricao: "Destinado às cidades, vilas e infraestruturas humanas. Compreende habitações, comércios, vias de transporte e áreas públicas.",
        impacto: "Gera grande impermeabilização do solo, o que pode causar enchentes se não houver um planejamento correto de drenagem.",
        exemplo: "Cidades, praças, calçadas e sistemas de esgoto."
    },
    agricola: {
        titulo: "Uso Agrícola",
        descricao: "Solo voltado para o cultivo de alimentos, pastagens para gado e produção de matérias-primas textuais ou biocombustíveis.",
        impacto: "Se usado incorretamente com excesso de agrotóxicos ou maquinário pesado, pode sofrer com erosão e esgotamento de nutrientes.",
        exemplo: "Plantações de soja, milho, cana-de-açúcar e fazendas de gado."
    },
    florestal: {
        titulo: "Uso Florestal e Conservação",
        descricao: "Áreas mantidas com vegetação nativa ou destinadas ao manejo florestal sustentável (extração controlada de madeira e recursos).",
        impacto: "Essencial para a manutenção da biodiversidade, regulação do clima, proteção dos rios (matas ciliares) e produção de oxigênio.",
        exemplo: "Parques Nacionais, reservas indígenas e florestas de reflorestamento."
    },
    industrial: {
        titulo: "Uso Industrial",
        descricao: "Zonas reservadas para a instalação de fábricas, complexos manufatureiros e centros de distribuição logística.",
        impacto: "Apresenta alto risco de contaminação química do solo e dos lençóis freáticos se os resíduos e efluentes não forem tratados.",
        exemplo: "Polos petroquímicos, montadoras de veículos e usinas."
    }
};

// Seleção dos elementos do HTML
const botoes = document.querySelectorAll('.tab-btn');
const caixaInfo = document.getElementById('info-box');

// Função para atualizar o conteúdo na tela
function atualizarConteudo(tipo) {
    const dados = dadosSolo[tipo];
    
    caixaInfo.innerHTML = `
        <h3>${dados.titulo}</h3>
        <p><strong>Descrição:</strong> ${dados.descricao}</p>
        <p><strong>Exemplos:</strong> ${dados.exemplo}</p>
        <p><strong>Impacto Ambiental/Atenção:</strong> ${dados.impacto}</p>
    `;
}

// Configuração dos cliques nos botões
botoes.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Remove a classe 'active' de todos os botões
        botoes.forEach(b => b.classList.remove('active'));
        
        // Adiciona a classe 'active' apenas no botão clicado
        evento.target.classList.add('active');
        
        // Pega o tipo de solo do atributo 'data-target' e atualiza
        const tipoSelecionado = evento.target.getAttribute('data-target');
        atualizarConteudo(tipoSelecionado);
    });
});

// Inicializa o site mostrando o conteúdo "urbano" por padrão
atualizarConteudo('urbano');