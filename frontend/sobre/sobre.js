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

const missionItems = [
   {
      icon: "../src/target.svg",
      label: "Missão",
      description: "Tornar os jogos mais acessíveis e proporcionar uma experiência de compra e diversão que realmente conecte todos os gamers do Brasil.",
      color: "from-cyan-500 to-blue-500"
   },
   {
      icon: "../src/trophy.svg",
      label: "Visão",
      description: "Ser a loja de jogos onde os clientes confiam, se sentem em casa e sempre encontram novidades, bons preços e um atendimento que entende de verdade quem joga.",
      color: "from-blue-500 to-purple-500"
   },
   {
      icon: "../src/heart.svg",
      label: "Valores",
      description: "Valorizamos o respeito a cada jogador, a conexão verdadeira com a comunidade local, a busca constante por novidades e a paixão genuína pelos games que nos move todos os dias.",
      color: "from-purple-500 to-pink-500"
   },
];

const infoItems = [
   {
      icon: "../src/calendar.svg",
      label: "Fundação",
      description: "Março de 2025",
   },
   {
      icon: "../src/map-pin.svg",
      label: "Sede",
      description: "Rio de Janeiro, Brasil"
   },
   {
      icon: "../src/users-round.svg",
      label: "Equipe",
      description: "4 colaboradores"
   }
];

const fundadores = [
   {
      name: "Isabelle Vitória",
      cargo: "Dev Front-End",
      curso: "Estudante de Ciência da Computação",
      image: "../src/isabelle.jpg",
      position: "-translate-y-15 scale-100"
   },
   {
      name: "Lucas Oliveira",
      cargo: "DBA",
      curso: "Estudante de Ciência da Computação",
      image: "../src/lucas-oliveira.jpg"
   },
   {
      name: "Mariana Muniz",
      cargo: "Dev Full-Stack",
      curso: "Estudante de Ciência da Computação",
      image: "../src/mariana-muniz.jpeg",
      position: "-translate-y-20 -translate-x-3 scale-140"
   },
   {
      name: "David Granado",
      cargo: "Dev Back-End",
      curso: "Estudante de Ciência da Computação",
      image: "../src/david-granado.jpeg",
   },
]

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
   
// Gerar os cards dos infos
const infos = document.getElementById("infos");

infos.innerHTML = infoItems.map((item) => 
   `
   <div class="text-white bg-slate-800/30 border-slate-700/50 transition-all duration-300 border-1 flex flex-row justify-start items-center rounded-lg p-8 gap-6 flex-shrink-0 w-2/3">
      <div>
         <img src="${item.icon}" class="w-8 h-8">
      </div>
      <div class="flex flex-col">
         <h1 class="">${item.label}</h1>
         <p class="">${item.description}</p>
      </div>
   </div>
   `
   ).join("");

// Gerar os cards das missões
const mission = document.getElementById("mission");

mission.innerHTML = missionItems.map((item) => 
   `
   <div class="flex flex-row gap-4 text-white">
      <div class="w-12 h-12 bg-gradient-to-b ${item.color} rounded-lg flex items-center justify-center flex-shrink-0">
         <img src="${item.icon}" class="w-6 h-6">
      </div>
      <div>
         <h1 class="text-xl font-bold pb-3">
            ${item.label}
         </h1>
         <p class="text-slate-400 text-md text-justify">
            ${item.description}
         </p>
      </div>
   </div>
   `
   ).join("");

// Gerar os cards dos fundadores
const fundador = document.getElementById("fundador");

fundador.innerHTML = fundadores.map((item) => 
   `
   <div class="bg-slate-800/30 border border-slate-700/50 flex flex-col rounded-lg overflow-hidden
               w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md
               shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
      <div class="h-80 sm:h-56 md:h-60 overflow-hidden">
         <img src="${item.image}" class="h-full w-full object-cover"/>
      </div>
      <div class="p-6">
         <h3 class="text-xl font-semibold text-white mb-1">${item.name}</h3>
         <p class="text-cyan-400 mb-3">${item.cargo}</p>
         <p class="text-slate-300 text-sm">${item.curso}</p>
      </div>
   </div>
   `
   ).join("");
   
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
