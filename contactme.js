function sendMessage(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Encode the message to be URL safe
    const whatsappMessage = `Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    const phoneNumber = "254746415318"; // Your WhatsApp number without the plus (+) sign

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
}
