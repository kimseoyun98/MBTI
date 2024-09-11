## 👀 Overview

이 프로젝트는 회원가입, 로그인, MBTI 테스트 진행 및 결과 관리를 포함하는 웹 애플리케이션입니다. 사용자는 JWT 인증을 통해 서비스를 이용할 수 있으며, 로그인된 사용자만 MBTI 테스트를 진행하고 결과를 관리할 수 있습니다.

### ✨ Feature


<img width="1317" alt="스크린샷 2024-09-11 오후 3 56 58" src="https://github.com/user-attachments/assets/577e08f6-2e63-43b6-8061-db7aeab70227">

#### 1. 회원가입 / 로그인 / 프로필 관리
- **JWT 인증 서버**를 사용하여 사용자 인증을 구현합니다.
- **회원가입** 시 아이디와 비밀번호를 입력받고, 프로필 이미지는 사용하지 않습니다.
- **로그인** 후에만 서비스 이용이 가능합니다.
- 사용자 정보는 **JWT 토큰**을 통해 보호되며, 인증되지 않은 사용자는 접근할 수 없습니다.
<img width="1327" alt="스크린샷 2024-09-11 오후 3 57 06" src="https://github.com/user-attachments/assets/1cdfe922-1aa4-491c-8bbf-383808b40a52">
<img width="1333" alt="스크린샷 2024-09-11 오후 3 57 14" src="https://github.com/user-attachments/assets/3aeca76a-445a-4baf-95e2-efd579b2f5dd">
<img width="1338" alt="스크린샷 2024-09-11 오후 3 57 40" src="https://github.com/user-attachments/assets/e7cf09b3-9a2e-41aa-ba54-458e63a5e44a">




#### 2. MBTI 테스트 제공
- **로그인한 사용자**는 MBTI 테스트를 진행할 수 있습니다.
- 테스트는 **총 20개의 문항**으로 구성되어 있으며, 문항은 `question.js` 파일에 저장됩니다.
- 사용자는 각 문항에 대한 답변을 선택하여 테스트를 완료할 수 있습니다.
<img width="1322" alt="스크린샷 2024-09-11 오후 3 57 51" src="https://github.com/user-attachments/assets/6132a584-4afc-47ab-8bf0-26716a926636">



#### 3. 테스트 결과 계산 및 저장
- 사용자가 MBTI 테스트를 완료하면, 결과가 자동으로 계산되어 **json-server**에 저장됩니다.
- MBTI 결과는 **`E/I`, `S/N`, `T/F`, `J/P`** 네 가지 지표를 기반으로 계산됩니다.
- 저장된 테스트 결과는 기본적으로 **공개(true)**로 설정됩니다.

<img width="1331" alt="스크린샷 2024-09-11 오후 3 58 04" src="https://github.com/user-attachments/assets/459f3ada-996a-489d-bf93-c2ce6f086381">



#### 4. 테스트 결과 관리 기능
- 사용자는 자신의 **테스트 결과를 삭제**할 수 있습니다.
- 테스트 결과의 **공개 여부**를 변경할 수 있는 기능이 제공됩니다.
- **다른 사용자가 공개한 테스트 결과**를 확인할 수 있는 페이지가 구현되어 있습니다.
<img width="1316" alt="스크린샷 2024-09-11 오후 3 58 27" src="https://github.com/user-attachments/assets/771534fb-7ea4-4853-a98a-de4a3789e177">



### 💻 Stack

- **React**: 프론트엔드 UI 라이브러리
- **JSON Server**: 테스트 결과 저장을 위한 간단한 백엔드 서버
- **JWT (JSON Web Token)**: 사용자 인증 및 보안을 위한 토큰 기반 인증


### + 기타 추가 구현 사항

- [ ] 로그인 유지 기능 구현
- [x] Props Drilling 개선
- [ ] Tanstack Query 사용
- [x] axios를 이용한 API 호출
