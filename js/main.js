(function () {
  'use strict';
  
  var searchInput = document.getElementById('search');
  var btn = document.getElementById('btn');

  searchInput.addEventListener('keypress', checkInput);
  btn.addEventListener('click', resBusca);

  function checkInput() {
    var searchValue = searchInput.value.trim();

    if (searchValue.length >= 2) {
        btn.disabled = false;
        btn.style.background = "#1e275b";
        btn.style.color = "#fff";
    }

    console.log(searchValue);

  }//end checkInput


  function resBusca() {
    var valorDigitadoBusca = searchInput.value.trim();
    var urlApi = 'http://pokeapi.co/api/v2/pokemon/';
    var resBusca = urlApi += valorDigitadoBusca;
    console.log(resBusca);

    var requestApi = new XMLHttpRequest();
    requestApi.open('GET', resBusca, true);
    requestApi.send();
    requestApi.addEventListener('onreadystatechange', function(){
      if (requestApi.readystate === 4 && requestApi.status === 200) {
        console.log(JSON.parse(requestApi.responseText));
        console.log(requestApi.status);
      }
    }, false);
    

  }

  //http://pokeapi.co/api/v2/pokemon/




  


})();







