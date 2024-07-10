/*  Created by: Truzz Blogg  */
/*  Youtube Link: https://youtu.be/l7W5pHSr1w0  */

let  elem_preloader = document.getElementById("preloader");
let  elem_loader = document.getElementById("loader");
let  elem_h1 = document.getElementById("h1pre");
let  elem_h2 = document.getElementById("h2pre");
let  elem_bola = document.getElementById("efeito-carregamento");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_h2.style.display = "none";
  elem_h1.style.display = "none";
  elem_bola.style.display = "none";

  }, 1940);