// document.addEventListener("DOMContentLoaded", function () {
//   const feedbackForm = document.getElementById("feedbackForm");
//   const feedbackList = document.getElementById("feedbackList");

//   feedbackForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent page reload

//     const name = document.getElementById("name").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (name && message) {
//       const feedbackItem = document.createElement("div");
//       feedbackItem.classList.add("feedback-item");
//       feedbackItem.innerHTML = `<strong>${name}:</strong> ${message}`;

//       feedbackList.appendChild(feedbackItem);

//       feedbackForm.reset(); // Clear the form
//     }
//   });
// });



//   const form = document.querySelector('form');
//   const feedbackDisplay = document.getElementById('feedbackDisplay');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const message = document.getElementById('message').value;
//     const rating = document.querySelector('input[name="rating"]:checked');

//     if (name.trim() !== '' && message.trim() !== '' && rating) {
//       const stars = '★'.repeat(rating.value);
//       feedbackDisplay.innerHTML = `
//         <strong> Name:</strong> ${name}<br>
//         <strong> Feedback:</strong> ${message}<br>
//         <strong> Rating:</strong> ${stars}
//       `;
//       feedbackDisplay.style.display = 'block';

//       form.reset();
//     } else {
//       alert('Please fill your name, feedback, and give a rating.');
//     }
//   });

   fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Yaha pehi hamburger ka listener lagao
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  })
  .catch(err => console.error("Navbar load error:", err));


