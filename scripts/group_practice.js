 // 연습 보기 페이지
// 목표 기능 : 문제풀이 현황 테이블에서 칸 클릭 시 바로 코드를 볼 수 있는 기능 구현
// 모든 활성화 칸 선택
const activeTds = document.querySelectorAll("td.accepted")
console.log(activeTds)
// 모든 활성화 칸에 대한 이벤트 핸들러 등록
activeTds.forEach((activeTd, index) => {
    activeTd.addEventListener('click', () => {
        // acrtiveTd의 부모 tr 요소 선택
        const parentTr = activeTd.parentElement
        // tr의 자식 td 엘리먼트 목록
        const tdList = Array.from(parentTr.children)
        // activeTd의 인덱스
        const activeTdIndex = tdList.indexOf(activeTd)
        // 문제 인덱스 구하기
        const problemId = activeTdIndex - 1
        console.log(problemId)

        // tr 요소의 모든 th 태그 가져오기
        const memberUrl = parentTr.querySelector("th:nth-child(2) > a").getAttribute("href")
        console.log(memberUrl)
        // 멤버 아이디
        const memberId = memberUrl.substring(6)
        console.log(memberId)
        // 문제 번호
        const problemNum = document.querySelector(`ul.sidebar-nav-v1 > li:nth-child(${problemId}) > a`).getAttribute('href').substring(9)

        // 문제 번호 + 백준 아이디 url 저장
        // const codeUrl = `https://www.acmicpc.net/status?problem_id=${problemNum}&user_id=${memberId}&language_id=-1&result_id=-1`
        console.log('https://www.acmicpc.net/status?problem_id=17836&user_id=ggobug94&language_id=-1&result_id=-1')
        
        // 문제 풀이 페이지로 데이터 요청
        fetch(codeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // console.log(response.text())
                const httpContent = response.text()
                console.log(httpContent)
                return httpContent
            })
            .then(data => {
                // 왜 출력이 안될까?
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                console.log(tempDiv)

                console.log('출력 되니?')
                console.log(data)
                const parser = new DOMParser()
                const doc = parser.parseFromString(data, 'text/html')
                // 고려해야할 문제
                // 맞췄지만 코드를 비공개한 경우
                // 1. 맞춘 제출 내역 찾기
                console.log(doc)
                const acSpans = doc.querySelectorAll('span.result-ac')
                console.log(acSpans)
                for (const acSpan of acSpans) {
                    const resultTd = acSpan.parentElement
                    const solutionTr = resultTd.parentElement
                    const canView = solutionTr.getAttribute('data-can-view')
                    // 2. 볼 수 있는지 체크
                    if (canView === '1') {
                        // 볼 수 있는 경우의 로직
                        const solveId = resultTd.querySelector('td:nth-child(1)')
                        console.log(solveId)
                        break
                    } else {

                    }
                }
            })
            .catch(error => {
                console.error('Error:', error)
              })
    })
})