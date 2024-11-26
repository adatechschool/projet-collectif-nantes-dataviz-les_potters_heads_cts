const testHTML = document.getElementById("sortileges");

async function spellsJSON() {
  const response = await fetch("./spells.json");
  const data = await response.json();
 
  testHTML.innerHTML +=
    `${data[2].name} 
    ${data[5].name } 
    ${data[11].name} 
    ${data[25].name} 
    ${data[32].name} 
    ${data[46].name} 
    ${data[50].name} 
    ${data[61].name} 
    ${data[30].name} 
    ${data[41].name}`
  
}

spellsJSON();



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