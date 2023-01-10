import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import { Sound } from "./sound.js"





export default function Timer(controls) {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  let timerTimeOut

  function updateDisplay(newMinutes,seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes 
    seconds = seconds === undefined ? 0 : seconds
      
    
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }
  
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  
   
  
  function countDown () {
   timerTimeOut = setTimeout(function(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    let isFinished = minutes <= 0 && seconds <= 0
    
    updateDisplay(minutes, 0)
    
    
    if(isFinished) {
      controls.reset()
      reset()
      Sound.timerEnd()
      
      return
      
    }
    
    
    
    if(seconds <= 0 ) {
      seconds = 60
      --minutes
    }
    
    
    updateDisplay(minutes ,  -- seconds)
    
    
    countDown()
  },1000)
  
  
  
  }
  
  
  
  
  function pause() {
    clearTimeout(timerTimeOut)
  }
  
  
  
  function reset() {
    
    updateDisplay(minutes,0)
    clearTimeout(timerTimeOut)
    
    if(minutes === 0) {
      updateDisplay(25,0)
      
    } 

  }

  function addMinutes (minutesContent) {
    minutesContent = minutesDisplay.textContent
    minutes = Number(minutesContent)  

    let seconds = Number(secondsDisplay.textContent)

    
  
    if(minutes < 60) {
      updateMinutes(minutes + 5)
      updateDisplay(minutes, seconds) 
    }
  }

  function subtractMinutes (minutesContent) {
    minutesContent = minutesDisplay.textContent
    minutes = Number(minutesContent)  

    let seconds = Number(secondsDisplay.textContent)
    
    if(minutes > 0){
      updateMinutes(minutes - 5)
      updateDisplay(minutes, seconds)
    }
  
    if(minutes < 0 ){
      updateMinutes(minutes * 0)
      updateDisplay(minutes, 0)
    }
  }

  

  function getMinutes () {
    let newMinutes = Number(prompt(`Quantos minutos ?`))
  
    if(newMinutes === String) {
      alert('informe somente nu')
    }
    
    if(!newMinutes) {
      reset(newMinutes)
      return false
    }
  
    updateDisplay(newMinutes,seconds)
    updateMinutes(newMinutes)
  
    
    return newMinutes
  }

  

  return {
    pause,
    reset,
    updateDisplay,
    updateMinutes,
    countDown,
    addMinutes,
    subtractMinutes,
    getMinutes
  }

}