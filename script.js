const spellElement = document.getElementById("sortileges");
const container = document.getElementById("container"); 

//changement couleur de la page du noir au plus clair
function changeColor() {
  document.body.style.backgroundColor = "white";
  document.querySelector("h1").style.color = "black";
}
document.addEventListener("click", changeColor);

//faire apparaitre les sorts en fonction du temps
async function fetchSpells() {
  try {
    const response = await fetch("./spells.json");
    const data = await response.json();

    // Liste des index à afficher
    const spellIndexes = [2, 5, 11, 25, 32, 46, 21, 61, 30, 41];
    let currentIndex = 0;

    // Fonction pour afficher un sort
    function afficherSpells() {
      if (currentIndex < spellIndexes.length) {
        const index = spellIndexes[currentIndex];
        const spell = data[index];

        // ajouter le sort a HTML
        spellElement.innerHTML += ` ${spell.name} <br>`;

        currentIndex++;
        afficherSpells();
      }
      
    }
    afficherSpells();
  } catch (error) {
    console.error("Erreur lors du chargement des sorts:", error);
    spellElement.innerHTML = "Erreur lors du chargement des données";
  }
  
}

fetchSpells();



function showDate() {
    let date =new Date()
    //let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    //if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    let  minutes= m + ':' + s
    document.getElementById('horloge').innerHTML = minutes;
    console.log(minutes)
 }
 showDate()
 setInterval(showDate, 1000);//setInterval mai à jour la function showDate()tous les seconds

 function dupliquerObjets(){
  //dupliquerDesObjects

for (let i = 0; i < 1; i++) {
    const img = document.createElement("img");
    img.src ="./images/bougie.png"
    img.alt = "bougie";
    img.classList.add("bougie");
    img.classList.add("bougie-dupplique")
    container.appendChild(img);
  }
}

document.getElementById("Geminio").addEventListener("mouseover", dupliquerObjets)

document.getElementById("Geminio").addEventListener('mouseout', () => {

  const bougies = document.querySelectorAll(".bougie-dupplique"); // Récupère tous les éléments correspondants

  bougies.forEach((bougie) => {
    if (container.contains(bougie)) {
        container.removeChild(bougie); // Suppression des éléments
    }
});

  
});

