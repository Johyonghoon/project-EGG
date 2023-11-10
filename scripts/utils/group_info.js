const groupInfo = function () {
  console.log('groupInfo start')
  const { pathname, search } = window.location
  const containerTag = document.querySelector('body > div.wrapper > div.container.content')
  
  // console.log(pathname)
  // console.log(search)
  
  // groupId
  const urlInfoArray = pathname.split('/') || []
  let groupId = urlInfoArray[urlInfoArray.length-1]
  
  // 연습 > 개별 페이지 or 채점 현황
  if (urlInfoArray.includes('practice') && urlInfoArray.includes('view')) {
    groupId = urlInfoArray[urlInfoArray.length-2]
    const PracticeId = urlInfoArray[urlInfoArray.length-1]
  } else if (urlInfoArray.includes('status')) {
    const searchInfoArray = search.split('=') || []
    groupId = searchInfoArray[searchInfoArray.length-1]
    console.log('?')
  }
  
  console.log(`groupId : ${groupId}`)
}
