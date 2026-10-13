// Prime Beta Games website interactions.
// Messages prepared by the contact form are addressed to the studio support email.
const CONTACT_EMAIL = "support@primebetagames.site";

document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12}) : null;
document.querySelectorAll(".reveal").forEach(el => {
  if (revealObserver) revealObserver.observe(el);
  else el.classList.add("visible");
});

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

// Sample store links are intentionally disabled until real store URLs are added.
document.querySelectorAll("[data-store]").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  showToast("Add this game's real store listing URL before publishing.");
}));

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`[Prime Beta Games] ${data.get("topic")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nReply email: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
