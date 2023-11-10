
const groupNav = function () {
  console.log('groupNav start')
  
  // group nav 만들기
  let newGroupNavUlTag = document.createElement('ul')
  newGroupNavUlTag.classList.add('nav')
  newGroupNavUlTag.classList.add('nav-pills')

  // 미가입 : 0, 가입 : 1, 관리자 : 2
  const listData = [
    {'link': '/group/', 'text': '메인', 'auth': 0},
    {'link': '/group/workbook/', 'text': '문제집', 'auth': 1},
    {'link': '/group/workbook/create/', 'text': '문제집 만들기', 'auth': 2},
    {'link': '/status?group_id=', 'text': '채점 현황', 'auth': 1},
    {'link': '/group/sprint/', 'text': '스프린트', 'auth': 1},
    {'link': '/group/create/sprint/', 'text': '스프린트 만들기', 'auth': 2},
    {'link': '/group/practice/', 'text': '연습', 'auth': 1},
    {'link': '/group/practice/create/', 'text': '연습 만들기', 'auth': 2},
    {'link': '/group/ranklist/', 'text': '랭킹', 'auth': 0},
    {'link': '/group/board/list/', 'text': '게시판', 'auth': 1},
    {'link': '/group/board/write/', 'text': '글쓰기', 'auth': 1},
    {'link': '/group/file/', 'text': '파일', 'auth': 1},
    {'link': '/group/setting/source/', 'text': '설정', 'auth': 1},
    {'link': '/group/admin/', 'text': '관리', 'auth': 2},
  ]

  listData.forEach(element => {
    const liTag = document.createElement('li')
    const aTag = document.createElement('a')

    // console.log(element.link + groupId)

    if ( pathname + search === element.link + groupId ) {
      liTag.classList.add('active')
    }

    aTag.href = element.link + groupId
    aTag.textContent = element.text


    liTag.appendChild(aTag)
    newGroupNavUlTag.appendChild(liTag)
  })

  const oldGroupNavUlTag = document.getElementsByClassName('nav nav-pills')[0]

  if (oldGroupNavUlTag === undefined) {

    console.log(`oldGroupNavUlTag is undefined`)
    // 해당 위치 찾기
    // containerTag.innerHTML = ''

    const containerRowTag = document.createElement('div')
    containerRowTag.classList.add('row')

    const groupNavDivTag = document.createElement('div')
    groupNavDivTag.classList.add('col-md-12')
    groupNavDivTag.appendChild(newGroupNavUlTag)
    containerRowTag.appendChild(groupNavDivTag)
    containerTag.appendChild(containerRowTag)

  } else {
    oldGroupNavUlTag.replaceWith(newGroupNavUlTag)
  }

}


// if (ulTag !== 'undefined') {
//   const sprintLiTag = document.createElement('li')
//   const aTag = document.createElement('a')
//   aTag.setAttribute('href', `/group/sprint/18558/`)
//   aTag.textContent = '스프린트'

//   const sprintCreateTag = document.createElement('li')
//   const sprintCreateATag = document.createElement('a')
//   sprintCreateATag.setAttribute('href', `/group/create/sprint/18558/`)
//   sprintCreateATag.textContent = '스프린트 만들기'

//   sprintLiTag.appendChild(aTag)
//   sprintCreateTag.appendChild(sprintCreateATag)

//   ulTag.insertBefore(sprintLiTag, ulTag.children[4])
//   ulTag.insertBefore(sprintCreateTag, ulTag.children[5])
// }