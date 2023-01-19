# 원티드 프리온보딩 FE 챌린지 - CRUD w React Query

# [📽️ 배포물 바로가기(⚠️공사중)](http://54.178.122.226/)

# 📚 과제 기록

## 1-1. 리팩토링과 타입스크립트 적용

- [x] 수업 내용 기반으로 리팩토링
  - Suspense 적용
    - [관련 커밋 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/commit/07451330c2e50afdb7bc47cea5cb404dee39cfc6)
    - [관련 내용 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1#suspense-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EB%A1%9C%EB%94%A9-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0)
  - api 함수에 api 접두사 추가하여 가독성 높임
    - [관련 커밋 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/commit/3bfe72585378004a14a414a7acbb302b43166d10)
    - [관련 내용 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1#api-%ED%95%A8%EC%88%98%EB%AA%85-%EC%95%9E%EC%97%90-api%EB%A5%BC-%EB%B6%99%EC%97%AC%EC%A4%8C)
- [ ] 타입스크립트 적용
  - EventHandler를 타입 단언 없이 처리하는 방법은 찾았으나, 아직 전역적으로 적용하지 못함.

## 1-2. Redux 뜯어보기, React Query 사용해보기

- [x] Redux 소스코드 분석해서 나만의 Redux 구현하기
  - [관련 커밋 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/commit/5ba6540dc69474ef684520950fece459c102ed67)
  - [관련 내용 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1#Redux-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0)
- [x] API React Query로 리팩토링하기
  - [관련 소스코드 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/tree/main/src/hooks)
  - [관련 내용 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1#%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%B3%B5%EC%9E%A1%EB%8F%84-%EB%82%AE%EC%B6%94%EA%B8%B0)

## 1-3. README 작성, 나는 어떤 개발자인가?

- [ ] README 작성 및 코드 정리
  - [x] README 작성
  - [ ] [코드 정리 관련 PR 바로가기]()
- [x] ‘개발자로서의 나’ 특징 정의해보기
  - [x] [커리어 상담 주제 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/issues/24)
  - [x] 특징 정리하기
  - [x] 커리어 상담 주제 정리해서 요청드리기

# 📋 프로젝트 개요

- [원티드 프리온보딩 FE 챌린지](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)의 과제로 구현함.
- 지속적으로 개선시키며 최신 기술을 실험해볼 수 있는 todolist CRUD w React Query
- 동기부여 할 수 있는 이미지들을 배경이미지로 사용하여 할 일에 대해 동기부여 될 수 있도록 디자인하기

# 🏗️ todolist 기능 소개

## 🔒 인증

### 회원가입

![유효성 검증 및 회원가입](https://user-images.githubusercontent.com/69471032/213385071-b657af26-3db9-4ae9-beb2-dd820a90f15c.gif)

- 회원가입 창을 구현했습니다.
- 현재 email은 @과 .이 포함될 수 있도록, password는 8자리 이상이 넘어가도록 구현해두었습니다.
- 유효성 검사에 통과하지 않으면 버튼을 클릭할 수 없도록 구현하였습니다.

![회원가입 예외처리](https://user-images.githubusercontent.com/69471032/213385061-91573e26-53c4-450f-8b61-b64c531a82ba.gif)

- api에서 받은 에러의 detail이나 클라이언트단에서 확인된 에러를 출력해줄 수 있는 영역을 만들어주었습니다.

### 로그인

![로그인](https://user-images.githubusercontent.com/69471032/213385025-2c7724b8-f20d-4179-90fa-6f44c112a180.gif)

- 로그인 할 수 있도록 구현했습니다.
- 각 Route에서는 JWT 토큰을 확인하여 로그인이 되면 자동으로 todo로 이동하고, 로그아웃 상태라면 auth로 이동할 수 있도록 구현 하였습니다.
- 현재 api가 JWT를 Cookie에 세팅해주지 않기 때문에 localstorage에 JWT를 저장하고 정보를 가져올 수 있는 유틸 함수를 구현하여 처리하였습니다.
- 클라이언트에서 JWT의 Key 값을 가지고 있는 것은 비정상적이라고 생각하여, 유효성 검증은 JWT가 빈 문자열인지만 검증하고 있습니다.

## 📄 할 일 CRUD

### 할 일 목록 & 상세보기

![사이드바 열기, 상세보기](https://user-images.githubusercontent.com/69471032/213385065-cc6c3af7-c705-4dc7-964f-dee5f52a369a.gif)

- 개인적으로 웹사이트를 바탕화면처럼 이용하고자 할 일 목록을 사이드바로 구현하였습니다.
- 사이드바의 할 일 목록 중 하나를 클릭하면, 메모지의 형태로 표시될 수 있도록 구현하였습니다.
- URL 주소로 Query Parameter를 주고, 이에 따라서 id에 맞는 todo를 가져와서 그려주는 방식을 통해서 새로고침하더라도 같은 상태가 유지될 수 있도록 하였습니다.
- 또한 이런 방식을 사용한다면 할 일 목록이 많아졌을 때, 할 일 목록은 메타데이터로 가져오고 상세보기는 전체 데이터를 가져오는 방식으로 최적화도 가능합니다.

### 할 일 추가하기

![할 일 추가하기](https://user-images.githubusercontent.com/69471032/213385056-300d8f6f-6124-491f-bbca-14b7fa6f1850.gif)

- 할 일을 추가할 수 있도록 모달창을 구현했습니다.

### 할 일 수정하기

![할 일 수정하기](https://user-images.githubusercontent.com/69471032/213385052-ad61babd-a566-4fa3-866b-2caa1144a32b.gif)

- 할 일을 수정할 수 있도록 구현했습니다.
- 가볍게 사용하는 todolist가 될 수 있도록, 수정하기가 간편하길 바라여서 따로 form을 만들지 않고 contentEditable을 toggle하여 수정의 UX과 구현로직 모두 간단하도록 구현했습니다.

### 할 일 삭제하기

![할 일 삭제하기](https://user-images.githubusercontent.com/69471032/213385076-229f9a31-5280-4678-b3ea-df06223b76dd.gif)

- 할 일 목록에서 간단히 할 일을 삭제할 수 있는 버튼을 구현했습니다.
- 할 일 삭제에서는 confirm 창을 띄워 유저의 의견을 재확인하도록 구현하였습니다.

### 할 일 상세보기 투명도 변경 및 상세보기 닫기

![할 일 상세보기 투명도 변경](https://user-images.githubusercontent.com/69471032/213385047-664a76fe-dff3-4cc2-9dda-4209f524265d.gif)

- 할 일 상세보기의 투명도를 조절하여 바탕화면으로 쓰기 좋도록 하였습니다.
- 투명도가 변경될 때마다 리렌더링이 일어나지 않도록 useMemo를 통해 최적화하였습니다.
- 상세보기를 닫으면 URL의 Query Parameter가 없어질 수 있도록하여 새로고침 하더라도 상태가 유지될 수 있도록 구현하였습니다.

### 배경화면 변경하기

![배경화면 변경](https://user-images.githubusercontent.com/69471032/213385033-41f458a0-a29b-442d-b184-f99c8aea5818.gif)

- 따로 새로고침하지 않더라도 배경화면만 변경할 수 있도록 구현하였습니다.

# 👟 실행 방법

### 코드 실행 방법

- [백엔드 코드저장소](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

```bash
#FE
npm install
npm start

#BE
yarn
yarn start
```

### FE 단위 테스트

- 현재 의존성 충돌로 테스트 실행이 어렵습니다.

## [디자인 Figma](https://www.figma.com/file/IiY1rAJDZ0jCsmK2CwwHkA/wanted-preonboarding-fe-1?t=LHTLyi3zJ4TgUysy-0)

# 👷 프로젝트 기능 요구사항

<details>
<summary>
<h3>1-1) 사전과제 진행 가이드</h3>
</summary>

- 제공해드리는 API Repository를 활용하여 가이드에 따라 `Todo App`을 작성, 본인의 github에 `Public`으로 올려주세요. (주의: Public이 아닐 경우 과제를 확인할 수 없습니다)
- 완성한 과제는 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 제출 레파지토리 명은 `wanted-pre-onboarding-challenge-fe-1`로 생성해 주세요.
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 코드의 일관성, 가독성, 함수 분리, 컴포넌트 설계, 코드 퀄리티 등을 기준으로 세부적인 평가가 이루어집니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- `README.md`를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
- 반드시 함수 컴포넌트로 개발해주세요. (React Hooks)

\* 문의 사항은 사전 과제 Repository의 Issue로 등록해 주세요.

</details>

<details>
<summary>
<h3>1-2) 클라이언트 구현 과제 안내</h3>
</summary>

**Assignment 1 - Login / SignUp**

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

**Assignment 2 - Todo List**

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

</details>

<details>
<summary>
<h3>과제 참고 사항</h3>
</summary>

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

</details>

# ⚙️ 기술스택

[package.json 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/blob/main/package.json)

### Typescript, eslint, prettier

- 코드 퀄리티와 잠재적인 위험을 줄이기 위해 사용함

### React, Styled-component

- 선언적인 프론트엔드 컴포넌트 프로그래밍을 위해 사용함

### React Query

- 서버 상태 관리를 통해 상태의 복잡도를 낮추기위해 사용함

### jest

- 이후 checkIsValidEmail, checkIsValidPassword, checkIsValidToken 등 유틸성의 비즈니스 로직을 개선시키기 위해 단위테스트를 작성함.

### craco

- 절대경로를 통한 안정적인 모듈 import를 위해 typescript path alias를 적용, 이를 위해 craco 사용함.

### redux, react-redux, redux-toolkit

- redux의 구조를 확인하고 직접 만들어보기 위해 설치됨. 구조 확인 후 삭제 예정.

# 📁 폴더 구조

```
wanted-pre-onboarding-challenge-fe-1
├─ 📁 public
├─ 📁 src
│  ├─ 📁 apis  # api와 통신하는 계층 폴더입니다.
│  ├─ 📁 assets  # 번들링 되어야하는 자산을 모아둔 폴더입니다.
│  │  └─ 📁 img
│  ├─ 📁 common  # 전역으로 사용되는 파일입니다. 현재는 상수 파일이 있습니다.
│  ├─ 📁 components  # route 페이지를 구성하는 컴포넌트 들입니다. route별, 공통 컴포넌트가 있습니다.
│  │  ├─ 📁 auth
│  │  ├─ 📁 common
│  │  ├─ 📁 home
│  │  └─ App.tsx  # App 전체를 구성하는 컴포넌트입니다. 내부에 Router가 있습니다.
│  ├─ 📁 core  # redux를 직접 만들고 있는 폴더입니다. react-redux까지 만들어서 사용할 예정입니다.
│  │  └─ 📁 my-redux
│  ├─ 📁 hooks  # 커스텀 hook이 모여있는 폴더입니다. 현재는 mutation과 query가 모여있습니다.
│  │  ├─ 📁 mutations
│  │  └─ 📁 queries
│  ├─ 📁 routes  # 각 route의 페이지입니다.
│  │  ├─ Auth.tsx
│  │  └─ Home.tsx
│  ├─ 📁 styles  # styled-components 파일이 모여있는 폴더입니다. 컴포넌트 폴더와 동일하게 구분했습니다.
│  │  ├─ 📁 auth
│  │  ├─ 📁 common
│  │  ├─ 📁 home
│  │  └─ Global.style.tsx  # 전역 스타일 파일입니다.
│  ├─ 📁 tests  # test 코드가 있는 폴더입니다. 현재는 유효성 검사 로직에 대한 테스트코드가 있습니다.
│  ├─ 📁 types  # 타입 선언 폴더입니다. api response, todo type이 선언되어있습니다.
│  ├─ 📁 utils  # 유틸성 함수를 위한 폴더입니다. 유효성검사, localstorage에서 jwt 가져오기가 있습니다.
│  └─ index.tsx
├─ ⚙️ .eslintignore
├─ ⚙️ .eslintrc.json
├─ ⚙️ .gitignore
├─ ⚙️ .prettierrc
├─ README.md
├─ ⚙️ craco.config.js
├─ ⚙️ package-lock.json
├─ ⚙️ package.json
├─ ⚙️ tsconfig.json
└─ ⚙️ tsconfig.paths.json

```

# ⚠️ 미해결 이슈 & 개선 가능 사항

### [미해결 이슈 바로가기](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/issues)

- 디테일한 구현 부분들이나 예외처리에 대해서 아직 완성되지 못했습니다.
- 반응형을 고려하여 필요한 부분에 flex와 rem을 사용하여 만들었지만, 아직 반응형으로 구현되지 않은 상태입니다.
- 이후 유효한 token이나 email, password에 대해 추가로 검증할 수 있는 규칙을 정할 예정입니다.
- 또한 alret창을 개선시키고, error가 뜰 때마다 레이아웃 변경이 일어나지 않도록 Toast 창을 구현할 예정입니다.
- [현재의 api](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)로 구현할 수 없는 기능들을 api를 추가하여 구현할 예정입니다.
  - 할 일 마감기한 추가
  - 할 일 소요시간 추가
  - drag & drop을 통한 할 일 상태 변경
- [이외에 개선이 가능한 부분들](https://github.com/vangona/wanted-pre-onboarding-challenge-fe-1/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)을 개선하여 완성도를 높일 예정입니다.

# 🤔 기술적인 고민들

### LoginForm과 RegisterForm은 분리해야할까?

- 코드의 반복 관점에서보면 AuthForm 하나로 관리하는게 맞지만, RegisterForm은 DB를 수정하고 LoginForm은 DB를 읽기만 하기 때문에 전혀 다른 Form이다.
- 이런 상황에서 분리하는게 맞을까? AuthForm 하나로 간편히 관리하는게 맞을까?
- 작은 프로젝트고 보안적으로 크리티컬 하지 않아서 하나로 간편하게 관리했다.

### EditForm과 TodoDetail을 별도의 컴포넌트로 쓰는게 나을까?

- TodoDetail에 contentEditable을 사용한다면 별도로 컴포넌트를 사용하지 않아도 된다.
- 하지만 contentEditable이 React 스럽지 않다는 것을 알게되었다.
- 또한 EditForm은 api를 호출하는 form이다. 이걸 단순히 contentEditable한 div로 관리해도 되는걸까?
- title과 content 하위의 children이 textNode 밖에 없었기 때문에 suppressContentEditableWarning를 사용하여 contentEdittable을 사용했다.

[DOM 엘리먼트 - React](https://ko.reactjs.org/docs/dom-elements.html)

### 로그인과 회원가입시 레이아웃 변경이 일어나도 괜찮을까?

- 비밀번호 확인 입력창이 없을 때 그 자리를 비워두면 레이아웃 변경이 일어나지 않아도 괜찮다.
- 화면에 표시되는 것이 적기때문에 굳이 일어나지 않아야할정도로 성능이슈가 난다는 생각이 들지는 않는다.
- todolist는 정말 많이 있는 서비스이기 때문에 회원가입을 클릭했을때 밋밋한 것보다 애니메이션이 있는것이 이 서비스에 대해 긍정적이라고 생각한다.

### TodoNote는 모달로 만드는게 나을까?

- portal을 만든다는건 SPA에 대해서는 안티패턴이며 상태의 흐름이 여러 갈래로 갈리기 때문에 최대한 만들지 않는 것이 좋다고 생각한다.
- todoNote는 굳이 portal을 만들며 얻을 수 있는 이점이 없다고 생각했다.

# ⚒️ 리팩토링

### ListSection에서 TodoListItem 분리

- TodoListItem에 삭제버튼을 추가하여 UX를 단순화시키며 TodoListItem에 기능이 많아지게 되었고, 이에 따라 별도의 컴포넌트로 분리하는 것이 관리하기 쉬울거라는 판단이었다.

### 전체적으로 함수 / 변수명 구체적으로 변경

- 함수명과 변수명을 너무 구체적으로 썼었어서 조금은 추상적으로 썼었는데, 조금 더 구체적으로 변경하는게 나을거라는 판단이었다.

### 불필요한 props 전달 제거

- useToken hook은 전역으로 userToken을 사용하기 쉽게해준다. App에서 Home, Auth Router로 userToken을 전달해주고 있었던 것을 발견하여 제거해주었다.

### 리액트 쿼리를 통해 상태 관리 복잡도 낮추기

- 현재 home route에서 관리하는 상태를 수정하기 위해 handler를 props로 전달하며 상태가 복잡해졌는데, 이를 리액트 쿼리와 useQuery, useMutation을 통한 서버 상태 관리로 단순화할 수 있다.
- 또한 캐싱을 통해서 네트워크 요청량도 줄일 수 있다는 장점이 있다.
- 리팩토링 하고 나니 전체적으로 상태관리가 훨씬 용이해졌고, 비즈니스 로직이 동작하는 곳에 가까워져서 로직을 관리하기가 더욱 편해졌다.
- 이에따라 props drilling으로 상태를 관리해야 했기에 필요이상으로 많은 상태를 관리하던 route 컴포넌트들의 크기가 훨씬 작아졌다.
  - 가장 길던 Home 컴포넌트를 103 lines에서 47 lines로 50% 이상 줄임.

### Suspense 사용으로 로딩 표시하기

- 아주 간편해서 별도의 isLoading 같은 상태가 필요 없었음.
- 또한 UI 내부 로직으로도 UI를 준비하는 상태의 동작과 준비된 UI를 그리는 동작이 구분되어 오류의 가능성이 줄어듬.

### useToken hook을 util 함수로 변경함

- 원래는 전역에 같은 값을 공유시키고 token 상태에 따라 렌더링을 다르게 하는 목적이라고 생각해서 hook을 사용하려고 했었는데, 생각해보니 해당 함수는 http 통신에 cookie가 자동으로 실려갈 때 cookie 값을 불러오는 것을 대체하는 함수에 가까웠음.
- 이에 따라 getUserToken이라는 util 함수로 변경함.

### api 함수명 앞에 api를 붙여줌

- createTodo 같은 함수명은 이 서비스의 비즈니스 로직에 가까 함수에 붙이는 것이 맞다고 생각함.
- api 함수에는 api를 접두사로 붙여 구분하였음.

### Redux 뜯어보기

- 단순히 상태관리를 위한 Redux의 내부구조는 아주 단순했다.
- 구조 자체는 Flux 패턴의 단순 구현체에 가까웠고, 예외처리도 Typescript를 사용한다면 많은 부분을 생략할 수 있었다.
- Redux가 어렵다기 보다는 Flux 패턴이 새로운 것이라는 것을 다시 느낄 수 있었다.
- Store와 Subscriber를 관리하는 것이 전체적으로 Pub/Sub 패턴으로 이루어져 있을 줄 알았는데 파악한 바로는 event channel이 없는 단순한 Observer 패턴에 가까웠다. action type에 따라서 subscriber가 선택되어 실행되는 것이 아니라, action type에 따라서 state가 다르게 변경되고 subscriber의 함수들은 모두 실행되었다.
- state가 변경되면 실행되는 함수, 즉 state - redux - subscriber는 Observer 패턴이었지만 action에 따라 state가 변경되는 방법, 즉 action - redux - reducer의 관계는 action type에 따라 reducer의 동작이 다르기 때문에 pub/sub 패턴에 가까웠다.
- 혁신적이었던 것은 Flux라는 단방향 데이터 흐름을 전역 store로 관리한다는 부분 같았다. 확실히 React와는 다른 흐름이 맞았다.
- React는 UI와 state를 단방향으로 바인딩하여 UI와 state의 흐름을 간결히 하기위한 Flux 패턴이라면, Redux는 Store라는 전역 상태를 단방향으로 관리하기 위한 Flux 패턴이었다. 동일한 부분은 Flux라는 단방향 패턴일 뿐, 다른 연관성은 적다고 느껴졌다.
- 따라서 Flux 패턴에 대해 이해한다면 Redux 자체가 코드적으로 어렵게 느껴지지는 않았다.
- 단번에 파악하기 어려운 것은 react-redux나 redux-toolkit과 관련된 것들이었다.
- react-redux나 rredux-toolkit을 간단히 뜯어봤는데, react-redux 정도는 hook으로 구현할 수 있을 것 같고 학습에 도움이 될 것 같다는 생각이 들어서 다음번에는 react-redux 형태로 현재 todoNote의 opacity를 제어해볼까한다.

# 🚀 트러블 슈팅

### createBrowserRouter에게 userData 넘겨주기

- userData를 최상단에서 관리해주고자 최상단 App 컴포넌트를 사용하고 싶은데, react-router-dom이 업데이트되며 BrowserRouter를 최상단에서 렌더링하고 있다.
- 결국 RouterProvider도 Provider라는 생각이 들었고, 그렇다면 전역 상태를 관리해주는 App 컴포넌트를 만들고 사용해도 괜찮다는 생각이 들었다.
- 실제로 App 컴포넌트를 구현할 수 있었다.

### 접속 후 루트 변경이 안되는 문제

- localStorage에 기록되기 전에 이동이 되는 바람에 생기는 문제였다.

### 타입스크립트에서 이미지의 선언파일이 없다고 뜸.

- 타입스크립트는 .jpg라는 모듈명을 해석할 수 없기 때문임
- 커스텀 선언 파일을 만들고 .jpg 모듈을 declare module을 통해 추가하여 해결

[Using images in React and TypeScript with Webpack 5](https://www.carlrippon.com/using-images-react-typescript-with-webpack5/)
