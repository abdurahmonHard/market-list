const items = document.querySelector("#items");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const ol = document.querySelector("ol");


btn.addEventListener("click", function(){
  const li = document.createElement("li");
  const spans = document.createElement("span");
  const btn1 = document.createElement("button");
  if (items.value !== "") {
    spans.textContent = items.value;
    ul.appendChild(li);
    li.appendChild(spans);
    li.appendChild(btn1);
    btn1.textContent ="Delet";
    items.value = "";
  }
  
  btn1.addEventListener("click", function(){
    ol.appendChild(li);
  });
  
});



