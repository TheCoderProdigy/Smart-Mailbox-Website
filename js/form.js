document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  if (!name || !email || !message) {
    error.style.color = "#b91c1c";
    error.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.style.color = "#b91c1c";
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.style.color = "#15803d";
  error.textContent = "Message sent successfully!";
  this.reset();
});
