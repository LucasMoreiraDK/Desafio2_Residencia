// Capturando o formulário pelo ID
const formulario = document.querySelector('form');

// Capturando o botão de enviar pelo ID
const botaoEnviar = document.querySelector('button[type="submit"]');

// Função para lidar com o envio do formulário
function PegarDados(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Captura os valores dos campos
  const nome = document.getElementById('textoNomeForm').value;
  const email = document.getElementById('textoEmailForm').value;
  const mensagem = document.getElementById('textoMessageForm').value;

  // Verifica se todos os campos estão preenchidos
  if (nome && email && mensagem) {
    // Cria um objeto com os valores do formulário
    const dadosFormulario = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };

    // Verifica se já existem dados no Local Storage
    let dadosArmazenados = localStorage.getItem('dadosFormularios');
    if (dadosArmazenados) {
      dadosArmazenados = JSON.parse(dadosArmazenados);
    } else {
      dadosArmazenados = [];
    }

    // Adiciona os novos dados ao array
    dadosArmazenados.push(dadosFormulario);

    // Armazena o array no Local Storage
    localStorage.setItem('dadosFormularios', JSON.stringify(dadosArmazenados));

    // Exibe uma mensagem de confirmação
    alert('Dados do formulário enviados com sucesso!');

    // Limpa os campos do formulário
    formulario.reset();
  } else {
    // Exibe uma mensagem de erro
    alert('Por favor, preencha todos os campos do formulário.');
  }
}

// Adiciona um ouvinte de evento para o envio do formulário
botaoEnviar.addEventListener('click', PegarDados);
