/* ==========================================================
   SITE DE MARIAGE
   Marlène & Frédéric

   Fichier : script.js

   Description :
   - Compte à rebours
   - Menu au défilement
   - Apparition des sections
   ========================================================== */

"use strict";


/* ==========================================================
   MENU
   ========================================================== */

const navigation = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (!navigation) return;

    if (window.scrollY > 80) {

        navigation.classList.add("nav-scroll");

    } else {

        navigation.classList.remove("nav-scroll");

    }

});


/* ==========================================================
   COMPTE A REBOURS
   ========================================================== */

/*
   Date du mariage

   Format :
   ISO 8601 : 13 h 30 en France (Europe/Paris, UTC+02:00 à cette date)
*/

const weddingDate = new Date("2027-09-18T13:30:00+02:00");


/* ==========================================================
   RECUPERATION DES ELEMENTS
   ========================================================== */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


/* ==========================================================
   AJOUT D'UN ZERO
   ========================================================== */

function format(value) {

    return value.toString().padStart(2, "0");

}


/* ==========================================================
   MISE A JOUR DU COMPTE A REBOURS
   ========================================================== */

let countdownInterval = null;

function updateCountdown() {

    if (!days || !hours || !minutes || !seconds) {
        clearInterval(countdownInterval);
        return false;
    }

    const now = new Date();

    const difference = weddingDate - now;

    if (difference <= 0) {

        days.textContent = "0";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(countdownInterval);
        return false;

    }

    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    const totalHours = Math.floor(

        (difference % (1000 * 60 * 60 * 24))

        / (1000 * 60 * 60)

    );

    const totalMinutes = Math.floor(

        (difference % (1000 * 60 * 60))

        / (1000 * 60)

    );

    const totalSeconds = Math.floor(

        (difference % (1000 * 60))

        / 1000

    );

    days.textContent = totalDays;

    hours.textContent = format(totalHours);

    minutes.textContent = format(totalMinutes);

    seconds.textContent = format(totalSeconds);

    return true;

}

if (updateCountdown()) {
    countdownInterval = setInterval(updateCountdown, 1000);
}


/* ==========================================================
   APPARITION DES SECTIONS
   ========================================================== */

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {

        threshold: 0.20

    }

);

sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});

}


/* ==========================================================
   SCROLL FLUIDE
   ========================================================== */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.getElementById(

            this.getAttribute("href").slice(1)

        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "instant"
                    : "smooth"

            });

        }

    });

});


console.log("✔ Site du mariage chargé");