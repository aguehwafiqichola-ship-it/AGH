document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmation = document.getElementById("confirmation");
  
    if (form && confirmation) {
      confirmation.style.display = "none";
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Simulation d’envoi
        confirmation.textContent = "Votre message a bien été envoyé !";
        confirmation.style.display = "block";
  
        // Optionnel : réinitialiser le formulaire
        form.reset();
      });
    }
  });