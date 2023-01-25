// funcion sleep
// la funcion espera durante 3seg (3000 ms) para luego proceder
// a ejecutar la funcion AnimationMoveLetter


iniciarSecuencia();

function animationMoveLetter() {
  // bloque de codigo que ejecuta los parametros de la libreria
  let tl = anime.timeline({
    targets: ".ini_text p",
    delay: function (el, i) {
      return i * 200;
    },
    duration: 500, // Can be inherited
    easing: "easeOutExpo", // Can be inherited
    direction: "alternate", // Is not inherited
    loop: 1, // Is not inherited
  });

  tl.add({
    translateX: 250,
    // override the easing parameter
    easing: "spring",
  })  
    .add({
      opacity: 0.5,
      scale: 2,
    })
    .add({
      // override the targets parameter
      targets: ".ini_text p",
      rotate: 180,
    })
    .add({
      translateX: 0,
      scale: 1,
    });

}

function esperar(){
    setTimeout(mostrarElemento, 60500);
}

function animacion(){
    ocultarElemento();
    animationMoveLetter();
    esperar();
}

function ocultarElemento(){
    document.getElementById('icon-refresh').style.display = 'none';
}

function mostrarElemento(){
    document.getElementById('icon-refresh').style.display = 'block';
}

function iniciarSecuencia(){
    ocultarElemento();
    setTimeout(animationMoveLetter, 2000);
    esperar();
}