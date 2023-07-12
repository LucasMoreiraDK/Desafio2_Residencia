  // Função para excluir todos os cards com a classe "cardDynamicCriado"
  function excluirCards() {
    const cards = document.querySelectorAll('.cardDynamicCriado');
    cards.forEach(card => {
      card.remove();
    });
    localStorage.removeItem('dadosFormularios');

  }

  // Captura o botão pelo seletor de classe
  const botaoExcluirCards = document.querySelector('.excluirCards');

  // Adiciona um ouvinte de evento para o clique no botão
  botaoExcluirCards.addEventListener('click', excluirCards);


  



