const contatosContainer = document.getElementById('contatos-container');

// Defina os contatos aqui
const contatos = [
  {
    nome: 'João',
    email: 'joao@email.com'
  },
  {
    nome: 'Maria',
    email: 'maria@email.com'
  },
  {
    nome: 'Pedro',
    email: 'pedro@email.com'
  }
];

// Crie os elementos HTML para os contatos
contatos.forEach((contato) => {
  const contatoItem = document.createElement('div');
  contatoItem.classList.add('contato-item');

  const contatoNome = document.createElement('h2');
  contatoNome.classList.add('contato-nome');
  contatoNome.textContent = contato.nome;

  const contatoEmail = document.createElement('p');
  contatoEmail.classList.add('contato-email');
  contatoEmail.textContent = contato.email;

  const contatoBotao = document.createElement('button');
  contatoBotao.classList.add('contato-botao');
  contatoBotao.textContent = 'Ligar';
  contatoBotao.addEventListener('click', () => {
    // Aqui você pode adicionar a lógica para ligar para o contato
    console.log(`Ligando para ${contato.nome}...`);
  });

  contatoItem.appendChild(contatoNome);
  contatoItem.appendChild(contatoEmail);
  contatoItem.appendChild(contatoBotao);

  contatosContainer.appendChild(contatoItem);
});