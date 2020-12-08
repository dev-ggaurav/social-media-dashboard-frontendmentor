const body = document.body;
const toggle = document.getElementById('toggle');

function darkTheme() {
    body.classList.toggle('dark-theme');
}

toggle.addEventListener('change',darkTheme);