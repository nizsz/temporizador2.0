import {
fireplaceColorIconSvg,
florestColorIconSvg,
rainColorIconSvg,
coffeeColorIconSvg,
buttonSoundCoffee,
buttonSoundFlorest,
buttonSoundRain,
buttonSoundFirePlace,
volumeFlorest,
volumeRain,
volumeCoffee,
volumeFireplace


} from "./elements.js"

export default function(){
  function changeColorFlorest() {
  florestColorIconSvg.classList.add('button-icon')
  buttonSoundFlorest.classList.add('button-selected')

  volumeFlorest.classList.add('button-icon')
  volumeFlorest.classList.add('color-white')
  
}

function removeColorFlorest() {
  florestColorIconSvg.classList.remove('button-icon')
  buttonSoundFlorest.classList.remove('button-selected')

  volumeFlorest.classList.remove('button-icon')
  volumeFlorest.classList.remove('color-white')
  
}

function changeColorRain() {
  rainColorIconSvg.classList.add('button-icon')
  buttonSoundRain.classList.add('button-selected')

  volumeRain.classList.add('button-icon')
  volumeRain.classList.add('color-white')
  
  
}

function removeColorRain() {
  rainColorIconSvg.classList.remove('button-icon')
  buttonSoundRain.classList.remove('button-selected')

  volumeRain.classList.remove('button-icon')
  volumeRain.classList.remove('color-white')
  

}

function changeColorCoffee() {
  coffeeColorIconSvg.classList.add('button-icon')
  buttonSoundCoffee.classList.add('button-selected')

  volumeCoffee.classList.add('button-icon')
  volumeCoffee.classList.add('color-white')
  
}

function removeColorCoffee() {
  coffeeColorIconSvg.classList.remove('button-icon')
  buttonSoundCoffee.classList.remove('button-selected')

  volumeCoffee.classList.remove('button-icon')
  volumeCoffee.classList.remove('color-white')
  
  
}

function changeColorFireplace() {
  fireplaceColorIconSvg.classList.add('button-icon')
  buttonSoundFirePlace.classList.add('button-selected')

  volumeFireplace.classList.add('button-icon')
  volumeFireplace.classList.add('color-white')

  
  
}

function removeColorFireplace() {
  fireplaceColorIconSvg.classList.remove('button-icon')
  buttonSoundFirePlace.classList.remove('button-selected')

  volumeFireplace.classList.remove('button-icon')
  volumeFireplace.classList.remove('color-white')
 
  
}

function Dark() {
  let darkMode = document.querySelector("html")
  darkMode.classList.toggle('dark-theme')
}


  return {
    changeColorFlorest,
    removeColorFlorest,
    changeColorRain,
    removeColorRain,
    changeColorCoffee,
    removeColorCoffee,
    changeColorFireplace,
    removeColorFireplace,
    Dark,
    
  }

}
