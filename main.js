const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const arrivalInput = document.getElementById("arrival");
    const departureInput = document.getElementById("departure");
    const guestsInput = document.getElementById("guests");
    const messageEl = document.getElementById("availabilityMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const arrival = arrivalInput.value;
      const departure = departureInput.value;
      const guests = parseInt(guestsInput.value, 10);

      if (!arrival || !departure) {
        messageEl.textContent = "Please select both arrival and departure dates.";
        messageEl.style.color = "red";
        return;
      }

      if (isNaN(guests) || guests <= 0) {
        messageEl.textContent = "Please enter a valid number of guests.";
        messageEl.style.color = "red";
        return;
      }

      if (guests > 7) {
        messageEl.textContent =
          "Sorry, bookings for more than 7 guests are not possible.";
        messageEl.style.color = "red";
      } else {
        messageEl.textContent =
          "Great! Rooms are available from " + arrival + " to " + departure + ".";
        messageEl.style.color = "green";
      }
    });
  });