import {
  buttonPlay,
  buttonPause
} from "./elements.js"



export default function Controls(timer){
  function changing () {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
}

function reset () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}



return {
  changing,
  reset,
 
  
}}