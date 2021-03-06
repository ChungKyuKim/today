## localStorage, sessionStorage, cookie

브라우저에 데이터를 저장할 수 있는 공간

## localStorage

- 사용자가 직접 삭제하지 않으면 영구저장된다. </br>
- 서로 다른 탭이라도 동일한 로컬스토리지를 사용한다.</br>
- 브라우저를 종료해도 저장된다</br>
  사용 예 : 자동로그인

## sessionStorage

- 탭 단위로 세션스토리지 저장소가 생성된다. </br>
  -> 탭 단위로 독립적으로 동작된다</br>
- 브라우저 종료 시 데이터가 삭제된다</br>
  사용 예 : 입력 폼 / 일회성 로그인 / 비회원 장바구니</br>

## cookie

- 만료일을 지정 가능하다</br>
- 쿠키는 데이터를 사용자의 컴퓨터에 저장한다</br>
- 사용자가 요청하지 않아도 브라우저가 요청할 경우 자동으로 데이터를 서버로 전송한다</br>
- 저장한 데이터에 따라 사용자에게 적합한 정보를 페이지에 보여준다, 그러나 임의로 고치거나, 지워지거나 탈취가 쉬워 보안에 약하다</br>
  사용 예 : 7일동안 팝업창 띄우지 않기</br>
  </br>
  </br>
  어떤게 무조건 적으로 좋다고 할 수는 없다.</br>
  쿠키는 서버를 사용하지 않기에 빠른응답이 가능하다</br>
  대신, 세션은 서버의 자원을 사용하기에 서버가 허락하는 만큼의 양이 저장가능하다. 너무 많아지면 서버 과부하가 올 수 있다.
