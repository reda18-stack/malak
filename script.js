const countdownElement = document.getElementById("countdown");
const surpriseButton = document.getElementById("surprise-btn");
const heartbeat = document.getElementById("heartbeat");

// 🎯 Countdown target: January 6, 2026
const targetDate = new Date("Nov 15, 2025 00:00:00").getTime();

// 🔊 Play heartbeat after user click (autoplay restrictions)
document.body.addEventListener(
  "click",
  () => {
    if (heartbeat.paused) {
      heartbeat.volume = 0.5;
      heartbeat.play().catch(() => {});
    }
  },
  { once: true }
);

// ⏱️ Countdown update
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    countdownElement.textContent = "🎉 The day has arrived!";
    surpriseButton.style.display = "inline-block";
    heartbeat.pause();
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

// 🎁 Redirect to your surprise
function goToSurprise() {
  window.location.href = "https://reda18-stack.github.io/story-of-my-angel/"; // replace this
}
