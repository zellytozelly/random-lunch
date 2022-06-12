# 오늘의 점심메뉴 추천앱! (Random Lunch)
## 📜 프로젝트 개요
우리는 매일 식사를 하죠. 

가끔은 무엇을 먹으면 좋을지, 쉽게 생각이 나지 않을 때도 있습니다.

오늘의 식사 메뉴를 고를 때 Random Lunch를 체크해보세요!

양식/한식/일식/중식/그외 다섯가지 분야로 필터링할 수 있습니다. 

먹고싶은 메뉴를 찾을 수 있도록 도움이 되었으면 해요! 😄

---
## 🔗 프로젝트 배포
### ⭐ 배포 UIL 🔗 https://random-lunch.netlify.app/
<br/><br>
- (Develop 브랜치에 추가 작업중)

  https://develop-random-lunch.netlify.app/

- figma : [Link](https://www.figma.com/file/lzQvxqmcmD7nS4go5pmobA/%EC%98%A4%EB%8A%98%EC%9D%98-%EB%A9%94%EB%89%B4?node-id=0%3A1)

## ⚙ 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>
  <img src="https://img.shields.io/badge/Redux/toolkit-v1.8.1-blue"/>
  <img src="https://img.shields.io/badge/React Router Dom-v6.3.0-blue"/>

```
그 외 추가 라이브러리
 classnames, react-use, store
```

## 🎄 프로젝트 트리

```
📦src
 ┣ 📂assets      // svg, images, json
 ┣ 📂components  // 공유컴포넌트
 ┣ 📂hooks       // redux toolkit hooks
 ┣ 📂routes      // 페이지
 ┃ ┣ 📂_shared   // FNB, Card
 ┃ ┣ 📂Favorite  // 즐겨찾기 
 ┃ ┣ 📂Header    // 헤더
 ┃ ┣ 📂Main      // 메인화면
 ┣ 📂states      // 상태관리     
 ┣ 📂styles      // 스타일 관련
 ┣ 📂types       // 타입 정의
 ┣ 📂utils       // 메인화면

```
## 📍 Getting Started / 어떻게 시작하나요?

1. yarn 설치하기
```sh
$ npm i yarn
```

2. Repository 클론
```sh
$ git clone https://github.com/zellytozelly/random-lunch.git
```

3. Dependecies 설치
```sh
$ yarn install
```

4. Run 실행
```sh
$ yarn start
```

## 🔧일정

### 기획/설계
- [X] 기획
- [X] 피그마 디자인

### 레이아웃
- [X] 레이아웃 헤더
- [X] 레이아웃 FNB
- [X] 레이아웃 카드
- [X] 반응형 고려
- [X] 글자 넘어갈시 축약 ... 
- [X] 레이아웃 버튼
- [X] 레이아웃 검색
- [X] 레이아웃 즐겨찾기

### 랜덤
- [X] 검색 placeholder 새로고침할 때마다 랜덤 텍스트 제공
- [X] 새로고침 할 때마다 랜덤 출력
  - 효과 : 사용자에게 다양한 음식 추천
- [X] 음식 분류 버튼 누를 때마다 랜덤 출력
- [X] 검색어를 새로 입력할 때마다 랜덤 출력

### JSON
- [X] JSON 데이터 변환 - 서울관광재단_음식이미지정보_20211222

### 음식 분류 버튼
- [X] 양식/한식/중식/일식/그외 버튼 작동 
  - [X] 단위 전역관리
  - [X] 타이틀 누르면 전체 음식리스트 나오도록 구현

### 검색
- [X] 음식을 검색하면 검색어가 포함된 검색결과 출력.

### 즐겨찾기
- [X] Redux로 local Storage에 즐겨찾기한 id 저장


## 추후 도전과제
- [ ] 카카오 맵 API를 사용한 지도 위치 표시