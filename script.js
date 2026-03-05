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

loadWorks();
