// clean 404 error page
if (typeof(browser) === 'undefined') {
  console.log('browser undefined')
  const page404Content = document.querySelector('div.container.content')
  console.log(page404Content)
  if ( page404Content ) {
    page404Content.innerHTML = ''

    // 연습 페이지에서 데이터를 가져오는 요청
    axios('https://www.acmicpc.net/group/practice/18558')
    .then(response => response.text())
    .then(data => {
      // 데이터를 스프린트 페이지에 삽입
      page404Content.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
  }
}

