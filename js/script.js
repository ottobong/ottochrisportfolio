const header = document.querySelector("header");


const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelector(".number span");

// Sticky Navbar

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);


// Scroll reveal code

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { delay: 600, origin: "top" });


function mlCounter() {
    if (!hasreached(ml_section)) return;
    console.log("You've reached ");
}


// Portfolio Filter code

let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },
});