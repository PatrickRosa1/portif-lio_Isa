const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

let quantidadeDeProjetos = 3;

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(quantidadeDeProjetos);
});

btnMostrarProjetos.addEventListener('click', mostrarMaisProjetos)

function mostrarProjetos(quantidadeProjetos) {
  const projetos = document.querySelectorAll('.projeto');

  for (let i = 0; i < quantidadeProjetos; i++) {
    if (projetos[i]) {
      projetos[i].classList.add('ativo')
    }
  }
}

function mostrarMaisProjetos() {
  const quantidadeTotalProjetos = document.querySelectorAll('.projeto').length;
  quantidadeDeProjetos += 3; // Incrementa mais 4 projetos a serem mostrados
  mostrarProjetos(quantidadeDeProjetos);

  if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
    btnMostrarProjetos.classList.add('remover') // Esconde o botão se todos os projetos estiverem sendo mostrados
  }
}
// Função para rolar suavemente de volta ao topo da página
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar ou ocultar a seta de voltar ao início conforme o usuário rola a página
window.addEventListener('scroll', function() {
  var setaVoltarTopo = document.getElementById('seta-voltar-topo');
  var sobreSection = document.getElementById('sobre');
  
  if (window.scrollY > sobreSection.offsetTop) {
    setaVoltarTopo.style.display = 'block'; // Mostra a seta quando a página é rolada além da seção "Sobre"
  } else {
    setaVoltarTopo.style.display = 'none'; // Oculta a seta quando a página é rolada de volta ao topo
  }
});