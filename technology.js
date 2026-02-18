const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    sidebar.classList.toggle("show");
    overlay.style.display = sidebar.classList.contains("show") ? "block" : "none";
});

// Close sidebar on overlay click
overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.style.display = "none";
});

// Smooth scroll for internal links (IT, Survey)
navLinks.forEach(link => {
    if(link.getAttribute("href").startsWith("#")){
        link.addEventListener("click", e=>{
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
});
