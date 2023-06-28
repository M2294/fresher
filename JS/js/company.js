const button = document.getElementById("click-me1");

button.onclick = () => {
  const card = document.getElementById("newpost1");
  if (card.style.display !== "none") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
};