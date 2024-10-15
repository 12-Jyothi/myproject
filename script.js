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


document.addEventListener("DOMContentLoaded", function() {
    // Fetch the XML file
    fetch('data.xml')
        .then(response => response.text())
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Populate project information
            const projectInfo = xmlDoc.getElementsByTagName("ProjectInformation")[0];
            const projectInfoDiv = document.getElementById("project-info");
            projectInfoDiv.innerHTML = ''; // Clear previous content

            // Create and append project info items
            for (let child of projectInfo.children) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'dropdown-item';
                itemDiv.textContent = `${child.tagName.replace(/([A-Z])/g, ' $1')}: ${child.textContent}`;
                projectInfoDiv.appendChild(itemDiv);
            }

            // Populate sheets
            const sheets = xmlDoc.getElementsByTagName("Sheets")[0];
            const sheetsDiv = document.getElementById("sheets");
            sheetsDiv.innerHTML = ''; // Clear previous content

            // Create and append sheet items
            for (let sheet of sheets.children) {
                const sheetDiv = document.createElement('div');
                sheetDiv.className = 'dropdown-item';
                sheetDiv.textContent = sheet.getAttribute("name");
                sheetDiv.setAttribute("data-img", sheet.getAttribute("img"));
                sheetDiv.onclick = function() {
                    document.getElementById("displayed-image").src = this.getAttribute("data-img");
                    document.getElementById("displayed-image").style.display = "block";
                };
                sheetsDiv.appendChild(sheetDiv);
            }
        })
        .catch(error => console.error('Error fetching XML:', error));
});


