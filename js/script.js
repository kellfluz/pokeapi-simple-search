(function(doc, win) {
  'use etrict';

  var fragmentProject = doc.createDocumentFragment();

  var $inputSearch = doc.getElementById('search');
  var $inputButton = doc.getElementById('button');

  $inputSearch.addEventListener('input', validateFild, false);

  function validateFild() {
    var filtersValues = $inputSearch.value.trim();
    console.log(filtersValues);

    if (filtersValues.length >= 3) {
      $inputButton.disabled = false;
    }

  }



  //funções para add eventos
  function addEvents(element, event, callback) {
    doc.querySelector(element).
    addEventListener(event, callback, false);
  };

  addEvents('img', 'click', clickAdd, false);
  addEvents('li', 'click', clickLi, false);

  function clickAdd( event ) {
    alert('fui clicada!');
  }

  function clickLi( event ) {
    alert('li');
  }

doc.addEventListener('DOMContentLoaded', fragmentProject, false );
})(document, window);
