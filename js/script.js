const header = document.querySelector("header");


const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelector(".number span");


const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn")
const next_btn = document.querySelector(".next-btn")

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


//Modal Popup 

let currentIndex = 0;

zoom_icons.forEach(icn => 
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        changeImage(currentIndex);
    })
);

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling")
});

prev_btn.addEventListener("click", () => {
    if(currentIndex === 0) {
        currentIndex = 5;
    } else {
        currentIndex--;
    }
    changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
    if(currentIndex === 5) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeImage(currentIndex);
});

function changeImage(index) {
    images.forEach(img => img.classList.remove("showImage"))
    images[index].classList.add("showImage");
}