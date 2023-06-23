import {
  florestInput,
  rainInput,
  coffeInput,
  fireInput
} from "./elements.js"

export default function (){
  const florestAudio = new Audio("../audios/Floresta.wav")
  const rainAudio = new Audio("../audios/Chuva.wav")
  const coffeAudio = new Audio("../audios/Cafeteria.wav")
  const fireAudio = new Audio("../audios/Lareira.wav")

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  // Functions Sounds

  function florestAudioPlay(){
    florestAudio.play()
    florestAudio.loop = true
  }

  function florestAudioStop(){
    florestAudio.pause()
  }

  function rainAudioPlay(){
    rainAudio.play()
    rainAudio.loop = true
  }

  function rainAudioStop(){
    rainAudio.pause()
  }

  function coffeAudioPlay(){
    coffeAudio.play()
    coffeAudio.loop = true
  }

  function coffeAudioStop(){
    coffeAudio.pause()
  }

  function fireAudioPlay(){
    fireAudio.play()
    fireAudio.loop = true
  }

  function fireAudioStop(){
    fireAudio.pause()
  }

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  function setThemeVolume() {
    florestAudio.volume = florestInput.value
    rainAudio.volume = rainInput.value
    coffeAudio.volume = coffeInput.value
    fireAudio.volume = fireInput.value
}
  florestInput.addEventListener("input", function () {
    const florestInput = this.value;
    florestAudio.volume = florestInput
  })

  rainInput.addEventListener("input", function () {
    const rainInput = this.value;
    rainAudio.volume = rainInput
  })
  
  coffeInput.addEventListener("input", function () {
    const coffeInput = this.value;
    coffeAudio.volume = coffeInput
  })

  fireInput.addEventListener("input", function () {
    const fireInput = this.value;
    fireAudio.volume = fireInput
  })

  function resetFlorestVolume() {
    florestInput.value = 0.5
  }

function resetRainVolume() {
    rainInput.value = 0.5
  }

function resetCoffeeVolume() {
    coffeInput.value = 0.5
  }

function resetFireVolume() {
    fireInput.value = 0.5
  }

  return {
    florestAudioPlay,
    florestAudioStop,
    rainAudioPlay,
    rainAudioStop,
    coffeAudioPlay,
    coffeAudioStop,
    fireAudioPlay,
    fireAudioStop,
    pressButton,
    timeEnd,
    setThemeVolume,
    resetFlorestVolume,
    resetRainVolume,
    resetCoffeeVolume,
    resetFireVolume
  }
}