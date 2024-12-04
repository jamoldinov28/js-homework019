const players = [
    { name: "Cristiano Ronaldo",  age: 39, team: "Al-Nassr" },
    { name: "Kevin De Bruyne",  age: 32, team: "Manchester City" },
    { name: "Kylian Mbappe", age: 25, team: "Real Madrid" },
    { name: "Rodrigo", age: 26, team: "Real Madrid" },
    { name: "Neymar Jr", age: 31, team: "Al-Hilal" },
    { name: "Erling Haaland", age: 23, team: "Manchester City" },
    { name: "Vini jn", age: 24, team: "Real Madrid" },
    { name: "Salax", age: 30, team: "Liverpool" },
    { name: "Jud Bellingham", age: 27, team: "Real Madrid" },


];

function randomFudbol () {
    const table = document.querySelector("#table");
    const random = Math.floor(Math.random() * players.length);
    const player = players[random];

    const qator = table.insertRow(); 
    qator.insertCell(0).innerText = table.rows.length; 
    qator.insertCell(1).innerText = player.name; 
    qator.insertCell(2).innerText = player.age; 
    qator.insertCell(3).innerText = player.team; 
};