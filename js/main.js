let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Desplazando hacia abajo
        navbar.classList.add("hide");
    } else {
        // Desplazando hacia arriba
        navbar.classList.remove("hide");
        if (scrollTop > 100) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    }
    lastScrollTop = scrollTop;
});


var prevScrollpos = window.scrollY;
//Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (document.documentElement.scrollTop>=60) {
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-14vh";
      }
      prevScrollpos = currentScrollPos;
    
      
  }
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
  }




// var i = 0;
// var txt = document.getElementById("titulo").innerHTML; /* The text */
// var txt2 = document.getElementById("subtitulo").innerHTML;
// var speed = 100; /* The speed/duration of the effect in milliseconds */
// // document.getElementById("titulo").innerHTML="";
// // document.getElementById("subtitulo").innerHTML="";
// // window.onload =  setTimeout(typeWriter, 700);
// function typeWriter() {
//     if (i < txt2.length) {//Cambia el txt.length por el que más caracteres tenga
//         document.getElementById("titulo").innerHTML += txt.charAt(i);
//         document.getElementById("subtitulo").innerHTML += txt2.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }