// 1. console.log() - isso ae é um teste pra ver se o site ta vivo
const oi = () => {
  console.log("oi");
};
oi();

// *** MÉTODOS PARA MANIPULAÇÃO DO DOM ***

// 2. getElementById() - Seleciona elemento pelo ID
const tituloPost = document.getElementById("tituloPost");
const conteudoPost = document.querySelector("#coteudoPost"); // querySelector usado com seletor CSS
tituloPost.innerHTML = "Título da Postagem Exemplo"; // innerHTML define o conteúdo HTML e adiciona la dentro
tituloPost.style.color = "teal"; // aqui eu to mudando a cor do texto do titulo da postagem, usando o estilo CSS
conteudoPost.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam.";

// 3. querySelector() - Seleciona o primeiro elemento que corresponde ao seletor
const tituloPost2 = document.getElementById("tituloPost2");
const conteudoPost2 = document.querySelector("#coteudoPost2");
tituloPost2.innerHTML = "Título da Postagem Exemplo 2";
tituloPost2.style.color = "teal"; // aqui eu to mudando a cor do texto do titulo da postagem, usando o estilo CSS
conteudoPost2.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptate cum iure ipsum esse quis eos, placeat, debitis a eaque ullam minima, impedit aspernatur excepturi laboriosam? Deleniti veniam dolorum laboriosam.";

// ***  MÉTODOS PARA EVENTOS ***
// addEventListener() - é um bagui que faz com que o javascript escute o que ta acontecendo no site, ele fica ouvindo para quando algo acontecer, como um clique, ou um enevnto de submit(envio), ele executar uma função. É tipo um amigo que fica de olho no que ta rolando e te avisa quando algo acontece.
document.addEventListener("DOMContentLoaded", function () {
  // 4. addEventListener() - Adiciona ouvintes de eventos
  const searchBtn = document.getElementById("searchBtn");
  const userBtn = document.getElementById("userBtn");
  const sininhoBtn = document.getElementById("sininhoBtn");

  // 5. createElement() - Cria novos elementos HTML, aqui esta sendo utilizado para criarr a div de mensagem que aparece la embaixo quando clica nos botões que eu esqueci de fazer funcionar de verdade
  function mostrarMensagem(message) {
    const msg = document.createElement("div");
    msg.className = "message-tooltip";

    // 6. textContent - Define ou obtém o texto de um nó
    msg.textContent = message;

    // 7. appendChild() - Adiciona um elemento filho
    document.body.appendChild(msg);

    // 8. setTimeout() - Executa função após um tempo determinado
    setTimeout(function () {
      // 9. remove() - Remove o elemento do DOM, remove o coiso do HTML, some com ele magicamente
      msg.remove();
    }, 3000);
  }

  // Configurador dos eventos para os botões de mensagem citados acima, aqui eu tô dizendo que quando clicar no botão de pesquisa, vai aparecer a mensagem "Pesquisa em breve!", e assim por diante para os outros botões tlg
  searchBtn.addEventListener("click", () =>
    mostrarMensagem("Pesquisa em breve!")
  );
  userBtn.addEventListener("click", () => mostrarMensagem("Login em breve!"));
  sininhoBtn.addEventListener("click", () =>
    mostrarMensagem("Notificações em breve!")
  );

  // ***  SISTEMA DE COMENTÁRIOS ***
  const formComentarios = document.getElementById("comentario-form");
  const comentariosContainer = document.getElementById("comentarios-container");

  formComentarios.addEventListener("submit", function (e) {
    // 10. preventDefault() - Impede comportamento padrão do formulário que é fazer a pagina dar um f5 e recarregar a pagina, atrapalhando o coiso
    e.preventDefault();

    // 11. value - Obtém valores dos inputs, dos campos onde da pra escrever texto nos formulario
    const name = document.getElementById("comentario-name").value;
    const text = document.getElementById("comentario-text").value;

    const comentarioDiv = document.createElement("div");
    // 12. setAttribute() - Define os atributos do elemento, pode ser ua classe ou outras coisas
    comentarioDiv.setAttribute("class", "comentario");

    const autorPost = document.createElement("p");
    autorPost.setAttribute("class", "comentario-autor");

    // 13. createTextNode() - Cria nó de texto
    autorPost.appendChild(document.createTextNode(name));

    const textoAutor = document.createElement("p");
    textoAutor.setAttribute("class", "comentario-text");
    textoAutor.appendChild(document.createTextNode(text));

    comentarioDiv.appendChild(autorPost);
    comentarioDiv.appendChild(textoAutor);

    // 14. firstChild - Acessa o primeiro filho do elemento
    if (comentariosContainer.firstChild) {
      // 15. insertBefore() - Insere antes de outro elemento, aqui eu to dizendo que se já tiver um comentario la dentro, o novo comentario vai ser adicionado antes do primeiro comentario que ja ta la, assim fica mais organizado e os comentarios mais novos aparecem primeiro mesmo com eu esquecedo de colocar a data, fica atualizado com o mais recente primeiro
      comentariosContainer.insertBefore(
        comentarioDiv,
        comentariosContainer.firstChild
      );
    } else {
      comentariosContainer.appendChild(comentarioDiv);
    }

    // 16. reset() - Limpa formulário
    formComentarios.reset();
  });
});

// *** FUNÇÃO DO BOTÃO CURTIR ***
function trocarCor() {
  // 17. style - Manipula o CSS
  // 18. aqui estamos selecionando o elemento do botão, e quando ce clica nele, o que acontece é a troca de cor dele e do tetxo, e quando ce tira o like, ele volta ao normal
  const botao = document.getElementById("curtir");
  const texto = document.getElementById("textoLike");

  if (botao.style.backgroundColor === "teal") {
    botao.style.backgroundColor = "white";
    botao.style.color = "black";
    texto.innerHTML = "Curtir Postagem!";
  } else {
    botao.style.backgroundColor = "teal";
    botao.style.color = "white";
    texto.innerHTML = "Curtido";
    texto.style.color = "teal";
  }
}
const curtirBtn = document.getElementById("curtir");

// 19. aqui tem o evento do mouse over e o do mouse out, nós usamos ele como uma especie de hover, usei um cirador de box shadow pra fazer aparecer uma sombrazinha bonitinha quando o mouse passa por cima do botão, e quando tira o mouse de cima, some a sombra
curtirBtn.addEventListener("mouseover", function () {
  if (this.style.backgroundColor !== "teal") {
    this.style.boxShadow = "0 0 5px rgba(0, 128, 128, 0.5)";
  }
});

curtirBtn.addEventListener("mouseout", function () {
  this.style.boxShadow = "";
});
