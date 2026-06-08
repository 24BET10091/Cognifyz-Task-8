const coursesData = {

    frontend: {
        title: "Frontend Development Internship",
        description:
            "Frontend Development focuses on building responsive and interactive user interfaces using HTML, CSS, JavaScript, Bootstrap, and React.",

        skills: [
            "HTML5",
            "CSS3 & SCSS",
            "JavaScript",
            "Bootstrap",
            "Responsive Design",
            "API Integration"
        ],

        internship:
            "Students work on responsive websites, landing pages, and frontend projects."
    },

    backend: {
        title: "Backend Development Internship",
        description:
            "Backend Development focuses on server-side programming, APIs, authentication, and databases.",

        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Authentication",
            "Deployment"
        ],

        internship:
            "Students build APIs, backend systems, and secure applications."
    },

    fullstack: {
        title: "Full Stack Development Internship",
        description:
            "Full Stack Development combines frontend and backend technologies for complete web applications.",

        skills: [
            "React",
            "Node.js",
            "MongoDB",
            "REST APIs",
            "Authentication",
            "Deployment"
        ],

        internship:
            "Students create complete full stack web applications."
    },

    ai: {
        title: "Artificial Intelligence Internship",
        description:
            "Artificial Intelligence focuses on machine learning, automation, and smart systems.",

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Data Analysis",
            "Automation",
            "AI Models"
        ],

        internship:
            "Students work on AI projects and intelligent automation systems."
    },

    cloud: {
        title: "Cloud Computing Internship",
        description:
            "Cloud Computing focuses on cloud services, deployment, hosting, and infrastructure.",

        skills: [
            "AWS",
            "Cloud Deployment",
            "DevOps",
            "Server Management",
            "Virtual Machines",
            "Cloud Storage"
        ],

        internship:
            "Students learn deployment, hosting, and cloud infrastructure."
    }
};

const button =
    document.getElementById("colorButton");

button.addEventListener("click", function () {

    document.body.style.background =
        "linear-gradient(135deg, #020413, #1A3968, #723F59, #C45E6D)";

    let content = "";

    for (let key in coursesData) {

        const course = coursesData[key];

        content += `

        <div class="course-card">

            <h2>${course.title}</h2>

            <p>${course.description}</p>

            <h4>Skills You Will Learn:</h4>

            <ul>
                ${course.skills.map(skill =>
            `<li>${skill}</li>`).join("")}
            </ul>

            <h4>Internship Experience:</h4>

            <p>${course.internship}</p>

        </div>
        `;
    }

    document.getElementById("api-data")
        .innerHTML = content;
});

const form =
    document.getElementById("RegistrationForm");

form.addEventListener("submit", function (event) {

    const course =
        document.getElementById("course");

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const phone =
        document.getElementById("phone").value;

    if (course.value === "") {

        event.preventDefault();

        alert("Please select a course.");

        return;
    }

    if (password !== confirmPassword) {

        event.preventDefault();

        alert("Passwords do not match.");

        return;
    }

    if (phone.length < 10) {

        event.preventDefault();

        alert("Enter a valid phone number.");

        return;
    }

    alert("Registration Successful!");
});