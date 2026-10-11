const track = document.getElementById("track");
const dotsBox = document.getElementById("dots");
const total = track.children.length;
let index = 0;

function go(nextIndex) {
  index = (nextIndex + total) % total;
  track.style.transform = `translateX(-${index * 100}%)`;
  [...dotsBox.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("on", dotIndex === index);
  });
}

for (let dotIndex = 0; dotIndex < total; dotIndex++) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show testimonial ${dotIndex + 1}`);
  dot.addEventListener("click", () => go(dotIndex));
  dotsBox.appendChild(dot);
}

document.getElementById("next").addEventListener("click", () => go(index + 1));
document.getElementById("prev").addEventListener("click", () => go(index - 1));

go(0);
