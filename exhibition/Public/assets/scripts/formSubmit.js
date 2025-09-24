let form = document.querySelector('form');
let btn = document.querySelector('.contact-form button');
let mesSent = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    mesSent = true;
    btn.style.background=" linear-gradient(to right, #07ffa1, #177338)"
    btn.innerText = "Message Sent"
})
