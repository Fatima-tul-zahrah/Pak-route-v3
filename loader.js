// Function to include HTML files
function includeHTML() {
    // 1. Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // 2. Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            // Update the year dynamically once the footer is loaded
            const yearSpan = document.getElementById('year');
            if(yearSpan) yearSpan.textContent = new Date().getFullYear();
        });
}

// Run the function
includeHTML();
function toggleSidebar() {
    const sidebar = document.getElementById("side-nav");
    const overlay = document.getElementById("overlay");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        overlay.style.display = "none";
    } else {
        sidebar.style.width = "250px";
        overlay.style.display = "block";
    }
}