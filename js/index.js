const oi = () => {
  console.log("oi");
};
oi();

// 1. getElementById
// Esse método é usado para selecionar um elemento HTML pelo seu ID.
// Exemplo de uso:
const tituLo = document.getElementById("tituloPost");
const coteudo = document.querySelector("#coteudoPost");
tituLo.innerHTML = "Título da Postagem";
coteudo.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribuscorporis dolorum quisquam vitae libero quibusdam culpa velitrepellendus, deleniti pariatur sed amet, dolores eum fuga asperioresoptio, accusantium mollitia rem. Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Ducimus quo, tenetur facere oloremquesoluta neque vitae, veniam ipsa doloribus deserunt rem? Fugiatveritatis excepturi quis dolorum iste vel perspiciatis? Quas? Loremipsum dolor sit amet consectetur adipisicing elit. Reiciendisminimasaepe odit! Necessitatibus dolorum pariatur ipsam, praesentium quieveniet laboriosam totam illo possimus quidem animi, voluptatum,fugacumque natus minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribuscorporis dolorum quisquam vitae libero quibusdam culpa velitrepellendus, deleniti pariatur sed amet, dolores eum fuga asperioresoptio, accusantium mollitia rem. Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Ducimus quo, tenetur facere oloremquesoluta neque vitae, veniam ipsa doloribus deserunt rem? Fugiatveritatis excepturi quis dolorum iste vel perspiciatis? Quas? Loremipsum dolor sit amet consectetur adipisicing elit. Reiciendisminimasaepe odit! Necessitatibus dolorum pariatur ipsam, praesentium quieveniet laboriosam totam illo possimus quidem animi, voluptatum,fugacumque natus minima.";

const tituLo2 = document.getElementById("tituloPost2");
const coteudo2 = document.querySelector("#coteudoPost2");
tituLo2.innerHTML = "Título da Postagem2";
coteudo2.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribuscorporis dolorum quisquam vitae libero quibusdam culpa velitrepellendus, deleniti pariatur sed amet, dolores eum fuga asperioresoptio, accusantium mollitia rem. Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Ducimus quo, tenetur facere oloremquesoluta neque vitae, veniam ipsa doloribus deserunt rem? Fugiatveritatis excepturi quis dolorum iste vel perspiciatis? Quas? Loremipsum dolor sit amet consectetur adipisicing elit. Reiciendisminimasaepe odit! Necessitatibus dolorum pariatur ipsam, praesentium quieveniet laboriosam totam illo possimus quidem animi, voluptatum,fugacumque natus minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribuscorporis dolorum quisquam vitae libero quibusdam culpa velitrepellendus, deleniti pariatur sed amet, dolores eum fuga asperioresoptio, accusantium mollitia rem. Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Ducimus quo, tenetur facere oloremquesoluta neque vitae, veniam ipsa doloribus deserunt rem? Fugiatveritatis excepturi quis dolorum iste vel perspiciatis? Quas? Loremipsum dolor sit amet consectetur adipisicing elit. Reiciendisminimasaepe odit! Necessitatibus dolorum pariatur ipsam, praesentium quieveniet laboriosam totam illo possimus quidem animi, voluptatum,fugacumque natus minima.";

// const tituLo2 = document.getElementById("test");
// tituLo2.innerHTML = "";

// 2. querySelector
// Este método permite selecionar um elemento com base em um seletor CSS.
// Exemplo de uso:
// const titulo3 = document.querySelector(".titulo3");
// titulo3.style.color = "blue";
// titulo3.innerHTML = "";

// 3. addEventListener
// Utilizado para adicionar um ouvinte de eventos a um elemento.
// Exemplo de uso:
// const btn = document.querySelector("#btn");
// const container = document.getElementById("container");

// btn.addEventListener("click", () => {
//   alert("JUMPSCARE FODA");
// });

// btn.addEventListener("mouseover", () => {
//   btn.style.backgroundColor = "red";
//   btn.innerHTML = "nao clique";
//   btn.style.width = "150px";
//   btn.style.height = "150px";
//   // container.style.backgroundImage = 'url(https://colunadofla.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-17-at-20.41.39.jpeg)'
//   container.style.backgroundSize = "cover";
//   container.style.backgroundPosition = "center";
//   container.style.backgroundRepeat = "no-repeat";
//   container.style.backgroundColor = "black";
// });

// btn.addEventListener("mouseout", () => {
//   btn.style.backgroundColor = "black";
//   btn.innerHTML = "";
//   btn.style.width = "50px";
//   btn.style.height = "50px";
//   // container.style.backgroundImage = 'url(https://bpb-eu-w2.wpmucdn.com/blogs.ucl.ac.uk/dist/9/186/files/2017/10/800px-Gibraltar_Barbary_Macaque.jpg);'
//   container.style.backgroundColor = "white";
// });

// btn.addEventListener("mousedown", () => {
//   btn.style.backgroundColor = "green";
// });

// btn.addEventListener('mouseup', () => {
//   btn.style.backgroundColor = 'yellow'
// });

// btn.textContent = "oi";
// btn.style.backgroundColor = "black";
// btn.style.color = "white";
// btn.style.padding = "1%";
// btn.style.border = "none";
// btn.style.borderRadius = "25px";
// btn.style.cursor = "pointer";
// btn.style.fontSize = "16px";
// btn.style.width = "50px";
// btn.style.height = "50px";
// btn.style.margin = "0.5%";

// 5. createElement
// Cria um novo elemento HTML.
// Exemplo de uso:
// essa função faz co que ao clicar nos botões de ação la em cima do nav, apareça uma caixinha de texto la embaixo alertando que não funciona
document.addEventListener("DOMContentLoaded", function () {
  // Elementos
  const searchBtn = document.getElementById("searchBtn");
  const userBtn = document.getElementById("userBtn");
  const sininhoBtn = document.getElementById("sininhoBtn");

  // Função para mostrar mensagem
  function mensagemPaia(message) {
    const msg = document.createElement("div");
    msg.className = "message-tooltip";
    msg.textContent = message;
    document.body.appendChild(msg);

    // 4. setTimeout
    // Esse método é usado para executar uma função após um determinado período de tempo.
    // Exemplo de uso:
    setTimeout(function () {
      msg.remove();
    }, 3000);
  }

  // Eventos para cada botão
  searchBtn.addEventListener("click", function () {
    mensagemPaia("Pesquisa em breve!");
  });

  userBtn.addEventListener("click", function () {
    mensagemPaia("Login em breve!");
  });

  sininhoBtn.addEventListener("click", function () {
    mensagemPaia("Notificações em breve!");
  });
  const formComentarios = document.getElementById("comentario-form");
  const comentariosContainer = document.getElementById("comentarios-container");

  formComentarios.addEventListener("submit", function (e) {
    e.preventDefault();

    // Pegar valores do formulário
    const name = document.getElementById("comentario-name").value;
    const text = document.getElementById("comentario-text").value;

    // Criar elementos do comentário
    const comentarioDiv = document.createElement("div");
    // 8. setAttribute
    // Define um atributo em um elemento.
    // Exemplo de uso:
    comentarioDiv.setAttribute("class", "comentario");
    // 6. createTextNode
    // Cria um novo nó de texto.
    // Exemplo de uso:
    const autorPost = document.createElement("p");
    autorPost.setAttribute("class", "comentario-autor");
    const autorText = document.createTextNode(name);
    autorPost.appendChild(autorText);

    const textoAutor = document.createElement("p");
    textoAutor.setAttribute("class", "comentario-text");
    const textNode = document.createTextNode(text);
    // 7. appendChild
    // Adiciona um elemento filho a um elemento pai.
    // Exemplo de uso:
    textoAutor.appendChild(textNode);

    // Montar estrutura do comentário
    comentarioDiv.appendChild(autorPost);
    comentarioDiv.appendChild(textoAutor);

    // Inserir novo comentário no topo da lista
    if (comentariosContainer.firstChild) {
      // 9. insertBefore
      // Insere um novo elemento antes de um elemento existente.
      // Exemplo de uso:
      comentariosContainer.insertBefore(comentarioDiv, comentariosContainer.firstChild);
    } else {
      comentariosContainer.appendChild(comentarioDiv);
    }

    // Limpar formulário
    formComentarios.reset();
  });
});

function trocarCor() {
  const botao = document.getElementById("curtir");
  const texto = document.getElementById("textoLike");
  if (botao.style.backgroundColor === "teal") {
    botao.style.backgroundColor = "white"; // Volta para azul
    botao.style.color = "black"; // Muda para branco
    texto.innerHTML = "Curtir Postagem!"; // Muda o texto para "Curtir"
  } else {
    botao.style.backgroundColor = "teal";
    botao.style.color = "white"; // Muda para vermelho
    texto.innerHTML = "Curtido"; // Muda o texto para "Curtirdo"
    texto.style.color = "teal"; // Muda o texto para vermelho
  }
}
