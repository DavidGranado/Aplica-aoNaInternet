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

// Gerar os cards de novidades com responsividade nas imagens e textos
const novidade = document.getElementById("novidades-card");

fetch('../../admin/novidades/listar_novidades.php')
   .then(response => response.json())
   .then(data => {
      novidade.innerHTML = data.map(novidade => `
         <div class="bg-slate-800/30 border border-slate-700/50 flex flex-col rounded-lg overflow-hidden">
            <div class="h-48 sm:h-56 md:h-64 overflow-hidden hover:scale-105 transition-transform duration-300 rounded-t-lg">
               <img src="../src/posts-images/${novidade.imagem}" class="w-full h-full object-cover" alt="${novidade.titulo}" />
            </div>
            <div class="p-4 grid grid-cols-2 gap-2">
               <h3 class="col-span-2 text-lg sm:text-xl font-semibold text-white text-justify">${novidade.titulo}</h3>
               <p class="col-span-2 text-sm sm:text-base text-slate-400 text-justify">${novidade.conteudo}</p>
               <div class="col-span-1 flex items-center gap-2 text-sm pt-2">
                  <img src="../src/user-azul.svg" class="w-4 h-4 inline-block" alt="Autor" />
                  <p class="text-light-blue truncate">${novidade.autor}</p>
               </div>
               <div class="col-span-1 flex items-center gap-2 justify-end text-sm pt-2">
                  <img src="../src/calendar.svg" class="w-4 h-4 inline-block" alt="Data" />
                  <p class="text-light-blue">${novidade.data}</p>
               </div>
            </div>
         </div>
      `).join('');
   })
   .catch(error => console.error('Erro ao carregar os novidades:', error));