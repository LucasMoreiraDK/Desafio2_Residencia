// Função para receber os dados do localStorage e adicionar aos cards
function receberDados() {
    // Recupera os valores armazenados no localStorage
    const nomeArmazenado = localStorage.getItem('nome');
    const emailArmazenado = localStorage.getItem('email');
    const mensagemArmazenada = localStorage.getItem('mensagem');
  
    // Verifica se os valores estão presentes no localStorage
    if (nomeArmazenado && emailArmazenado && mensagemArmazenada) {
      // Cria um novo card
      const novoCard = document.createElement('div');
      novoCard.classList.add('card', 'cardDynamicCriado');
      novoCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Nome: ${nomeArmazenado}</h5>
          <p class="card-text">Email: ${emailArmazenado}</p>
          <p class="card-text">Mensagem: ${mensagemArmazenada}</p>
        </div>
      `;
  
      // Adiciona o novo card ao card-group "cardForms"
      const cardForms = document.querySelector('.cardForms');
      cardForms.appendChild(novoCard);
  
      // Remove os dados do localStorage (Se não remover o dado vai se repetir)
      localStorage.removeItem('nome');
      localStorage.removeItem('email');
      localStorage.removeItem('mensagem');
    }
  }
  
  // Executa a função receberDados a cada meio segundo
  setInterval(receberDados, 500); // (500 ms)
  