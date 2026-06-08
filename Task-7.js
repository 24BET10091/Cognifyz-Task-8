const button = document.getElementById("colorButton");

button.addEventListener("click", function () {

    document.body.style.background =
        "linear-gradient(135deg, #020413, #1A3968, #723F59, #C45E6D)";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {

            document.getElementById("api-data").innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;

        })
        .catch(error => {

            document.getElementById("api-data").innerHTML =
                `<p>Failed to load data.</p>`;

            console.log(error);

        });

});

/*Task-6*/

const form = document.getElementById("RegistrationForm");

form.addEventListener("submit", function (event) {

    const course = document.getElementById("course");

    if (course.value === "") {
        event.preventDefault();
        alert("Please select a course.");
    }

});