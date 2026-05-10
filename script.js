// Funnel Loaded
console.log("Affiliate Funnel Loaded Successfully");

// Simple animation effect
document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("stakecut-button");

  if(button){

    button.addEventListener("mouseenter", () => {
      button.style.opacity = "0.9";
    });

    button.addEventListener("mouseleave", () => {
      button.style.opacity = "1";
    });

  }

});
