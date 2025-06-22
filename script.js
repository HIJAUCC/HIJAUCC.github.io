const pacman = document.getElementById('pacman');

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

// 🖱️ Mouse follow for desktop
if (!isMobile()) {
  document.addEventListener('mousemove', (e) => {
    pacman.style.left = `${e.clientX}px`;
    pacman.style.top = `${e.clientY}px`;
  });
} else {
  // 📱 Random movement for mobile
  function moveRandom() {
    const x = Math.random() * (window.innerWidth - 40);
    const y = Math.random() * (window.innerHeight - 40);
    pacman.style.left = `${x}px`;
    pacman.style.top = `${y}px`;
  }

  setInterval(moveRandom, 1000);
}
