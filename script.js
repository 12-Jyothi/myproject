document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-button");
    toggleButton.innerHTML = "☰"; 
    document.body.appendChild(toggleButton);

    const sidebar = document.querySelector(".sidebar");
    
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    const dropdowns = document.querySelectorAll(".dropdown-toggle");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });
    });

   
    document.addEventListener("click", function (e) {
        if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            const allDropdowns = document.querySelectorAll(".dropdown");
            allDropdowns.forEach(menu => menu.style.display = "none");
        }
    });
});

