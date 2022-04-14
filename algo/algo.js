function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => Number(str));
}

//자연수 n을 스트링으로 변환 후 ''로 담아 배열로 뱉고 거꾸로 뒤집고 map으로 str을 넘버로 변환~
