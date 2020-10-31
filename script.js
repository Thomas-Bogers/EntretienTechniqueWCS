const message =
  "Be honored that the Royal Family will get your message. You may will have an answer ... Or not.";

document.getElementById("conForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
