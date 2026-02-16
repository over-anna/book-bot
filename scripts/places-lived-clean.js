document.addEventListener('DOMContentLoaded', function () {
  //confirm my script is loading
  console.log('✅ places lived (clean) script loaded.')

  //check if user is logged in, this is super secret stuff
  //hardcoding in true value for now while i dev. 
  sessionStorage.setItem('isAuth', true);
  const isAuth = sessionStorage.getItem('isAuth');

  if (!isAuth) {
    //if not true, then kick out. 
    console.log('❌not auth\'d');
    // window.location.assign("login.html"); 
  }
  else if (isAuth) {
    console.log("✅ auth'd");
    initListItems('placesLived', placesLivedList);
  }
});

// level 2️⃣🥣 refactor, resuable? 
function initListItems(tagId, list) {

  const listItemContainer = document.getElementById(tagId);
  
  //let's just empty the <ul> 
  listItemContainer.innerHTML = '';
   
  list.forEach((element, index) => { 
    listItemContainer.innerHTML += `<li>${element}</li>`
  });
}

//but my array is out of the scope, after the code, event? 
//welcome to JS weird: hoisting. 
const placesLivedList = ['Tampa', 'New Hampshire', 'Huntsville', 'Auburn', 'Opelika', 'Tampa', 'Redmond', 'Auburn', 'Hattiesburg'];
//oops forgot one! 
placesLivedList.push('Florence');

