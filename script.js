const body = document.body;
const switch_button = document.getElementById("icon");

switch_button.addEventListener("click", (event) => {
  body.classList.toggle("light");

  if (body.className == "light") {
    switch_button.innerText = "bedtime";
  } else {
    switch_button.innerText = "brightness_7";
  }
});
