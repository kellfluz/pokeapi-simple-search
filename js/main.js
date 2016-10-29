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
    
    var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "http://pokeapi.co/api/v2/pokemon/", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("name=" + searchPokemon);

  console.log(xhttp);

   
  }

  function log(message) {
    var searchPokemon = searchInput.value.trim();
    var client = new XMLHttpRequest();
    client.open("POST", "/log");
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send();
}

  //http://pokeapi.co/api/v2/pokemon/




  


})();







