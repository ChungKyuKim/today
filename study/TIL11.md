### Closure

함수와 렉시컬 환경의 조합. 함수가 생성될 때 외부함수를 기억해 생성 이후도 접근이 가능하다.
외부함수 실행이 종료되어도 내부함수가 외부함수의 변수에 접근이 가능

-> 클로저란, A함수에서 선언한 변수a를 참조하는 내부함수B를 외부로 전달할 경우, A함수의 실행컨텍스트가 종료되어도 변수 a가 사라지지 않는(GC의 대상이 되지 않는)현상.

function makeAdder(x) {
return function(y){
return x+y;
}
}

const add3 = makeAdder(3);
console.log(add3(2));
2번째 줄의 함수는 자신이 y를 가지고 있고 상위함수인 makeAdder의 x에 접근이 가능하다.
add3함수가 생성된 이후에도 makeAdder의 x에 접근이 가능하다.

makeAdder는 실행이 끝났지만 계속 makeAdder의 x에 접근이 가능하다.

다른 예제

function makeCounter () {
let num = 0;

    return function () {
    	return num ++;
        }
    }

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
카운터는 메이크카운터를 리턴한다.
메이크카운터는num++함수를 리턴한다.
num은 외부함수의 변수이다.

console을 찍으면 0 -> 1 -> 2로 1씩증가한다.

메이크카운터의 종료시점에서 새로운 함수를 반환해서 언젠가 카운터를 실행함으로써 사용될 여지가 있기에 가비지컬렉터의 작동범위에서 제외가 된다.

this is closure. haha
