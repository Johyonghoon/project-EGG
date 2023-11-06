const sprintCreate = function () {
  
  const { pathname } = window.location
  const urlPrefix = '/sprint/create/'
  const group_id = pathname.substring(urlPrefix.length)

  // recreate page
  const container = document.getElementsByClassName('container content')[0]
  console.log(container)
  container.innerHTML = ''

  // create nav bar
  const rowDivTag = document.createElement('div')
  rowDivTag.classList.add('row')
  container.appendChild(rowDivTag)

  console.log(container)

  
  
}

sprintCreate()