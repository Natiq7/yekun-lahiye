document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();// Formanın təqdim edilməsinin qarşısını alın
  
 // İstifadəçi adı və parol dəyərlərini əldə edin
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
   // Doğrulama həyata keçirin (dummy yoxlama)

    if (username === "Babayev" && password === "babayev23") {
   // xəbərdarlıq ("Giriş uğurludur");

      location.href = './mygarage_main.html'
    
      // alert("Login successful");


    } else {
      alert("Burunuvu bilmediyin yere soxma!)");
  
    }
  });
  