import {
  florestAudio,
  rainAudio,
  firePlaceAudio,
  coffeeAudio,
  buttonPressAudio,
  kitchenTimer
} from "./elements.js"


export const Sound = {
  florestOn () {
    florestAudio.loop = true 
    florestAudio.play()
    rainAudio.pause()
    coffeeAudio.pause()
    firePlaceAudio.pause()
  
  },

  rainOn() {
    rainAudio.loop = true
    rainAudio.play()
    florestAudio.pause()
    coffeeAudio.pause()
    firePlaceAudio.pause()
  },

  coffeeOn() {
    coffeeAudio.loop = true
    coffeeAudio.play()
    florestAudio.pause()
    rainAudio.pause()
    firePlaceAudio.pause()
  },

  firePlaceOn() {
    firePlaceAudio.loop = true
    firePlaceAudio.play()
    florestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
  },
  
  reset() {

    florestAudio.currentTime = 0
    rainAudio.currentTime = 0
    coffeeAudio.currentTime = 0
    firePlaceAudio.currentTime = 0
  
  },

  buttonPress() {
    buttonPressAudio.play()
  },

  timerEnd() {
    kitchenTimer.play()
  },

}