const arrow = document.getElementById("arrow");
const guideBtn = document.getElementById("guidebutton");

// Arrow start coordinates 
const startX = 0;
const startY = 0;

// End coordinates 
let endX = window.innerWidth * 0.68;
let endY = window.innerHeight * 1.24;

// Update coordinates on resize
function setEndCoordinates() {
    endX = window.innerWidth * 0.68;
    endY = window.innerHeight * 1.24;
}
window.addEventListener("resize", setEndCoordinates);

function updateArrow(progress) {
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress;
    arrow.style.transform = `translate(${x}px, ${y}px)`;
}

// Scroll-based movement
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    // progress = 0 at top, 1 
    const scrollProgress = Math.min(Math.max(scrollTop / 500, 0), 1);
    updateArrow(scrollProgress);
});

// Click button to move arrow to end
guideBtn.addEventListener("click", () => {
    updateArrow(1); 
    arrow.style.display = "block";
});
