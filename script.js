/* 
💻 Arquivo JavaScript - Lógica de comportamento e interatividade
Implementa funcionalidades dinâmicas e manipulação do DOM
*/

// Variável para controlar a cor atual (0=Red, 1=Green, 2=Blue)
let corAtual = 0;

// Função para inserir nome do usuário
function inserirNome() {
    /* 
    Função de interação com o usuário
    Coleta input via prompt e atualiza elemento DOM específico
    Inicia alternância automática de cores RGB imediatamente
    */
    
    let nomeUsuario = prompt("Qual o seu nome?");
    /* 
    Window.prompt() - Interface nativa do browser para input
    Retorna string digitada pelo usuário ou null se cancelado
    Armazenamento em variável local com escopo de função
    */
    
    let elemento = document.querySelector("#nome-usuário");
    /* 
    Document.querySelector() - API de seleção CSS
    Localiza primeiro elemento que corresponde ao seletor especificado
    Retorna referência ao nó DOM para manipulação
    */
    
    elemento.textContent = nomeUsuario;
    /* 
    Propriedade textContent - Atualização de conteúdo textual
    Substitui conteúdo interno do elemento sem interpretação HTML
    Método seguro para inserção de texto do usuário
    */
    
    // Array com as cores RGB em hexadecimal
    let coresRGB = ["#FF0000", "#00FF00", "#0000FF"]; // Red, Green, Blue
    
    // Função para alternar cores automaticamente
    function alternarCor() {
        elemento.style.color = coresRGB[corAtual];
        corAtual = (corAtual + 1) % 3; // Vai para próxima cor
    }
    
    // Aplica a primeira cor imediatamente
    alternarCor();
    
    // Continua alternando automaticamente a cada 1 segundo
    setInterval(alternarCor, 1000);
    
    /* 
    setInterval chama alternarCor() a cada 1000ms (1 segundo)
    Criando efeito contínuo de mudança de cores
    Red → Green → Blue → Red → Green → Blue...
    */
}

// Executa a função automaticamente quando a página carregar
window.addEventListener("load", inserirNome);
/* 
Event Listener para evento 'load' do window object
Executa função única que pergunta nome E inicia alternância
Sequência: carregamento → prompt → cores dinâmicas automáticas
*/

// Conexão simples entre JavaScript e HTML
console.log("JavaScript conectado com sucesso!");
/* 
Console.log() - Output para console do navegador
Ferramenta de debug para verificar execução do script
Acessível via Developer Tools (F12) na aba Console
*/ 