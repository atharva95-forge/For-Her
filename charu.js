
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTS
    const starsContainer = document.getElementById("stars");
    const heartsContainer = document.getElementById("hearts");
    const screens = document.querySelectorAll(".screen");


    // CREATE STARS
    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 4 + "s";

        starsContainer.appendChild(star);
    }


    // FLOATING HEARTS
    function createHeart() {

        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "♡";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (Math.random() * 18 + 12) + "px";
        heart.style.animationDuration = (Math.random() * 5 + 7) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 12000);
    }

    setInterval(createHeart, 1400);


    // SCREEN NAVIGATION
    window.goToScreen = function (number) {

        screens.forEach(function (screen) {
            screen.classList.remove("active");
        });

        const nextScreen = document.getElementById("screen" + number);

        if (nextScreen) {
            nextScreen.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    // REVEAL LOVE CARDS
    window.revealCard = function (card) {

        card.classList.toggle("revealed");

    };


    // RESTART THE WEBSITE
    window.restartUniverse = function () {

        document.querySelectorAll(".love-card").forEach(function (card) {
            card.classList.remove("revealed");
        });

        goToScreen(1);

    };

});
