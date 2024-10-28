document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    const projectInfoLink = document.querySelector("a[href='#project-info']");
    const sheetsLink = document.querySelector("a[href='#sheets']");
    const sheetItems = document.querySelectorAll('.dropdown-item');
    const displayedImage = document.getElementById("displayed-image");
    const sheetsDiv = document.getElementById("sheets");

    // Toggle sidebar visibility
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    // Show project information
    projectInfoLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        // Hide sheets section when viewing project info
        sheetsDiv.classList.add("hidden");
        displayedImage.src = ""; // Clear the displayed image
    });

    // Show sheets section
    sheetsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        sheetsDiv.classList.remove("hidden"); // Show sheets section
        displayedImage.src = ""; // Clear the displayed image
    });

    // Display selected sheet image
    sheetItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = item.getAttribute("data-img");
            displayedImage.src = imgSrc;
            displayedImage.style.display = "block"; // Show the image
        });
    });
});
