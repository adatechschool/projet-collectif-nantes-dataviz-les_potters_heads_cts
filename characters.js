let url = "https://potterapi-fedeperin.vercel.app/fr/characters";
let donnees = []; // pour stocker data
async function fetchCharacters() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    donnees = data;
    console.log(data);
  } catch (error) {
    document.body.innerHTML += `<h2>Erreur de chargement des personnages${error}</h2`;
  }
  filtragePersonnages();
}
fetchCharacters();

function filtragePersonnages() {
  const rechercheSaisie = document.getElementById("searchInput");
  const resultatRecherche = document.getElementById("searchResult");
  const maisonFiltrees = document.getElementById("houseSorting");
  let recherche = rechercheSaisie.value.toLowerCase(); // Filtrage par recherche
  let maison = maisonFiltrees.value
  //affichage combiné personnage/maison
  let personnagesFiltres = donnees.filter((personnage) =>
    personnage.fullName.toLowerCase().includes(recherche) && 
  (maison === "all" || personnage.hogwartsHouse === maison)
);
  //tri des personnages par ordre alphabétique:
  let ordreChoisi = document.getElementById("sortOrder");
  let ordre = ordreChoisi.value;
  personnagesFiltres.sort((a, b) => {
    if (ordre === "az") {
      return a.fullName.localeCompare(b.fullName);
    } else if (ordre === "za") {
      return b.fullName.localeCompare(a.fullName);
    }
  });

  //affichage:
  let affichage = "<ul>";
  for (let personnage of personnagesFiltres) {
    affichage += `<li>
                  <h3><strong>${personnage.fullName}</strong></h3>
                  <p>Maison : ${personnage.hogwartsHouse}</p>
                  <p> Actor: ${personnage.interpretedBy}</p>
                  <img src="${personnage.image}" alt="${personnage.fullName}">
                  </li>`;
  }
  affichage += "</ul>";
  resultatRecherche.innerHTML = affichage;
  rechercheSaisie.addEventListener("input", filtragePersonnages);
  ordreChoisi.addEventListener("change", filtragePersonnages);
  maisonFiltrees.addEventListener("change", filtragePersonnages);
}
