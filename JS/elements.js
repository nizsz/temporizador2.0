const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonSubtract = document.querySelector('.subtract')

const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffee = document.querySelector('.coffee-shop')
const buttonSoundFlorest = document.querySelector('.florest')
const buttonSoundFirePlace = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const florestColorBgSvg = document.querySelector('.florest-bg')
const rainColorBgSvg = document.querySelector('.rain-bg')
const coffeeColorBgSvg = document.querySelector('.coffee-bg')
const fireplaceColorBgSvg = document.querySelector('.fireplace-bg')

const florestColorIconSvg = document.querySelector('.florest-icon')
const rainColorIconSvg = document.querySelector('.rain-icon')
const coffeeColorIconSvg = document.querySelector('.coffee-icon')
const fireplaceColorIconSvg = document.querySelector('.fireplace-icon')

const florestAudio = new Audio ("./audio/Floresta.wav")
const rainAudio = new Audio ("./audio/Chuva.wav")
const coffeeAudio = new Audio ("./audio/Cafeteria.wav")
const firePlaceAudio = new Audio ("./audio/Lareira.wav")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFirePlace,
  buttonSoundFlorest,
  florestAudio,
  rainAudio,
  coffeeAudio,
  firePlaceAudio,
  florestColorBgSvg,
  florestColorIconSvg,
  rainColorBgSvg,
  rainColorIconSvg,
  coffeeColorBgSvg,
  coffeeColorIconSvg,
  fireplaceColorBgSvg,
  fireplaceColorIconSvg,
  minutesDisplay,
  secondsDisplay,
  buttonPressAudio,
  kitchenTimer
}