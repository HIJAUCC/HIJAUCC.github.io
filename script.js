// Changing text logic
const phrases = ["programmer", "3d modeller", "gamer"];
let index = 0;
const changingText = document.getElementById("changingText");

setInterval(() => {
  index = (index + 1) % phrases.length;
  changingText.textContent = phrases[index];
}, 2000);

// Dotted cursor trail
const canvas = document.getElementById("dotCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let dots = [];

window.addEventListener("mousemove", (e) => {
  dots.push({ x: e.clientX, y: e.clientY, alpha: 1 });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach((dot, i) => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
    ctx.fill();
    dot.alpha -= 0.02;
    if (dot.alpha <= 0) dots.splice(i, 1);
  });
  requestAnimationFrame(draw);
}
draw();
