let players = [];

let winner = document.getElementById('winner');
let playerList = document.getElementById('playerList');
let newPlayer = document.getElementById('newPlayer');

let btnAdd = document.getElementById('btnAdd');
btnAdd.onclick = () => {
    let item = document.createElement('li');

    let name = newPlayer.value;
    let duplicate = players.filter(player => player.startsWith(name));
    let finalName;
    if (name === "") {
        return;
    } else if (duplicate.length > 0) {
        finalName = name + " " + (duplicate.length + 1);
    } else {
        finalName = name;
    }

    players.push(finalName);
    item.textContent = finalName;
    playerList.appendChild(item);
    newPlayer.value = '';
}


let btnRandom = document.getElementById('btnRandom');
btnRandom.onclick = () => {
    if (players.length < 1) {
        winner.textContent = "Ops! Nobody is here.";
    } else {
        let theWinner = players[Math.floor(Math.random() * players.length)];
        winner.style.opacity="0";
        winner.textContent = theWinner;
        setTimeout(() => {winner.style.opacity ="1";}, 200);
    }
}

newPlayer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        btnAdd.onclick();
    }
});


