let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);

// Vor- und Zurück-Steuerung
function plusSlides(n) {
  clearTimeout(slideTimer); // Stoppt den Auto-Timer bei manuellem Klick
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  // Endlosschleife
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Alle Slides ausblenden
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Aktuelles Slide einblenden
  slides[slideIndex-1].style.display = "block";
  
  // Automatischer Wechsel alle 4 Sekunden (4000 Millisekunden)
  slideTimer = setTimeout(() => plusSlides(1), 4000); 
}