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