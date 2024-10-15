document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    const dropdowns = document.querySelectorAll(".dropdown-toggle");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            const isOpen = dropdownMenu.style.display === "block";
            dropdownMenu.style.display = isOpen ? "none" : "block";
            this.setAttribute("aria-expanded", !isOpen);
        });
    });

    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const displayedImage = document.getElementById("displayed-image");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            displayedImage.src = imgSrc;
            displayedImage.style.display = "block";
        });
    });

 
    document.addEventListener("click", function (e) {
        if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            const allDropdowns = document.querySelectorAll(".dropdown");
            allDropdowns.forEach(menu => menu.style.display = "none");
        }
    });
});
