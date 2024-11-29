const spellElement = document.getElementById("sortileges");
const AguamentiBtn = document.getElementById("Aguamenti");
const BombardoBtn = document.getElementById("Bombardo");
const IncendioBtn = document.getElementById("Incendio");
const backgroundInondation = document.getElementById("background-inondation");
const container = document.getElementById("container");
const Geminiobutton = document.getElementById('Geminio')
const geminioDescription=document.getElementById('duplicatesObject')
const ApareciumDescription=document.getElementById('messagesSecrets')
const reducioDescription=document.getElementById('reduireObjects')
const AguamentiDescription=document.getElementById('SummonsWater')
const BombardoDescription=document.getElementById('CreateExplosion')
const EvanescoDescription=document.getElementById('VanishesObjects')
const LumoDescription=document.getElementById('allumerLumière')
const FiniteIncantatemDescription=document.getElementById('stopSorts')
const IncendioDescription=document.getElementById('ConjuresFlames')
const EngorgioDescription=document.getElementById('agrandirObjects')

//ajout horloge
function showDate() {
  let date = new Date();
  //let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  //if( h < 10 ){ h = '0' + h; }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  let minutes = m + ":" + s;
  document.getElementById("horloge").innerHTML = minutes;
  console.log(minutes);
}
showDate();
setInterval(showDate, 1000); //setInterval mai à jour la function showDate()tous les seconds



function changeColor() {
    document.body.style.backgroundColor = "#282F44";
    document.querySelector("h1").style.color = "black";
  }
document.addEventListener("click", changeColor);

//faire apparaitre les sorts en fonction du temps
async function fetchSpells() {
  try {
    const response = await fetch("./spells.json");
    const data = await response.json();

    AguamentiBtn.innerHTML = `${data[2].name}`;
    BombardoBtn.innerHTML = `${data[11].name}`;
    IncendioBtn.innerHTML = `${data[41].name}`;
    Geminiobutton.innerHTML=data
    
      
    }
   
   catch (error) {
    console.error("Erreur lors du chargement des sorts:", error);
    spellElement.innerHTML = "Erreur lors du chargement des données";
  }
}


fetchSpells();

// fonction pour inondation suite au click sur Aguamenti button:
function inondation() {
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

function dupliquerObjets() {
  //dupliquerDesObjects

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
function growObject () {
  const growth = document.getElementById('chaudron')
    growth.classList.add("cauldron")
  }

document.getElementById("Engorgio").addEventListener("mouseover", growObject);

//fonction pour remettre à la bonne taille l'objet
function shrinkObject() {
  const growth = document.getElementById("chaudron");
  growth.classList.remove("cauldron"); // Supprime la classe pour revenir à l'état initial
}


document.getElementById("Engorgio").addEventListener("mouseout", shrinkObject);
 
 
//fonction pour activer la lumière
function lightIn () {
  const light = document.getElementById("lumos-container")
  light.classList.add("active")
}

document.getElementById("Lumos").addEventListener("mouseover", lightIn);

//fonction pour éteindre la lumière
function lightOut () {
  const light = document.getElementById("lumos-container")
  light.classList.remove("active")
}

document.getElementById("Lumos").addEventListener("mouseout", lightOut);