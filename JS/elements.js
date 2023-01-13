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


const florestColorIconSvg = document.querySelector('.florest-icon')
const rainColorIconSvg = document.querySelector('.rain-icon')
const coffeeColorIconSvg = document.querySelector('.coffee-icon')
const fireplaceColorIconSvg = document.querySelector('.fireplace-icon')

const florestAudio = new Audio ("./audio/Floresta.wav")
const rainAudio = new Audio ("./audio/Chuva.wav")
const coffeeAudio = new Audio ("./audio/Cafeteria.wav")
const firePlaceAudio = new Audio ("./audio/Lareira.wav")

const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')
const timerDisplay = document.querySelector('.timer')

const volumeFlorest = document.querySelector('.florest .volume')
const volumeRain = document.querySelector('.rain .volume')
const volumeCoffee = document.querySelector('.coffee-shop .volume')
const volumeFireplace = document.querySelector('.fireplace .volume')

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
  florestColorIconSvg,
  rainColorIconSvg,
  coffeeColorIconSvg,
  fireplaceColorIconSvg,
  minutesDisplay,
  secondsDisplay,
  buttonPressAudio,
  kitchenTimer,
  buttonLightMode,
  buttonDarkMode,
  timerDisplay,
  volumeFlorest,
  volumeRain,
  volumeCoffee,
  volumeFireplace
  
}