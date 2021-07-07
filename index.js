function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector( '#nested .target' );
}
function increaseRankBy(n){
  const rankedList = document.querySelectorAll('ul.ranked-list li');
  for(let i=0; i < rankedList.length; i++){
  rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}
function deepestChild(){
  const deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length - 1]
}
