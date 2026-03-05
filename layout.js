async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;

  if (id === "navbar") {
    setActiveLink();
  }
}

function setActiveLink() {
  const links = document.querySelectorAll(".navbar a"); // Finds all navbar links elements
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath == linkPath) {
      link.classList.add("active");
    }
  });
}

loadComponent("navbar", "./components/navbar.html");
loadComponent("footer", "./components/footer.html");
