// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing");

const words = [
    "Java Developer",
    "Frontend Developer",
    "DSA Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".card, .skill-card, .project-card, .counter, .timeline-item"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter h1");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const achievementSection =
        document.getElementById("achievements");

    const top =
        achievementSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const increment =
                target / 50;

            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count) +
                        (target >= 100 ? "+" : "");

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        target +
                        (target >= 100 ? "+" : "");
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener("scroll", startCounter);


// =========================
// DARK MODE TOGGLE
// =========================

const darkBtn =
    document.getElementById("dark-mode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

    if (
        localStorage.getItem("theme") === "dark"
    ) {
        document.body.classList.add("dark");
    }
}


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// CURRENT YEAR FOOTER
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}