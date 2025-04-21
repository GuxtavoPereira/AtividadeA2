const oi = () => {
  console.log("oi");
};
oi();

// 1. getElementById
// Esse método é usado para selecionar um elemento HTML pelo seu ID.
// Exemplo de uso:
const tituLo = document.getElementById("titulo");
tituLo.innerHTML = "oi";

const tituLo2 = document.getElementById("test");
tituLo2.innerHTML = "oi";

// 2. querySelector
// Este método permite selecionar um elemento com base em um seletor CSS.
// Exemplo de uso:
const titulo3 = document.querySelector(".titulo3");
titulo3.style.color = "blue";
titulo3.innerHTML = "oi";

// 3. addEventListener
// Utilizado para adicionar um ouvinte de eventos a um elemento.
// Exemplo de uso:
const btn = document.querySelector("#btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  alert("JUMPSCARE FODA");
});

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
  btn.innerHTML = "nao clique";
  btn.style.width = "150px";
  btn.style.height = "150px";
  // container.style.backgroundImage = 'url(https://colunadofla.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-17-at-20.41.39.jpeg)'
  container.style.backgroundSize = "cover";
  container.style.backgroundPosition = "center";
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundColor = "black";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "black";
  btn.innerHTML = "oi";
  btn.style.width = "50px";
  btn.style.height = "50px";
  // container.style.backgroundImage = 'url(https://bpb-eu-w2.wpmucdn.com/blogs.ucl.ac.uk/dist/9/186/files/2017/10/800px-Gibraltar_Barbary_Macaque.jpg);'
  container.style.backgroundColor = "white";
});

btn.addEventListener("mousedown", () => {
  btn.style.backgroundColor = "green";
});

// btn.addEventListener('mouseup', () => {
//   btn.style.backgroundColor = 'yellow'
// });

btn.textContent = "oi";
btn.style.backgroundColor = "black";
btn.style.color = "white";
btn.style.padding = "1%";
btn.style.border = "none";
btn.style.borderRadius = "25px";
btn.style.cursor = "pointer";
btn.style.fontSize = "16px";
btn.style.width = "50px";
btn.style.height = "50px";
btn.style.margin = "0.5%";

// 4. setTimeout
// Esse método é usado para executar uma função após um determinado período de tempo.
// Exemplo de uso:
setTimeout(() => {
  alert("VAMPETA");
}, 3000);

// 5. createElement
// Cria um novo elemento HTML.
// Exemplo de uso:
// essa função faz co que ao clicar nos botões de ação la em cima do nav, apareça uma caixinha de texto la embaixo alertando que não funciona
document.addEventListener("DOMContentLoaded", function () {
  // Elementos
  const searchBtn = document.getElementById("searchBtn");
  const userBtn = document.getElementById("userBtn");
  const bellBtn = document.getElementById("bellBtn");

  // Função para mostrar mensagem
  function showMessage(message) {
    // Cria elemento da mensagem
    const msg = document.createElement("div");
    msg.className = "message-tooltip";
    msg.textContent = message;

    // Adiciona ao corpo
    document.body.appendChild(msg);

    // Remove após 3 segundos
    setTimeout(function () {
      msg.remove();
    }, 3000);
  }

  // Eventos para cada botão
  searchBtn.addEventListener("click", function () {
    showMessage("Pesquisa em breve!");
  });

  userBtn.addEventListener("click", function () {
    showMessage("Login em breve!");
  });

  bellBtn.addEventListener("click", function () {
    showMessage("Notificações em breve!");
  });
});

// 6. createTextNode
// Cria um novo nó de texto.
// Exemplo de uso:
// const novoTexto = document.createTextNode('Olá, mundo!');
// 7. appendChild
// Adiciona um elemento filho a um elemento pai.
// Exemplo de uso:
// const corpo = document.container;
// corpo.appendChild(novoDiv);
// 8. setAttribute
// Define um atributo em um elemento.
// Exemplo de uso:
// novoDiv.setAttribute('class', 'minha-classe');
// 9. insertBefore
// Insere um novo elemento antes de um elemento existente.
// Exemplo de uso:
// const elementoExistente = document.getElementById('meuTexto');
// corpo.insertBefore(novoDiv, elementoExistente);
