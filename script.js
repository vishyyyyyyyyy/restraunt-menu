const arrow = document.getElementById("arrow");
const guideBtn = document.getElementById("guidebutton");

// Arrow start coordinates (0,0)
const startX = 0;
const startY = 0;

// End coordinates as percentage of viewport
let endXPercent = window.innerWidth <= 600 ? 60 : 68; // % of width
let endYPercent = window.innerWidth <= 600 ? 110 : 124; // % of height

function updateEndCoordinates() {
    endXPercent = window.innerWidth <= 600 ? 60 : 68;
    endYPercent = window.innerWidth <= 600 ? 110 : 124;
}

function updateArrow(progress) {
    const x = (endXPercent * window.innerWidth / 100) * progress;
    const y = (endYPercent * window.innerHeight / 100) * progress;
    arrow.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollProgress = Math.min(Math.max(scrollTop / 500, 0), 1);
    updateArrow(scrollProgress);
});

guideBtn.addEventListener("click", () => {
    updateArrow(1); // Move arrow to end point
    arrow.style.display = "block";
});

// Recalculate percentages if window is resized
window.addEventListener("resize", updateEndCoordinates);
