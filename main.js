import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.addEventListener("DOMContentLoaded", () => {
  console.log("javascriptet látjuk");
  var kepURL = document.getElementById("imgURL");
  var kepSzeles = document.getElementById("imgWidth");
  var keretVastag = document.getElementById("borderWidth");
  var keretSzine = document.getElementById("borderColor");
  var megjelenoKep = document.getElementById("doThingsToThis");
  var sotetGomb = document.getElementById("darkmode")

  //A négy adat segítségével helyezz el egy képet az oldalon, amely a megadott tulajdonságokkal rendelkezik 
  //(az <img> tag szerepelhet a HTML-ben). Ha a gombra kattintunk, akkor az űrlapon megadott beállítások jussanak
  // érvényre a képen: módosítsd a kép forrását és az URL-jét.
  kepURL.addEventListener("change", () => {
    megjelenoKep.setAttribute("src",kepURL.value)
  })
  kepSzeles.addEventListener("input", () => {    
    //megjelenoKep.style.border = "200px red solid";

    let szelesseg = kepSzeles.value
    megjelenoKep.style.width = (szelesseg + "px");
  })
  keretVastag.addEventListener("input", () => {
    let keret = (keretVastag.value + "px solid " + keretSzine.value);
    console.log(keret)
    megjelenoKep.style.border = keret;
  })
  keretSzine.addEventListener("input", () => {
    let keret = (keretVastag.value + "px solid " + keretSzine.value);
    console.log(keret)
    megjelenoKep.style.border = keret;
  })
  sotetGomb.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
  })

  })


