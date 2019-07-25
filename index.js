function getFirstSelector(selector) {
  
 return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('#nested .target');
  
}

function increaseRankBy(n){
  
  const rankedLists = document.querySelectorAll( '.ranked-list' )
      const firstList = rankedLists[ 0 ]
      const secondList = rankedLists[ 1 ]

      let c1 = firstList.children
      for ( let i = 0, l = c1.length; i < l; i++ ) {
        let a = parseInt(c1[i].innerHTML)
       
		c1[i].textContent=a+n;
      }
      let c2 = secondList.children
      for ( let i = 0, l = c2.length; i < l; i++ ) {
        let a = parseInt(c2[i].innerHTML)
        c2[i].textContent=a+n;
      }

      
  
}