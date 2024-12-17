document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roomType = document.getElementById("roomType").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    const confirmationMessage = `Thank you, ${name}! Your booking for a ${roomType} from ${checkIn} to ${checkOut} has been confirmed. A confirmation email has been sent to ${email}.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;

    
});