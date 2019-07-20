function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget() {
 return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  let arr = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = parseInt(arr[i].innerHTML) + n
  }
}

function deepestChild() {
  let d = document.getElementById("grand-node").querySelectorAll("div")

return  d[d.length-1]
  
}
