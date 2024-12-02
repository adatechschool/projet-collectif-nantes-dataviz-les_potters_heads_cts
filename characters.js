let donnees = []; // pour stocker data récupérée de du fetchpersonnage
let url = "https://potterapi-fedeperin.vercel.app/fr/characters";

function fetchpersonnages(){
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
    //console.log(donnees); // Log pour vérification
  })
  .catch((error) => {
    document.getElementById("searchResult").innerHTML = `
    <p>Erreur de chargement des personnages : ${error}</p>`;
  });
};
fetchpersonnages();
//fonction pour afficher et trier les personnages après une recherche
function searchCharacter() {
  const searchInput = document.getElementById("searchInput");
  const triParOrdre = document.getElementById("sortOrder");
  let personnagesFiltres =[]
  //fonction d'affichage des personnages
  function affichage() {
    const recherche = searchInput.value.toLowerCase(); // transformer en miniscule le résultats de recherche
    
    personnagesFiltres = donnees.filter((personnage) =>
      personnage.fullName.toLowerCase().includes(recherche)
    );
    updateAffichage();
  }
  //fonction pour trier les personnages affichés
  function tri() {
    const ordre = triParOrdre.value;

    personnagesFiltres.sort((a, b) => {
      if (ordre === "az") {
        return a.fullName.localeCompare(b.fullName);
      } else if (ordre === "za") {
        return b.fullName.localeCompare(a.fullName);
      }
      return 0; // Pas de tri si ordre non valide
    });
    updateAffichage();
  }
    function updateAffichage(){
      let affichage = "<ul>";
      for (let personnage of personnagesFiltres) {
        affichage += `<li>
              <strong>${personnage.fullName}</strong>
              <p>Maison : ${personnage.hogwartsHouse}</p>
              <img src="${personnage.image}" alt="${personnage.fullName}">
              </li>`;
      }
      affichage += "</ul>"
      document.getElementById("searchResult").innerHTML = affichage;
    }
  searchInput.addEventListener("input", affichage);
  triParOrdre.addEventListener("change", tri);
}
searchCharacter();

function triParMaison(){
  
}
