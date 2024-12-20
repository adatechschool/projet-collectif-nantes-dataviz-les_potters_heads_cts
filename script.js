const spellElement = document.getElementById("sortileges");
const backgroundInondation = document.getElementById("background-inondation");
const container = document.getElementById("container");
const GeminioDescription = document.getElementById("duplicatesObject");
const ApareciumDescription = document.getElementById("messagesSecrets");
const ReducioDescription = document.getElementById("reduireObjects");
const AguamentiDescription = document.getElementById("SummonsWater");
const BombardoDescription = document.getElementById("CreateExplosion");
const EvanescoDescription = document.getElementById("VanishesObjects");
const LumosDescription = document.getElementById("allumerLumière");
const FiniteIncantatemDescription = document.getElementById("stopSorts");
const IncendioDescription = document.getElementById("ConjuresFlames");
const EngorgioDescription = document.getElementById("agrandirObjects");

//ajout horloge
function showDate() {
  let date = new Date();
  //let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  let minutes = m + ":" + s;
  document.getElementById("horloge").innerHTML = minutes;
}
showDate();

setInterval(showDate, 1000); //setInterval mai à jour la function showDate()tous les seconds

function hiddenItems() {
  document.getElementById("boutons-sorts").style.visibility = "hidden";
  document.querySelector("footer").style.visibility = "hidden";
  document.querySelector("header").style.visibility = "hidden";
}
hiddenItems();

function displayItems() {
  document.body.style.backgroundColor = "#282F44";
  document.querySelector("h1").style.color = "black";
  document.querySelector("footer").style.visibility = "visible";
  document.querySelector("header").style.visibility = "visible";
  document.getElementById("boutons-sorts").style.visibility = "visible";
}
document.addEventListener("click", displayItems);

//faire apparaitre les sorts en fonction du temps
async function fetchSpells() {
  console.log(fetchSpells);
  try {
    const response = await fetch("./spells.json");
    const data = await response.json();

    //ajouter les noms des sorts dans leurs bouttons html
    document.getElementById("Aguamenti").innerHTML = data[0].name;
    document.getElementById("Bombardo").innerHTML = data[2].name;
    document.getElementById("Incendio").innerHTML = data[7].name;
    document.getElementById("Geminio").innerHTML = data[6].name;
    document.getElementById("Aparecium").innerHTML = data[1].name;
    document.getElementById("Reducio").innerHTML = data[9].name;
    document.getElementById("Evanesco").innerHTML = data[4].name;
    document.getElementById("Finite-incantatem").innerHTML = data[5].name;
    document.getElementById("Engorgio").innerHTML = data[3].name;
    document.getElementById("Lumos").innerHTML = data[8].name;

    //Ajouter descption au paragraphe descrptif de chaque bouton:
    AguamentiDescription.innerHTML = data[0].description;
    BombardoDescription.innerHTML = data[2].description;
    IncendioDescription.innerHTML = data[7].description;
    GeminioDescription.innerHTML = data[6].description;
    ApareciumDescription.innerHTML = data[1].description;
    ReducioDescription.innerHTML = data[9].description;
    EvanescoDescription.innerHTML = data[4].description;
    FiniteIncantatemDescription.innerHTML = data[5].description;
    EngorgioDescription.innerHTML = data[3].description;
    LumosDescription.innerHTML = data[8].description;
  } catch (error) {
    console.error("Erreur lors du chargement des sorts:", error);
    spellElement.innerHTML = "Erreur lors du chargement des données";
  }
}

fetchSpells();

// fonction pour inondation suite au click sur Aguamenti button:
function inondation() {
  const AguamentiBtn = document.getElementById("Aguamenti");
  AguamentiBtn.addEventListener("mouseover", () => {
    // Ajoute la classe pour déclencher l'animation de remplissage
    backgroundInondation.classList.add("inondation");

    // Désactive le bouton pendant l'animation
    AguamentiBtn.disabled = true;

    // Réinitialise l'animation après 3 secondes
    setTimeout(() => {
      backgroundInondation.classList.remove("inondation");
      AguamentiBtn.disabled = false;
    }, 3000);
  });
}
inondation();

//fonction pour effet explosion bombe suite au click sur Bombardo button:

function bombe() {
  const BombardoBtn = document.getElementById("Bombardo");
  BombardoBtn.addEventListener("mouseover", () => {
    // Créer l'élément d'explosion
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");

    // Ajouter l'explosion au body
    document.body.appendChild(explosion);

    // Supprimer l'élément d'explosion après l'animation
    setTimeout(() => {
      document.body.removeChild(explosion);
    }, 500);
  });
}
bombe();

//fonction pour effet incendie suite au click sur Incendio button:
function incendie() {
  const IncendioBtn = document.getElementById("Incendio");
  IncendioBtn.addEventListener("mouseover", () => {
    const fire = document.getElementById("fire");
    const particulesCount = 50;

    for (let i = 0; i < particulesCount; i++) {
      const particule = document.createElement("div");
      particule.className = "particule";
      particule.style.animationDelay = `${Math.random()}s`;
      particule.style.left = `${Math.random() * 100}%`;
      fire.appendChild(particule);
      setTimeout(() => {
        fire.removeChild(particule);
      }, 2000);
    }
  });
}
incendie();
//fonction pour dupliquer la bougie:
function dupliquerObjets() {
  for (let i = 0; i < 1; i++) {
    const img = document.createElement("img");
    img.src = "./images/bougie.png";
    img.alt = "bougie";
    img.classList.add("bougie");
    img.classList.add("bougie-dupplique");
    container.appendChild(img);
  }
}

document
  .getElementById("Geminio")
  .addEventListener("mouseover", dupliquerObjets);

document.getElementById("Geminio").addEventListener("mouseout", () => {
  const bougies = document.querySelectorAll(".bougie-dupplique"); // Récupère tous les éléments correspondants

  bougies.forEach((bougie) => {
    if (container.contains(bougie)) {
      container.removeChild(bougie); // Suppression des éléments
    }
  });
});

//fonction pour faire grossir l'objet
function growObject() {
  const growth = document.getElementById("chaudron");
  growth.classList.add("cauldron");
}

document.getElementById("Engorgio").addEventListener("mouseover", growObject);

//fonction pour remettre à la bonne taille l'objet
function shrinkObject() {
  const growth = document.getElementById("chaudron");
  growth.classList.remove("cauldron"); // Supprime la classe pour revenir à l'état initial
}

document.getElementById("Engorgio").addEventListener("mouseout", shrinkObject);

// Fonction pour activer la lumière
function lightIn() {
  const light = document.getElementById("lumos-container");
  light.style.display = "flex"; // Afficher le conteneur
}

// Fonction pour éteindre la lumière
function lightOut() {
  const light = document.getElementById("lumos-container");
  light.style.display = "none"; // Cacher le conteneur
}

document.getElementById("Lumos").addEventListener("mouseover", lightIn);
document.getElementById("Lumos").addEventListener("mouseout", lightOut);

//fonction pour rétrécir Object le livre
const ReducioBtn = document.getElementById("Reducio");
function retrecirObject() {
  const reduire = document.getElementById("livre"); //je stock le livre dans reduire

  reduire.classList.add("book"); //sa ajoute book qui à 50px en css pour reduire visuelement
}
//ecouter le survol de la souris sur le bouton ReductioBtn et appliqur la fonction, retrecirObject
ReducioBtn.addEventListener("mouseover", retrecirObject);

//fonction pour remettre le livre à sa taille initiale
function tailleNormal() {
  const reduire = document.getElementById("livre"); //je stock le livre dans reduire
  reduire.classList.remove("book"); //retirer book pour mettre le livre à sa taille normal
}

ReducioBtn.addEventListener("mouseout", tailleNormal);

// fonction pour Finite Incantente: bouton qui fait disparaitre tout les autres boutons:
function finiteIncantente() {
  const FiniteIncantatemBtn = document.getElementById("Finite-incantatem");
  FiniteIncantatemBtn.addEventListener("mouseover", () => {
    hiddenItems();
    setTimeout(() => {
      displayItems();
    }, 2000);
  });
}
finiteIncantente();

document.addEventListener("DOMContentLoaded", function () {
  const apareciumButton = document.getElementById("Aparecium");
  const messages = document.querySelectorAll("p.message"); // Sélectionne tous les paragraphes avec la classe 'message'

  // Cacher tous les paragraphes au départ
  messages.forEach((message) => {
    message.classList.remove("message-active");
    message.style.display = "none"; // Assurez-vous qu'ils sont cachés
    message.style.opacity = 0; // Initialement invisible
  });

  // Affiche les paragraphes au survol du bouton
  apareciumButton.addEventListener("mouseover", function () {
    messages.forEach((message) => {
      message.classList.add("message-active");
      message.style.display = "block"; // Affiche le paragraphe
      setTimeout(() => {
        // Attendre une petite durée avant de rendre visible
        message.style.opacity = 1; // Rendre visible
      }, 10); // Délai en ms
    });
  });

  // Cache les paragraphes quand la souris quitte le bouton
  apareciumButton.addEventListener("mouseout", function () {
    messages.forEach((message) => {
      message.style.opacity = 0; // Rendre invisible
      setTimeout(() => {
        // Attendre la fin de la transition pour cacher complètement
        message.style.display = "none";
        message.classList.remove("message-active");
      }, 500); // Durée de la transition en ms
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("Evanesco");
  const images = document.querySelectorAll("img"); // Sélectionne tous les paragraphes

  // Cacher tous les paragraphes au départ
  images.forEach((image) => image.classList.remove("buttons"));

  // Affiche les paragraphes au survol du bouton + Cache les paragraphes au bout de 1 seconde
  button.addEventListener("mouseover", function () {
    images.forEach((image) => image.classList.add("buttons"));
    setTimeout(() => {
      images.forEach((image) => image.classList.remove("buttons"));
      }, 1000);
  });
});
