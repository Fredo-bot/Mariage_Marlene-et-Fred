/* ==========================================================
   CONFETTIS
   ========================================================== */

const container = document.getElementById("confetti-container");

const colors = [
    "gold",
    "white",
    "cream",
    "green"
];

const NUMBER_OF_CONFETTI = 35;

for (let i = 0; i < NUMBER_OF_CONFETTI; i++) {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.classList.add(
        colors[Math.floor(Math.random() * colors.length)]
    );

    // Position horizontale
    confetti.style.left = Math.random() * 100 + "%";

    // Taille
    const width = 3 + Math.random() * 4;
    const height = width * (2 + Math.random());

    confetti.style.width = width + "px";
    confetti.style.height = height + "px";

    // Durée
    confetti.style.animationDuration =
        (10 + Math.random() * 10) + "s";

    // Décalage de départ
    confetti.style.animationDelay =
        (-Math.random() * 20) + "s";

    // Rotation initiale
    confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;

    container.appendChild(confetti);

}