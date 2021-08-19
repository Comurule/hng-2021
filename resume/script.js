function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

function handleSubmit(event) {
    const submitBtn = document.getElementById('formSubmit');
    const alertMessage = (message, type) => {
        submitBtn.innerText = 'Send';
        return alert(message);
    };

    submitBtn.innerText = 'Sending...';
    const form = document.getElementById('formProper');
    let name = form.name.value;
    let email = form.email.value;

    if (!email) return alertMessage('Please, enter your email.');
    if (!name) return alertMessage('Please, enter your name.');

    return setTimeout(() => {
        const message = `Hi ${name}, your message is well received and you will be contacted shortly.`;
        alertMessage(message);
        form.name.value = '';
        form.email.value = '';
        form.body.value = '';
        closeForm();
    }, 3000);
}
