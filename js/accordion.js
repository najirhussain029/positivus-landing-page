const items = document.querySelectorAll(".acc-item");

function setHeights() {
  items.forEach(item => {
    const body = item.querySelector(".acc-body");
    body.style.maxHeight = item.classList.contains("active")
      ? `${body.scrollHeight}px`
      : "0";
  });
}

items.forEach(item => {
  item.querySelector(".acc-head").addEventListener("click", () => {
    const wasOpen = item.classList.contains("active");
    items.forEach(entry => entry.classList.remove("active"));

    if (!wasOpen) {
      item.classList.add("active");
    }

    items.forEach(entry => {
      entry.querySelector(".acc-head").setAttribute(
        "aria-expanded",
        String(entry.classList.contains("active"))
      );
    });

    setHeights();
  });
});

window.addEventListener("load", setHeights);
window.addEventListener("resize", setHeights);
