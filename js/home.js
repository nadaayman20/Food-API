var welcomeMessage = document.querySelector('.text h1');
welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("Valid-User")}`