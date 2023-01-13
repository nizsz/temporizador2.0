import {
  florestAudio,
  rainAudio,
  firePlaceAudio,
  coffeeAudio,
  buttonPressAudio,
  kitchenTimer,
  volumeFlorest,
  volumeRain,
  volumeFireplace,
  volumeCoffee
} from "./elements.js"


export const Sound = {
  florestOn () {

    florestAudio.loop = true 
    florestAudio.play()
    rainAudio.pause()
    coffeeAudio.pause()
    firePlaceAudio.pause()
    
    rainAudio.currentTime = 0
    coffeeAudio.currentTime = 0
    firePlaceAudio.currentTime = 0

    if(volumeFlorest.value == 0 ) {

      florestAudio.volume = 0.3
      volumeFlorest.value = 0.3

      rainAudio.volume = 0
      volumeRain.value = 0

      coffeeAudio.volume = 0
      volumeCoffee.value = 0

      firePlaceAudio.volume = 0
      volumeFireplace.value = 0

    }
    
  },

  rainOn() {
    rainAudio.loop = true
    rainAudio.play()
    florestAudio.pause()
    coffeeAudio.pause()
    firePlaceAudio.pause()

    florestAudio.currentTime = 0
    coffeeAudio.currentTime = 0
    firePlaceAudio.currentTime = 0

    if(volumeRain.value == 0 ) {

      rainAudio.volume = 0.3
      volumeRain.value = 0.3

      florestAudio.volume = 0
      volumeFlorest.value = 0

      coffeeAudio.volume = 0
      volumeCoffee.value = 0

      firePlaceAudio.volume = 0
      volumeFireplace.value = 0

    }
  },

  coffeeOn() {
    coffeeAudio.loop = true
    coffeeAudio.play()
    rainAudio.pause()
    florestAudio.pause()
    firePlaceAudio.pause()

    florestAudio.currentTime = 0
    rainAudio.currentTime = 0
    firePlaceAudio.currentTime = 0

    if(volumeCoffee.value == 0 ) {

      coffeeAudio.volume = 0.3
      volumeCoffee.value = 0.3

      florestAudio.volume = 0
      volumeFlorest.value = 0

      rainAudio.volume = 0
      volumeRain.value = 0

      firePlaceAudio.volume = 0
      volumeFireplace.value = 0

    }
  },

  firePlaceOn() {
    firePlaceAudio.loop = true
    firePlaceAudio.play()
    rainAudio.pause()
    coffeeAudio.pause()
    florestAudio.pause()

    florestAudio.currentTime = 0
    rainAudio.currentTime = 0
    coffeeAudio.currentTime = 0

    if(volumeFireplace.value == 0 ) {

      firePlaceAudio.volume = 0.3
      volumeFireplace.value = 0.3

      florestAudio.volume = 0
      volumeFlorest.value = 0

      coffeeAudio.volume = 0
      volumeCoffee.value = 0

      rainAudio.volume = 0
      volumeRain.value = 0

    }
  },
  

  buttonPress() {
    buttonPressAudio.play()
  },

  timerEnd() {
    kitchenTimer.play()
  },

}