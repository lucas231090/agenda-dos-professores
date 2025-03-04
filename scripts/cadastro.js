document
  .getElementById('formContato')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const contato = {
      nome: document.getElementById('nome').value,
      fone: document.getElementById('fone').value,
      email: document.getElementById('email').value,
    };

    fetch('URL - api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contato),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Contato cadastrado com sucesso!');
        window.location.href = 'contatos.html';
      })
      .catch((error) => console.error('Erro ao cadastrar contato:', error));
  });
