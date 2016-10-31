(function () {
  'use strict';
  
  var searchInput = document.getElementById('search');
  var btn = document.getElementById('btn');

  searchInput.addEventListener('keypress', checkInput);
  btn.addEventListener('click', restSearch);

  function checkInput() {
    var searchValue = searchInput.value.trim();

    if (searchValue.length >= 2) {
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

    var restPokemon = new XMLHttpRequest();
    restPokemon.open('GET', result, true);
    restPokemon.send();
    restPokemon.addEventListener('readystatechange', function(){
      if (restPokemon.readyState === 4) {
        var response = restPokemon.JSON.parse(restPokemon);
        console.log(response); 
      } 
    }, false);
     
  }



  //http://pokeapi.co/api/v2/pokemon/




  


})();







