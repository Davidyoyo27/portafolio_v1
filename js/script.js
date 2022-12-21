// funcion para abrir el menu
function abrirNav() {
  let abrir_menu_lateral = document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  // detecta si se abre el menu lateral, de ser asi, oculta el icono de abrir ("icono hamburguesa") del menu
  if(abrir_menu_lateral == abrir_menu_lateral){
    // oculta el elemento HTML con el id="abrir-menu"
    document.getElementById("abrir-menu").style.display = 'none';
  }
}
// funcion para cerrar el menu
function cerrarNav() {
  let cerrar_menu_lateral = document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  // detecta si se cierra el menu lateral, de ser asi, muestra el icono de abrir ("icono hamburguesa") del menu
  if(cerrar_menu_lateral == cerrar_menu_lateral){
    // muestra el elemento HTML con el id="abrir-menu"
    document.getElementById("abrir-menu").style.display = 'block';
  }
}


// permite acceder a las opciones del menu
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.onclick = () => {
      listItems.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    }
})