// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Testimonials carousel
let tIndex = 0;
const testimonials = document.querySelectorAll(".t-card");
setInterval(() => {
  testimonials[tIndex].classList.remove("active");
  tIndex = (tIndex + 1) % testimonials.length;
  testimonials[tIndex].classList.add("active");
}, 4000);
