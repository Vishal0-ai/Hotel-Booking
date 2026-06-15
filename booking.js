// Dummy booking database stored in localStorage
// Each booking: { roomType, checkIn, checkOut }
function getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function saveBooking(booking) {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
}

// Check if dates overlap
function isOverlapping(aStart, aEnd, bStart, bEnd) {
    return (aStart <= bEnd) && (bStart <= aEnd);
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const roomType = document.getElementById("roomType").value;
    const guests = document.getElementById("guests").value;

    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);

    if (checkOut <= checkIn) {
        document.getElementById("bookingMessage").innerText =
            "❌ Check-out date must be after check-in date.";
        return;
    }

    const existing = getBookings().filter(b => b.roomType === roomType);

    let isAvailable = true;

    for (let b of existing) {
        const bIn = new Date(b.checkIn);
        const bOut = new Date(b.checkOut);

        if (isOverlapping(checkIn, checkOut, bIn, bOut)) {
            isAvailable = false;
            break;
        }
    }

    if (!isAvailable) {
        document.getElementById("bookingMessage").innerText =
            "❌ Room is not available for these dates.";
    } else {
        saveBooking({
            fullName,
            email,
            phone,
            roomType,
            guests,
            checkIn: checkIn.toISOString(),
            checkOut: checkOut.toISOString()
        });

        document.getElementById("bookingMessage").innerText =
            "✅ Room booked successfully!";
        document.getElementById("bookingForm").reset();
    }
});
