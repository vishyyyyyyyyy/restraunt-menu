const arrow = document.getElementById("arrow");
const guideBtn = document.getElementById("guidebutton");

// Arrow start coordinates
const startX = 0;
const startY = 0;

let endX, endY;

function setEndCoordinates() {
    if (window.innerWidth <= 600) {
        // Mobile adjustments
        endX = window.innerWidth * 0.6;  // tweak these for mobile
        endY = window.innerHeight * 1.1;
    } else {
        // Desktop
        endX = window.innerWidth * 0.68;
        endY = window.innerHeight * 1.24;
    }
}

setEndCoordinates(); // initial calculation

function updateArrow(progress) {
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress;
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

// Recalculate if the window is resized
window.addEventListener("resize", setEndCoordinates);
