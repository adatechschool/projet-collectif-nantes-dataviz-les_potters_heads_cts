let donnees = []; // pour stocker data récupérée de du fetchpersonnage
let url = "https://potterapi-fedeperin.vercel.app/fr/characters";

function fetchpersonnages() {
  fetch(url)
    .then((response) => {
      // Vérifier si la réponse est ok
      if (!response.ok) {
        document.getElementById(
          "searchResult"
        ).innerHTML = `Erreur HTTP ! statut : ${response.status}`;
      }
      return response.json();
    })
    .then((data) => {
      donnees = data; // Stocker les données
      // for( i=0; i< data.length; i++)
      // console.log(data[i].hogwartsHouse); // Log pour vérification
      searchCharacter();
    })
    .catch((error) => {
      document.getElementById("searchResult").innerHTML = `
    <p>Erreur de chargement des personnages : ${error}</p>`;
    });
}
fetchpersonnages();
//fonction pour afficher et trier les personnages après une recherche
function searchCharacter() {
  const searchInput = document.getElementById("searchInput");
  const triParOrdre = document.getElementById("sortOrder");
  const maisonFiltrees = document.getElementById("houseSorting");
  let personnagesFiltres = [];

  function filtrerParMaison(personnages, maison) {
    // Si aucune maison n'est sélectionnée, retourne tous les personnages
    if (!maison) return personnages;

    // Sinon, filtre les personnages par maison
    return personnages.filter(
      (personnage) => personnage.hogwartsHouse === maison
    );
  }
  // Fonction de filtrage combiné
  function filtragePersonnages() {
    const recherche = searchInput.value.toLowerCase(); // transformer en miniscule le résultats de recherche
    const maison = maisonFiltrees.value;
    const ordre = triParOrdre.value;

    // Filtrage par recherche
    let personnagesRecherches = donnees.filter((personnage) =>
      personnage.fullName.toLowerCase().includes(recherche)
    );

    // Filtrage par maison
    personnagesFiltres = filtrerParMaison(personnagesRecherches, maison);

    // Tri alphabétique
    personnagesFiltres.sort((a, b) => {
      if (ordre === "az") {
        return a.fullName.localeCompare(b.fullName);
      } else if (ordre === "za") {
        return b.fullName.localeCompare(a.fullName);
      }
      return 0;
    });

    updateAffichage();
  }
  function updateAffichage() {
    let affichage = "<ul>";
    for (let personnage of personnagesFiltres) {
      affichage += `<li>
              <strong>${personnage.fullName}</strong>
              <p>Maison : ${personnage.hogwartsHouse}</p>
              <img src="${personnage.image}" alt="${personnage.fullName}">
              </li>`;
    }
    affichage += "</ul>";
    document.getElementById("searchResult").innerHTML = affichage;
  }

  searchInput.addEventListener("input", filtragePersonnages);
  maisonFiltrees.addEventListener("change", filtragePersonnages);
  triParOrdre.addEventListener("change", filtragePersonnages);
  filtragePersonnages();
}
searchCharacter();

