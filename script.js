function signup() {
    alert("Account Created Successfully!");
    window.location.href = "login.html";
}

function login() {
    alert("Login Successful!");
    window.location.href = "home.html";
}

function logout() {
    window.location.href = "login.html";
}
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current + "+";

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function () {
    animateValue("students-count", 0, 500, 2000);
    animateValue("courses-count", 0, 50, 2000);
    animateValue("projects-count", 0, 20, 2000);
    animateValue("partners-count", 0, 10, 2000);
};