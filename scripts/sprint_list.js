// clean 404 error page
if (typeof(browser) === 'undefined') {
  console.log('browser undefined')
  const page404Content = document.querySelector('div.container.content')
  console.log(page404Content)
  if ( page404Content ) {
    page404Content.innerHTML = ''
  }
}

