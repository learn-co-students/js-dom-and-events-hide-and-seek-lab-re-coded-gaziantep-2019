function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  
  const rankedList = document. querySelectorAll('.ranked-list');
  const firstList = rankedList[0];
  const secondList = rankedList[1];
  
  let children = firstList.children;
  let start = 1;
  
 for ( let i = 0; i < children.length; i++ ) {
      parseInt(children[ i ].innerHTML) =  start + i + 3 
      }
  
  children = secondList.children;
  start = 12;
      
 for ( let i = 0; i < children.length; i++ ) {
     parseInt(children[ i ].innerHTML) =  start - i + 3 
      }
}