(function(doc, win) {
    'use strict';

    var $searchField = doc.getElementById('search');
    var $button = doc.getElementById('button');
    var b = doc.querySelector('body');

    var $name = doc.getElementById('name');
    var $id = doc.getElementById('id');
    var $experience = doc.getElementById('experience');
    var $height = doc.getElementById('height');

    $searchField.addEventListener('input', validateField);
    $button.addEventListener('click', function() {
    seekPokemon();
    }, false);

    function validateField() {
      var enteredValue = $searchField.value.trim();

      if (enteredValue.length >= 2) {
        button.disabled = false;
        button.style.background = "#1e275b";
        button.style.color = "#fff";
      }

    }

    function seekPokemon() {
      var enteredValue = $searchField.value.trim();
      var urlApi = 'http://pokeapi.co/api/v2/pokemon/' + enteredValue;

      //rest API
      var requestApi = new XMLHttpRequest();
      requestApi.open('GET', urlApi, true);
      requestApi.send();

      requestApi.onreadystatechange = function() {
        if (requestApi.readyState === 4 && requestApi.status === 200) {

          var response = JSON.parse(requestApi.responseText);

          console.log(response.length);
          $name.innerHTML = response.name;
          alert("Name → " + response.name);
          alert("ID → " + response.id);
          alert("Experiência → " + response.base_experience);
          alert("Height → " + response.height);
          alert("Weight → " + response.weight);
          alert("Habilidade → " + response.abilities[0].ability.name);
          alert("Tipo → " + response.types[0].type.name);
          alert("Movimento → " + response.moves[0].move.name);

        }

      }

    }

})(document, window);
