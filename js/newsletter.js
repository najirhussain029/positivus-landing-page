document.getElementById("subscribe-form").addEventListener("submit", event => {
  event.preventDefault();
  alert("Thank you for subscribing!");
  event.target.reset();
});
