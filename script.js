const spellElement = document.getElementById("sortileges");
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
const NoxDescription=document.getElementById('éteindreLumière')



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
    Geminiobutton.innerHTML=data
    
      
    }
    afficherSpells();
  } catch (error) {
    console.error("Erreur lors du chargement des sorts:", error);
    spellElement.innerHTML = "Erreur lors du chargement des données";
  }
  


fetchSpells();



function showDate() {//fonction pour récupere la date 
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
  //upliquerDesObjects

for (let i = 0; i < 1; i++) {
    const img = document.createElement("img");
    img.src ="./images/bougie.png"
    img.alt = "bougie";
    img.classList.add("bougie");
    container.appendChild(img);

  }
}
//dupliquerObjets()
console.log(document.getElementById("Geminio").addEventListener("mouseover", dupliquerObjets))

apparaîtreMessage.innerHTML += ` ${spell.descpriton}`;
apparaîtreMessage.addEventListener("click", () => {
  console.log(apparaîtreMessage)
  if(apparaîtreMessage.style.display != "none"){
    apparaîtreMessage.style.display = "none";
  } else {
    apparaîtreMessage.style.display = "block";
  }
})


// document.getElementById("Aparecium").addEventListener(
//   "click",
//   function afficherMessagesecrets () {
//     document.getElementById("").hidden = true;
//     document.getElementById("impressionnant").hidden = false;
//   },
//   false,
// );
                         
  

 
 
//const apparaitreMessage = document.getElementById('apparaîtreMessage');

// apparaîtreMessage.innerHTML += data[index];
// document.querySelectorAll(section).style.display='spellIndexes'
// apparaîtreMessage.addEventListener("click", () => {
  
//   if (apparaîtreMessage.style.display !== "none") {
//     apparaîtreMessage.style.display = "none";
//   } else {
//     apparaîtreMessage.style.display = "block";
//   }
// });