const fetchButton = document.getElementById('fetchUserData');

// cf) querySelector('#fetchUserData');

// 이벤트를등록할요소.addEventListener('이벤트타입', () => {})

// +) 이벤트를 등록할 요소가 존재하지 않을 경우를 대비하여
//    , 요소 뒤에 ?(물음표) 사용
//   >> 
fetchButton?.addEventListener('click', async () => {
  const userDataDiv; // 데이터 요청 결과에 따라 데이터를 넣어줄 div\

  const userIdElement; // 사용자의 id를 입력받을 input 요소
  const userId; // 삼항 연산자 사용 (있으면 value 속성, 없으면 ''반환)

  const apiUrl; // ``으로 JSONPlaceholder의 주소값 가져오기 /${userId}

  if (userDataDiv) {
    // 해당 요소의 내부 HTML(innerHTML)로 로딩 메시지 출력
    // : Loading user data

    try {
      // 비동기 처리 문법
    } catch (error) {

    }
  }
});

