function exploreMore() {
    window.location.href = "#destinations";
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
    });

    const navLinks = document.querySelectorAll('#navbar a');

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

    if(pageId!==null)
    {
        if(pageId==1)
        {
            const destinations = document.querySelectorAll('.destination') ;
            const modal = document.getElementById('destinationModal');
            const modalContent = document.getElementById('destinationDescription');
            const closeModal = document.querySelector('.close');

            // Show modal on double-click and display title attribute
            destinations.forEach(destination => {
                destination.addEventListener('dblclick', () => {
                    modalContent.textContent = destination.getAttribute('title');
                    modal.style.display = 'block';
                });
                destination.addEventListener('contextmenu', (event) => {
                    event.preventDefault(); // Prevent the default context menu
                    alert("You cannot right-click on this element.");
                });
            });

            // Close modal when "x" is clicked
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            // Close modal when clicking outside of modal content
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        else if(pageId==3)
        {
            const destinations = document.querySelectorAll('.destination2');
            const modal = document.getElementById('destinationModal');
            const modalContent = document.getElementById('destinationDescription');
            const closeModal = document.querySelector('.close');

            // Show modal on dblclick and display the title attribute of <p>
            destinations.forEach(destination => {
                destination.addEventListener('dblclick', () => {
                    const titleText = destination.querySelector('p').getAttribute('title');
                    modalContent.textContent = titleText;
                    modal.style.display = 'block';
                });
                destination.addEventListener('contextmenu', (event) => {
                    event.preventDefault(); // Prevent the default context menu
                    alert("You cannot right-click on this element.");
                });
            });

            // Close modal when "x" is clicked
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            // Close modal when clicking outside the modal content
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }
});


// Function to show and hide the loader modal
function toggleLoader(show) {
    const loaderModal = document.getElementById('loaderModal');
    loaderModal.style.display = show ? 'block' : 'none';
}

function openCityModal() {
    document.getElementById('cityModal').style.display = 'block';
}

function closeCityModal() {
    document.getElementById('cityModal').style.display = 'none';
}

function toggleCityRow(cityId, rowId) {
    const checkbox = document.getElementById(cityId);
    const row = document.getElementById(rowId);

    if (checkbox.checked) {
        row.style.display = 'table-row'; // Show the corresponding table row
    } else {
        row.style.display = 'none'; // Hide the corresponding table row
    }
}

// Explore Button Action
function exploreCities() {
    alert('Explore your selected cities!\nThis is just a demo');
}

document.querySelectorAll('.modal input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        toggleCityRow(this.id, this.id + 'Row');
    });
});
