async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

loadComponent("navbar", "./components/navbar.html");
loadComponent("footer", "./components/footer.html");
