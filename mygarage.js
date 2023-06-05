document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (dummy check)
    if (username === "Babayev" && password === "babayev23") {
      // alert("Login successful");
      location.href = './mygarage_main.html'
      // Redirect to a new page or perform other actions
    } else {
      alert("Burunuvu bilmediyin yere soxma)");
      // Clear form fields or show error message
    }
  });
  