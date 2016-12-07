(function(doc, win) {
    'use strict';

    var $searchField = doc.getElementById('search');
    var $button = doc.getElementById('button');
    var $form = doc.forms.pokedex;
    var b = doc.querySelector('body');

    var $name = doc.getElementById('name');
    var $id = doc.getElementById('id');
    var $experience = doc.getElementById('experience');
    var $height = doc.getElementById('height');

    $searchField.addEventListener('input', validateField);
    $form.addEventListener('submit', seekPokemon);

    function clearSearch() {
        $button.disabled = true;
        // $button.style.background = "#fff";
        // $button.style.color = "#1d3c73";
        $searchField.value = '';
    }

    //function validate
    function validateField() {
      var enteredValue = $searchField.value.trim();

      function styleForm() {
        if (enteredValue.length >= 2) {
            $button.disabled = false;
            // $button.style.background = "#1e275b";
            // $button.style.color = "#fff";
        } else if (enteredValue.length == 0) {
          clearSearch();
        }
      }

      styleForm();//exec funtion style form
    }

    //request for API
    function seekPokemon(event) {
      event.preventDefault();

      var url =  'http://pokeapi.co/api/v2/pokemon/' + $searchField.value.trim();
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();

      xhr.addEventListener('readystatechange', getResult);

      function getResult() {
        function showResult(response) {
          var response = JSON.parse(xhr.responseText);
          $name.append(response.name);
          $id.append(response.id);
          $experience.append(response.base_experience);
          console.log(response);
        }

        showResult(xhr);

        clearSearch();
      }//end getResult

    }


})(document, window);
