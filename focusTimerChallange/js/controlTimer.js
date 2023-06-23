import {
  minutesDisplay,
  secondsDisplay,
  increaseButton,
  decreaseButton,
  playButton,
  stopButton,
  increaseBtnLight,
  decreaseBtnLight,
  playBtnLight,
  stopBtnLight,
} from "./elements.js"

import Audio from "./sounds.js"

export default function(
){
  let audio = Audio()

  let minutes = Number(minutesDisplay.textContent)

  let timerTimeOut

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown(){
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateTimerDisplay (minutes, 0)

      if (isFinished){
        resetTimer()
        updateTimerDisplay()
        audio.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
      
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds -1))

      if (minutes === 0 && seconds === 0){
        resetTimer()
      }

      countDown()
    }, 1000)
  }

  // Control Timer Events

  increaseButton.addEventListener('click', function(){
    updateTimerDisplay(minutes +=5, 0)
    audio.pressButton()
  })

  decreaseButton.addEventListener('click', function(){
    updateTimerDisplay(minutes -=5, 0)
    audio.pressButton()
  })

  playButton.addEventListener('click', function(){
    countDown()
    audio.pressButton()
  })

  stopButton.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
    audio.pressButton()
  })

  // Control Timer Events Light

  increaseBtnLight.addEventListener('click', function(){
    updateTimerDisplay(minutes +=5, 0)
    audio.pressButton()
  })

  decreaseBtnLight.addEventListener('click', function(){
    updateTimerDisplay(minutes -=5, 0)
    audio.pressButton()
  })

  playBtnLight.addEventListener('click', function(){
    countDown()
    audio.pressButton()
  })

  stopBtnLight.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
    audio.pressButton()
  })

  return {
    updateTimerDisplay,
    resetTimer,
    countDown
  }
}
