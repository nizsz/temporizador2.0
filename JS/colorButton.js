import {
florestColorBgSvg,
florestColorIconSvg,
rainColorBgSvg,
rainColorIconSvg,
coffeeColorBgSvg,
coffeeColorIconSvg,
fireplaceColorBgSvg,
fireplaceColorIconSvg
} from "./elements.js"

export default function(){
  function changeColorFlorest() {
  florestColorBgSvg.classList.add('color')
  florestColorIconSvg.classList.add('color-ic')
}

function removeColorFlorest() {
  florestColorBgSvg.classList.remove('color')
  florestColorIconSvg.classList.remove('color-ic')
}

function changeColorRain() {
  rainColorBgSvg.classList.add('color')
  rainColorIconSvg.classList.add('color-ic')
}

function removeColorRain() {
  rainColorBgSvg.classList.remove('color')
  rainColorIconSvg.classList.remove('color-ic')
}

function changeColorCoffee() {
  coffeeColorBgSvg.classList.add('color')
  coffeeColorIconSvg.classList.add('color-ic')
}

function removeColorCoffee() {
  coffeeColorBgSvg.classList.remove('color')
  coffeeColorIconSvg.classList.remove('color-ic')
}

function changeColorFireplace() {
  fireplaceColorBgSvg.classList.add('color')
  fireplaceColorIconSvg.classList.add('color-ic')
}

function removeColorFireplace() {
  fireplaceColorBgSvg.classList.remove('color')
  fireplaceColorIconSvg.classList.remove('color-ic')
}
  return {
    changeColorFlorest,
    removeColorFlorest,
    changeColorRain,
    removeColorRain,
    changeColorCoffee,
    removeColorCoffee,
    changeColorFireplace,
    removeColorFireplace
  }

}
