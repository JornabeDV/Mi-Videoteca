// Creamos DarkMode

const botonSwitch = document.querySelector ("#switch");

botonSwitch.addEventListener("click",() => {
  document.body.classList.toggle("dark");
  botonSwitch.classList.toggle("active");

  //Guardamos el Mode en el LocalStorage

  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark-mode", "true");
  } else{
    localStorage.setItem("dark-mode", "false");

  }
})

// Buscamos el mode en el que nos encontramos.

if(localStorage.getItem("dark-mode") === "true"){
  document.body.classList.add("dark");
  botonSwitch.classList.add("active");
} else{
  document.body.classList.remove("dark");
  botonSwitch.classList.remove("active");
}