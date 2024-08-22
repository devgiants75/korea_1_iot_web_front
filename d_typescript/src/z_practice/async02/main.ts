/*
! 외부 API를 사용하는 비동기 작업 프로젝트
- jsonplaceholder의 photos 데이터를 사용
- https://jsonplaceholder.typicode.com/photos

>> URL을 통한 데이터 요청 시 
>> URL경로?키=쌍의 형태로 옵션 전달 가능
- https://jsonplaceholder.typicode.com/photos?albumId=1

# 요구 사항 정리
- 각 페이지에 photos 데이터의 사진을 4개씩 첨부
  (50 === (4 * 12) + 2)
- 각 사진의 이름 (title)은 사진 아래 작성
- 페이지 간의 이동은 버튼(Previous, Next)으로 이동

- async/await를 사용하여 작성
*/

//? Photo 타입 정의
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// 현재 페이지 번호를 추적하는 변수 선언 (1로 초기화)
let currentPage = 1;
// 한 페이지에 표시할 사진의 수
const photoPerPage = 4;

//? 지정된 페이지의 사진들을 비동기적으로 불러오는 함수 선언
async function fetchPhotos(page: number) {
  try {

  } catch (error) {
    console.error('Failed');
    return;
  }
}