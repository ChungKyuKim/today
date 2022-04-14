process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  //data를 data로 받음
  const n = data.split(" "); //data를 배열에 담는다.
  const a = Number(n[0]),
    b = Number(n[1]); // n배열의 0번째 인덱스는 a, 1번째 인덱스는 b
  for (let i = 0; i < b; i++) {
    //i를 3줄반복하고
    let star = ""; //""에 담는다.
    for (let j = 0; j < a; j++) {
      star = star + "*"; // ""별을 넣는다.
    }
    console.log(star);
  }
});

//이거 사각형 별찍기래
