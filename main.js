function createGame(player1, hours, player2){
    return `
    <li>
        <img src="./assets/${player1}.svg" alt="brazil">
        <strong>${hours}</strong>
        <img src="./assets/${player2}.svg" alt="serbiaf">
    </li>
    `
}


function createCard(date, day, games) {
    return `
        <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
        </div>
    `
}

document.querySelector(".app").innerHTML = `
<header class="header">
    <img src="./assets/logo.svg" alt="Logo da nlw">
</header>
<main class="cards">
    ${createCard("24/11", "Quinta",
        createGame("brazil", "16:00", "serbia")+ 
        createGame("southkorea", "10:00", "uruguay") +
        createGame("switzerland","07:00","cameroon") +
        createGame("portugal","13:00","enough")
    )}
    ${createCard("28/11", "Segunda",
        createGame("brazil", "13:00", "switzerland")
    )}
    ${createCard("02/12", "Sexta",
        createGame("brazil", "16:00", "cameroon") 
    )}
</main>
`