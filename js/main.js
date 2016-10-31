(function () {
  'use strict';
  
  var searchInput = document.getElementById('search');
  var btn = document.getElementById('btn');

  searchInput.addEventListener('keypress', checkInput);
  btn.addEventListener('click', restSearch);

  function checkInput() {
    var searchValue = searchInput.value.trim();

    if (searchValue.length >= 4) {
        btn.disabled = false;
        btn.style.background = "#1e275b";
        btn.style.color = "#fff";
    }

    console.log(searchValue);

  }//end checkInput

  function restSearch() {
    var restValue = searchInput.value.trim();
    var urlRest = 'http://pokeapi.co/api/v2/pokemon/';
    var result = urlRest += restValue;
    alert(result);
    
  }



  //http://pokeapi.co/api/v2/pokemon/




  


})();







