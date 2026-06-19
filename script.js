```javascript
// Typing Animation

const text = [
    "AI & Cybersecurity Intern",
    "Python Developer",
    "AWS Cloud Enthusiast",
    "Problem Solver",
    "Future Software Engineer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[i];

    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    document.getElementById("typing").textContent =
        current.substring(0, j);

    if (!isDeleting && j === current.length) {

        setTimeout(() => {
            isDeleting = true;
        }, 1200);

    }

    if (isDeleting && j === 0) {

        isDeleting = false;
        i++;

        if (i === text.length) {
            i = 0;
        }

    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();


// Dark / Light Mode

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = "☀️";
    } else {
        toggle.innerHTML = "🌙";
    }

});


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});

const sections = document.querySelectorAll(
    ".section, .project-card, .skill-card, .stat-card, .card"
);

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// Navbar Active Link Highlight

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});
```
