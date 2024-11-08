async function populateCountries() {
    try {
        const response = await fetch('../assets/data/countries.json');   //url: https://www.apicountries.com/countries
        const countries = await response.json();
        const select = document.getElementById('country');

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.alpha3Code; // Country code
            option.textContent = country.name; // Country name
            select.appendChild(option); 
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

function fetchCountries() {
    const xhr = new XMLHttpRequest();
    const countrySelect = document.getElementById('country');

    xhr.open('GET', '../assets/data/countries.json', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            // Populate country dropdown
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.alpha3Code; 
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        } else if (xhr.readyState === 4) {
            console.error('Error fetching countries:', xhr.statusText);
        }
    };

    xhr.send();
}

// Function to simulate the login process
function simulateLogin(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Display the loader modal
    toggleLoader(true);

    // Simulate login delay
    setTimeout(() => {
        // Hide the loader modal after 2 seconds
        toggleLoader(false);

        // Dummy login validation: checking if email and password are filled
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Display success message (alert for simplicity)
            alert("Login successful!");
        } else {
            // Display failure message if credentials are empty
            alert("Login failed! Please enter valid credentials.");
        }

        // Optionally, clear the form fields
        document.getElementById('signinForm').reset();
    }, 2000); // 2-second delay
}

// Function to simulate the signup process
function simulateSignup(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Display the loader modal
    toggleLoader(true);

    // Simulate signup delay
    setTimeout(() => {
        // Hide the loader modal after 2 seconds
        toggleLoader(false);

        // Dummy signup validation: checking if all required fields are filled
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (firstName && lastName && email && password && password === confirmPassword) {
            // Display success message (alert for simplicity)
            alert("Signup successful! Welcome to our platform.");
        } else {
            // Display failure message if any field is empty or passwords don't match
            alert("Signup failed! Please fill in all fields and make sure passwords match.");
        }

        // Optionally, clear the form fields
        document.getElementById('signupForm').reset();
    }, 2000); // 2-second delay
}

function sendForgotPasswordMessage(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Display the loader modal
    toggleLoader(true);

    // Simulate signup delay
    setTimeout(() => {
        // Hide the loader modal after 2 seconds
        toggleLoader(false);

        // Dummy signup validation: checking if all required fields are filled 
        const email = document.getElementById('email').value; 

        if (!email) {
            // Display success message (alert for simplicity)
            alert("Enter a valid email");
        } else {
            // Display failure message if any field is empty or passwords don't match
            alert("Password recovery link has been sent to your email!");
        }

        // Optionally, clear the form fields
        document.getElementById('forgotForm').reset();
    }, 2000); // 2-second delay 
}

document.addEventListener("DOMContentLoaded", function() {
    

    // Attach the simulateSignup function to the form submit event
    if(document.getElementById('signupForm')!== null)
    {
        const countrySelect = document.getElementById("country");

        // Fetch list of countries from REST API
        //populateCountries()
        fetchCountries();
        document.getElementById('signupForm').addEventListener('submit', simulateSignup);
    }

    // Attach the simulateLogin function to the form submit event
    if(document.getElementById('signinForm')!== null)
        document.getElementById('signinForm').addEventListener('submit', simulateLogin);

    // Attach the sendForgotPasswordMessage function to the form submit event
    if(document.getElementById('forgotForm')!== null)
        document.getElementById('forgotForm').addEventListener('submit', sendForgotPasswordMessage);
});
