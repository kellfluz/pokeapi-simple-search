(function () {
  'use strict';
  
  var btn = document.getElementById('btn');
  btn.disabled = true;
  btn.onclick = reqListener;
  var searchInput = document.getElementById('search');//pegei o campo de busca
  

  searchInput.addEventListener('keypress', checkInput);//add evento de escuta



  function checkInput() {
    var searchValue = searchInput.value;
    var rmSpaces = searchValue.trim();

    if (rmSpaces.length >= 2) {
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.background = "#1e275b";
        document.getElementById('btn').style.color = "#fff";
    }

        console.log(rmSpaces);

  }//end checkInput


    function reqListener() {
      var xhr =  new XMLHttpRequest();
      xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/1/', true);
      xhr.send();
      console.log(xhr);
    }

})();







