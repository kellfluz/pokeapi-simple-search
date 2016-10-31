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

    //console.log(searchValue);mostra a entrada que esta sendo digitada

  }//end checkInput


  function resBusca() {
    var valorDigitadoBusca = searchInput.value.trim();
    var urlApi = 'http://pokeapi.co/api/v2/pokemon/';
    var resBusca = urlApi += valorDigitadoBusca;

    var requestApi = new XMLHttpRequest();
    requestApi.open('GET', resBusca, true);
    requestApi.send();

    requestApi.addEventListener('readystatechange', function(){
      if (requestApi.readyState === 4 && requestApi.status === 200) {
          var response = JSON.parse(requestApi.responseText);
          console.log("Name → " + response.name);
          console.log("ID → " + response.id);
          console.log("Experiência → " + response.base_experience);
          console.log("Height → " + response.height);
          console.log("Weight → " + response.weight);
          console.log("Habilidade → " + response.abilities[0].ability.name);
          console.log("Tipo → " + response.types[0].type.name);
          console.log("Movimento → " + response.moves[0].move.name);



      }
    }, false);

  }

  //http://pokeapi.co/api/v2/pokemon/






})();







