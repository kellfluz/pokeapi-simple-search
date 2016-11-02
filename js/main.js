(function() {
    'use strick';

    var searchField = document.getElementById('search');
    var button = document.getElementById('btn');

    searchField.addEventListener('input', validateField);
    button.addEventListener('click', function() {
        seekPokemon();
        //outra função
    }, false);

    function validateField(e) {
      var enteredValue = searchField.value.trim();

      if (enteredValue.length >= 2) {
          button.disabled = false;
          button.style.background = "#1e275b";
          button.style.color = "#fff";
      }
    }

    function seekPokemon() {
      var enteredValue = searchField.value.trim();
      var urlApi = 'http://pokeapi.co/api/v2/pokemon/' + enteredValue;

      //rest API
      var requestApi = new XMLHttpRequest();
      requestApi.open('GET', urlApi, true);
      requestApi.send();

      requestApi.onreadystatechange = function() {
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

      }
    }

})();
