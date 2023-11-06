const ulTag = document.querySelector('.nav-pills')

if (ulTag !== 'undefined') {
  const sprintLiTag = document.createElement('li')
  const aTag = document.createElement('a')
  aTag.setAttribute('href', `/group/sprint/18558/`)
  aTag.textContent = '스프린트'

  const sprintCreateTag = document.createElement('li')
  const sprintCreateATag = document.createElement('a')
  sprintCreateATag.setAttribute('href', `/group/create/sprint/18558/`)
  sprintCreateATag.textContent = '스프린트 만들기'

  sprintLiTag.appendChild(aTag)
  sprintCreateTag.appendChild(sprintCreateATag)

  ulTag.insertBefore(sprintLiTag, ulTag.children[4])
  ulTag.insertBefore(sprintCreateTag, ulTag.children[5])
}