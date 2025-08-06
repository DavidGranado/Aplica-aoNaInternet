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

const statsItems = [
   {
      icon: "../src/gamepad-2-azul.svg",
      label: "Jogos Disponíveis",
      value: "20",
   },
   {
      icon: "../src/user-azul.svg",
      label: "Clientes",
      value: "350",
   },
];

const cardsItems = [
   {
      icon: "../src/gamepad-2-branco.svg",
      label: "Grande Biblioteca",
      description: "Acesso a jogos de todos os gêneros e plataformas.",
      color: "from-cyan-500 to-blue-500"
   },
   {
      icon: "../src/gamepad-2-branco.svg",
      label: "Comunidade Global",
      description: "Conecte-se com jogadores do mundo todo.",
      color: "from-blue-500 to-purple-500"
   },
   {
      icon: "../src/gamepad-2-branco.svg",
      label: "Ótimas Ofertas",
      description: "As melhores ofertas e promoções exclusivas para os clientes.",
      color: "from-purple-500 to-pink-500"
   }
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

// Gerar as estatísticas
const stats = document.getElementById("stats");

stats.innerHTML = statsItems.map((stat) => 
   `
   <div class="text-center p-8 bg-slate-800/50 border-slate-700/50 border-1 backdrop-blur-sm rounded-lg">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
         <img src="${stat.icon}" class="w-6 h-6" alt="${stat.label}">
      </div>
      <div class="text-2xl md:text-3xl font-bold text-white mb-2">${stat.value}</div>
      <div class="text-slate-400 text-sm md:text-base">${stat.label}</div>
   </div>
   `
).join("");

// Gerar os cards
const cards = document.getElementById("cards");

cards.innerHTML = cardsItems.map((card) =>
   `
   <div class="bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 border-1 flex justify-center items-center flex-col rounded-lg p-6 gap-4">
      <div class="w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center">
         <img src="${card.icon}" class="w-6 h-6" alt="${card.label}" />
      </div>
      <h3 class="text-lg font-bold">${card.label}</h3>
      <p class="text-slate-400 text-center">${card.description}</p>
   </div>
   `
).join("");

// Hover nos botões do menu
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

