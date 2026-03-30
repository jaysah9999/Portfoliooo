function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

function showSection(id) {
  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

/* Typing Effect */
const text = ["Web Developer 💻", "UI Designer 🎨", "Freelancer 🚀"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = currentText.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();