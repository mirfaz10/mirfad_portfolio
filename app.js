const getElement = (selector) => {
    const element = document.querySelector(selector);
  
    if (element) return element;
    throw Error(`Please double check your class names, there is no ${selector} class`);
}

// Date
const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// Send message 
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent form submission

    let name = getElement("#name").value;
    let email = getElement("#email").value;
    let subject = getElement("#subject").value;
    let message = getElement("#message").value;

    let phoneNumber = "966573941674"; 

    // Construct WhatsApp message with correct formatting
    let whatsappMessage = `Hello Mirfad,\n\n`
        + `*Name:* ${name}\n`
        + `*Email:* ${email}\n`
        + `*Subject:* ${subject}\n`
        + `*Message:* ${message}`;

    let encodedMessage = encodeURIComponent(whatsappMessage);

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
}

const scroll = new LocomotiveScroll({
    el: getElement("#main"),
    smooth: true,
  });
  