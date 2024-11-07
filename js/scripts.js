function exploreMore() {
    window.location.href = "#destinations";
}

document.addEventListener("DOMContentLoaded", () => { 
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
    });
 

    // Loop through each link and add event listeners
    navLinks.forEach(link => {
        const originalColor = link.style.color; // Store the original color

        link.addEventListener('mouseover', () => {
            link.style.color = 'red'; // Change color to red on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = originalColor; // Revert to the original color
        });
    });
});

// Function to show and hide the loader modal
function toggleLoader(show) {
    const loaderModal = document.getElementById('loaderModal');
    loaderModal.style.display = show ? 'block' : 'none';
}
