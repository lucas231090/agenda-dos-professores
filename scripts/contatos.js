document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/contatos')
    .then((response) => response.json())
    .then((data) => {
      const tabela = document.getElementById('tabela-corpo');
      tabela.innerHTML = '';

      data.forEach((contato) => {
        const row = `
                    <tr>
                        <td>${contato.id}</td>
                        <td>${contato.nome}</td>
                        <td>${contato.fone}</td>
                        <td>${contato.email}</td>
                        <td>
                            <a href="editar.html?id=${contato.id}" class="Botao1">Editar</a>
                            <a href="#" class="Botao2" onclick="confirmarExclusao(${contato.id})">Excluir</a>
                        </td>
                    </tr>
                `;
        tabela.innerHTML += row;
      });
    })
    .catch((error) => console.error('Erro ao carregar contatos:', error));
});

function confirmarExclusao(id) {
  if (confirm('Deseja realmente excluir este contato?')) {
    fetch(`http://localhost:3000/contatos/${id}`, { method: 'DELETE' })
      .then(() => location.reload())
      .catch((error) => console.error('Erro ao excluir contato:', error));
  }
}
