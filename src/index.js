import './index.scss'
import {
  inputRange,
  buttonList,
  iconList,
  iconAssets,
  audioList,
  backgroundList,
} from './elements'

buttonList.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.body.style.background = `url(${backgroundList[index]}) 0 0/cover no-repeat`

    audioList[index].volume = inputRange.value

    if (audioList[index].paused) {
      inputRange.addEventListener('input', event => {
        audioList[index].volume = event.target.value
      })

      audioList.forEach(audio => {
        if (audio === audioList[index]) {
          audio.play()
        } else {
          audio.pause()
        }
      })

      iconList.forEach((icon, index) => {
        icon.src = iconAssets[index]
      })
    } else {
      audioList[index].pause()
      iconList[index].src = 'assets/icons/pause.svg'
    }
  })
})
