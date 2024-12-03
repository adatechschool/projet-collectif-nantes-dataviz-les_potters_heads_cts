const url = "https://potterapi-fedeperin.vercel.app/fr/characters";
let donnees = []; // pour stocker data;
let nbPeronGryffondor = 0;
let nbPersSerpentard = 0;
let nbPersPoufsouffle = 0;
let nbPersSerdaigle = 0;
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
  NbPersonnageParMaison();
  pieGraph();
}
fetchCharacters();

function filtragePersonnages() {
  const rechercheSaisie = document.getElementById("searchInput");
  const resultatRecherche = document.getElementById("searchResult");
  const maisonFiltrees = document.getElementById("houseSorting");
  let recherche = rechercheSaisie.value.toLowerCase(); // Filtrage par recherche
  let maison = maisonFiltrees.value;
  //affichage combiné personnage/maison
  let personnagesFiltres = donnees.filter(
    (personnage) =>
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
//fonction pour representer le % des personnages par rapport aux maisons:

// Récupération du contexte du canvas
const ctx = document.getElementById("repartitionMaison").getContext("2d");

// Création du graphique Pie
function pieGraph(){
const pourcentagePersonnageParMaison = new Chart(ctx, {
  type: "pie", // Type de graphique : pie
  data: {
    // Étiquettes pour chaque section
    labels: ["Gryffondor", "Serpentard", "TPoufsouffle", "Serdaigle"],

    // Jeu de données
    datasets: [
      {
        // Valeurs correspondant à chaque section
        data: [
          nbPeronGryffondor,
          nbPersPoufsouffle,
          nbPersSerpentard,
          nbPersSerdaigle,
        ],

        // Couleurs de chaque section
        backgroundColor: [
          "#cd121b", // rouge
          "#007e39", // vert
          "#f7bd01", // jaune
          "#00659b", // bleu
        ],

        // Bordure optionnelle autour des sections
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  },

  // Options de configuration
  options: {
    responsive: false, // Rend le graphique responsive
    plugins: {
      title: {
        display: true,
        text:"",
        font: {
          size: 28 // Taille du texte en pixels
        },
        color: 'Gold' // Couleur du texte
      },
      },
      legend: {
        position: "bottom", // Position de la légende
      },
    },

    // Animation optionnelle
    animation: {
      animateRotate: true, // Fait tourner le graphique à l'apparition
      animateScale: true, // Effet de zoom
    },
  })
};
//fonction pour calculer le nbre de personnage/maison:

function NbPersonnageParMaison() {
  for (let i = 0; i < donnees.length; i++) {
    if (donnees[i].hogwartsHouse === "Gryffondor") {
      nbPeronGryffondor++;
    } else if (donnees[i].hogwartsHouse === "Serpentard") {
      nbPersSerpentard++;
    } else if (donnees[i].hogwartsHouse === "Poufsouffle") {
      nbPersPoufsouffle++;
    } else {
      nbPersSerdaigle++;
    }
  }
  return {
    nbPeronGryffondor,
    nbPersPoufsouffle,
    nbPersSerpentard,
    nbPersSerdaigle,
  };
}
//fonction pour afficher le graph et cacher les personnages:
const boutonGraph= document.getElementById("pie-graph")
function displayGraph(){
  const affichage = document.getElementById("searchResult")
  const containerBouton = document.getElementById("container-graph");
  affichage.style.display= "none";
containerBouton.style.display= "block";
  
  }
  boutonGraph.addEventListener("click",displayGraph)