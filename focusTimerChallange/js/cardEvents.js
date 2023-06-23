import {
  treeCard,
  rainCard,
  restaurantCard,
  fireCard
} from "./elements.js"

import Audio from "./sounds.js"

export default function (
){
  let audio = Audio()

  treeCard.addEventListener('click', function() {
    treeCard.classList.add('greenBg')
    rainCard.classList.remove('blueBg')
    restaurantCard.classList.remove('purpleBg')
    fireCard.classList.remove('redBg')
    audio.florestAudioPlay()
    audio.rainAudioStop()
    audio.coffeAudioStop()
    audio.fireAudioStop()
  })
  
  rainCard.addEventListener('click', function() {
    rainCard.classList.add('blueBg')
    treeCard.classList.remove('greenBg')
    restaurantCard.classList.remove('purpleBg')
    fireCard.classList.remove('redBg')
    audio.rainAudioPlay()
    audio.florestAudioStop()
    audio.coffeAudioStop()
    audio.fireAudioStop()
  })
  
  restaurantCard.addEventListener('click', function() {
    restaurantCard.classList.add('purpleBg')
    rainCard.classList.remove('blueBg')
    treeCard.classList.remove('greenBg')
    fireCard.classList.remove('redBg')
    audio.coffeAudioPlay()
    audio.rainAudioStop()
    audio.fireAudioStop()
    audio.florestAudioStop()
  })
  
  fireCard.addEventListener('click', function() {
    fireCard.classList.add('redBg')
    restaurantCard.classList.remove('purpleBg')
    treeCard.classList.remove('greenBg')
    rainCard.classList.remove('blueBg')
    audio.fireAudioPlay()
    audio.florestAudioStop()
    audio.rainAudioStop()
    audio.coffeAudioStop()
  })
}