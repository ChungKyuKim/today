## undefined

값을 대입하지 않은 변수, 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근
객체 내부의 존재하지 않는 프로퍼티에 접근하려할 때
return문이 없거나 호출되지 않는 함수의 실행 결과
var = a;
console.log(a); // undefined

var obj = {a:1};
console.log(obj.a) // 1
console.log(obj.b) //
console.log(b) // ReferenceError: b is not defined

var func = function() {};
var c = func();
console.log(c); //undefined

## null

null은 사용자가 비어있음을 명시적으로 나타낼 수 있다..

정리

undefined는 변수에 값이 존재하지 않음을 뜻하고 null은 의도적으로 없음을 표현하는 것.
따라서, 없는 값을 주고 싶다면 null을 주도록하자

그러나 undefined와 null은 일치연산자 ===이 아니면 동일하게 취급한다.
