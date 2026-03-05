async function loadWorks() {
  const res = await fetch("/images.json");
  images = await res.json();

  const container = document.querySelector(".works-container");
  container.innerHTML = "";

  images.forEach(({ src, type }) => {
    const work = document.createElement("div");
    work.className = "work";
    work.dataset.type = type;

    const img = document.createElement("img");
    img.src = src;
    img.alt = type;

    work.appendChild(img);
    container.appendChild(work);
  });
}

function setupTabs() {
  const tabsContainer = document.querySelector(".tabs");
  if (!tabsContainer) return;

  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;

    // Change the active tab for styling
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
  });
}

loadWorks().then(setupTabs);
