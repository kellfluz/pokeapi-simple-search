(function () {
  'use strict';
  
  var searchInput = document.getElementById('search');
  var btn = document.getElementById('btn');

  searchInput.addEventListener('keypress', checkInput);//add evento de escuta
  btn.addEventListener('click', reqListener);

  function checkInput() {
    var searchValue = searchInput.value.trim();

    if (searchValue.length >= 2) {
        btn.disabled = false;
        btn.style.background = "#1e275b";
        btn.style.color = "#fff";
    }

    console.log(searchValue);

  }//end checkInput


    function reqListener() {
      var xhr =  new XMLHttpRequest();
      xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/1/', true);
      xhr.send();
      console.log(xhr);
    }

})();







