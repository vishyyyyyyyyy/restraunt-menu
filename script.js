const arrow = document.getElementById("arrow");
const guideBtn = document.getElementById("guidebutton");

// Arrow start coordinates
const startX = 0;
const startY = 0;

// End coordinates in viewport units
const endX = window.innerWidth * 0.67; //using screen width heights not px
const endY = window.innerHeight * 1.24;

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
