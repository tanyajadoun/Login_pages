document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded");

    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");

    registerLink.onclick = (event) => {
        event.preventDefault();  // Prevents default anchor behavior
        wrapper.classList.add("active");  // Adds active class to show registration
    };

    loginLink.onclick = (event) => {
        event.preventDefault();  // Prevents default anchor behavior
        wrapper.classList.remove("active");  // Removes active class to show login
    };
});

