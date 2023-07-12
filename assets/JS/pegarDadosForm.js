// Capturando o formulário pelo ID
const formulario = document.querySelector('form');

// Capturando o botão de enviar pelo ID
const botaoEnviar = document.querySelector('button[type="submit"]');

// Função para lidar com o envio do formulário
function handleSubmit(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Captura os valores dos campos
  const nome = document.getElementById('textoNomeForm').value;
  const email = document.getElementById('textoEmailForm').value;
  const mensagem = document.getElementById('textoMessageForm').value;

  // Armazena os valores no localStorage
  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);
  localStorage.setItem('mensagem', mensagem);

  // Exibe uma mensagem de confirmação
  alert('Dados do formulário enviados com sucesso!');
  //alert(nome+email+mensagem);

}

// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', handleSubmit);



