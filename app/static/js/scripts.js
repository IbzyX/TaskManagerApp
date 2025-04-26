document.addEventListener("DOMContentLoaded", function() {
   const themeToggle = document.getElementById("theme-toggle");
   const body = document.body;
   const menuToggle = document.getElementById("menu-toggle");
   const menuDropdown = document.getElementById("menu-dropdown");

   

   if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️ Toggle Theme";
   }

   themeToggle.addEventListener("click", function() {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
         localStorage.setItem("theme", "dark");
         themeToggle.textContent = "☀️ Toggle Theme";
      } else {
         localStorage.setItem("theme", "light");
         themToggle.textContent = "🌙 Toggle Theme";
      }
   });

    menuToggle.addEventListener("click", function() {
        menuDropdown.classList.toggle("hidden");
    });

});