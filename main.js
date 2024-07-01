const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.08,
});

// HEADER CIRCLE RUN EFFECT
const text = document.querySelector(".text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 22.5}deg)">${char}</span>`
  )
  .join("");

// SOME TEXT START IMAGE HOVER EFFECT
const spanTexts = document.querySelectorAll(".spanText");

spanTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const spanImage = element.children[0];
    spanImage.style.opacity = "1";
    spanImage.style.visibility = "visible";
  });

  element.addEventListener("mouseout", () => {
    const spanImage = element.children[0];
    spanImage.style.opacity = "0";
    spanImage.style.visibility = "hidden";
  });
});

// DESTINATION SECTION HOVER EFFECT JS

document.querySelectorAll(".place_info").forEach((place) => {
  place.addEventListener("mouseover", function () {
    const photoSrc = this.getAttribute("data-photo");
    document.querySelectorAll(".contain-photo img").forEach((img) => {
      img.style.display = img.getAttribute("src").includes(photoSrc)
        ? "block"
        : "none";
    });
  });

  place.addEventListener("mouseout", function () {
    document.querySelectorAll(".contain-photo img").forEach((img) => {
      img.style.display = "none";
    });
  });
});
