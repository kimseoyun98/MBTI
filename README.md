## 👀 Overview

이 프로젝트는 회원가입, 로그인, MBTI 테스트 진행 및 결과 관리를 포함하는 웹 애플리케이션입니다. 사용자는 JWT 인증을 통해 서비스를 이용할 수 있으며, 로그인된 사용자만 MBTI 테스트를 진행하고 결과를 관리할 수 있습니다.

### ✨ Feature

#### 1. 회원가입 / 로그인 / 프로필 관리
- **JWT 인증 서버**를 사용하여 사용자 인증을 구현합니다.
- **회원가입** 시 아이디와 비밀번호를 입력받고, 프로필 이미지는 사용하지 않습니다.
- **로그인** 후에만 서비스 이용이 가능합니다.
- 사용자 정보는 **JWT 토큰**을 통해 보호되며, 인증되지 않은 사용자는 접근할 수 없습니다.

<img width="1094" alt="스크린샷 2024-09-11 오전 5 14 43" src="https://github.com/user-attachments/assets/a142c649-4cf2-4930-a218-f2eae8927bdd">
<img width="1093" alt="스크린샷 2024-09-11 오전 5 13 47" src="https://github.com/user-attachments/assets/cdf513f5-21f8-445e-a8ab-3ef25f578c65">
<img width="1095" alt="스크린샷 2024-09-11 오전 5 15 05" src="https://github.com/user-attachments/assets/97779900-40f4-41d0-b80b-091e45f7a58b">

#### 2. MBTI 테스트 제공
- **로그인한 사용자**는 MBTI 테스트를 진행할 수 있습니다.
- 테스트는 **총 20개의 문항**으로 구성되어 있으며, 문항은 `question.js` 파일에 저장됩니다.
- 사용자는 각 문항에 대한 답변을 선택하여 테스트를 완료할 수 있습니다.
<img width="1087" alt="스크린샷 2024-09-11 오전 5 15 47" src="https://github.com/user-attachments/assets/546d927d-748e-4f5c-a316-d4e4ae41799f">

<img width="1085" alt="스크린샷 2024-09-11 오전 5 16 00" src="https://github.com/user-attachments/assets/e1ddd4e0-e819-461d-a488-e95c7100317e">


#### 3. 테스트 결과 계산 및 저장
- 사용자가 MBTI 테스트를 완료하면, 결과가 자동으로 계산되어 **json-server**에 저장됩니다.
- MBTI 결과는 **`E/I`, `S/N`, `T/F`, `J/P`** 네 가지 지표를 기반으로 계산됩니다.
- 저장된 테스트 결과는 기본적으로 **공개(true)**로 설정됩니다.
  
<img width="1094" alt="스크린샷 2024-09-11 오전 5 16 17" src="https://github.com/user-attachments/assets/d3595aef-8a90-40a6-9be9-42d9e9428218">

#### 4. 테스트 결과 관리 기능
- 사용자는 자신의 **테스트 결과를 삭제**할 수 있습니다.
- 테스트 결과의 **공개 여부**를 변경할 수 있는 기능이 제공됩니다.
- **다른 사용자가 공개한 테스트 결과**를 확인할 수 있는 페이지가 구현되어 있습니다.

<img width="683" alt="스크린샷 2024-09-11 오전 6 19 12" src="https://github.com/user-attachments/assets/89f1de6a-c912-4dd7-9cb8-bfa9758cfd09">

### 💻 Stack

- **React**: 프론트엔드 UI 라이브러리
- **JSON Server**: 테스트 결과 저장을 위한 간단한 백엔드 서버
- **JWT (JSON Web Token)**: 사용자 인증 및 보안을 위한 토큰 기반 인증


### + 기타 추가 구현 사항

- [ ] 로그인 유지 기능 구현
- [x] Props Drilling 개선
- [ ] Tanstack Query 사용
- [x] axios를 이용한 API 호출
