const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");
const getStartedBtn = document.getElementById("getStartedBtn");

// Toggle sidebar open/close
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    content.classList.toggle("full");
});

// Click Get Started → ensure sidebar is open
getStartedBtn.addEventListener("click", () => {
    sidebar.classList.remove("hide");
    content.classList.remove("full");
});
