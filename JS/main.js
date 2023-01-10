import Color from "./colorButton.js"

import {Sound} from"./sound.js"


import Timer from "./timer.js"
import Events from "./events.js"
import Controls from "./controls.js"


const color = Color()
const controls = Controls()
const timer = Timer(controls)

 Events({timer,color,controls,Sound})


 timer.getMinutes()






  



