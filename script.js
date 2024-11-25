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
