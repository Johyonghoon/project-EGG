const ulTag = document.querySelector('.nav-pills')

const sprintLiTag = document.createElement('li')
const aTag = document.createElement('a')
aTag.setAttribute('href', `/group/sprint/18558`)
aTag.textContent = '스프린트'
sprintLiTag.appendChild(aTag)

ulTag.insertBefore(sprintLiTag, ulTag.children[4])
