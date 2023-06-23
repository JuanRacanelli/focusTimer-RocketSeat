import {
  darkIconTheme,
  lightIconTheme,
  body,
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  playBtnLight,
  stopBtnLight,
  increaseBtnLight,
  decreaseBtnLight,
  minutesTimer,
  pointsTimer,
  secondsTimer,
  treeBgCard,
  rainBgCard,
  coffeBgCard,
  fireBgCard,
  treeLightIcon,
  rainLightIcon,
  coffeLightIcon,
  fireLightIcon,
  treeDarkIcon,
  rainDarkIcon,
  coffeDarkIcon,
  fireDarkIcon
} from "./elements.js"

export default function (){
  lightIconTheme.addEventListener('click', function(){
    lightIconTheme.classList.add('hide')
    darkIconTheme.classList.remove('hide')
  
    body.classList.remove('lightBody')
  
    playBtnLight.classList.add('hide')
    stopBtnLight.classList.add('hide')
    increaseBtnLight.classList.add('hide')
    decreaseBtnLight.classList.add('hide')
    playButton.classList.remove('hide')
    stopButton.classList.remove('hide')
    increaseButton.classList.remove('hide')
    decreaseButton.classList.remove('hide')
  
    minutesTimer.classList.remove('lightSpan')
    pointsTimer.classList.remove('lightSpan')
    secondsTimer.classList.remove('lightSpan')
  
    treeBgCard.classList.remove('lightCard')
    rainBgCard.classList.remove('lightCard')
    coffeBgCard.classList.remove('lightCard')
    fireBgCard.classList.remove('lightCard')
  
    treeLightIcon.classList.add('hide')
    rainLightIcon.classList.add('hide')
    coffeLightIcon.classList.add('hide')
    fireLightIcon.classList.add('hide')
  
    treeDarkIcon.classList.remove('hide')
    rainDarkIcon.classList.remove('hide')
    coffeDarkIcon.classList.remove('hide')
    fireDarkIcon.classList.remove('hide')
  })
  
  darkIconTheme.addEventListener('click', function(){
    lightIconTheme.classList.remove('hide')
    darkIconTheme.classList.add('hide')
  
    body.classList.add('lightBody')
  
    playBtnLight.classList.remove('hide')
    stopBtnLight.classList.remove('hide')
    increaseBtnLight.classList.remove('hide')
    decreaseBtnLight.classList.remove('hide')
    playButton.classList.add('hide')
    stopButton.classList.add('hide')
    increaseButton.classList.add('hide')
    decreaseButton.classList.add('hide')
  
    minutesTimer.classList.add('lightSpan')
    pointsTimer.classList.add('lightSpan')
    secondsTimer.classList.add('lightSpan')
  
    treeBgCard.classList.add('lightCard')
    rainBgCard.classList.add('lightCard')
    coffeBgCard.classList.add('lightCard')
    fireBgCard.classList.add('lightCard')
  
    treeLightIcon.classList.remove('hide')
    rainLightIcon.classList.remove('hide')
    coffeLightIcon.classList.remove('hide')
    fireLightIcon.classList.remove('hide')
  
    treeDarkIcon.classList.add('hide')
    rainDarkIcon.classList.add('hide')
    coffeDarkIcon.classList.add('hide')
    fireDarkIcon.classList.add('hide')
  })
}