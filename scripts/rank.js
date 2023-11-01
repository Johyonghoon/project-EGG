const trTag = document.querySelectorAll('tr')

const rankList = []

console.log(trTag)
console.log(typeof(trTag))

trTag.forEach((tr, index) => {
  if (index !== 0) {
    const td = tr.querySelectorAll('td')[1]; // 두 번째 td 선택
    // console.log(td.querySelector('a').textContent)
    // console.log(td); // 두 번째 td에 대한 작업 수행
    rankList.push(td.querySelector('a').textContent)
  }
  // const tdTag
})

console.log(rankList)


// const axios = require('axios/dist/browser/axios.cjs');

// axios.get('http://127.0.0.1:8000/accounts/user-list/')
//   .then(function (response) {
//     console.log(response.data)
//   })

  fetch('http://127.0.0.1:8000/accounts/user-list/')
  .then(
    response => {
      // response.json()
      // console.log(response.json())
      return response.json()
  }
  )
  .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
