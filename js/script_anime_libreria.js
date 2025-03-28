
const button_play = document.getElementById("btn_play");
const button_pause = document.getElementById("btn_pause");

// true: permite que la animacion se detenga cuando se cambia de pestaña
anime.suspendWhenDocumentHidden = true; // default true

// bloque de codigo que ejecuta los parametros de la libreria
let animationData = anime.timeline({
  targets: ".ini_text p",
  delay: function (el, i) {
    return i * 100;
  },
  duration: 250, // Can be inherited  500
  easing: "easeOutExpo", // Can be inherited
  direction: "alternate", // Is not inherited
  autoplay: false,
  complete: () => {
    // mostramos el boton que inicia la animacion cuando esta concluye
    button_play.style.display = "block"
  }
});

animationData.add({
  translateX: 120,
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

function playAnimation(){
  button_play.style.display = "none";
  return animationData.play();
}

function pauseAnimation(){
  return animationData.pause();
}