const sideBarLinks = document.querySelectorAll(".side-bar__list li");
const sections = document.querySelectorAll(".main .section");

for (let link of sideBarLinks) {
  link.addEventListener("click", showTab);
}

function showTab() {
  let active = this.parentNode.querySelector(".active");

  if (active) {
    active.classList.remove("active");
  }

  this.classList.add("active");
  let label = this.getAttribute("data-label");

  show(label);
}

function show(label) {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getAttribute("data-title") == label) {
      sections[i].classList.add("show");
    } else {
      sections[i].classList.remove("show");
    }
  }
}
