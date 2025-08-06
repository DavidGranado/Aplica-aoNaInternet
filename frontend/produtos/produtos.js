const navbarItems = [
   {
      path: "../home/home.html",
      label: "Home",
      icon: "../src/house-branco.svg",
      selected: "../src/house-azul.svg",
   },
   {
      path: "../sobre/sobre.html",
      label: "Sobre",
      icon: "../src/info-branco.svg",
      selected: "../src/info-azul.svg",
   },
   {
      path: "../produtos/produtos.html",
      label: "Produtos",
      icon: "../src/shopping-bag-branco.svg",
      selected: "../src/shopping-bag-azul.svg",
   },
   {
      path: "../novidades/novidades.html",
      label: "Novidades",
      icon: "../src/newspaper-branco.svg",
      selected: "../src/newspaper-azul.svg",
   },
];

// Função que verifica se o item está ativo
function isActive(path) {
   return location.pathname.split('/').pop() === path.split('/').pop();
}

// Gerar os botões do Navbar
const navbar = document.getElementById("menu");

navbar.innerHTML = navbarItems.map((item) =>
   `
   <a href="${item.path}" 
      class="flex items-center gap-2 px-3 py-2 rounded-lg min-w-fit transition-all duration-200 text-sm md:text-base text-white
      ${isActive(item.path)
         ? "bg-cyan-500/20 text-light-blue border border-light-blue/30"
         : "hover:bg-slate-800/50"
      }">
      <img 
         src="${isActive(item.path) ? item.selected : item.icon}"
         class="w-4 h-4"
         alt="${item.label}">
      <span>${item.label}</span>
   </a>
   `
).join("");

// Dropdown toggle
function toggleDropdownButton() {
   const dropdown = document.querySelector("#dropdownButton #dropdownOptions");
   dropdown.classList.toggle("hidden");
}

// Fecha dropdown ao clicar fora
window.addEventListener("click", function(e) {
   const dropdown = document.querySelector("#dropdownButton #dropdownOptions");
   const button = document.getElementById("dropdownButton");
   if (!button.contains(e.target)) {
      dropdown.classList.add("hidden");
   }
});

// Menu hamburguer toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
   const navbar = document.getElementById('navbar-content');
   navbar.classList.toggle('hidden');
});

// Troca o ícone e cor do texto ao passar o mouse
document.querySelectorAll("#menu a").forEach((link, idx) => {
const img = link.querySelector("img");
const span = link.querySelector("span");
const item = navbarItems[idx];

link.addEventListener("mouseenter", () => {
   if (!isActive(item.path)) {
      img.src = item.selected;
      span.classList.add("text-cyan-400");
   }
});
link.addEventListener("mouseleave", () => {
   if (!isActive(item.path)) {
      img.src = item.icon;
      span.classList.remove("text-cyan-400");
   }
});
});

// Gerar os cards de produtos
const produto = document.getElementById("produtos-card");

fetch('../../admin/produtos/listar_produtos.php')
   .then(response => response.json())
   .then(data => {
      produto.innerHTML = data.map(produto =>
         `<div class="bg-slate-800/30 border border-slate-700/50 flex flex-col rounded-lg overflow-hidden
               w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md
               shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
            <div class="h-48 sm:h-56 md:h-60 overflow-hidden flex justify-center items-center">
               <img src="../src/products-images/${produto.imagem}" class="h-full object-cover" alt="${produto.nome}" />
            </div>
            <div class="p-3 grid grid-cols-2 gap-2">
               <h3 class="col-span-2 text-md font-semibold text-white text-center">${produto.nome}</h3>
               <p class="col-span-2 text-sm text-slate-400 text-center">${produto.descricao}</p>
               <button class="col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-1 rounded-lg font-bold text-md">
                  R$ ${(produto.preco / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
               </button>
            </div>
         </div>`
      ).join('');
   })
   .catch(error => console.error('Erro ao carregar os produtos:', error));
