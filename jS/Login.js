let popup = document.getElementById("popup");
function openpopup() {
  popup.classList.add("openpopup");
}

function closepopup() {
  popup.classList.remove("openpopup");
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const signInButton2 = document.getElementById("signIn2");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", function () {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
  });

  signInButton2.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
  });
});
