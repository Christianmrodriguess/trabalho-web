const links = document.querySelectorAll("nav a");
const url = window.location.href;

links.forEach(link => {
  if (url.includes(link.getAttribute("href"))) {
    link.classList.add("ativo");
  }
});