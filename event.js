var itemList = document.querySelector(".itemList");
itemList.addEventListener("click", function (event) {
  alert("clicked");
});

// ...

// 새 리스트 아이템을 추가하는 코드
var itemList = document.querySelector(".itemList");

var li = document.createElement("li");
var input = document.createElement("input");
var label = document.createElement("label");
var labelText = document.createTextNode("이벤트 위임 학습");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
