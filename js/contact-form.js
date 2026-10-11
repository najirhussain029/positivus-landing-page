document.getElementById("form").addEventListener("submit", event => {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  event.target.reset();
});
