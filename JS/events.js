import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  buttonSoundFlorest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFirePlace
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
  Sound.reset()
  
})


buttonSoundRain.addEventListener('click', function(){
  color.changeColorRain()
  color.removeColorFlorest()
  color.removeColorCoffee()
  color.removeColorFireplace()
  
  Sound.rainOn()
  Sound.reset()
})

buttonSoundCoffee.addEventListener('click', function(){
  color.changeColorCoffee()
  color.removeColorFlorest()
  color.removeColorFireplace()
  color.removeColorRain()  

  Sound.coffeeOn()
  Sound.reset()
})

buttonSoundFirePlace.addEventListener('click', function(){
  color.changeColorFireplace()
  color.removeColorFlorest()
  color.removeColorRain()
  color.removeColorCoffee()
  
  Sound.firePlaceOn()
  Sound.reset()
})
}