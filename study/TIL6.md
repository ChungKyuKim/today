# Lexical Environment

block, function, script를 실행하기 전 생성되는 객체이다.
실행할 스코프 안에 변수와 함수를 프로퍼티로 저장하는 객체이다.
</br>
-> 렉시컬환경은 참조가 필요한 변수를 렉시컬 환경이란 객체에 저장한다
</br>
환경레코드는 모든 로컬 변수들을 프로퍼티로 갖는 객체.
외부 렉시컬 환경은 변수를 해당 로컬스코프에서 찾고 없으면 외부에서, 또 없으면, 그 외부에서 찾는다. (외부는 상위를 가리킨다.)</br>

호이스팅과 렉시컬환경?
</br>
