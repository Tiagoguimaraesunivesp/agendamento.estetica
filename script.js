document.getElementById('formAgendamento').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  const lista = document.getElementById('listaAgendamentos');
  const item = document.createElement('li');
  item.textContent = `${nome} - ${data} às ${hora}`;
  lista.appendChild(item);

  // Limpa o formulário
  document.getElementById('formAgendamento').reset();
});

