(function(doc, win) {
    'use strict';
    var fragmentProject = doc.createDocumentFragment();
    var $searchField = doc.getElementById('search');
    var $button = doc.getElementById('button');
    var b = doc.querySelector('body');

    var $name = doc.getElementById('name');
    var $id = doc.getElementById('id');
    var $experience = doc.getElementById('experience');
    var $height = doc.getElementById('height');

    $searchField.addEventListener('input', validateField);
    $button.addEventListener('click', seekPokemon, false);

    function validateField() {
      var enteredValue = $searchField.value.trim();

      function styleForm() {
        if (enteredValue.length >= 2) {
            button.disabled = false;
            button.style.background = "#1e275b";
            button.style.color = "#fff";
        }
      }

      styleForm();

    }

    function seekPokemon() {

    }

})(document, window);
