const modal = document.querySelector(".modal");
const smallImages = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imageText = document.querySelector(".img-title");

smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    // Handle image source and alt text
    const fullImageSource = img.getAttribute("data-source");
    original.src = `./assets/img-large/${fullImageSource}`;
    original.alt = img.alt;
    imageText.textContent = img.alt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
