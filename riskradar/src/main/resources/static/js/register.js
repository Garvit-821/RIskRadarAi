document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) return;

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = {
            fullName: fullName,
            email: email,
            password: password
        };

        try {

            const response = await fetch("http://localhost:8080/api/auth/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)

            });

            const result = await response.text();

            alert(result);

            if (result === "Registration Successful") {

                window.location.href = "login.html";

            }

        } catch (error) {

            alert("Server Error! Please try again.");

            console.error(error);

        }

    });

});