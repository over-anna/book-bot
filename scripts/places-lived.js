document.addEventListener('DOMContentLoaded', function () {
  //confirm my script is loading
  console.log('✅ places lived script loaded.')

  //todo: refactor to check actual login. 
  //check if user is logged in, this is super secret stuff
  //hardcoding in true value for now while i dev. 
  sessionStorage.setItem('isAuth', "auth");
  const isAuth = sessionStorage.getItem('isAuth');
  console.log('⁇ auth: ', isAuth);

  if (!isAuth) {
    //if not true, then kick out. 
    console.log('❌not auth\'d');
    // window.location.assign("login.html"); 
  }
  else if (isAuth) {
    console.log("✅ auth'd");
    //proceed as planned, load array.  
    //level 0/immature: writing all our logic in the if block; not very sophisticated

    //loop through the array and add to the dom. 
    for (let i = 0; i < placesLivedList.length; i++) {
      //first "dirty" check        
      //console.log(i);
      //quick check, first & last loop pass that I'm in it! 
      //if (i == 0 || i == placesLivedList.length - 1) { console.log('✅in the loop!') }

      //now load the array list into the dom
      // document.getElementById('placesLived').innerHTML += 
      //   '<li>' + placesLivedList[i] +'</li>'  
    }//closes the loop


    //oh rats, I didn't clear out the hardcoded "Loading..." better do that first...or here, to ry something new. 
    document.getElementById('placesLived').firstElementChild.remove();

    //hmmm, I want them numbered instead
    // Change ul to ol for numbered list
    const oldUl = document.getElementById('placesLived');
    const newOl = document.createElement('ol');
    newOl.id = 'placesLived';
    newOl.innerHTML = oldUl.innerHTML; // preserve existing content
    oldUl.parentNode.replaceChild(newOl, oldUl);
    //thx Claude, but this isn't the best way to go about this

    // lvl 1️⃣, call a f/n instead
    // initPlacesLived();

    // lvl 2️⃣, call a f/n instead
    initListItems('placesLived', placesLivedList);
  }
});

// level 1️⃣🧹 function (not mature): hardcoded, specific.
function initPlacesLived() {
  for (let i = 0; i < placesLivedList.length; i++) {
    //added an emoji so I can tell the difference.
    document.getElementById('placesLived').innerHTML +=
      '<li>🧹' + placesLivedList[i] + '</li>'
  }
}

// level 2️⃣🥣 refactor, resuable? 
function initListItems(tagId, list) {
  //a better way to loop through and array
  console.log('✅in initListItem');
  list.forEach((element, index) => {
    //what are these params even? 
    // console.log(`what's the element? `, element);
    // console.log(`what's the index? `, index);

    document.getElementById(tagId).innerHTML +=
      `<li id='placeLived${index+1}'>🥣 ${element}</li>`

    // console.log(document.getElementById(tagId)); 
  });
}

//but my array is out of the scope, after the code, event? 
//welcome to JS weird: hoisting. 
const placesLivedList = ['Tampa', 'New Hampshire', 'Huntsville', 'Auburn', 'Opelika', 'Tampa', 'Redmond', 'Auburn', 'Hattiesburg'];
//oops forgot one! 
placesLivedList.push('Florence');
