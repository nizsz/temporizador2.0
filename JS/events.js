import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  buttonSoundFlorest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFirePlace,
  buttonDarkMode,
  buttonLightMode,
  volumeFlorest,
  florestAudio,
  volumeRain,
  rainAudio,
  coffeeAudio,
  firePlaceAudio,
  volumeCoffee,
  volumeFireplace
} from "./elements.js"



export default function({timer,color,controls,Sound}) {
  buttonPlay.addEventListener('click', function(){
  controls.changing()
  timer.countDown()
  Sound.buttonPress()
})

buttonPause.addEventListener('click', function(){
  controls.changing()
  timer.pause()
  Sound.buttonPress()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  Sound.buttonPress()
})

buttonAdd.addEventListener('click', function(){
  
  timer.addMinutes()
  Sound.buttonPress()
 
})

buttonSubtract.addEventListener('click', function(){

  timer.subtractMinutes()
  Sound.buttonPress()
  
})


buttonSoundFlorest.addEventListener('click', function(){
  color.changeColorFlorest()
  color.removeColorRain()
  color.removeColorCoffee()
  color.removeColorFireplace()
  
  
  Sound.florestOn()
  
  
})


buttonSoundRain.addEventListener('click', function(){
  color.changeColorRain()
  color.removeColorFlorest()
  color.removeColorCoffee()
  color.removeColorFireplace()

  

  
  Sound.rainOn()
  
})

buttonSoundCoffee.addEventListener('click', function(){
  color.changeColorCoffee()
  color.removeColorFlorest()
  color.removeColorFireplace()
  color.removeColorRain()  



  Sound.coffeeOn()
  
})

buttonSoundFirePlace.addEventListener('click', function(){
  color.changeColorFireplace()
  color.removeColorFlorest()
  color.removeColorRain()
  color.removeColorCoffee()
  
  
  
  Sound.firePlaceOn()
  
})

buttonLightMode.addEventListener('click', function() {

  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')

  color.Dark()
  
  
})



buttonDarkMode.addEventListener('click', function() {

  buttonLightMode.classList.remove('hide')
  buttonDarkMode.classList.add('hide')

  color.Dark()
  

})

volumeFlorest.addEventListener('change', function(){

  let volumek = volumeFlorest.value
  florestAudio.volume = volumek

  
})

volumeRain.addEventListener('change', function(){

  let volumek = volumeRain.value
  rainAudio.volume = volumek
})

volumeCoffee.addEventListener('change', function(){

  let volumek = volumeCoffee.value
  coffeeAudio.volume = volumek
})

volumeFireplace.addEventListener('change', function(){

  let volumek = volumeFireplace.value
  firePlaceAudio.volume = volumek
  
})

}