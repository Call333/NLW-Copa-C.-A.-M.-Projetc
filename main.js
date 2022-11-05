function createGame(player1, hours, player2) {
  return `
    <li>
        <img src="./assets/${player1}.svg" alt="brazil">
        <strong>${hours}</strong>
        <img src="./assets/${player2}.svg" alt="serbiaf">
    </li>
    `;
}


let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
        <div class="card" style="animation-delay: ${delay}s;">
            <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
        </div>
    `
}
// template literals

document.querySelector(".cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("southkorea", "10:00", "uruguay") +
      createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "enough")
  ) +
  createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "Sexta", createGame("brazil", "16:00", "cameroon"));
