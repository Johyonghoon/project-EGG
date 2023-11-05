// clean 404 error page
if (typeof(browser) === 'undefined') {
  console.log('browser undefined')
  const page404Content = document.querySelector('div.container.content')
  console.log(page404Content)
  if ( page404Content ) {
    // page404Content.innerHTML = ''

    // 연습 페이지에서 데이터를 가져오는 요청
    fetch('https://www.acmicpc.net/group/practice/18558')
    .then(response => response.text())
    .then(practice_data => {
      // 데이터를 스프린트 페이지에 삽입
      // page404Content.innerHTML = practice_data;
      // console.log(page404Content.innerHTML)
      
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = practice_data;

      // 원하는 변경을 수행 (예: 특정 태그 삭제)
      const headerDivTag = tempDiv.querySelector('.header');
      const footerDivTag = tempDiv.querySelector('.footer-v3')
      headerDivTag.remove()
      footerDivTag.remove()

      // 새로운 div 요소 생성
      const newDiv = document.createElement('div');

      // 클래스 속성에 "col-md-12" 추가
      newDiv.className = "col-md-12";

      // 변경된 내용을 페이지에 삽입
      page404Content.innerHTML = tempDiv.innerHTML;
    })
    .catch(error => {
      console.error(error);
    });
  }
}

